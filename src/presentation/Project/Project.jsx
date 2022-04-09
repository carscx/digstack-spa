import { PropTypes } from 'prop-types'
import { IMAGES_URL } from 'services/config'

function Project({ projectData }) {
  return (
    <div>
      {projectData?.map((project) => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <img src={`${IMAGES_URL}${project.image_path}`} alt={project.title} />
        </div>
      ))}
    </div>
  )
}

Project.propTypes = {
  projectData: PropTypes.oneOfType([PropTypes.object]).isRequired,
}

export default Project
