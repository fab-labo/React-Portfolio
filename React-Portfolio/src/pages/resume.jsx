import '../pages/CSS/resume.css';

export default function Resume() {
    const downloadResume = () => {
        const pdfUrl = "Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="resume">
            <h3>Skills & Technologies</h3>
            <div className="skills-list">
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>SQL</li>
                </ul>
            </div>
            <button onClick={downloadResume}>Download Resume</button>
        </div>
    );
}
