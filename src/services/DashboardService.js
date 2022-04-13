/* eslint-disable class-methods-use-this */
import axios from 'axios'
import API_URL from 'services/config'

class DashboardService {
  getLastItems = () => axios.get(`${API_URL}/dashboard`).then((response) => response.data)
}

export default DashboardService
