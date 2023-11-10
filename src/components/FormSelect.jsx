const FormSelect = ({ label, name, list, defaultValue, size }) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
        <select
          name={name}
          id={name}
          className={`select select-bordered`}
          defaultValue={defaultValue}
        >
          {list.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};
export default FormSelect;
