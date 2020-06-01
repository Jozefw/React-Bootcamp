import axios from "axios";

const KEY = 'AIzaSyBjjEmTgcO3N884cJD29xjlGmPzzGz2qE4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: `${KEY}`
  }
})