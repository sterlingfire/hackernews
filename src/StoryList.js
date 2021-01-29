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
    searchTerm:"",
    // prevSearchTerm:"",
  };

  async componentDidMount() {
    console.log("component mount");
    console.log("this:", this);
    const res = await axios.get(`${this.props.base_url}`);
    this.setState({stories:res.data.hits});
  }

  // Takes prevProps and prevStates and it's called with this
  async componentDidUpdate(prevProps, prevStates) {
    console.log("component update");
    console.log("this.state:", this.state);

    if(this.state.searchTerm !== prevStates.searchTerm){
      console.log("search ran");
      const res = await axios.get(`${this.props.base_url}?query=${this.state.searchTerm}`);
      this.setState({stories:res.data.hits});
    }
  }

  // One option: turn into async fn
  handleSearch = (newSearchTerm) => {
    this.setState({
      searchTerm: newSearchTerm,
    })
  };

  render() {
    return (
      <div>
        <SearchForm handleSearch={this.handleSearch}/>
        { this.state.stories && this.state.stories.map(story => <Story key={story.objectID} story={story}/>)}
      </div>
    );
  }

}

export default StoryList;
