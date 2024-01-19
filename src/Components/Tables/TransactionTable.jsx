import {  Table } from "react-bootstrap";

const TransactionTable = () => {
    return (
      <Table hover striped variant="dark" bordered className="print-table">
        <thead>
          <tr>
            <th></th>
  
            <th>#</th>
            <th className="text-center"> Memebers</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Memebrts</td>
            <td>Month</td>
          </tr>
        </tbody>
      </Table>
    );
  };

  export default TransactionTable