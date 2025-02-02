import projects from '../utils/data';
import PortfolioCard from '../Components/portfolioCard';
import '../pages/CSS/portfolio.css';

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <h2 className="portfolio-title">My Work</h2>
            <div className="portfolio-grid">
                {projects.map((project) => (
                    <PortfolioCard 
                        key={project.id}
                        title={project.title}
                        previewImage={project.previewImage}
                        githubLink={project.gitHubRepo}
                        deployedLink={project.projectURL}
                    />
                ))}
            </div>
        </div>
    );
}
