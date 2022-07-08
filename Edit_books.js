import React, { Fragment, useState } from "react";

const Edit_book = ({ book }) => {
  const [author, setauthor] = useState(book.author);
  const [borrowed_by, setborrowed_by] = useState(book.borrowed_by);
  const [dateof_borrow, setdateof_borrow] = useState(book.dateof_borrow);
  const [expecteddateof_return, setexpecteddateof_return] = useState(book.expecteddateof_return);

  //edit description function

  const updateauthor = async e => {
    e.preventDefault();
    try {
      const body = { author };
      const response = await fetch(
        `http://localhost:5000/books/${book.author}`,
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

  const updateborrowed_by = async e => {
    e.preventDefault();
    try {
      const body = { borrowed_by };
      const response = await fetch(
        `http://localhost:5000/books/${book.borrowed_by}`,
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

  const updatedateof_borrow = async e => {
    e.preventDefault();
    try {
      const body = { dateof_borrow };
      const response = await fetch(
        `http://localhost:5000/books/${book.dateof_borrow}`,
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

  const updateexpecteddateof_return = async e => {
    e.preventDefault();
    try {
      const body = { expecteddateof_return };
      const response = await fetch(
        `http://localhost:5000/books/${book.expecteddateof_return}`,
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
      

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`book_name${book.book_name}`}
        onClick={() => { setauthor(book.author) 
            setborrowed_by(book.borrowed_by)
            setdateof_borrow(book.dateof_borrow)
            setexpecteddateof_return(book.expecteddateof_return)
        }
        }
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Book</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => { setauthor(book.author) 
                    setborrowed_by(book.borrowed_by)
                    setdateof_borrow(book.dateof_borrow)
                    setexpecteddateof_return(book.expecteddateof_return)
                }
                }
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={author}
                onChange={e => { setauthor(e.target.value) 
                    setborrowed_by(e.target.value)
                    setdateof_borrow(e.target.value)
                    setexpecteddateof_return(e.target.value)
                }
                }
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => { updateauthor(e) 
                    updateborrowed_by(e)
                    updatedateof_borrow(e)
                    updateexpecteddateof_return(e)
                }
                }
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => { setauthor(book.author) 
                    setborrowed_by(book.borrowed_by)
                    setdateof_borrow(book.dateof_borrow)
                    setexpecteddateof_return(book.expecteddateof_return)
                }
                }
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

export default Edit_book;
