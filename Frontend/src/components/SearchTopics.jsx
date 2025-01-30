import React from 'react';
import { Link } from 'react-router-dom';
import './css/Search.css';

const SearchTopics = () => {
  return (
    
    <div className="search-topics">
      <h1 style={{color:'black'}}>Select a Topic</h1>
      <div className="topics-container">
        <div className="topic-box">
          <Link to="/topicTech">Technology</Link>
        </div>
        <div className="topic-box">
          <Link to="/topicAI">AI</Link>
        </div>
        <div className="topic-box">
          <Link to="/topicMusic">Music</Link>
        </div>
        <div className="topic-box">
          <Link to="/topicMovies">Movies</Link>
        </div>
        <div className="topic-box">
          <Link to="/topicFood">Food</Link>
        </div>
        <div className="topic-box">
          <Link to="/topicKpop">K-Pop</Link>
        </div>
       
        </div>
      </div>
    
  );
};

  
export default SearchTopics;
