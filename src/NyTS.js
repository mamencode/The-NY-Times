import React, { useState, useEffect } from "react";
import axios from "axios";
import Article from "./Article";
import Grid from "@material-ui/core/Grid";

function NyTS() {
  const [articles, setArticls] = useState([]);
  const [n, setN] = useState(4);
  useEffect(() => {
    const fetchArticles = async () => {
      const result = await axios.get(
        "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=g1ivEWcaeYIrzDDxyQlXDdRTlXvxhApv"
      );

      const { data } = result;
      //console.log(data);
      setArticls(data.results);
    };
    fetchArticles();
  }, []);

  //console.log('articles:', articles);

  const sortedArticles = articles.sort(function (a, b) {
    return new Date(b.published_date) - new Date(a.published_date);
  });
  //console.log('sorted:', sortedArticles);
  //const n = 10;
  const slicedArticls = sortedArticles.slice(0, n);

  const loadContent = function () {
    console.log("loading...");
    if (n > 4) {
      setN(4);
    } else {
      setN(sortedArticles.length - 2);
    }
  };
  return (
    <div>
      {/* <div className="row"> */}
      <Grid
        style={{ maxHight: "60vh" }}
        container
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {slicedArticls.map((article) => (
          <Article key={article.abstract} article={article} />
        ))}
        {articles && (
          <button onClick={loadContent} className="btn">
            {n > 4 ? "back" : "Load All Articles"}
          </button>
        )}
      </Grid>
    </div>
  );
}

export default NyTS;
