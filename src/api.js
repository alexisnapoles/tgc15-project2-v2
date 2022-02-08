import axios from 'axios';
export default axios.create({
    baseURI: "https://silid-aklatan-api.herokuapp.com/",
    headers: {
        "Content-type": "application/json"
    }
})