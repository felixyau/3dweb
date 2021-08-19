import { Scene, PerspectiveCamera,WebGLRenderer, Color, AmbientLight, DirectionalLight, Light, BufferAttribute, BufferGeometry, LineBasicMaterial, Line, AnimationMixer } from "three";
import { drawShape } from "./drawShape";

import { load3dModel } from "./load3dModel";

import "./style.css";



const init = () => {
  const camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    1,
    500
  );
  camera.position.set( 0, 0, 10 );
  
  const scene = new Scene();
  scene.background = new Color(0xdddddd);

  const hlight = new AmbientLight(0xffffff,100);
  scene.add(hlight);
  
  const renderer = new WebGLRenderer({antialias:true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  
  // readZip("../matilda.zip", scene);
  
  const gltf = load3dModel(scene);

  let update = () => {};
  //drawShape(scene);
  if (!!gltf) {
    const mixer = new AnimationMixer( gltf.scene ); //turn an object to animated

    update = () => {
      mixer.update( gltf.animations[0].duration );
    }
  
    const clips = gltf.animations;
  
    clips.forEach( function ( clip ) {
      console.log(clip);
      mixer.clipAction( clip ).play();
    } );
  }

  function animate() {
    requestAnimationFrame(animate);
    update();
    renderer.render( scene, camera );
  }
  
  animate();
}

init();



