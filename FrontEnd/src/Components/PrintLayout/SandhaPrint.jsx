/* eslint-disable react/prop-types */
// SandhaPrint.js

import { Image } from "react-bootstrap";
import hadhiLogo from "../../assets/images/hadhi-logo.png";
import { forwardRef } from "react";

const SandhaPrint = ({ selectedRow, ref }) => {
  console.log(selectedRow);

  const styles = {
    container: {
      width: "5in", // Set the width to 3.5 inches
      padding: "0.2in", // Add padding as needed
      margin: "0 auto", // Center align the content
      fontFamily: "Arial, sans-serif", // Example font
      color: "black", //
    },
    header: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "0.2in",
    },
    logo: {
      width: "50px", // Adjust logo size if needed
      marginRight: "0.5in",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    details: {
      marginBottom: "0.2in",
    },
    itemizedList: {
      width: "100%",
      borderCollapse: "collapse",
      marginBottom: "0.2in",
    },
    tableHeader: {
      backgroundColor: "#f2f2f2",
      borderBottom: "1px solid #ddd",
      padding: "8px",
    },
    tableRow: {
      borderBottom: "1px solid #ddd",
      padding: "8px",
    },
    total: {
      marginTop: "0.2in",
      textAlign: "right",
    },
    receiptNumber: {
      fontSize: "12px",
      marginTop: "-13px",
    },
    text: {
      marginTop: "-13px",
    },
  };

  return (
    <div ref={ref} style={styles.container}>
      <div style={styles.header}>
        <Image width={100} height={100} src={hadhiLogo} className="mb-2" />
        <pre>Masjidhul Haadhi - Sandha Receipt</pre>
        <pre style={styles.text}>மஸ்ஜிதுல் ஹாதி - பற்றுச்சீட்டு </pre>
        <pre style={styles.text}>============================</pre>
      </div>

      <div style={styles.text} className="d-flex flex-column">
        <pre className="text-center  " style={styles.text}>
          ------ Date: {new Date().toISOString().substring(0, 10)} ------
        </pre>
        <pre className="text-center" style={styles.receiptNumber}>
          ---- Receipt Number: {selectedRow._id} ----
        </pre>

        {/* <pre className="text-center" style={styles.text}>----- Treasurer Name : U.L.M.Muhshin -----</pre> */}
      </div>
      <pre className="text-center" style={{ marginTop: "-20px" }}>
        {" "}
        <pre>==================================================</pre>
        <div className="text-center mb-2 mt-0 pt-0"> Subscription Details - சந்தா விபரம் </div>
        <pre>==================================================</pre>
      </pre>

      <pre style={{ marginTop: "-20px" }}>
        <div>      * Name / பெயர் : {selectedRow.Name}</div>
        <div>      * Amount/தொகை : {selectedRow.Amount}</div>
        <div>      * Reason /காரணம் : சந்தா</div>
        <pre className="text-center">==================================================</pre>
        <pre className="text-center" style={styles.text}>
          --- For More Details ---
        </pre>
        <pre
          className="text-center mb-0 pb-0"
          style={{ fontSize: "12px", marginTop: "-13px" }}
        >
          - President : 0761182772 | Treasurer : 0756808714 -
        </pre>

        <p className="text-center">
          <pre className="m-0 p-0">-------------------------------------------</pre>
        <pre >Powered By : Inzeedo |  Sharjun Hussain </pre>
        <pre style={{fontSize:"12px", marginTop: "-13px" }}>For POS Systems,LMS mobile applications Masjith Accounting book </pre>
        <pre style={{ fontSize:"12px",marginTop: "-14px" }}> Contact : 0757340891 </pre>
      </p>
      </pre>

      
      {/* <div style={styles.total}>
        <p>
          <strong>Subtotal:</strong> $
          {selectedRows.reduce((acc, row) => acc + row.Amount, 0).toFixed(2)}
        </p>
        <p>
          <strong>Tax (10%):</strong> $
          {(
            selectedRows.reduce((acc, row) => acc + row.Amount, 0) * 0.1
          ).toFixed(2)}
        </p>
        <h3>
          Total: $
          {(
            selectedRows.reduce((acc, row) => acc + row.Amount, 0) * 1.1
          ).toFixed(2)}
        </h3>
      </div> */}
    </div>
  );
};

export const SandhaPrintComponent = forwardRef(SandhaPrint);
