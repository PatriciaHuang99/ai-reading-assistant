import { HistoryPanel } from "./components/HistoryPanel";
import { LanguageSelector } from "./components/LanguageSelector";
import { ModelToggle } from "./components/ModelToggle";
import { ParagraphList } from "./components/ParagraphList";
import { TextInputPanel } from "./components/TextInputPanel";
import { TextToSpeechControls } from "./components/TextToSpeechControls";
import { TranslationPanel } from "./components/TranslationPanel";

const sampleParagraphs = [
  "Paste reading material into the input panel to prepare it for assisted reading.",
  "Translation, speech synthesis, and history will be connected in later tasks.",
];

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <div>
          <h1>AI Reading Assistant</h1>
          <p>Minimal development scaffold for reading, translation, and review workflows.</p>
        </div>
      </header>

      <section className="toolbar" aria-label="Reading options">
        <LanguageSelector />
        <ModelToggle />
        <TextToSpeechControls />
      </section>

      <section className="workspace">
        <TextInputPanel />
        <ParagraphList paragraphs={sampleParagraphs} />
        <TranslationPanel />
        <HistoryPanel />
      </section>
    </main>
  );
}

export default App;
