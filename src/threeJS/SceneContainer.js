import React from 'react'
import { Canvas } from 'react-three-fiber'
import Box from './Box'

const SceneContainer = ({
  boxRotationSpeed,
  incrementClickCounter,
  boxWidth,
}) => (
  <Canvas style={{
    height: '200px',
    width: '400px',
    alignSelf: 'center',
  }}
  >
    <Box
      rotationSpeed={boxRotationSpeed}
      onClick={incrementClickCounter}
      width={boxWidth}
    />
  </Canvas>
);

export default SceneContainer;
