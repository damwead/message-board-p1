import Link from "next/link"

export default function Navbar() {
  return (
    <nav style={{"padding-left": "40px", "padding-right": "40px"}}>
      <ul>
        <li><strong>LOGO</strong></li>
      </ul>
      <ul className="content: center">
        <li><Link href="/"><p className="">Home</p></Link></li>
        <li><Link href="contact"><p className="">Contact</p></Link></li>
        <li><p className="u secondary">Log In</p></li>
      </ul>
    </nav>

  )
}