import { useRef, useState } from 'react';

export default function BirthdateInput(props) {
  const inputElement = useRef(null);
  const [error, setError] = useState(false);
  const [warning, setWarning] = useState(false);

  const style = {
    border: '2px solid #ccc',
    padding: '10px',
    borderRadius: '4px'
  };

  const errorStyle = {
    ...style,
    borderColor: 'red'
  };

  const warningStyle = {
    ...style,
    borderColor: 'orange'
  };

  function changeHandler() {
    const value = inputElement.current.value;
    const currentDate = new Date();
    const inputDate = new Date(value);
    const minAge = 18;
    const maxAge = 120;
    const age = currentDate.getFullYear() - inputDate.getFullYear();

    if (age < minAge) {
      setError(`You must be at least ${minAge} years old.`);
      setWarning(false);
    } else if (age > maxAge) {
      setError(false);
      setWarning(`The age seems too high, please verify.`);
    } else {
      setError(false);
      setWarning(false);
    }
  }

  return (
    <>
      <input
        style={error ? errorStyle : warning ? warningStyle : style}
        ref={inputElement}
        onChange={changeHandler}
        type="date"
        {...props}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {warning && <p style={{ color: 'orange' }}>{warning}</p>}
    </>
  );
}
