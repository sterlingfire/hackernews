import React from 'react';

class Story extends React.Component{

  state = {};
  render(){
      return (
        <a href={this.props.story.url}>
        <div>
            <h2>Title: {this.props.story.title}</h2>
            <p>by: {this.props.story.author}</p>
            <p>on: {this.props.story.created_at}</p>
        </div>
      </a>
    );
  }
}

export default Story;
