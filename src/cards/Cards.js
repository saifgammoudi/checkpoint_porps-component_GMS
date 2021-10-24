import React from "react";
import StarRating from "../StarRating/Star";
import "./cards.css";

const Cards = ({ data, handleData }) => {
  return (
    <div onClick={() => handleData(data.name)}>
      <div className="main_card">
        <div className="card_left">
          <div className="card_datails">
            <h1>{data.name}</h1>
            <div className="card_cat">
              <p className="year">{data.date}</p>
              <p className="genre">{data.type}</p>
              <p className="time">{data.time}</p>
            </div>
            <p className="disc">{data.description}</p>
            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
              Read More
            </a>
            <p>
              <StarRating rate={data.rating} />
            </p>

            <div className="social-btn">
              {/* WATCH TRAILER*/}
              <button>
                <i className="fas fa-play" /> SEE TRAILER
              </button>
              {/* GET*/}
              <button>
                <i className="fas fa-download" /> DOWNLOAD
              </button>
              {/*USERS RATINGS*/}
              <button>
                <i className="fas fa-thumbs-up" /> 97%
              </button>
              {/*BOOKMARK*/}
              <button>
                <i className="fas fa-star" />
              </button>
            </div>
          </div>
        </div>
        <div className="card_right">
          <div className="img_container">
            <img src={data.image} alt="" />
          </div>
          <div className="play_btn">
            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
              <i className="fas fa-play-circle" />
            </a>
          </div>
          <div></div>
        </div>
      </div>
      {/* FOLLOW */}
      <a
        className="Follow"
        href="https://codepen.io/ZaynAlaoudi/"
        target="blank_"
      />
    </div>
  );
};

export default Cards;
