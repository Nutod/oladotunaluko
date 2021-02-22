import Logo from './Logo'

export default function Footer() {
  return (
    <footer>
      <div className="container footer">
        <Logo />
        <nav>
          <ul>
            <li>
              <a href="Blog">Blog</a>
            </li>
            <li>
              <a href="About">About</a>
            </li>
            <li>
              <a href="Contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}
