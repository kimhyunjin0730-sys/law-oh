# 법률정보 섹션 설계 (Legal Info Section)

**Date:** 2026-04-20
**Target:** 법률사무소 비컴 웹사이트 (law-oh.vercel.app)
**MVP Scope:** 체류자격·출입국 페이지 (1개)
**Owner:** 김현진

---

## 1. 목적

다음 네 가지를 동시에 만족시킨다:

- **A. SEO/유입** — "외국인 음주운전 절차" 같은 검색어로 들어온 예비 의뢰인을 상담 전환
- **B. 신뢰 빌드업** — 이미 방문한 의뢰인에게 로펌 전문성 디스플레이
- **C. 실용 레퍼런스** — 의뢰인이 자기 사건 절차·기관·연락처를 원스톱 확인
- **D. 중국어권 특화** — 한중 양국 관점을 반영한 콘텐츠

## 2. 제약

- 오동현 변호사는 콘텐츠 작성에 관여하지 않는다 (자동 번역·자동 생성)
- 김현진 선에서 파이프라인·검수·배포까지 완결
- 품질 기준: raw 스크래핑 티가 나면 안 됨. 에디토리얼 수준
- 3개 언어 지원: KO / ZH / EN
- GH Pages 백업 유지 (vite base는 `GH_PAGES=1`일 때만 `/law-oh/`)

## 3. 콘텐츠 파이프라인

### 3.1 데이터 소스

| 출처 | 용도 | 접근 방법 |
|---|---|---|
| 법제처 국가법령정보공동활용 API (`law.go.kr`) | 조문·개정일 (원문 그대로) | 공식 API 토큰 |
| 생활법령정보 API (`easylaw.go.kr`) | 주제별 Q&A 원문 | 공식 API 토큰 |
| 세계법제정보센터 (`world.moleg.go.kr`) | 중국 법령 비교 (5단계 확장 시) | 공식 API 토큰 |
| 경찰청 (`police.go.kr`) | 사건절차·피해자 지원 | **HTML 스크래핑** (공공누리 1유형 하) |
| 법무부 (`moj.go.kr`) | 형사절차·출입국 안내 | **HTML 스크래핑** (공공누리 1유형 하) |
| 대검찰청 (`spo.go.kr`) | 사건처리절차 | **HTML 스크래핑** (공공누리 1유형 하) |

**공공누리 1유형 준수 조건**:
- 각 페이지 하단 고정 문구: `본 콘텐츠에는 [기관명]에서 공공누리 제1유형으로 개방한 저작물을 활용하였습니다. 원문 출처: [URL]`
- 원문 URL은 반드시 노출 (변호사님이 따로 확인 가능한 수준으로)
- 스크래핑 시 `robots.txt` 존중. 5개 사이트 각 1회 요청 수준이라 rate limit 이슈 없음
- User-Agent에 연락 이메일 포함 (`law-oh-content-bot (contact: lawohdh@gmail.com)`)
- 스크래핑 불가(403/레이아웃 변경 등)가 발생하면 **해당 페이지는 생성하지 않고 실패 리포트만 출력** — 오래된 자동 콘텐츠 배포 방지

### 3.2 LLM 정리 단계 (Claude API)

로컬에서 돌리는 Node 스크립트 (`scripts/generate-legal-content.mjs`):

1. **수집** (병렬):
   - API: `law.go.kr` / `easylaw.go.kr` 에서 조문·개정일·Q&A → `raw/api-*.json`
   - 스크래핑: Playwright(또는 cheerio+fetch)로 `police.go.kr` / `moj.go.kr` / `spo.go.kr` HTML 수집 → 주요 텍스트만 추출 (`<main>`, `.content-body` 등 선택자) → `raw/scrape-*.json`
   - 실패 URL은 `raw/errors.json`에 기록하고 나머지로 진행
2. **정리**: Claude Opus (`claude-opus-4-7`)에 structured output 프롬프트 — `ANTHROPIC_API_KEY` 환경변수 사용:
   - input: 수집한 raw 데이터 + 주제 정의(`immigration`)
   - output: 3줄 요약, 상황별 진입 카드 3~5개, 절차 타임라인, FAQ 5~7개, 기관 연락처, 출처 배열 (KO/ZH/EN 세 언어 동시)
   - LLM은 스크랩 원문을 **재구성·재표현**하되 조문 원문은 API 값을 그대로 패스스루
3. **저장**: `src/content/legal/immigration.json` 한 파일로 — 커밋 전 김현진 검수 대상

### 3.3 품질 관리

- 스크립트는 **PR 형태로 결과 제시** (자동 커밋 금지)
- 김현진이 JSON을 직접 읽고 오류·어색한 번역 교정
- 각 조문 원문은 API에서 가져온 것만 사용 (LLM이 조문 원문을 생성하지 않음)
- 검수 체크리스트: 법률 용어 정확성, 3개 언어 일관성, 면책 문구 포함 여부

### 3.4 업데이트 주기

- 월 1회 수동 실행 (GitHub Actions 자동화는 후순위)
- MVP는 전체 재생성. diff 기반 부분 업데이트는 v2에서 도입

## 4. 정보 구조 (Site IA)

### 4.1 내비게이션 변경

```
Before: HOME · ABOUT · SERVICES · CASES
After:  HOME · ABOUT · SERVICES · CASES · 법률정보
```

### 4.2 URL 구조

| 경로 | 설명 |
|---|---|
| `/legal` | 인덱스 페이지 — 5개 주제 카드 그리드 (MVP는 체류자격만 활성, 나머지 "Coming Soon") |
| `/legal/immigration` | 체류자격·출입국 MVP (한국어 기본) |
| `?lang=zh` / `?lang=en` | 기존 `LanguageContext`와 통합 — 상단 토글이 곧 콘텐츠 전환 |

### 4.3 `/legal/immigration` 페이지 구조 — **다이어그램 중심**

긴 텍스트 단락 지양. 스크래핑·API로 수집한 raw 내용을 **시각적 다이어그램 5개**로 재표현하고 긴 프로즈는 각주·툴팁·hover 확장으로만 노출.

```
┌─────────────────────────────────────┐
│ §0. HERO                            │
│   · 주제명 (체류자격·출입국)          │
│   · 한 문장 요약 (최대 40자)          │
│   · 메타: 근거 N건 · 조회일 · 개정일  │
│   · 면책 고정 배너 (축약)             │
├─────────────────────────────────────┤
│ §1. DIAGRAM 1 — 체류자격 맵           │
│   노드: F-4 · H-2 · D-10 · E-9 ...  │
│   각 노드 클릭 → 대상·조건·유효기간    │
│   slide-over 패널 (텍스트는 여기로)   │
├─────────────────────────────────────┤
│ §2. DIAGRAM 2 — 의사결정 트리          │
│   "내 상황에 맞는 절차는?"             │
│   Yes/No 분기 플로우차트              │
│   리프 노드 = 해당 절차 다이어그램 앵커 │
├─────────────────────────────────────┤
│ §3. DIAGRAM 3 — 절차 플로우차트        │
│   신청 → 심사 → 결과 → 이의           │
│   각 단계 hover → 담당 기관·소요일·   │
│   관련 조문 라벨 노출                 │
├─────────────────────────────────────┤
│ §4. DIAGRAM 4 — 기관 네트워크도         │
│   출입국·외국인청 / 법무부 / 경찰청    │
│   각자 역할 + 전화·주소 카드 (노드 내)  │
├─────────────────────────────────────┤
│ §5. DIAGRAM 5 — 시한 타임라인          │
│   긴급 상황별 "Day 0 / +3 / +7 / +14" │
│   축 고정, 각 이벤트 가로 막대로 표기   │
├─────────────────────────────────────┤
│ §6. CTA                             │
│   "이런 경우 변호사 상담 필요"          │
│   → /#consult                       │
├─────────────────────────────────────┤
│ §7. FOOTER (메타데이터 + 면책)         │
│   · 공공누리 1유형 출처 블록           │
│   · 참조 조문 리스트 (law.go.kr 링크)   │
│   · 면책 풀 텍스트 (3언어)             │
└─────────────────────────────────────┘
```

**원칙**

- 다이어그램마다 **한 가지 시각적 은유** (네트워크 / 트리 / 플로우 / 허브-스포크 / 타임라인)로 서로 겹치지 않게
- 텍스트는 **라벨·툴팁·hover 패널**로만. 본문 단락 사실상 없음
- 다이어그램은 전부 **React+SVG 수제 컴포넌트** (Mermaid·generic chart lib 금지 — AI 티 나는 주 요인)
- 접근성: 각 다이어그램에 `aria-label` 요약 + 시각 대체용 토글로 "텍스트 버전 보기" 제공
- 모바일: 다이어그램이 세로 스크롤로 자연 흐름하도록 flow 방향 재배치 (좌→우 대신 위→아래)

## 5. 디자인 방향: "Editorial Legal Brief"

현재 사이트 DNA(다크 네이비 `#0a0e1a` + 골드 `#b59a5d` + 디스플레이 세리프)를 유지하면서, 법률정보 페이지만 **한 단계 더 "법정 문서 같은 밀도"**로 확장.

### 5.1 디자인 토큰

| 토큰 | 값 | 용도 |
|---|---|---|
| `legal-bg` | `#faf6ef` | 본문 배경 (종이 느낌, 순백 아님) |
| `legal-ink` | `#0f172a` | 본문 텍스트 |
| `legal-gold` | `#b59a5d` | 러닝 마커·구분선·조문 라벨 |
| `legal-muted` | `#6b5f48` | 메타데이터·각주 |
| `legal-paper-grain` | `noise.png opacity 4%` | 전역 오버레이 |

### 5.2 타이포그래피

- **본문**: Noto Serif KR / SC / TC (한중 모두 세리프), 영문은 Source Serif Pro
- **디스플레이 제목**: 기존 사이트 폰트 유지 (일관성)
- **메타·라벨**: 기존 sans-serif (`font-display` 사용 중인 것) — 대비 강조
- **조문 번호**: 작은 라벨 컴포넌트 `[출입국관리법 §46 ①]` 형태

### 5.3 레이아웃 원칙

- 좌우 대칭 2-컬럼 금지 (AI 티)
- 섹션 패딩 **의도적 불균등** — 본문 섹션은 치밀하게, 인용·CTA는 여유롭게
- 카드는 쓰되 높이·정렬 불균등 (FAQ 내용 길이별 자연 변화)
- 여백에 각주·보조 링크 붙여 "진짜 변호사 메모" 밀도 조성

### 5.4 반 AI 체크리스트

- [ ] 둥근 모서리 `rounded-2xl` 남발 금지 — 사각 모서리 or `rounded-sm`
- [ ] 모든 섹션 같은 패딩 금지 (`py-24` 반복 X)
- [ ] 의미 없는 아이콘 (💡 🔍 📋) 배치 금지
- [ ] "3 Things to Know" 같은 AI 정형 문구 금지
- [ ] 조문 원문 요약 표기 시 정확한 조문 번호 노출 (숨기지 않음)
- [ ] 개정일·조회일 구체적으로 명시 (`2024.3.1 시행 | 조회: 2026.4.21`)

### 5.5 면책 문구 (3언어)

페이지 내 여러 곳에 다르게 반복 노출 (히어로 배너·섹션별 각주·하단 풀 텍스트):

- **KO**: 본 페이지는 공공 법령 데이터를 기반으로 작성된 정보 안내이며, 개별 사건에 대한 법률 자문이 아닙니다. 구체적인 사안은 변호사와 상담하시기 바랍니다.
- **ZH**: 本页面基于公开法律数据编写，仅为信息参考，不构成对个案的法律建议。具体事项请咨询律师。
- **EN**: This page provides information based on public legal data and does not constitute legal advice for any specific matter. Please consult an attorney for your individual case.

## 6. 기술 스택 / 파일 구조

```
src/
  app/
    pages/
      legal/
        LegalIndex.tsx        # /legal
        Immigration.tsx       # /legal/immigration
    components/
      legal/
        LegalHero.tsx            # §0
        VisaMapDiagram.tsx       # §1 체류자격 맵 (노드 그리드 + slide-over)
        DecisionTreeDiagram.tsx  # §2 의사결정 트리
        ProcedureFlowDiagram.tsx # §3 절차 플로우차트
        AgencyNetworkDiagram.tsx # §4 기관 네트워크
        DeadlineTimeline.tsx     # §5 시한 타임라인
        DiagramTextFallback.tsx  # 접근성: 다이어그램 텍스트 대체
        SourceBlock.tsx          # §7 공공누리 출처 + 조문 리스트
        DisclaimerBlock.tsx      # §7 면책 풀 텍스트
  content/
    legal/
      immigration.json        # 3언어 통합 JSON
  lib/
    legal/
      types.ts                # LegalPageContent 타입
      loader.ts               # JSON 로드 + language context 연동
scripts/
  legal/
    fetch-api.mjs              # law.go.kr / easylaw.go.kr 수집
    scrape-gov.mjs             # police / moj / spo HTML 수집
    generate.mjs               # raw → Claude → 구조화 JSON (엔트리포인트)
  verify-legal-page.mjs        # Playwright 검증
docs/
  superpowers/
    specs/
      2026-04-20-legal-info-design.md  # 이 문서
```

## 7. 수용 기준 (Acceptance Criteria — MVP)

- [ ] 내비게이션에 "법률정보" 추가, `/legal` 인덱스 + `/legal/immigration` 상세 진입 가능
- [ ] `/legal/immigration` 페이지가 KO/ZH/EN 세 언어 모두 완성 (상단 토글 연동)
- [ ] 다이어그램 5개(체류자격 맵 · 의사결정 트리 · 절차 플로우 · 기관 네트워크 · 시한 타임라인) 모두 실데이터로 렌더
- [ ] 각 다이어그램에 `aria-label` 요약 + "텍스트 버전 보기" 토글 제공
- [ ] 다이어그램 컴포넌트는 React+SVG 자체 구현 (Mermaid/generic lib 미사용)
- [ ] 관련 법령 원문은 `law.go.kr` API에서 가져온 것 + 원문 링크 노출
- [ ] 스크래핑 원본(경찰청/법무부/대검찰청) 각 섹션에 공공누리 1유형 출처 블록 삽입, 원문 URL 접근 가능
- [ ] 면책 문구가 3언어로 최소 2군데 반복 노출
- [ ] Playwright로 검증:
  - [ ] `/legal` 200, `/legal/immigration` 200
  - [ ] h1 노출 텍스트 확인
  - [ ] 404 리소스 0건
  - [ ] 언어 토글 시 본문 전환 확인
  - [ ] CTA 버튼이 `/#consult`로 이동
  - [ ] 접근성: 모든 `button` `aria-label`, 명도 대비 4.5:1 이상
- [ ] 반-AI 체크리스트(§5.4) 전부 통과
- [ ] Vercel 배포 성공, `law-oh.vercel.app/legal/immigration` 라이브 확인

## 8. 의도적으로 배제한 것 (YAGNI)

- 나머지 4개 주제(형사·노동·사기·중국이혼상속) 페이지 — MVP 검증 후
- GitHub Actions 자동 업데이트 — 수동 월 1회면 충분
- 관리자 대시보드/WYSIWYG — JSON 직접 수정으로 충분
- 댓글·후기 기능 — 법률자문 오인 리스크
- 검색 기능 — 5개 주제뿐이라 불필요
- 즐겨찾기/공유 최적화 — 표준 og 메타만

## 9. 리스크 및 완화

| 리스크 | 완화 |
|---|---|
| LLM 생성 콘텐츠의 법률적 오류 | 조문 원문은 API에서만 / 3중 면책 / 김현진 수동 검수 |
| 공공데이터 라이선스 오해 | 공공누리 1유형 출처 표기 고정 블록 / 원문 URL 반드시 노출 / 2·3·4유형 자료는 수집 대상 제외 |
| 스크래핑 대상 사이트 DOM 변경 | 추출 실패 시 실패 리포트만 출력 (오래된 정보로 배포 방지). 월 1회 실행 시 김현진이 에러 로그 확인하고 선택자 업데이트 |
| 정부 사이트 rate-limit / 봇 차단 | 5개 URL 각 1회 요청이라 실질 위험 낮음 / UA에 연락 이메일 명시 / `robots.txt` 준수 / 실패 시 재시도 간격 60초 |
| 중국어 법률 용어 부정확 | Claude Opus 사용 (Sonnet보다 복잡한 법률 용어 품질 우수), 검수 시 중국 법학 용어 표준 사전 참조 권장 |
| 사이트 번들 크기 증가 | JSON 콘텐츠 route-level split, 이미지 최소화 |
| 디자인이 결국 AI 티 남 | §5.4 체크리스트 반복 검증, 배포 전 브라우저 직접 확인 |

## 10. 다음 단계

1. 이 문서 사용자 검토 → 수정 반영
2. `writing-plans` 스킬로 구현 플랜 작성 (task 단위 분해)
3. 구현 → Playwright 검증 → Vercel 배포
