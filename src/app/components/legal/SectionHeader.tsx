interface Props {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({ id, eyebrow, title, description }: Props) {
  return (
    <header className="mb-12">
      <p className="font-display text-[11px] font-black tracking-[0.32em] uppercase text-[#b59a5d] mb-4">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-[-0.02em] leading-[1.08]"
      >
        {title}
      </h2>
      <hr className="mt-6 w-16 h-[2px] border-0 bg-[#b59a5d]" />
      {description ? (
        <p className="mt-6 max-w-[640px] text-[15px] text-[#6b5f48] leading-relaxed">
          {description}
        </p>
      ) : null}
    </header>
  );
}
