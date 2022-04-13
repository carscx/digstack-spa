/* eslint-disable class-methods-use-this */
import axios from 'axios'
import API_URL from 'services/config'

class PostService {
  getPosts = () => axios.get(`${API_URL}/posts`).then((response) => response.data)
}

export default PostService
