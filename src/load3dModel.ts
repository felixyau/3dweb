import { AnimationClip, AnimationMixer, AnimationObjectGroup, Object3D, Scene } from "three";
import { GLTF, GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export const load3dModel = (scene:Scene):(GLTF | null) => {
  const loader = new GLTFLoader();
  let object = null;
  loader.load(
    //"../kindred_nobg.glb",
    "../scene.gltf",
    function (gltf) {
      // gltf.scene.scale.set(1,1,2);
      console.log("scene:", gltf.scene);

      object = gltf;
      scene.add(gltf.scene);

    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    function (error) {
      console.error(error);
    }
  );
  return object;

};
