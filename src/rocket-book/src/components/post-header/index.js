import React from 'react';

const PostHeader = ({ name, avatar, time }) => (
  <div className="post-header-container">
    <img className="avatar" src={avatar} alt="avatar" />
    <div className="data-container">
      <strong>{name}</strong>
      <span>{time}</span>
    </div>
  </div>
);

export default PostHeader;
