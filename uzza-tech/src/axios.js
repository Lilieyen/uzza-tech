import axios from "axios";

const instance = axios.create({
    //API cloud function URL

    baseURL: 'https://us-central1-uzza-tech.cloudfunctions.net.api'
        // 'http://localhost:5001/uzza-tech/us-central1f/api'
});

export default instance;