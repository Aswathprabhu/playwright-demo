export const InputAndButton = ({
  buttonText,
  onButtonClick,
  inputValue,
  onInputChange,
}) => {
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <button onClick={onButtonClick}>{buttonText}</button>
    </div>
  );
};
