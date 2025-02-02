import fabri from '/fabri.png';
import './CSS/aboutme.css';

export default function About() {
    return (
        <div className="aboutme">
            <h1>About Me</h1>
            <img src={fabri} alt="Fabricio Laboriel" />
            <p>
                Hello! My name is Fabricio Laboriel. I migrated to the United States in 2013 after being accepted into LDS Business College.
                I graduated with a degree in Business and a minor in Accounting, then pursued a degree in Construction Management.
                Currently, I am on my journey to becoming a full-stack developer.
            </p>
        </div>
    );
}
