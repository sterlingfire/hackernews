import React from "react";
import Story from "./Story";
import SearchForm from "./SearchForm";
import axios from "axios";

/* Storylist Component
 * Props: none
 * State:
 * - stories (array of stories from hackernews)
 * - searchTerm (string to be searched)
 */
class StoryList extends React.Component{
  static defaultProps = { base_url : "https://hn.algolia.com/api/v1/search"};

  state = {
    stories:[],
    searchTerm:"react",
  };

  async componentDidMount() {
    console.log("component mount");
    console.log("this:", this);
    const res = await axios.get(`${this.props.base_url}?query=${this.state.searchTerm}`);
    this.setState({stories:res.hits});
  }

  async componentDidUpdate() {
    console.log("component update");
    console.log("this.state:", this.state);
    const res = await axios.get(`${this.props.base_url}?query=${this.state.searchTerm}`);
    this.setState({stories:res.hits});
  }
  render() {
    return (
      <div>
        <SearchForm />
        { this.state.stories && this.state.stories.map(story => <Story key={story.objectID} />)}
      </div>
    );
  }

}

export default StoryList;
