import axios from "axios";



export default {
    scrape
};


function scrape (query, start, end) {
    const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    const apiKey = process.env.NYT_APIKEY; 
    const query = `${url}?api-key=${apiKey}`
    
    // if we have a start
    // add '&start=${start}'
    

}


API SITE: https://developer.nytimes.com/article_search_v2.json#/Console/GET/articlesearch.json
//URL: https://api.nytimes.com/svc/search/v2/articlesearch.json
//API Key: 3bbd011357084e80b8e432c5eb596445
//q: searchTerm
//startYear: YEAR0101
//endYear: year1231

