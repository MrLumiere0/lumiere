import styles from '../styles/signIn.module.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';



export function  SignOn(){
     const [errors, setErrors] = useState({});
     const [email, setEmail] = useState("");
     const [password, setPass] = useState("");



    useEffect(() => {
               
                console.log("email:", email)
                console.log("password:", password)
                console.log("errors:", errors)

              },[email,password, errors])



    return (
        <div className={styles.SignOn}>
            <div className={styles.main}>

            <nav className={styles.nav} >
                    <div id={styles.logo}>
                    <h1 id={styles.logoP1}>Lumiere</h1>
                    <h1 id={styles.logoP2}>Trading</h1>
                    </div>

                    <div className={styles.navItemList}>
                    <Link className={styles.nav_Item} to="/">Home</Link>
                    <Link  className={styles.nav_Item}to="/news">Fundamentals</Link>
                    <Link  className={styles.nav_Item_last}to="/demo">Charts</Link>
                    </div>
                </nav>
                    <div className={styles.content}>
                            <div className={styles.Left}>
                            <h3> Welcome Back</h3>
                            </div>

                            <div className={styles.Right}> 
                            <form className={styles.FormInputs} onSubmit={(event) =>userSignOn(event)}>
                                <div id={styles.FormUser}>
                                        <label> 
                                            <input  id={styles.emailInput} onChange={(e) => {setEmail(e.target.value)}}
                                            autoFocus type='email'
                                            placeholder='  Email'></input>
                                        </label>
                                        {errors.email && <span>{errors.email}</span>}       

                                        
                                        <label>
                                        <input type='text' onChange={(e) => {setPass(e.target.value)}}
                                        placeholder=' Password'></input>
                                        </label>
                                        {errors.password && <span>{errors.password}</span>}
                                        <button className={styles.bttnSignIn} type='submit' name='submit'>Submit</button>


                                </div> 
                                </form>
                        </div>
                    </div>                                  
            </div>
        </div>



    )
}