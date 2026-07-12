interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="max-w-3xl mb-12">

      <p className="uppercase tracking-[0.25em] text-blue-500 text-sm font-semibold">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg text-gray-400 leading-8">
          {description}
        </p>
      )}

    </div>
  );
}