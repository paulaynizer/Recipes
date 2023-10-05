import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";
const Navbar = () => {
  
  return (
    <nav className={styles.Navbar}>
        <NavLink to ="/" className={styles.brand}>
            random <span>Recipes</span>
        </NavLink>
        <div >
          <ul className={styles.links_list}>
              <li>
                  <NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}
                  >Home
                  </NavLink>
                  <NavLink to="/byLetter" className={({isActive}) => (isActive ? styles.active : "")}
                  >Letra
                  </NavLink>
                  <NavLink to="/byIngredient" className={({isActive}) => (isActive ? styles.active : "")}
                  >Ingrediente
                  </NavLink>
              </li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar