'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import DepthIndicator from './DepthIndicator';
import { projects } from '../data/projects';
import styles from './HyperspacePortfolio.module.css';

export default function HyperspacePortfolio() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [currentDepth, setCurrentDepth] = useState(0);
  const maxDepth = projects.length - 1;
  
  // Three.js refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points[]>([]);
  const tunnelRingsRef = useRef<THREE.Line[]>([]);
  const scrollMomentumRef = useRef(0);
  const targetCameraZRef = useRef(5);
  const animationIdRef = useRef<number>();
  const isHyperJump = useRef(false);
  const hyperjumpProgressRef = useRef(0);

  function createCircleTexture() {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, size, size);

    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    return texture;
  }

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    scene.fog = new THREE.Fog(0x000000, 5, 100);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      500
    );
    camera.position.z = 20;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    canvasRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create hyperspace tunnel
    lines(scene);
    circles(scene);

    // Handle window resize for camera
    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Handle scroll
    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();

      if (isHyperJump.current) return;

      // Trigger one hyperjump
      isHyperJump.current = true;
      hyperjumpProgressRef.current = 0;
    };
    
    window.addEventListener('wheel', handleScroll, { passive: false });

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      camera.position.z += (targetCameraZRef.current - camera.position.z) * 0.5;

      // Animate hyperspace lines
      tunnelRingsRef.current.forEach(line => {
        const positions = line.geometry.attributes.position.array as Float32Array;
        const speed = line.userData.speed + Math.abs(scrollMomentumRef.current) * 20;
        
        positions[2] += speed;
        positions[5] += speed;

        if (positions[2] > 10) {
          const newAngle = line.userData.angle + Math.random() * 0.5 - 0.25;
          const newRadius = line.userData.radius + Math.random() * 2 - 1;
          positions[0] = Math.cos(newAngle) * newRadius;
          positions[1] = Math.sin(newAngle) * newRadius;
          positions[2] = -100;
          positions[3] = positions[0];
          positions[4] = positions[1];
          positions[5] = -102;
        }

        const distance = Math.abs(positions[2] - camera.position.z);
        if (distance < 15) {
          (line.material as THREE.LineBasicMaterial).opacity = Math.min(0.9, (15 - distance) / 15);
        } else {
          (line.material as THREE.LineBasicMaterial).opacity = 0.3;
        }

        line.geometry.attributes.position.needsUpdate = true;
      });

      // Animate particles
      particlesRef.current.forEach(particleSystem => {
        const positions = particleSystem.geometry.attributes.position.array as Float32Array;

        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 2] += 0.3 + Math.abs(scrollMomentumRef.current) * 15;

          const distance = Math.sqrt(positions[i] * positions[i] + positions[i + 1] * positions[i + 1]);
          if (distance > 0) {
            const expansion = 1 + Math.abs(scrollMomentumRef.current) * 0.01;
            positions[i] *= expansion;
            positions[i + 1] *= expansion;
          }

          if (positions[i + 2] > 10) {
            positions[i + 2] = -50;
            const resetAngle = Math.random() * Math.PI * 2;
            const resetRadius = Math.random() * 20 + 2;
            positions[i] = Math.cos(resetAngle) * resetRadius;
            positions[i + 1] = Math.sin(resetAngle) * resetRadius;
          }
        }

        particleSystem.geometry.attributes.position.needsUpdate = true;
      });

      if (isHyperJump.current) {
        hyperjumpProgressRef.current += 0.01;

        const t = hyperjumpProgressRef.current;
        console.log(t)
        // Smooth bell curve
        const warpStrength = Math.sin(Math.PI * t);
        scrollMomentumRef.current = warpStrength;

        // Camera punch
        camera.position.z = 20 - warpStrength * 0;

        if (t >= 1) {
          isHyperJump.current = false;
          hyperjumpProgressRef.current = 0;
          scrollMomentumRef.current = 0;
          camera.position.z = 20;
        }
      }
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('wheel', handleScroll);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (renderer) {
        renderer.dispose();
      }
      if (canvasRef.current && renderer.domElement) {
        canvasRef.current.removeChild(renderer.domElement);
      }
    };
  }, [currentDepth, maxDepth]);

  const lines = (scene: THREE.Scene) => {
    for (let i = 0; i < 200; i++) {
      const points = [];
      const angle = (i / 200) * Math.PI * 10;
      const radius = 5 + Math.random() * 10;
      const startZ = -Math.random() * 100;

      points.push(
        new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, startZ),
        new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, startZ - 2)
      );

      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial();

      const line = new THREE.Line(lineGeometry, lineMaterial);
      line.userData.angle = angle;
      line.userData.radius = radius;
      line.userData.speed = 0.5 + Math.random() * 1;

      tunnelRingsRef.current.push(line);
      scene.add(line);
    }
  };

  const circles = (scene: THREE.Scene) => {
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 20 + 2;
      const z = Math.random() * 100 - 50;

      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = Math.sin(angle) * radius;
      positions[i3 + 2] = z;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.15,
      map: createCircleTexture(),   // 👈 circle sprite
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    particlesRef.current.push(particleSystem);
    scene.add(particleSystem);
  };

  return (
    <>
      <div ref={canvasRef} className={styles.container} />
      
      {/* <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            isVisible={index === currentDepth}
          />
        ))}
      </div> */}
      <DepthIndicator currentDepth={currentDepth} maxDepth={maxDepth} />
    </>
  );
}
