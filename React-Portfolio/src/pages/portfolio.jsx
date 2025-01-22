// Imports array of objects (which are the portfolio of projects)
import projects from '../../utils/projects';
import Card from './card';

// Function calls child component Card and passes Projects props to it
export default function Portfolio() {
    return (
        <div className='container'>
            <h2>Here's a Sample of my Work</h2>
            <ul className="list-group">
                {projects.map((project) => (
                    <li className="list-group-item"
                        key={project.id}>
                        <Card 
                            title={project.title}
                            previewImage={project.previewImage}
                            altTitle={project.altTitle}
                            projectURL={project.projectURL}
                            gitHubRepo={project.gitHubRepo}
                            projectDescription={project.projectDescription}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}