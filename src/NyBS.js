import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";
import Grid from "@material-ui/core/Grid";

function NyBS() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const result = await axios.get(
        "https://api.nytimes.com/svc/books/v3/lists/current/Mass Market Paperback.json?api-key=g1ivEWcaeYIrzDDxyQlXDdRTlXvxhApv"
      );
      //const {results } = result;
      console.log(result);
      const { data } = result;
      const { results } = data;
      console.log(results);
      setBooks(results.books);
      //  console.log(books)
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <Grid
        style={{ maxHight: "60vh" }}
        container
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {books.map((book)=> (
          <Book 
          key={book.rank}
           book={book}  />
        ))}
      </Grid>
    </div>
  );
}

export default NyBS;
