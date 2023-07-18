import React from "react";
// import PropTypes from "prop-types";
import "./Newsitem.css";
const NewsItem = (props) => {
  return (
    <>
      <div className="d-flex container d-flex justify-content-evenly my-4">
        <div className="card" style={{ width: "22rem" }}>
          <img style={{height:"250px"} } src={props.urlimg} className=" card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">
              {props.disc}...
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item " style={{color:"red" }}>  publishedAt : {props.date}</li>
            <li className="list-group-item">author : {props.author}</li>
            <li className="list-group-item">Source : {props.source}</li>
          </ul>
          <div className="card-body ">
            <a href={props.url} className="btn btn-primary btn-sm" target="_blank">
             Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
