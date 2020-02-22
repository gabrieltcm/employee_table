import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  // map through the array to return a table row for each object in the array.
  const rows = props.employeeData.map((varRow, index) => {
    return (
      //use keys when making lists in React, as they help identify each list item.
      <tr key={index}>
        <td>{varRow.name}</td>
        <td>{varRow.job}</td>
        <td>
          <button onClick={() => props.removeEmployee(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = props => {
  const { employeeData, removeEmployee } = props;

  return (
    <table>
      <TableHeader />
      <TableBody employeeData={employeeData} removeEmployee={removeEmployee} />
    </table>
  );
};
export default Table;
