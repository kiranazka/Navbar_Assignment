import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/About">About</Link>
      <Link href="/Skill">Skill</Link>
      <Link href="/Contect">Contect</Link>
    </div>
  )
}

export default Header;
