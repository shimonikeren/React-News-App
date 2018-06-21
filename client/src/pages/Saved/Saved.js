import React from "react";
import API from "../../utils/API";

class Saved extends React.Component{
    state = {
        articles: []
    }

    componentDidMount() {
        this.loadArticles();
      }
      
    //   loadArticles = () => {
    //     API.getSavedArticles()
    //       .then(res => this.setState({ articles: res.data }))
    //       .catch(err => console.log(err));
    //       console.log(res);
    //   };

    loadArticles = () => {
        API.getSavedArticles()
          .then(res =>
            this.setState({ articles: res.data})
          )
          .catch(err => console.log(err));
      };


    render(){
        return (
            <div> something 
                {/* {console.log(articles)} */}
            </div>
        )
    }
}




export default Saved;