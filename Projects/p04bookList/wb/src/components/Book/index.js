import React from 'react';

const Book = ({ book }) => {
    return (
        <tr>
      <td>{book.Name}</td>
      <td>{book.Author}</td>
      <td>{book.Year}</td>
      <td>
        <button className="btn btn-info">Information</button>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
    );
};

export default Book;