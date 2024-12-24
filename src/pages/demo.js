import  styles from '../styles/demo.module.css'
import { Link } from "react-router-dom";
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stage, PresentationControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import model from "../../src/resources/space.glb"

function Space(props) {
const {scene}  = useLoader(GLTFLoader, model )
return <primitive object={scene} {...props} />
}



export function Demo () {

    function Mouse() {
        const { mouse } = useThree();
    
        return useFrame(() => {
          console.log(mouse.x, mouse.y, mouse.z);
        });
      }

    return (
        <div className={styles.demo}>
            <div className={styles.main}>

                <nav className={styles.nav} >
                    <div id={styles.logo}>
                    <h1 id={styles.logoP1}>Lumiere</h1>
                    <h1 id={styles.logoP2}>Trading</h1>
                    </div>

                    <div className={styles.navItemList}>
                    <Link className={styles.nav_Item} to="/landing">Home</Link>
                    <Link  className={styles.nav_Item}to="/news">News</Link>
                    <Link  className={styles.nav_Item_last}to="/">Charts</Link>
                    </div>
                </nav>


                <div className={styles.content}>
                    <div className={styles.Left}>
                    <Canvas    gl={{ antialias: false }} camera={{ position: [0, 0, 1], fov: 3.5}} style={{"position": "relative"}}>
                    <Mouse />
                    <color attach="background" args={["black"]} />
                    <ambientLight intensity={1} />
                    <PresentationControls speed={1.5} zoom={5} global={true} snap={false} polar={[-1.0, Math.PI / 4]}>
                    <Stage environment={null}>
                    <Space scale={1} />
                    </Stage>
                    </PresentationControls>
                    </Canvas>
                  

                    <div className={styles.Copy}>
                        <h4>Request a Demo</h4>
                        <h2>See Farther than Your Screen</h2>
                        <p>Please tell us how to reach you, and
                            one of our Solutions Managers </p>
                        <p>will help <span className={styles.copyPLast}>you get started.</span></p>
                    </div>
                    </div>

                    <div className={styles.Right}> 
                        <div className={styles.Form}>
                            <form className={styles.FormInputs}>
                                <div className={styles.FormWork}>
                                <label> 
                                    <input type='email' placeholder=' Work Email'></input>
                                </label>

                                <label>
                                <input type='text' placeholder=' Role'></input>

                                </label>
                                </div>

                                <div className={styles.FormName}>
                                <label>
                                <input type='text' placeholder=' First Name'></input>
                                </label>

                                <label>
                                <input type='text' id={styles.MI}placeholder='MI'></input>
                                </label>

                                <label>
                                <input type='text' placeholder=' Last Name'></input>
                                </label>
                                </div>


                                <div>
                                <label>
                                    <input type='number' placeholder=' Phone Number'></input>
                                </label>

                                <label>

                                </label>
                                </div>

                                <div id={styles.FormFinal}>
                                    <p className={styles.FormFInalP}>By submitting this information, I agree to the privacy policy and to learn 
                                        more about products and services from  Lumiere Trading.</p>
                                    <button className={styles.formSubmit} type='submit' name='submit'>Submit</button>

                                </div>

                                

                                
                               

                            </form>
                        </div>
                    </div>              
                 </div>

             </div>
        </div>
    )
}