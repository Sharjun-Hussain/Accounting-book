import { useState, useRef } from "react";
import { Table } from "react-bootstrap";
// import CheckBox from "../Utilities/CheckBox";

const TransactionTable = () => {
  //CheckBox All Configuration Start
  const [selected, setSelected] = useState([]);
  const [checked, setChecked] = useState(false)
  const listOptions = [
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "honeydew melon",
  ];

// const HandleCheck = (event) =>{

//     const {value, checked} = event.target;

//     if(checked){
//         setSelected(e =>[...e,value])
        

//     }else {
//         setSelected(e => {
//             return [...e.filter(ev => ev !== value)]
//         })
        
//     }
    

// }


console.log(selected)

const rowCheckbox = useRef('')
const toggleCheckboxes = () => {
    setChecked(prevState => !prevState)

    if(checked){
        setSelected(listOptions);
    } else{
        setSelected([]);
    }
}

// const handleSelectAll = (value) => {
//     if (value) {
//       setSelected(listOptions);
//     } else {
//       setSelected([]);
//     }
//   };

//   function handleSelect(value, name) {
//     if (value) {
//       setSelected([...selected, name]);
//       console.log(selected)
//     } else {
//       setSelected(selected.filter((item) => item !== name));
//       console.log(selected)
//     }
//   }

//   function selectAll(value) {
//     if (value) {
//       // if true
//       setSelected(listOptions); 
//       console.log(selected)
//     } else {
//       // if false
//       setSelected([]); 
//       console.log(selected)
//     }
//   }

  //CheckBox Configuration Stop

  return (
    <Table hover striped variant="dark" bordered className="print-table">
      <thead>
        <tr>
          <th>
          <input
          type="checkbox"
          onClick={toggleCheckboxes}
          
        />
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
               <label className='mb-1'> <input type="checkbox" ref={rowCheckbox} id="amenities1" className='' name={item} value={item} checked={checked} ></input>{item}</label>
              
              
            </div>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TransactionTable;
