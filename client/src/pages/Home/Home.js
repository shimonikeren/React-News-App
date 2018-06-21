import React from "react";
import API from "../../utils/API";
import axios from "axios";3

class Home extends React.Component {
    state = {
        articles: []
    }

    callAPI(query, start, end){
        API.scrape(query, start, end)
        .then(articles =>{
            console.log(articles);
            this.setState({
                articles: articles.data
            })
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
            const articles = this.state.articles.map((article, index) => {
                const body={
                    title: article.snippet,
                    datePub: article.pub_date
                }

                if (article.byline && article.byline.original){
                    body.author = article.byline.original;
                }

                return (
                <div key={index}> 
                    <h1>{article.snippet}</h1>
                    <button onClick={()=>this.saveArticle(body)}>Save</button>
                </div>
                )  
                
            })
            
            return (
                
                <div>{articles}</div>
            )
        }
    }

    saveArticle(body) {
        axios.post("/api/article/", body)
        .then(status => console.log(status))
        .catch(() => console.log("failed to send req"));
    }

    render() {
        return this.showContentByState();
    }
}

export default Home;