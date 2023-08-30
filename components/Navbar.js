import Link from 'next/link';
import { useContext } from 'react';
import { UserContext } from '../lib/context';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';

export default function Navbar() {
  const {user, username} = useContext(UserContext)

  return (
    <nav style={{"padding-left": "40px", "padding-right": "40px"}}>
      <ul>
        <li><strong>LOGO</strong></li>
      </ul>
      <ul className="content: center">
        <li><Link href="/" class="secondary"><p class="secondary">Home</p></Link></li>
        <li><Link href="contact" class="secondary"><p class="secondary">Contact</p></Link></li>
        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <p class="">Write Posts</p>
              </Link>
            </li>
            <li>
              <Link href="/enter">
                <p class="" onClick={() => auth.signOut()}>Sing out</p>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed in */}
        {!username && (
          <li>
            <Link href="/enter">
            <p class="">Log In</p>
            </Link>
          </li>
        )}
      </ul>
    </nav>

  )
}