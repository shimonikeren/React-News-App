import React from "react";
import API from "../../utils/API";
import axios from "axios";
import "./Home.css";
import Form from "../Form/Form";

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
            },
            () => console.log(this.state))
        })
    }

    showContentByState(){
        if (this.state.articles.length === 0){
            return (
                <div>

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
                else{body.author = "No Listed Author"}
                // console.log(body); 
                if (article.pub_date === undefined)  {
                    body.datePub = "No Date Provided"
                }  
                if (article.snippet === undefined || article.snippet === "")  {
                    body.title = "No Title Provided"
                } 

                return (
                <div className="container" key={index}>
                    <div className="card articleCard">
                        <h5 className="card-header">{body.title}</h5>
                        <div className="card-body">
                            <p className="card-text">{body.author}</p>
                            <p className="card-text smaller">{body.datePub}</p>
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
        return (
            <div>
            {/* <p>FORM WILL BE HERE</p> */}
            <Form />
          
            <button onClick={()=>this.callAPI("cars")}>Search Articles</button>
            {this.showContentByState()}
            
            
            </div>)
    }
}

export default Home;