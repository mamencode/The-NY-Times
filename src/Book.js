import React from "react";
import Moment from "react-moment";
import Grid from "@material-ui/core/Grid";

function Book({book}) {
  return (
    <Grid item xs={6} sm={4} md={3}>
      <div className="book">
        <a
          className="attrib"
          style={{
            color: "#121212",
            textDecoration: "none",
            fontFamily: "nyt-cheltenham,georgia,'times new roman',times,serif"
          }}
          href={book.book_uri}
        >
          <header>
            <div className="headdiv">
              <img style={{maxHight: "100px", width: "100%", objectFit: "contain"}} className='bookimg' src={book.book_image} alt={book.title} />
            </div>
          </header>
          <div className="content">
            <p className="week"></p>
            <h3 className='btitle'>{book.title}</h3>
            <p className="owter">{book.author}</p>
            <p className='bookdes'>{book.description}</p>
          </div>
        </a>
        <div></div>
      </div>
    </Grid>
  );
}

export default Book;
