/* eslint-disable class-methods-use-this */
import axios from 'axios'
import API_URL from 'services/config'

class ProjectService {
  getProjects = () => axios.get(`${API_URL}/projects`).then((response) => response.data)
}

export default ProjectService
