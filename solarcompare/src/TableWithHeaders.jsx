import React from "react";
import TableHeadersAndKeys from "./TableHeadersAndKeys.json";

function TableWithHeaders() {
  let RowId;
  return (
    <table className="tableHeaders">
      <tbody>
        {TableHeadersAndKeys.map((data, tableHeaderIndex) => {
          if (tableHeaderIndex === 0) return <></>;
          if (TableHeadersAndKeys[tableHeaderIndex].key === "-") {
            RowId = "TableHeadline";
          } else {
            RowId = "";
          }
          return (
            <tr key={tableHeaderIndex} id={RowId}>
              <th id="firstColumn">{data.Header}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TableWithHeaders;
