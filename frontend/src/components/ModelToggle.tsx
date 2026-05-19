export function ModelToggle() {
  return (
    <fieldset className="control segmented-control" disabled>
      <legend>Model</legend>
      <label>
        <input type="radio" name="model" defaultChecked />
        Local
      </label>
      <label>
        <input type="radio" name="model" />
        Cloud
      </label>
    </fieldset>
  );
}
