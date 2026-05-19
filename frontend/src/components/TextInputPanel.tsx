export function TextInputPanel() {
  return (
    <section className="panel input-panel">
      <h2>Text Input</h2>
      <textarea
        aria-label="Reading text"
        placeholder="Paste text here..."
        rows={10}
        disabled
      />
    </section>
  );
}
