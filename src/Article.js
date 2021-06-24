import React from 'react';
import Moment from 'react-moment';
import Grid from "@material-ui/core/Grid"


function Article({ article }) {
  //console.log(article);
  
  const [medias] = article.multimedia;
  //console.log(medias)
  const { url, caption } = medias;
  return (
    <Grid item xs={12} sm={6} md={3}>
    <div >
    <div className="main">
      <div className="articlediv">
        <a
          style={{
            color: '#121212',
            textDecoration: 'none',
            fontFamily: "nyt-cheltenham,georgia,'times new roman',times,serif"
          }}
          href={article.url}
        >
          <h1 className="title">{article.title} </h1>
        </a>
      </div>

      <p className="articlesummery">{article.abstract} </p>
      <div className="imgcontainer">
        <img className="thefigure" src={url} alt={caption} />
      </div>
      <p className="autor">
        <span>{article.byline} </span>
      </p>
      <div>
      <Moment className="time">{article.published_date}</Moment>
        <span className="timein">
          
        </span>
      </div>
      </div>
    </div>
    </Grid>
  );
}

export default Article;
