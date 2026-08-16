import "./Header.css"
function Header() {
  const links = [
    {text: "Home", href: "#" },
    {text: "Contato", href: "#" },   
    {text: "Projeto", href: "#" } 
  ]
  return (
    <header className="header">
      <h1>@WellingDev</h1>
      <nav>
        <ul>
          {
            links.map(({text,href} = link) => {
              return <li><a href={href}>{text}</a></li>
            })
          }
        </ul>
      </nav>
    </header>
  )
}
export default Header