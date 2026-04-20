import * as Dialog from "@radix-ui/react-dialog";
import { ReactElement, useState } from "react";
import { X, Copy, Check, Smartphone, QrCode, Mail } from "lucide-react";

const WECHAT_ID = "wudongxuan002";
const EMAIL = "lawohdh@gmail.com";

export function WeChatDialog({ children }: { children: ReactElement }) {
  const [copied, setCopied] = useState<"id" | "email" | null>(null);
  const [qrFailed, setQrFailed] = useState(false);

  const copy = async (value: string, kind: "id" | "email") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(kind);
      setTimeout(() => setCopied(null), 1800);
    } catch {
      // clipboard API blocked — user can still select manually
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-[#050B14]/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-[101] w-[92vw] max-w-[440px] -translate-x-1/2 -translate-y-1/2 bg-white text-[#0a0a0a] shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          aria-describedby={undefined}
        >
          {/* Gold top rule */}
          <div aria-hidden className="h-1 w-full bg-[#b59a5d]" />

          <div className="p-7 sm:p-9">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-1">
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-bold tracking-[0.28em] uppercase text-[#b59a5d]">
                  WeChat 24h
                </span>
              </div>
              <Dialog.Close asChild>
                <button
                  aria-label="닫기"
                  className="p-1.5 -mt-1 -mr-1.5 text-slate-400 hover:text-[#0a0a0a] transition-colors"
                >
                  <X size={18} strokeWidth={1.75} />
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Title className="text-[24px] font-extrabold tracking-tight text-[#0f172a] leading-tight">
              위챗 직접 상담
            </Dialog.Title>
            <p className="mt-1.5 text-[13px] font-medium text-slate-500 leading-relaxed">
              아래 QR을 스캔하거나 ID를 복사해 위챗에서 친구 추가하세요.
            </p>

            {/* QR block */}
            <div className="mt-6 bg-slate-50 border border-slate-200 p-5 flex flex-col items-center">
              {!qrFailed ? (
                <img
                  src="/wechat-qr.png"
                  alt="WeChat QR 코드"
                  className="w-44 h-44 object-contain"
                  onError={() => setQrFailed(true)}
                />
              ) : (
                <div className="w-44 h-44 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center gap-2 text-slate-400">
                  <QrCode size={40} strokeWidth={1.25} />
                  <span className="text-[11px] font-bold tracking-wide">QR 준비중</span>
                </div>
              )}
              <p className="mt-3 text-[11px] text-slate-500 font-semibold tracking-wide">
                위챗 → 발견 → QR 스캔
              </p>
            </div>

            {/* ID copy row */}
            <button
              type="button"
              onClick={() => copy(WECHAT_ID, "id")}
              className="mt-4 w-full group bg-[#0f172a] hover:bg-black text-white px-5 py-4 flex items-center justify-between transition-colors"
            >
              <div className="text-left">
                <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-slate-400">
                  WeChat ID
                </div>
                <div className="mt-1 font-extrabold text-lg tabular-nums">{WECHAT_ID}</div>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#b59a5d] group-hover:bg-[#c9b07e] text-white px-4 py-2.5 font-bold text-sm transition-colors">
                {copied === "id" ? <Check size={15} strokeWidth={2.5} /> : <Copy size={15} strokeWidth={2} />}
                {copied === "id" ? "복사됨" : "ID 복사"}
              </div>
            </button>

            {/* Email fallback row */}
            <button
              type="button"
              onClick={() => copy(EMAIL, "email")}
              className="mt-2.5 w-full group border border-slate-200 hover:border-slate-400 text-[#0a0a0a] px-5 py-3.5 flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <Mail size={15} strokeWidth={1.75} className="text-slate-500" />
                <span className="text-[13px] font-bold tracking-tight">{EMAIL}</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500 group-hover:text-[#0a0a0a] transition-colors">
                {copied === "email" ? <Check size={13} strokeWidth={2.5} /> : <Copy size={13} strokeWidth={2} />}
                {copied === "email" ? "복사됨" : "이메일 복사"}
              </span>
            </button>

            {/* Mobile app open */}
            <a
              href="weixin://"
              className="mt-5 w-full inline-flex items-center justify-center gap-2.5 bg-[#09BB07] hover:bg-[#07a006] text-white py-3.5 font-extrabold text-[14px] transition-colors sm:hidden"
            >
              <Smartphone size={16} strokeWidth={2} />
              위챗 앱 열기
            </a>

            {/* How-to */}
            <ol className="mt-5 space-y-2 text-[12.5px] text-slate-600 font-medium leading-relaxed">
              <li className="flex gap-2.5">
                <span className="font-extrabold text-[#b59a5d] shrink-0 tabular-nums">01</span>
                위챗 앱을 실행하고 <b className="text-[#0a0a0a]">추가하기(+)</b>를 누릅니다.
              </li>
              <li className="flex gap-2.5">
                <span className="font-extrabold text-[#b59a5d] shrink-0 tabular-nums">02</span>
                <span>
                  <b className="text-[#0a0a0a]">ID 검색</b> 또는 <b className="text-[#0a0a0a]">QR 스캔</b>으로 친구 요청을 보냅니다.
                </span>
              </li>
              <li className="flex gap-2.5">
                <span className="font-extrabold text-[#b59a5d] shrink-0 tabular-nums">03</span>
                <span>수락 후 <b className="text-[#0a0a0a]">24시간 이내</b>에 회신드립니다.</span>
              </li>
            </ol>

            <p className="mt-5 pt-4 border-t border-slate-100 text-[11px] text-slate-400 font-medium leading-relaxed">
              * 위챗은 외부 링크에서 직접 대화창을 열 수 없어 ID 복사 또는 QR 스캔이 필요합니다.
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
