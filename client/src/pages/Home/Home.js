import React from "react";
import API from "../../utils/API";
import axios from "axios";
import "./Home.css";

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
        if (this.state.articles.length === 0){
            return (
                <div>
                <p>FORM WILL BE HERE</p>
                <button onClick={()=>this.callAPI("america")}>Search Articles</button>
                </div>
            )
        }
        else {
            const articles = this.state.articles.map((article, index) => {
                const body={
                    title: article.snippet,
                    datePub: article.pub_date,
                    url: article.web_url
                }
                if (article.byline && article.byline.original){
                    body.author = article.byline.original;
                }
                // console.log(body);       
                return (
                <div className="container" key={index}>
                    <div className="card articleCard">
                        <h5 className="card-header">{body.title}</h5>
                        <div className="card-body">
                            {/* <h5 className="card-title">{body.datePub}</h5> */}
                            <p className="card-text">{body.author}
                            </p>
                            <a className="btn btn-secondary btnStyle" href={body.url} role="button" target="blank">Go to Article</a>
                            <button  className="btn btn-secondary btnStyle" onClick={()=>this.saveArticle(body)}>Save Article</button>
                         </div>
                    </div>
                </div>
                )  
                
            })
            
        return (
                <div className="artTitle">Top Articles {articles}</div>
            )
        }
    }

    saveArticle(body) {
        axios.post("/api/article/", body)
        .then(status => console.log(status))
        .catch(() => console.log("failed to send req"));
        alert("saved");
        //redirect to saved componenet 
        

    }



    
    render() {
        return this.showContentByState();
    }
}

export default Home;