export function TextToSpeechControls() {
  return (
    <div className="control button-row" aria-label="Text to speech controls">
      <span>Speech</span>
      <button type="button" disabled>
        Play
      </button>
      <button type="button" disabled>
        Pause
      </button>
    </div>
  );
}
