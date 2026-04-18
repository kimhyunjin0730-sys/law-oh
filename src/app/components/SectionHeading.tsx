export function SectionHeading({
  title,
  subtitle,
  centered = false,
}: {
  title: string;
  subtitle?: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-16 md:mb-24 ${centered ? "text-center flex flex-col items-center" : ""}`}>
      <div className={`w-8 h-1 bg-[#b59a5d] mb-6 ${centered ? "mx-auto" : ""}`} />
      <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-6 max-w-3xl text-lg md:text-xl text-slate-600 font-medium leading-relaxed ${centered ? "mx-auto text-center" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
