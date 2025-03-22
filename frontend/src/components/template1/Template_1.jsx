import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { RGBShiftShader } from 'three/examples/jsm/shaders/RGBShiftShader';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';

const ThreeScene = () => {
    const canvasRef = useRef(null);
    const modelRef = useRef(null);
    const pmremGeneratorRef = useRef(null);
    const composerRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 3.5;

        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true,
        });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1;
        renderer.outputEncoding = THREE.sRGBEncoding;

        pmremGeneratorRef.current = new THREE.PMREMGenerator(renderer);
        pmremGeneratorRef.current.compileEquirectangularShader();

        composerRef.current = new EffectComposer(renderer);
        composerRef.current.addPass(new RenderPass(scene, camera));

        const rgbShiftPass = new ShaderPass(RGBShiftShader);
        rgbShiftPass.uniforms['amount'].value = 0.0030;
        composerRef.current.addPass(rgbShiftPass);

        const rgbeLoader = new RGBELoader();
        rgbeLoader.load('https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/pond_bridge_night_1k.hdr', (texture) => {
            const envMap = pmremGeneratorRef.current.fromEquirectangular(texture).texture;
            scene.environment = envMap;
            texture.dispose();
            pmremGeneratorRef.current.dispose();

            const loader = new GLTFLoader();
            loader.load('./DamagedHelmet.gltf', (gltf) => {
                modelRef.current = gltf.scene;
                scene.add(modelRef.current);
            });
        });

        const animate = () => {
            requestAnimationFrame(animate);
            composerRef.current.render();
        };
        animate();

        const handleMouseMove = (e) => {
            if (modelRef.current) {
                const rotationX = (e.clientX / window.innerHeight - 0.5) * (Math.PI * 0.12);
                const rotationY = (e.clientY / window.innerWidth - 0.5) * (Math.PI * 0.12);
                gsap.to(modelRef.current.rotation, {
                    x: rotationY,
                    y: rotationX,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composerRef.current.setSize(window.innerWidth, window.innerHeight);
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
                composerRef.current.setSize(window.innerWidth, window.innerHeight);
            });
        };
    }, []);

    return <canvas ref={canvasRef} />;
};

export default ThreeScene;