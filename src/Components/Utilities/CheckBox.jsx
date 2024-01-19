/* eslint-disable react/prop-types */

import { Form } from "react-bootstrap";

const CheckBox = ({name, value, updateValue = ()=>{} , children }) => {
  
    // handle checkbox change
  const handleChange = () => {
    updateValue(!value, name);
  };
  return (
    <>
      <Form.Check type="checkbox" checked={value} onChange={handleChange} name={name} id={`${name}-checkbox`} />
      <Form.Label  htmlFor={name} > {children}</Form.Label>

{/* <input type="checkbox" id={`${name}-checkbox`} name={name} checked={value} onChange={handleChange} />
      <label htmlFor={`${name}-checkbox`}>{children}</label> */}
     
    </>
  );
};

export default CheckBox;
