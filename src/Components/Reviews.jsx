import React from "react";

import '../Styles/reviews.scss';

export default ({name, comment, postedDate }) => {
  return (
    <div className="review_div">
      <div className="user_info">
        <img src={require('../img/image_burned.png')}alt="" />
        <h2 className="user_name">{ name }</h2> 
        <h2 className="title">{ postedDate }</h2>
      </div>
      <p className="comment">{ comment }</p>
    </div>
  );
};
