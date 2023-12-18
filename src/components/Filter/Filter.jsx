export default function Filter({value, onChange}) {
    return (
      <label>
        Find contact:
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </label>
    );
}