import React, { useRef } from 'react';
import { useRender, useUpdate } from 'react-three-fiber';
import { BoxGeometry } from 'three';

const Box = ({
  rotationSpeed,
  onClick,
  width,
}) => {
  const boxRef = useRef();

  useUpdate(geometry => {
    geometry.scale.x = width / 10;
  }, [width], boxRef);

  useRender(
    () => {
      boxRef.current.rotation.y += rotationSpeed / 100;
    },
    false,
    [rotationSpeed]
  );

  return (
    <mesh
      geometry={new BoxGeometry(width, 3, 3)}
      ref={boxRef}
      onClick={onClick}
    >
      <meshBasicMaterial attach="material" color="#44f" />
    </mesh>
  );
};

export default Box;
