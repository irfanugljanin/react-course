const Input = (props) => {
  let { inputName } = props;

  return (
    <div>
      <input
        type="text"
        placeholder={inputName}
        style={{
          width: "320px",
          height: "48px",
          color: "light-grey",
          border: "none",
          margin: "16px",
          borderRadius: "10px",
          padding: "0 20px",
        }}
      />
    </div>
  );
};

export default Input;
