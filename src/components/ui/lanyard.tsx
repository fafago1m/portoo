/* eslint-disable react/no-unknown-property */
'use client';
import { useEffect, useRef, useState, ReactNode, Component, Suspense } from 'react';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RigidBodyProps,
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';



const cardGLB = "/lanyard/card.glb";
const lanyardPNG = "/lanyard/lanyard.png";

extend({ MeshLineGeometry, MeshLineMaterial });

class ErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch(error: Error) { console.error("Lanyard 3D Error:", error); }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export function Lanyard({
  position = [0, 0, 30] as [number, number, number],
  gravity = [0, -40, 0] as [number, number, number],
  fov = 20,
  transparent = true,
}) {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-visible h-full w-full">
      <ErrorBoundary fallback={<div className="hidden" />}>
        <Canvas
          camera={{ position, fov }}
          gl={{ alpha: transparent, antialias: true, powerPreference: "high-performance" }}
          onCreated={({ gl }) =>
            gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)
          }
          className="pointer-events-auto"
        >
          <ambientLight intensity={Math.PI} />

          <Suspense fallback={null}>
            <Physics gravity={gravity} timeStep={1 / 60}>
              <Band />
            </Physics>
            <Environment blur={0.75}>
              <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
              <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
              <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
              <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
            </Environment>
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}

function Band({ maxSpeed = 50, minSpeed = 20 }) {
  const band = useRef<any>(null);
  const fixed = useRef<any>(null);
  const j1 = useRef<any>(null);
  const j2 = useRef<any>(null);
  const j3 = useRef<any>(null);
  const card = useRef<any>(null);

  const vec = new THREE.Vector3();
  const ang = new THREE.Vector3();
  const rot = new THREE.Vector3();
  const dir = new THREE.Vector3();

  const segmentProps: any = {
    type: "dynamic" as RigidBodyProps["type"],
    canSleep: true,
    colliders: false,
    angularDamping: 6,
    linearDamping: 6,
    restitution: 0,
    sleepThreshold: 0.5,
  };

  const { nodes, materials } = useGLTF(cardGLB) as any;
  const texture = useTexture(lanyardPNG);
  const { width, height } = useThree((state) => state.size);
  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  );
  const [dragged, drag] = useState<false | THREE.Vector3>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.45, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? "grabbing" : "grab";
      return () => {
        document.body.style.cursor = "auto";
      };
    }
  }, [hovered, dragged]);

  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
  }, []);

  useFrame((state, delta) => {
    // Scroll interaction logic
    const currentScrollY = window.scrollY;
    if (card.current && !dragged) {
      const scrollDelta = Math.min(Math.max(currentScrollY - lastScrollY.current, -20), 20);
      if (Math.abs(scrollDelta) > 0) {
        [card, j1, j2, j3].forEach((ref) => ref.current?.wakeUp());
        card.current.applyImpulse({
          x: scrollDelta * 0.002,
          y: -Math.abs(scrollDelta) * 0.001,
          z: scrollDelta * 0.002
        }, true);
      }
    }
    lastScrollY.current = currentScrollY;

    if (dragged && typeof dragged !== "boolean" && card.current) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }

    if (fixed.current && j1.current && j2.current && j3.current && band.current) {
      const p0 = j3.current.translation();
      const p1 = j2.current.translation();
      const p2 = j1.current.translation();
      const p3 = fixed.current.translation();

      // Final validation before updating geometry
      // Check for valid positions and enough distance to avoid MeshLine errors
      if (p0 && p1 && p2 && p3 && !isNaN(p0.x) && !isNaN(p1.x) && !isNaN(p2.x) && !isNaN(p3.x)) {
        curve.points[0].copy(p0);
        curve.points[1].copy(p1);
        curve.points[2].copy(p2);
        curve.points[3].copy(p3);

        // Optimize: reduced points for smoother performance
        const points = curve.getPoints(20);
        band.current.geometry.setPoints(points);
      }

      const cAng = card.current.angvel();
      const cRot = card.current.rotation();
      if (!isNaN(cAng.x) && !isNaN(cRot.y)) {
        card.current.setAngvel({ x: cAng.x, y: cAng.y - cRot.y * 0.25, z: cAng.z });
      }
    }
  });

  useEffect(() => {
    if (texture) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    }
  }, [texture]);

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody
          ref={fixed}
          {...segmentProps}
          type={"fixed" as RigidBodyProps["type"]}
        />
        <RigidBody
          position={[0, 0, 0]}
          ref={j1}
          {...segmentProps}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[0, 0, 0]}
          ref={j2}
          {...segmentProps}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[0, 0, 0]}
          ref={j3}
          {...segmentProps}
        >
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[0, 0, 0]}
          ref={card}
          {...segmentProps}
          type={
            dragged
              ? ("kinematicPosition" as RigidBodyProps["type"])
              : ("dynamic" as RigidBodyProps["type"])
          }
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e: any) => {
              e.target.releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e: any) => {
              e.target.setPointerCapture(e.pointerId);
              const trans = card.current.translation();
              if (!isNaN(trans.x)) {
                drag(new THREE.Vector3().copy(e.point).sub(vec.copy(trans)));
              }
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                map={materials.base.map}
                map-anisotropy={16}
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.9}
                metalness={0.8}
              />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="white"
          depthTest={true}
          depthWrite={true}
          resolution={[width, height]}
          useMap={!!texture}
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
          transparent
          opacity={0.8}
        />
      </mesh>
    </>
  );
}
