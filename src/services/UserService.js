/* eslint-disable class-methods-use-this */
import axios from 'axios'
import API_URL from 'services/config'

class UserService {
  getUsers = () => axios.get(`${API_URL}/users`).then((response) => response.data)
}

export default UserService
