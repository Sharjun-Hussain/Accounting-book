import DataTables from "datatables.net-dt";
import { useEffect, useRef } from "react";

import PropTypes from 'prop-types';


ReactDataTables.propTypes = {
  Data: PropTypes.array.isRequired,
  Column: PropTypes.array.isRequired,
};

export function ReactDataTables({ Data, Column }) {
  
  const tableRef = useRef(null);

  useEffect(() => {
    const dt = new DataTables(tableRef.current, {
      data : Data, columns:Column,destroy:true, 
    });
    return () => {
      dt.destroy();
    };
  }, []);

  return <table className="text-white" ref={tableRef}></table>;
}

export default ReactDataTables;