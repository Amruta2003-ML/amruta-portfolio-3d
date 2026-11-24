import * as THREE from 'three';
import gsap from 'gsap';
import { sound } from './audio.js';

export class Professional3DScene {
  constructor(canvasContainer) {
    this.container = canvasContainer;
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.scrollProgress = 0;
    this.activeSection = 0;

    this.initThree();
    this.createAtmosphere();
    this.createNeuralLattice();
    this.createGlassTensorCube();
    this.createWorkstationScene();
    this.createTechCrystals();
    this.setupListeners();
    this.animate();
  }

  initThree() {
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x08090e, 0.0012);

    this.camera = new THREE.PerspectiveCamera(45, this.width / this.height, 0.1, 1500);
    this.camera.position.set(0, 0, 7.5);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.container.appendChild(this.renderer.domElement);

    // Google DeepMind Cinematic Studio Lighting
    const ambientLight = new THREE.AmbientLight(0x0f172a, 2.0);
    this.scene.add(ambientLight);

    // Key Light (Clean White Studio Key)
    this.keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    this.keyLight.position.set(6, 8, 8);
    this.scene.add(this.keyLight);

    // Google Blue Rim (#4285F4)
    this.blueRim = new THREE.PointLight(0x4285f4, 3.5, 35);
    this.blueRim.position.set(-5, 2, 4);
    this.scene.add(this.blueRim);

    // DeepMind Indigo Fill (#6366f1)
    this.indigoFill = new THREE.PointLight(0x6366f1, 2.8, 30);
    this.indigoFill.position.set(5, -2, 3);
    this.scene.add(this.indigoFill);

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.clock = new THREE.Clock();
  }

  createAtmosphere() {
    // 1. Subtle High-Resolution Celestial Texture Background
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('/nasa-universe.jpg', (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      const domeGeo = new THREE.SphereGeometry(1200, 32, 24);
      const domeMat = new THREE.MeshBasicMaterial({
        map: tex,
        side: THREE.BackSide,
        transparent: true,
        opacity: 0.35 // Subtle, elegant ambient depth
      });
      this.skyDome = new THREE.Mesh(domeGeo, domeMat);
      this.scene.add(this.skyDome);
    });

    // 2. High-Precision Neural Particle Dust
    const particleCount = 2200;
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const r = 60 + Math.random() * 320;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      pos[i3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = r * Math.cos(phi);

      // Google DeepMind palette (Indigo / Cyan / Ice White)
      const isBlue = Math.random() > 0.4;
      colors[i3] = isBlue ? 0.38 : 0.85;
      colors[i3 + 1] = isBlue ? 0.62 : 0.92;
      colors[i3 + 2] = 1.0;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 1.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    this.dustField = new THREE.Points(geo, mat);
    this.scene.add(this.dustField);
  }

  createNeuralLattice() {
    // 3D Neural Synapse Lattice (Hero Viewport - Left Side)
    this.neuralGroup = new THREE.Group();
    this.neuralGroup.position.set(-2.0, 0.2, 0.5);

    const layerDefs = [3, 5, 5, 3]; // Layer node counts
    const layerSpacing = 1.4;
    const nodeSpacing = 0.75;
    this.latticeNodes = [];
    this.latticeSynapses = [];

    const nodeGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const nodeMat = new THREE.MeshPhysicalMaterial({
      color: 0x4285f4,
      emissive: 0x6366f1,
      emissiveIntensity: 0.8,
      roughness: 0.1,
      metalness: 0.9,
      clearcoat: 1.0
    });

    const activeNodeMat = new THREE.MeshPhysicalMaterial({
      color: 0x00f0ff,
      emissive: 0x00f0ff,
      emissiveIntensity: 1.5,
      roughness: 0.1
    });

    // Create Nodes across layers
    const layerNodes = [];
    layerDefs.forEach((count, lIdx) => {
      const currentLayer = [];
      const x = (lIdx - (layerDefs.length - 1) / 2) * layerSpacing;
      for (let nIdx = 0; nIdx < count; nIdx++) {
        const y = (nIdx - (count - 1) / 2) * nodeSpacing;
        const z = (Math.random() - 0.5) * 0.4;

        const isOutput = lIdx === layerDefs.length - 1;
        const mesh = new THREE.Mesh(nodeGeo, isOutput ? activeNodeMat : nodeMat);
        mesh.position.set(x, y, z);
        mesh.userData = {
          baseY: y,
          layer: lIdx,
          pulseOffset: Math.random() * Math.PI * 2
        };

        this.neuralGroup.add(mesh);
        this.latticeNodes.push(mesh);
        currentLayer.push(mesh);
      }
      layerNodes.push(currentLayer);
    });

    // Connect adjacent layers with glowing synapse lines
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x6366f1,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });

    for (let l = 0; l < layerNodes.length - 1; l++) {
      const fromLayer = layerNodes[l];
      const toLayer = layerNodes[l + 1];

      fromLayer.forEach(fromNode => {
        toLayer.forEach(toNode => {
          const lineGeo = new THREE.BufferGeometry().setFromPoints([
            fromNode.position,
            toNode.position
          ]);
          const line = new THREE.Line(lineGeo, lineMat);
          this.neuralGroup.add(line);
          this.latticeSynapses.push({ line, from: fromNode, to: toNode });
        });
      });
    }

    // Outer subtle orbital bounding rings
    const ringGeo = new THREE.TorusGeometry(2.3, 0.015, 16, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.25
    });
    this.neuralRing = new THREE.Mesh(ringGeo, ringMat);
    this.neuralRing.rotation.x = Math.PI * 0.35;
    this.neuralGroup.add(this.neuralRing);

    this.scene.add(this.neuralGroup);
  }

  createGlassTensorCube() {
    // Elegant Floating Glass Tensor Core (Center Hero floating accent)
    this.tensorCoreGroup = new THREE.Group();
    this.tensorCoreGroup.position.set(2.4, 1.8, 1.5);
    this.tensorCoreGroup.scale.set(0.65, 0.65, 0.65);

    // Frosted Glass Outer Cube
    const boxGeo = new THREE.BoxGeometry(1.6, 1.6, 1.6);
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.88,
      opacity: 1,
      transparent: true,
      roughness: 0.12,
      ior: 1.5,
      metalness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    this.glassCube = new THREE.Mesh(boxGeo, glassMat);
    this.tensorCoreGroup.add(this.glassCube);

    // Inner Glowing Core (Representation of Trained Model Weights)
    const coreGeo = new THREE.IcosahedronGeometry(0.65, 2);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x4285f4,
      emissive: 0x6366f1,
      emissiveIntensity: 1.2,
      roughness: 0.3,
      metalness: 0.8
    });
    this.innerCore = new THREE.Mesh(coreGeo, coreMat);
    this.tensorCoreGroup.add(this.innerCore);

    // Orthogonal Wireframe Edges
    const wireGeo = new THREE.WireframeGeometry(boxGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const wire = new THREE.LineSegments(wireGeo, wireMat);
    this.tensorCoreGroup.add(wire);

    this.scene.add(this.tensorCoreGroup);
  }

  createWorkstationScene() {
    // Professional Google ML Studio Workstation (Section 2 - What I Do at y = -10.5)
    this.workstationGroup = new THREE.Group();
    this.workstationGroup.position.set(-1.6, -10.5, 0);

    // 1. Minimalist Architectural Studio Desk (Solid Slate)
    const deskGeo = new THREE.BoxGeometry(3.8, 0.08, 1.8);
    const deskMat = new THREE.MeshStandardMaterial({
      color: 0x111625,
      roughness: 0.25,
      metalness: 0.7
    });
    const desk = new THREE.Mesh(deskGeo, deskMat);
    desk.position.set(0, 0.9, 0);
    this.workstationGroup.add(desk);

    // Anodized Aluminum T-Legs
    const legMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.85, roughness: 0.2 });
    [-1.6, 1.6].forEach(x => {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.9, 16), legMat);
      leg.position.set(x, 0.45, 0);
      this.workstationGroup.add(leg);
    });

    // 2. High-End Ultra-Thin Laptop (Open with illuminated screen)
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(0, 0.95, 0.2);

    // Base
    const baseGeo = new THREE.BoxGeometry(1.0, 0.02, 0.7);
    const aluMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.15 });
    const base = new THREE.Mesh(baseGeo, aluMat);
    laptopGroup.add(base);

    // Display
    const screenGroup = new THREE.Group();
    screenGroup.position.set(0, 0.01, -0.35);
    screenGroup.rotation.x = -Math.PI * 0.15; // Tilted back

    const lidGeo = new THREE.BoxGeometry(1.0, 0.68, 0.015);
    const lid = new THREE.Mesh(lidGeo, aluMat);
    lid.position.set(0, 0.34, 0);
    screenGroup.add(lid);

    // Glowing Display Panel with simulated code/training graph
    const screenGeo = new THREE.PlaneGeometry(0.92, 0.6);
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 320;
    const sCtx = screenCanvas.getContext('2d');

    // Terminal Screen Background
    sCtx.fillStyle = '#060813';
    sCtx.fillRect(0, 0, 512, 320);

    // Top status bar
    sCtx.fillStyle = '#1e293b';
    sCtx.fillRect(0, 0, 512, 32);
    sCtx.fillStyle = '#4285f4';
    sCtx.font = 'bold 16px "JetBrains Mono", monospace';
    sCtx.fillText('Google DeepMind // Vertex AI Workbench', 20, 22);

    // Code & Training curves
    sCtx.fillStyle = '#10b981';
    sCtx.font = '13px "JetBrains Mono", monospace';
    sCtx.fillText('>>> model = DeepResidualANN(dim=[512, 768, 2])', 20, 65);
    sCtx.fillText('>>> model.compile(optimizer=AdamW(lr=1e-4), loss=BCE)', 20, 90);
    sCtx.fillStyle = '#38bdf8';
    sCtx.fillText('Epoch [48/50] ==============> loss: 0.0841', 20, 125);
    sCtx.fillText('Validation ROC-AUC: 0.9124 | Latency: 42ms', 20, 150);

    // Miniature Loss Plot
    sCtx.strokeStyle = '#4285f4';
    sCtx.lineWidth = 3;
    sCtx.beginPath();
    sCtx.moveTo(20, 280);
    sCtx.bezierCurveTo(120, 270, 240, 200, 480, 190);
    sCtx.stroke();

    const screenTex = new THREE.CanvasTexture(screenCanvas);
    const displayMat = new THREE.MeshBasicMaterial({ map: screenTex });
    const screen = new THREE.Mesh(screenGeo, displayMat);
    screen.position.set(0, 0.34, 0.01);
    screenGroup.add(screen);

    laptopGroup.add(screenGroup);
    this.workstationGroup.add(laptopGroup);

    // Soft Ambient Screen Glow on Desk
    const screenLight = new THREE.PointLight(0x4285f4, 1.8, 4);
    screenLight.position.set(0, 1.4, 0.1);
    this.workstationGroup.add(screenLight);

    // 3. Sleek Ergonomic Studio Chair
    const chairGroup = new THREE.Group();
    chairGroup.position.set(0, 0, 0.85);

    const seat = new THREE.Mesh(
      new THREE.BoxGeometry(0.75, 0.08, 0.75),
      new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.6 })
    );
    seat.position.set(0, 0.65, 0);
    chairGroup.add(seat);

    const backrest = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.9, 0.08),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 })
    );
    backrest.position.set(0, 1.15, 0.38);
    backrest.rotation.x = -Math.PI * 0.04;
    chairGroup.add(backrest);

    this.workstationGroup.add(chairGroup);
    this.scene.add(this.workstationGroup);
  }

  createTechCrystals() {
    // 3D Precision Glass Hexagonal Prisms for Tech Stack (Section 4 at y = -32)
    this.techCrystalsGroup = new THREE.Group();
    this.techCrystalsGroup.position.set(0, -32, 0);

    const techTokens = [
      { name: "TensorFlow", color: "#FF6F00" },
      { name: "PyTorch", color: "#EE4C2C" },
      { name: "Scikit-Learn", color: "#F89939" },
      { name: "Python", color: "#387EB8" },
      { name: "LangChain", color: "#2E6F40" },
      { name: "Transformers", color: "#FFD21E" },
      { name: "Docker", color: "#0DB7ED" },
      { name: "AWS", color: "#FF9900" },
      { name: "FastAPI", color: "#059669" },
      { name: "SQL", color: "#00758F" },
      { name: "NumPy", color: "#4DABCF" },
      { name: "Git", color: "#F05032" }
    ];

    this.crystals = [];

    techTokens.forEach((item, idx) => {
      // Create high-res canvas emblem
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');

      // Frosted obsidian background
      ctx.fillStyle = '#0c1020';
      ctx.fillRect(0, 0, 256, 256);

      // Glowing border ring
      ctx.strokeStyle = item.color;
      ctx.lineWidth = 8;
      ctx.strokeRect(16, 16, 224, 224);

      // Inner brand text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 36px "Inter", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(item.name, 128, 128);

      const texture = new THREE.CanvasTexture(canvas);

      // Hexagonal Prism Geometry
      const radius = 0.55;
      const geo = new THREE.CylinderGeometry(radius, radius, 0.22, 6);
      const mat = new THREE.MeshPhysicalMaterial({
        map: texture,
        roughness: 0.15,
        metalness: 0.7,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.rotation.x = Math.PI * 0.5;

      const angle = (idx / techTokens.length) * Math.PI * 2;
      const dist = 1.4 + (idx % 2) * 1.1;
      mesh.position.set(
        Math.cos(angle) * dist,
        (Math.random() - 0.5) * 1.6,
        Math.sin(angle) * dist
      );

      mesh.userData = {
        basePos: mesh.position.clone(),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015,
          (Math.random() - 0.5) * 0.015
        ),
        rotSpeed: 0.004 + Math.random() * 0.006
      };

      this.techCrystalsGroup.add(mesh);
      this.crystals.push(mesh);
    });

    this.scene.add(this.techCrystalsGroup);
  }

  setupListeners() {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = (e.clientX / this.width - 0.5) * 2;
      this.mouse.targetY = (e.clientY / this.height - 0.5) * 2;
    });

    // Interactive dispersion pulse on click
    window.addEventListener('click', () => {
      if (this.crystals && this.crystals.length) {
        sound.playChime(640);
        this.crystals.forEach(c => {
          c.userData.velocity.x += (Math.random() - 0.5) * 0.08;
          c.userData.velocity.y += (Math.random() - 0.5) * 0.08;
          c.userData.velocity.z += (Math.random() - 0.5) * 0.08;
        });
      }
    });
  }

  updateScroll(scrollY, maxScroll) {
    this.scrollProgress = scrollY / Math.max(1, maxScroll);
    
    // Smooth camera travel down the 6 sections
    // 0: Overview (y = 0)
    // 1: Capabilities (y = -10.5)
    // 2: Experience (y = -21)
    // 3: Tech Stack (y = -32)
    // 4: Systems (y = -43)
    // 5: Honors (y = -54)
    const targetY = -this.scrollProgress * 54;
    this.activeSection = Math.min(5, Math.max(0, Math.round(this.scrollProgress * 5)));

    gsap.to(this.camera.position, {
      y: targetY,
      duration: 0.7,
      ease: "power2.out"
    });
  }

  warpJetTo(stationIndex) {
    this.activeSection = Math.min(5, Math.max(0, stationIndex));
    const yCoordinates = [0, -10.5, -21, -32, -43, -54];
    const targetY = yCoordinates[this.activeSection] ?? 0;

    sound.playChime(500 + this.activeSection * 70);

    gsap.to(this.camera.position, {
      y: targetY,
      duration: 1.1,
      ease: "power3.inOut"
    });
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // 1. Neural Lattice subtle mouse tracking & node breathing
    if (this.neuralGroup) {
      this.neuralGroup.rotation.y = this.mouse.x * 0.25;
      this.neuralGroup.rotation.x = -this.mouse.y * 0.15;

      if (this.neuralRing) {
        this.neuralRing.rotation.z = elapsedTime * 0.15;
      }

      this.latticeNodes.forEach(node => {
        node.position.y = node.userData.baseY + Math.sin(elapsedTime * 2.5 + node.userData.pulseOffset) * 0.04;
      });
    }

    // 2. Glass Tensor Core rotation & specular refraction
    if (this.tensorCoreGroup) {
      this.glassCube.rotation.x = elapsedTime * 0.2;
      this.glassCube.rotation.y = elapsedTime * 0.28;
      this.innerCore.rotation.x = -elapsedTime * 0.4;
      this.innerCore.rotation.y = -elapsedTime * 0.5;

      this.tensorCoreGroup.position.y = 1.8 + Math.sin(elapsedTime * 1.8) * 0.12;
    }

    // 3. Ambient Dust field slow celestial drift
    if (this.dustField) {
      this.dustField.rotation.y = elapsedTime * 0.008;
    }

    // 4. Background Sky Dome rotation
    if (this.skyDome) {
      this.skyDome.rotation.y = elapsedTime * 0.005;
    }

    // 5. Tech Stack Crystals gentle physics simulation
    if (this.crystals && this.crystals.length) {
      for (let i = 0; i < this.crystals.length; i++) {
        const c = this.crystals[i];

        c.position.add(c.userData.velocity);

        // Spring restitution back to anchor
        const distFromBase = c.position.distanceTo(c.userData.basePos);
        if (distFromBase > 0.03) {
          const force = c.userData.basePos.clone().sub(c.position).multiplyScalar(0.02);
          c.userData.velocity.add(force);
        }

        // Damping
        c.userData.velocity.multiplyScalar(0.95);

        // Gentle floating spin
        c.rotation.z += c.userData.rotSpeed;
        c.rotation.y += c.userData.rotSpeed * 0.5;

        // Interactive mouse repulsion
        const mouseWorld = new THREE.Vector3(this.mouse.x * 3.2, this.camera.position.y + -this.mouse.y * 2, 0);
        const dist = c.position.distanceTo(mouseWorld);
        if (dist < 2.0) {
          const push = c.position.clone().sub(mouseWorld).normalize().multiplyScalar(0.035 / (dist + 0.1));
          c.userData.velocity.add(push);
        }
      }
    }

    this.renderer.render(this.scene, this.camera);
  }
}

export { Professional3DScene as CosmicScene, Professional3DScene as VideoStyleScene };
