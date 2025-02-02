import PropTypes from "prop-types";
import { AiFillGithub } from "react-icons/ai";
import '../Components/projectcard.css'

function PortfolioCard({title, previewImage, githubLink, deployedLink}) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={previewImage} alt={title} className="project-image"/>
                <div className="title">
                    {deployedLink ? (
                        <a href={deployedLink} target="_blank" rel="noopener noreferer" className="project-link">
                            <h3>{title}</h3>
                        </a>
                    ) : (
                        <h2 className="project-title">{title}</h2>
                    )}
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-icon">
                        <AiFillGithub size="30"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

PortfolioCard.propTypes = {
    title: PropTypes.string.isRequired,
    previewImage: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    deployedLink: PropTypes.string,
};

export default PortfolioCard;