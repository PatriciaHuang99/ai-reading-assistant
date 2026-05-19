type ParagraphListProps = {
  paragraphs: string[];
};

export function ParagraphList({ paragraphs }: ParagraphListProps) {
  return (
    <section className="panel">
      <h2>Paragraphs</h2>
      <div className="paragraph-list">
        {paragraphs.map((paragraph, index) => (
          <article className="paragraph-item" key={paragraph}>
            <span>{index + 1}</span>
            <p>{paragraph}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
