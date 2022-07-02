import React, { useState, useEffect } from 'react';
import Book from '../../components/Book';


const Home = () => {
//LOGICA DO COMPONENTE

const [books, setBooks] = useState([]);
const [book, setBook] = useState ({
Name: null,
Year: 0,
Author: null,
});

const send = () => {
    setBooks([book, ...books]);
};

//QUANDO MUDAR COMPONENTE
useEffect(() => {
  alert('Book Apply');
},[books]);


//COMPONENTE CARREGADO
useEffect(() => {
  console.log('Welcome to Book List');
},[]);


    //REORNA O HTML DO COMPONENTE
    return (
    <div className="container">
        <h1>List of Books</h1>
          <br />
            <div className="jumbotron">
              <div className="row">
                

                <div className="col-4">
                <label>Name</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Name of Book"
                onChange={(e) => {
                    setBook({
                        ...book,
                        Name: e.target.value
                });
                }} />
            </div>

            <div className="col-4">
                <label>Year</label>
                <input 
                onChange={(e) => {
                    setBook({
                        ...book,
                        Year: e.target.value
                });
                }}
                 type="number" 
                className="form-control" 
         
                />
            </div>

            <div className="col-4">
                <label>Author</label>
                <select 
                                onChange={(e) => {
                                    setBook({
                                        ...book,
                                        Author: e.target.value
                                });
                                }}
                className="form-control">
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                    <option>D</option>
               </select>
            </div>
        
        
        
            <br />
                <button onClick={send} className="btn btn-success btn-lg btn-block">Send</button>
                </div>  
      </div>
      < br/>
        <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Author</th>
      <th scope="col">Year</th>
      <th scope="col" className="text-right">Action</th>
    </tr>
  </thead>

  <tbody>
    {books.map(book => (
    <Book book={book} />
    )) }

  </tbody>
</table>
        </div>
    );
};

export default Home;