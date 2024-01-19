import { useState } from "react";
import { Form } from "react-bootstrap";

const CheckBox = () => {
  const [CheckedValue, setCheckedValue] = useState([]);
  return (
    <>
      <Form.Check type="checkbox" label={`default checkbox`} />
    </>
  );
};

export default CheckBox;
