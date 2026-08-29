function AiMenuRecommendation({ recommendation }) {
  return (
    <section className="rounded-xl border border-[#ebf3fe] bg-[#f8faff] p-4">
      <h3 className="text-[14px] font-semibold leading-[21px] text-[#191f28]">
        {recommendation.title}
      </h3>
      <ul className="space-y-1 pt-2">
        {recommendation.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-[13px] leading-[19.5px] text-[#4e5968]">
            <span className="size-1.5 shrink-0 rounded-full bg-[#3182f6]" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default AiMenuRecommendation;
