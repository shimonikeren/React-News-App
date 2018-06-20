import React from "react";
import API from "../../utils/API";

class Home extends React.Component {
    state = {
        articles: []
    }

    callAPI(query, start, end){
        API.scrape(query, start, end)
        .then(articles =>{
            this.setState({articles})
        })
    }

    showContentByState(){
        // if we don't have articles show the form with the submit button
        // We don't have a form yet, so just show a hello and a button
        if (this.state.articles.length === 0){
            return (
                <div>
                <p>Hello</p>
                <button onClick={()=>this.callAPI("dogs")}>Search Articles</button>
                </div>
            )
        }
        else {
            //display articles
            return (
            <div>
                {this.state.articles}
            </div>
            )
        }
    }

    render() {
        return (
            {this.showContentByState()}
        )
    }
}

export default Home;