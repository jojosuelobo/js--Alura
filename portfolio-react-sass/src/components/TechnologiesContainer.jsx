import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, desc: "" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, desc: "" },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, desc: "" },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, desc: "" },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, desc: "" },
  { id: "react", name: "React", icon: <DiReact />, desc: "" },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;