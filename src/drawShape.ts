import {
  BufferGeometry,
  BufferAttribute,
  LineBasicMaterial,
  Line,
  Scene,
} from "three";

export const drawShape = (scene: Scene) => {
  const MAX_POINTS = 500;
  // geometry
  const geometry = new BufferGeometry();

  // attributes
  const positions = new Float32Array(MAX_POINTS * 3); // 3 vertices per point
  geometry.setAttribute("position", new BufferAttribute(positions, 3));

  // draw range
  const drawCount = 2; // draw the first 2 points, only
  geometry.setDrawRange(0, drawCount);

  // material
  const material = new LineBasicMaterial({ color: 0xff0000 });

  // line
  const line = new Line(geometry, material);
  scene.add(line);

  const position = line.geometry.attributes.position.array;

  let x, y, z, index;
  x = y = z = index = 0;
  
  for ( let i = 0, l = MAX_POINTS; i < l; i ++ ) {
  
      positions[ index ++ ] = x;
      positions[ index ++ ] = y;
      positions[ index ++ ] = z;
  
      x += ( Math.random() - 0.5 ) * 30;
      y += ( Math.random() - 0.5 ) * 30;
      z += ( Math.random() - 0.5 ) * 30;
  
  }
};
