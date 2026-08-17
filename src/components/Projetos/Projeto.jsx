import "./Projeto.css";
function Projeto(props) {
  const project = props.links

  return (
    <section className="section-project">
      <ul className="project-list">
        {project.map(({ href, text, src, alt } = dados) => {
          return (
            <li>
              <a href={href}> {text} </a>
              <img src={src} alt={alt} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default Projeto;
