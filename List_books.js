import React, { Fragment, useEffect, useState } from "react";

import Edit_book from "./Edit_books";

const Listbooks = () => {
  const [books, setbooks] = useState([]);

  //delete todo function

  const deletebooks = async book_name => {
    try {
      const deletebooks = await fetch(`http://localhost:5000/books/${book_name}`, {
        method: "DELETE"
      });

      setbooks(books.filter(book => book.book_name !== book_name));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getbooks = async () => {
    try {
      const response = await fetch("http://localhost:5000/books");
      const jsonData = await response.json();

      setbooks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getbooks();
  }, []);

  console.log(books);

  return (
    <Fragment>
      {" "}
      <table>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Borrowed by</th>
            <th>Borrowed date</th>
            <th>Retuning date</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {books.map(book => (
            <tr key={book.book_name}>
              <td>{book.book_name}</td>
              <td>{book.author}</td>
              <td>{book.borrowed_by}</td>
              <td>{book.dateof_borrow}</td>
              <td>{book.expecteddateof_return}</td>
              <td>
                <Edit_book book={book} />
              </td>
              <td>
                <button
                  //className="btn btn-danger"
                  onClick={() => deletebooks(book.book_name)}
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

export default Listbooks;
