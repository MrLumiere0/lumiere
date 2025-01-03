import styles from '../src/styles/App.module.css'
import { Fundamentals } from './components/fundamentals';
import { Charts } from './components/charts';
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import { RiHome3Line } from "react-icons/ri";
import { ImNewspaper } from "react-icons/im";
import { RiStockFill } from "react-icons/ri";
import { NewsCat } from './components/newsCat';
import categories from '../src/resources/newsSeed';



function App() {

  const [newSearch, setNewSearch] = useState(false)
  const [keyword, setkeyword] = useState('');
  const [selNewsCat, setSelNewsCat] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [headlineView, setHeadlineVIew] = useState(true);
  const [selectValue, setSelectValue] = useState("Headlines");

  
  

  function handleKeyword (event)  {
    setkeyword(event.target.value);
    // console.log(keyword)
  };


  function handleNewsCat  (event) {
    setSelNewsCat(event.target.value);
    // console.log(selNewsCat)

  };

  function handleSortBy  (event)  {
    setSortBy(event.target.value);
    // console.log(sortBy)

  };
  function handleKeyPress (event) {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  }

  function handleSubmit(event) {
    console.log(event)
  }

  function handleClick() {
    setNewSearch(false)
  }


  useEffect(() => {
 
    console.log("keyword:", keyword)
    console.log("NewsCat:", selNewsCat)
    console.log("sort:", sortBy)

  },[keyword, selNewsCat,sortBy,headlineView, setHeadlineVIew])

  function handleVIew (event){
    console.log(event.target.value)
    console.log(headlineView)

    if (event.target.value === "Economic"){
      setHeadlineVIew(false)
      setSelectValue("Economic Releases")
    }

     if (event.target.value === "Headlines"){
      setHeadlineVIew(true)
      setSelectValue("Headlines")
    }

    else{
      console.log("Could not capture value")
    }
  }


  return (
    <div className={styles.App}>


      <div className={styles.account}>
            <div id={styles.logo}>
            <Link className={styles.LogoLink} to="/"> <h1 id={styles.logoP1}>Lumiere</h1>
                          <h1 id={styles.logoP2}>Trading</h1>
                          </Link>
            </div>


            <div className={styles.accountNav}>
              <h3>Already  a member?</h3>
                <Link to="/signOn"> 
                  <button  className={styles.button} id={styles.signIn}><FaRegUser /></button>
              </Link>

              {/* <Link to="/demo">
                  <button  className={styles.button} id={styles.copy_Req_button}>Request a Demo</button>
              </Link>       */}
            </div>


        {/* <div className={styles.navItemListNews}>
          <Link className={styles.nav_Item} to="/"><RiHome3Line /><span className={styles.nav_Item_span}>Home</span>
          </Link>
          <Link  className={styles.nav_Item}  to="/news" id={styles.News}><ImNewspaper /> <span className={styles.nav_Item_span_News}>News</span>
          </Link>
          <Link  className={styles.nav_Item}to="/charts"><RiStockFill /> <span className={styles.nav_Item_span}>Charts</span>
          </Link>
        </div> */}
      </div>

    
      <div className={styles.Main}> 
        
        <div className={styles.viewChanger}>
                                   <select value = {headlineView} onChange={(event) => handleVIew(event)} id={styles.viewsSwitch}  name="">
                                            <option value="">{selectValue}</option>
                                            <option value="Headlines">Headlines</option>
                                            <option value="Economic">Economic Releases</option>
                                            {/* <option value="Headlines">Headlines</option> */}
                                     </select>
                             </div>

                <div className={styles.mainContent}> 
                {headlineView ?
                  <Fundamentals keyword={keyword} handleKeyword = {handleKeyword} handleNewsCat={handleNewsCat} selNewsCat={selNewsCat}
                  handleSortBy={handleSortBy} sortBy={sortBy} newSearch={newSearch} categories={categories} NewsCat={NewsCat} setNewSearch={setNewSearch}/>
                  : <Charts headlineView ={headlineView} />}
                  </div>
      </div>

    </div>
  );
}

export default App;
