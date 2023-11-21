

const NonnegativeInputField = ({valuee, label, onChange}) => {

  const handleInputChange = (event) => {
    const { value } = event.target;
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue) && parsedValue >= 0) {
      onChange(parsedValue.toString());
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === '-' || event.key === '-') {
      event.preventDefault();
    }
  };

  return (
    <div>
    <label className=" block mb-3 text-[16px] font-normal text-back-color2">{label}</label>
      <input
        type="number"
        className=" w-full border p-3 rounded-md"
        value={valuee}
        onChange={handleInputChange}
        required
        onKeyDown={handleKeyDown}
        min="0"
      />
    </div>
  );
};

export default NonnegativeInputField;
