import { useState,useRef } from "react";
import { Table ,Form} from "react-bootstrap"


const MembersTable = () => {

    const [selected, setSelected] = useState([]);
    const [checked, setChecked] = useState(false);
    const listOptions = [
        "apple",
        "banana",
        "cherry",
        "date",
        "elderberry",
        "fig",
        "honeydew melon",
      ];

    const rowCheckbox = useRef("");
    const toggleCheckboxes = () => {
      setChecked((prevState) => !prevState);
  
      if (checked) {
        setSelected(listOptions);
      } else {
        setSelected([]);
      }
    };
    console.log(selected.length) //It will sent for Print whenneed  all members for the count 
  return (
    <Table hover striped variant="dark" bordered responsive>
              <thead>
                <tr>
                <th>
            <Form.Check
              className="text-center"
              type="checkbox"
              onClick={toggleCheckboxes}
            />
            
          </th>
                  <th>#</th>
                  <th className="text-center">Memebers</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td>
            <Form.Check
              className="text-center"
              type="checkbox"
              ref={rowCheckbox}
              name="" // name={item}  format
              value="" // value={item}  format
              checked={checked}
            />
          </td>
                  <td>1</td>
                  <td>Memebrts</td>
                  <td>Month</td>
                </tr>
              </tbody>
            </Table>
  )
}

export default MembersTable