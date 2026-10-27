import "./projects.scss";
import BrowserFrame from "../ui/browserFrame.jsx";

export function ProjectLinks({ links, name }) {
  return (
    <div className="projectLinks">
      {links.map((link) => (
        <a
          key={link.href}
          className="projectLink"
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          aria-label={`${link.label} — ${name}`}
        >
          {link.label}
          <span className="projectArrow" aria-hidden="true">
            {link.external ? "↗" : "→"}
          </span>
        </a>
      ))}
    </div>
  );
}

function ProjectRow({ project, reversed = false }) {
  return (
    <article className={reversed ? "projectRow reversed" : "projectRow"}>
      <div className="projectVisual">
        <BrowserFrame
          src={project.image.src}
          alt={project.image.alt}
          width={project.image.width}
          height={project.image.height}
          className="projectFrame"
        />
      </div>

      <div className="projectBody">
        <span
          className={
            project.kind === "client"
              ? "projectStatus projectStatus--client"
              : "projectStatus"
          }
        >
          {project.status}
        </span>

        <h3 className="projectName">{project.name}</h3>
        <p className="projectRole">{project.role}</p>
        <p className="projectText">{project.text}</p>

        <ul className="projectTags">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <ProjectLinks links={project.links} name={project.name} />
      </div>
    </article>
  );
}

export default ProjectRow;
