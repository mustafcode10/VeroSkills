import React from 'react'
import { Link } from 'react-router-dom'

function Layout() {
  return (
    <>
    <nav>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={'product'}>Product</Link>
            </li>
            <li>
                <Link to={':category'}>Category</Link>
            </li>
        </ul>

    </nav>
    </>
  )
}

export default Layout