import { useState } from "react";
import { Table } from "react-bootstrap";
import CheckBox from "../Utilities/CheckBox";

const TransactionTable = () => {
  //CheckBox All Configuration Start
  const [selected, setSelected] = useState([]);
  const listOptions = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "honeydew melon",
  ];

  function handleSelect(value, name) {
    if (value) {
      setSelected([...selected, name]);
      console.log(selected)
    } else {
      setSelected(selected.filter((item) => item !== name));
      console.log(selected)
    }
  }

  function selectAll(value) {
    if (value) {
      // if true
      setSelected(listOptions); 
      console.log(selected)
    } else {
      // if false
      setSelected([]); 
      console.log(selected)
    }
  }

  //CheckBox Configuration Stop

  return (
    <Table hover striped variant="dark" bordered className="print-table">
      <thead>
        <tr>
          <th>
            <CheckBox
              name="all"
              value={selected.length === listOptions.length}
              updateValue={selectAll}
            >
              Select All
            </CheckBox>
          </th>

          <th>#</th>
          <th className="text-center"> Memebers</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {listOptions.map((item, key) => {
          return (
            <div key={key}>
              <CheckBox
                name={item}
                value={selected.includes(item)}
                updateValue={handleSelect}
              >
                {item}
              </CheckBox>
            </div>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TransactionTable;
