import React from "react";
import NewsItem from "./NewsItem";
import { useState, useEffect } from "react";
// import PropTypes from "prop-types";

export default function Newonline(props) {
  let [intity, setintity] = useState();
  let apiurl = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=1b1ff042c70946f8b6e5e5bf3fe856f8&pageSize=20`;
  let data;
  async function pullapi() {
    const response = await fetch(apiurl);
    const responsedata = await response.json();
    data = responsedata.articles.map((element) => {
      let period = new Date(element.publishedAt);
      return (
        <div key={element.url} className="col md-4">
          <NewsItem
            title={element.title}
            url={element.url}
            urlimg={element.urlToImage}
            disc={
              element.description != null
                ? element.description.slice(0, 60)
                : ""
            }
            date={
              period.getDate() +
              "-" +
              period.getMonth() +
              "-" +
              period.getFullYear()
            }
            author={element.author != null ? element.author : "source"}
            source={element.source.name}
          />
        </div>
      );
    });
    setintity(data);
  }

  useEffect(() => {
    pullapi();
  }, []);
  return (
    <>
      <h1 style={{ color: "red", fontFamily: "-moz-initial" }} className="my-4">
        {" "}
        <center>__Top Headline {props.head}__</center>
      </h1>
      <div className="container my-4">
        <div className="row ">{intity}</div>
      </div>
    </>
  );
}
