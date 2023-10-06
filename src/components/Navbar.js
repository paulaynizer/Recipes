import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Navbar.module.css';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="/"> Random <span>RECIPES</span>
          </a>
        </div>
        <div className={styles.menu}>
        <button className={styles.menuIcon} onClick={handleShowNavbar}>
          <img src="./images/iconMenu.png" alt="menu" />
        </button>
        <div className={showNavbar ? styles.navElementsActive : styles.navElements}>
          <ul className={styles.list}>
            <li>
              <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/byLetter" className={({isActive}) => (isActive ? styles.active : "")}>Letter</NavLink>
            </li>
            <li>
              <NavLink to="/byIngredient" className={({isActive}) => (isActive ? styles.active : "")}>Ingredient</NavLink>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar