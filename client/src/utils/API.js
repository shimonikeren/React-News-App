import axios from "axios";

function scrape (searchTerm, start, end) {
    const query = `/api/scrape/${searchTerm}${start !== undefined ? `/${start}`: ""}${end !== undefined ? `/${end}`: ""}`
    return axios.get(query);
}

export default {
    scrape
};