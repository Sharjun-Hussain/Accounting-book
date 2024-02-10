import axios from "axios";
import { useState, useEffect } from "react";
import { Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const MembersTable = () => {
  const [Members, setMembers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/Sandha-members/All"
        );

        setMembers(response.data.Members);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    console.log(Members);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const [selected, setSelected] = useState([]);
  // const [checked, setChecked] = useState(false);
  // const listOptions = [
  //   "apple",
  //   "banana",
  //   "cherry",
  //   "date",
  //   "elderberry",
  //   "fig",
  //   "honeydew melon",
  // ];

  // const rowCheckbox = useRef("");
  // const toggleCheckboxes = () => {
  //   setChecked((prevState) => !prevState);

  //   if (checked) {
  //     setSelected(listOptions);
  //   } else {
  //     setSelected([]);
  //   }
  // };
  // console.log(selected.length); It will sent for Print whenneed  all members for the count
  return (
    <Table hover  variant="dark" bordered responsive>
      <thead>
        <tr>
          <th>
            <Form.Check
              className="text-center"
              type="checkbox"
              onClick={() => {}}
            />
          </th>
          <th>#</th>
          <th className="text-center">Name</th>
          <th className="text-center">Address</th>
          <th className="text-center">Phone</th>
          <th className="text-center">Amount</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* <Form.Check
              className="text-center"
              type="checkbox"
              ref={rowCheckbox}
              name="" // name={item}  format
              value="" // value={item}  format
              checked={checked}
            /> */}
        {Object.values(Members).map((Member, key) => {
          return (
            <tr key={key}>
              
              <td>
                <Form.Check
                  className="text-center"
                  type="checkbox"
                />
              </td>
              <td>1</td>
              <td>{Member.Name}</td>
              <td>{Member.Address}</td>
              <td>{Member.Phone}</td>
              <td>{Member.Amount}</td>
              <td><Link to={`${Member._id}`}>Edit </Link></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default MembersTable;
