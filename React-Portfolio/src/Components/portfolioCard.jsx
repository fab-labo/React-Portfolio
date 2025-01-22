import PropTypes from "prop-types";
import { AiFillGithub } from "react-icons/ai";

function PortfolioCard({title, image, githubLink, deployedLink}) {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={image} alt={title} className="project-image"/>
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
    image: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    deployedLink: PropTypes.string.isRequired,
};

export default PortfolioCard;