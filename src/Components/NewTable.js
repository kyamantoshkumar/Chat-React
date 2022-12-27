import React, { useState } from "react";
function TableRows({ rows, tableRowRemove, onValUpdate }) {
  return rows.map((rowsData, index) => {
    const { name, email, profile } = rowsData;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            value={name}
            onChange={(event) => onValUpdate(index, event)}
            name="name"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={email}
            onChange={(event) => onValUpdate(index, event)}
            name="email"
            className="form-control"
          />
        </td>
        <td>
          <input
            type="text"
            value={profile}
            onChange={(event) => onValUpdate(index, event)}
            name="profile"
            className="form-control"
          />
        </td>
        <td>
          <button
            className="btn btn-dark"
            onClick={() => tableRowRemove(index)}
          >
            Delete Row
          </button>
        </td>
      </tr>
    );
  });
}
function Table() {
  const [rows, initRow] = useState([]);
  const addRowTable = () => {
    const data = {
      name: "",
      email: "",
      profile: "",
    };
    initRow([...rows, data]);
  };
  const tableRowRemove = (index) => {
    const dataRow = [...rows];
    dataRow.splice(index, 1);
    initRow(dataRow);
  };
  const onValUpdate = (i, event) => {
    const { name, value } = event.target;
    const data = [...rows];
    data[i][name] = value;
    initRow(data);
  };
  return (
    <>
      <h2 className="text-center">React JS Add / Delete Table Rows Example</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Profile</th>
            <th>
              <button className="btn btn-danger" onClick={addRowTable}>
                Insert Row
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <TableRows
            rows={rows}
            tableRowRemove={tableRowRemove}
            onValUpdate={onValUpdate}
          />
        </tbody>
      </table>
    </>
  );
}
export default Table;