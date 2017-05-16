import React from 'react';

import stylesheet from 'assets/styles/commentlist.scss'

const CommentList = (props) => {
  
  const { list } = props

  return (
    <div className="comment-list col-xs-10 col-xs-offset-1">
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <div className="grey">
        <h1>Comment List</h1>
      </div>
      {
        list.map((item, index) => (
          <div key={index} className="media grey">
            <div className="media-body">
              <h4 className="media-heading">{`${item.id}. `} {item.title}</h4>
              <p>{item.body}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default CommentList;
