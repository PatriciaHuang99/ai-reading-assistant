export function LanguageSelector() {
  return (
    <label className="control">
      <span>Target language</span>
      <select disabled defaultValue="es">
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="de">German</option>
        <option value="nl">Dutch</option>
      </select>
    </label>
  );
}
