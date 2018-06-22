import React, { Component } from "react";
import API from "../../utils/API";
import "./Form.css";

class Form extends Component {
  state = {
    articles: [],
    searchTerm: "",
    startYear: "",
    endYear: ""
  };

  handleSearchKeyPress = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleStartYrKeyPress = event => {
    this.setState({
      startYear: event.target.value
    })
  }

  handleEndYrKeyPress = event => {
    this.setState({
      endYear: event.target.value
    })
  }

  callAPI(query, start, end){
    API.scrape(query, start, end)
    .then(articles =>{
        this.setState({
            articles: articles.data
        },
        () => console.log(this.state.articles))
    })
}

 

  render() {
    return (
      <div className="container">
      <form className="formStyle">
        <div className="row">
      
        <input
          className="inputStyle"
          type="text"
          placeholder="Search Term(Required)"
          onKeyPress={(event)=>this.handleSearchKeyPress(event)}
        /> 
        
        <input
          className="inputStyle"
          type="text"
          placeholder="Start Year (Optional)"
          onKeyPress={(event)=>this.handleStartYrKeyPress(event)}
        />
       
          <input
          className="inputStyle"
          type="text"
          placeholder="End Year (Optional)"
          onKeyPress={(event)=>this.handleEndYrKeyPress(event)}
        />
       
        <button className="btn btn-secondary subtmitBtn" onClick={()=>this.callAPI("cars")}>Submit</button>
        </div>
       
      </form>
      
      </div>
    );
  }
}

export default Form;
