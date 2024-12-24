import styles from '../src/styles/App.module.css'
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import { FaRegUser } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { RiHome3Line } from "react-icons/ri";
import { ImNewspaper } from "react-icons/im";
import { RiStockFill } from "react-icons/ri";






function App() {
  return (
    <div className={styles.App}>


      <div className={styles.account}>
            <div id={styles.logo}>
                          <h1 id={styles.logoP1}>Lumiere</h1>
                          <h1 id={styles.logoP2}>Trading</h1>
            </div>


            <div className={styles.accountNav}>
                <Link className={styles.button} to="/"> 
                  <button  className={styles.button} id={styles.signIn}><FaRegUser /></button>
              </Link>

              <Link to="/demo">
                  <button  className={styles.button} id={styles.copy_Req_button}>Request a Demo</button>
              </Link>      
            </div>


        <div className={styles.navItemListNews}>
          <Link className={styles.nav_Item} to="/"><RiHome3Line />
          </Link>
          <Link  className={styles.nav_Item} id={styles.News}><ImNewspaper />
          </Link>
          <Link  className={styles.nav_Item}to="/demo"><RiStockFill />
          </Link>

        </div>
      </div>

    
      <div className={styles.mainContent}></div>
      <div className={styles.priceAction}></div>
    </div>
  );
}

export default App;
