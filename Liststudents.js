import React, { Fragment, useEffect, useState } from "react";

import Edit_student from "./edit_student";

const Liststudents = () => {
  const [students, setstudents] = useState([]);

  //delete todo function

  const deletestudents = async first_name => {
    try {
      const deletestudents = await fetch(`http://localhost:5000/students/${first_name}`, {
        method: "DELETE"
      });

      setstudents(students.filter(student => student.first_name !== first_name));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getstudents = async () => {
    try {
      const response = await fetch("http://localhost:5000/students");
      const jsonData = await response.json();

      setstudents(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getstudents();
  }, []);

  console.log(students);

  return (
    <Fragment>
      {" "}
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {students.map(student => (
            <tr key={student.first_name}>
              <td>{student.first_name}</td>
              <td>
                <Edit_student student={student} />
              </td>
              <td>
                <button
                  //className="btn btn-danger"
                  onClick={() => deletestudents(student.first_name)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Liststudents;
