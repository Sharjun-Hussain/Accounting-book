
import { Form } from "react-bootstrap";

const CheckBox = ({name, value = false, updateValue = ()=>{} , children }) => {
  
    // handle checkbox change
  const handleChange = () => {
    updateValue(!value, name);
  };
  return (
    <>
      {/* <Form.Check type="checkbox" checked={Value} onChange={handleChange} name={Name} iid={`${Name}-checkbox`} />
      <Form.Label  htmlFor={Name} > {children}</Form.Label> */}

<input type="checkbox" id={`${name}-checkbox`} name={name} checked={value} onChange={handleChange} />
      <label htmlFor={`${name}-checkbox`}>{children}</label>
     
    </>
  );
};

export default CheckBox;
