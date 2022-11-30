import React,{useState} from "react";
import styles from "./NavBar.module.css";
import {
  AiOutlineUser,
 
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';

const NavBar = () => {
  const [nav,setNav] = useState(false)

  return (
    <header className={styles.navbar}>
      <a href='/'>
      <button className={styles.title}>MiningEvent.Info</button>
      </a>
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]} >
          <li>
            <a href='/#'>Events</a>
          </li>
          <li>
            <a href='/#'>Create Events</a>
          </li>
          <li>
            <a href='/login'>Log in</a>
          </li>
          <li>
            <a href='/register'>Register</a>
          </li>
          
          <li>
            <AiOutlineUser size={25} style={{ marginTop: '6px' }} />
          </li>
        </ul>
      </nav>
      <div onClick={()=> setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        
      </div>
    </header>
  );}

export default NavBar;
