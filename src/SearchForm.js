import React from 'react';

class SearchForm extends React.Component {
  
  state = {
    formData: {
      searchTerm: "",
    }
  };
  
  handleChange = (evt) => {
    const { name, value } = evt.target;
    // Note: don't need this since only one input
    this.setState({
      formData:
      {
        [name]: value,
      }
    });
  }
  
  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.handleSearch(this.state.formData.searchTerm);
    this.setState({
      formData: {
        searchTerm: "",
      }
    });
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="searchTerm"
            value={this.state.formData.searchTerm}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
