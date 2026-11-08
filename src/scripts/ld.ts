const semHtml = (s: string) => s.replace(/<[^>]+>/g, "");

export function faqLd(itens: { p: string; r: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: itens.map((i) => ({
      "@type": "Question",
      name: i.p,
      acceptedAnswer: { "@type": "Answer", text: semHtml(i.r) },
    })),
  };
}
