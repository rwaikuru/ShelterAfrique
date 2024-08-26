export default function Geometry() {
    return (
      <group position={[0, -0.9, -3]}>
        <mesh receiveShadow castShadow rotation-x={-Math.PI / 2} scale={[4, 20, 0.2]}>
          <boxBufferGeometry />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <mesh receiveShadow castShadow rotation-x={-Math.PI / 2} position-y={1} scale={[4.2, 0.2, 4]}>
          <boxBufferGeometry />
          <meshStandardMaterial color="#e4be00" />
        </mesh>
      </group>
    );
  }
  