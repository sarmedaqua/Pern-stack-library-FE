import React, { Fragment, useState } from "react";

const Edit_student = ({ student }) => {
  const [last_name, setlast_name] = useState(student.last_name);

  //edit description function

  const updatelast_name = async e => {
    e.preventDefault();
    try {
      const body = { last_name };
      const response = await fetch(
        `http://localhost:5000/students/${student.first_name}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        data-toggle="modal"
        data-target={`#first_name${student.first_name}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`first_name${student.first_name}`}
        onClick={() => setlast_name(student.last_name)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setlast_name(student.last_name)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={last_name}
                onChange={e => setlast_name(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updatelast_name(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setlast_name(student.last_name)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Edit_student;
