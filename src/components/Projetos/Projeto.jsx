import "./Projeto.css";
function Projeto() {
  const project = [
    {
      href: "#",
      text: "projeto1",
      src: "https://mlpro.com.br/media/brand/blog/original/quais-as-principais-funcoes-do-microsoft-project-online/01-quais-as-principais-funcoes-do-microsoft-project-online-capa-1-webp.webp",
      alt: "projeto1",
    },
    {
      href: "#",
      text: "projeto2",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQVFLdxuILs0bHbHNylwPQDu3H557brNiTJg7hnS2ng&s=10",
      alt: "projeto2",
    },
    {
      href: "#",
      text: "projeto3",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDZzEpKJadq-p3I633rl3ly_JL1s1HZvQ05cJHXFPFLLIhycM4EhHxrMDm&s=10",
      alt: "projeto3",
    },
    {
      href: "#",
      text: "projeto4",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnKPfd-FWO2_ZvnxtFLIaotgC576y6118YEe_qyBIb6WLa4PJbqcKyIsM&s=10",
      alt: "projeto4",
    },
  ];

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
