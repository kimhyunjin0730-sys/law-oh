import { Link, useLocation } from "react-router";

export interface PageSubnavItem {
  label: string;
  to: string;
  soon?: boolean;
}

interface Props {
  items: PageSubnavItem[];
}

export function PageSubnav({ items }: Props) {
  const { pathname } = useLocation();
  return (
    <nav className="bg-[#f4f6fa] border-b border-[#dbe1ea] sticky top-[128px] z-30">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-stretch overflow-x-auto no-scrollbar">
          {items.map((it) => {
            const active = pathname === it.to;
            return (
              <Link
                key={it.to}
                to={it.soon ? "#" : it.to}
                onClick={(e) => it.soon && e.preventDefault()}
                aria-current={active ? "page" : undefined}
                className={
                  "px-5 py-4 text-[14px] font-medium whitespace-nowrap border-b-2 transition-colors tracking-tight " +
                  (active
                    ? "text-[#0f172a] border-[#0f172a] font-bold"
                    : "text-[#475569] border-transparent hover:text-[#0f172a]") +
                  (it.soon ? " cursor-default opacity-70 hover:text-[#475569]" : "")
                }
              >
                {it.label}
                {it.soon ? (
                  <span className="ml-1.5 align-middle font-mono text-[9px] font-bold tracking-[0.1em] text-[#b59a5d]">
                    SOON
                  </span>
                ) : null}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
