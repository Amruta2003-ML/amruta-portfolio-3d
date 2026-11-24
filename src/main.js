import { CosmicScene } from './scene.js';
import { sound } from './audio.js';
import { personalData, skillsData, skillLogos, experienceData, projectsData, educationAndAchievements } from './data.js';
import confetti from 'canvas-confetti';

// 1. Initialize 3D Professional Google AI / DeepMind Scene
const canvasContainer = document.getElementById('canvas-container');
const cosmicScene = new CosmicScene(canvasContainer);

// State
let activeSkillCategory = 'All';

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const soundToggleBtn = document.getElementById('sound-toggle-btn');
const soundIcon = document.getElementById('sound-icon');
const soundText = document.getElementById('sound-text');
const triggerConfettiBtn = document.getElementById('trigger-confetti-btn');

// Embedded Live Inspector Sliders
const sliderIncome = document.getElementById('slider-income');
const sliderLoan = document.getElementById('slider-loan');
const sliderCredit = document.getElementById('slider-credit');
const sliderDti = document.getElementById('slider-dti');
const sliderIncomeVal = document.getElementById('slider-income-val');
const sliderLoanVal = document.getElementById('slider-loan-val');
const sliderCreditVal = document.getElementById('slider-credit-val');
const sliderDtiVal = document.getElementById('slider-dti-val');
const simProbDisplay = document.getElementById('sim-prob-display');
const simStatusBadge = document.getElementById('sim-status-badge');

// Section IDs for scroll tracking
const sectionIds = [
  'hero-section',
  'capabilities-section',
  'experience-section',
  'techstack-section',
  'systems-section',
  'honors-section'
];

// 2. Render Technical Skills Matrix with Official Brand SVG Logos
function renderSkills() {
  const tabsContainer = document.getElementById('skill-tabs-container');
  const cardsContainer = document.getElementById('skills-cards-container');
  if (!tabsContainer || !cardsContainer) return;

  const categories = ['All', ...skillsData.map(c => c.category)];
  tabsContainer.innerHTML = categories.map(cat => `
    <button class="skill-tab-btn ${cat === activeSkillCategory ? 'active' : ''}" data-cat="${cat}">
      ${cat}
    </button>
  `).join('');

  let displaySkills = [];
  if (activeSkillCategory === 'All') {
    skillsData.forEach(cat => {
      cat.skills.forEach(s => displaySkills.push({ ...s, categoryColor: cat.color }));
    });
  } else {
    const found = skillsData.find(c => c.category === activeSkillCategory);
    if (found) {
      found.skills.forEach(s => displaySkills.push({ ...s, categoryColor: found.color }));
    }
  }

  cardsContainer.innerHTML = displaySkills.map(skill => {
    const logoSvg = skillLogos[skill.logo] || skillLogos.python;
    return `
      <div class="skill-card">
        <div class="skill-header">
          <div class="skill-name-wrap">
            <div class="skill-logo-wrap" title="${skill.name}">
              ${logoSvg}
            </div>
            <span class="skill-name">${skill.name}</span>
          </div>
          <span class="skill-level">${skill.level}</span>
        </div>
        <p class="skill-desc">${skill.desc}</p>
      </div>
    `;
  }).join('');

  tabsContainer.querySelectorAll('.skill-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sound.playClick();
      activeSkillCategory = btn.dataset.cat;
      renderSkills();
    });
  });
}

// 3. Render Professional Work Experience
function renderExperience() {
  const expContainer = document.getElementById('experience-container');
  if (!expContainer) return;

  expContainer.innerHTML = experienceData.map(exp => `
    <article class="exp-card">
      <div class="exp-header">
        <div class="exp-title-block">
          <h3>${exp.role}</h3>
          <div class="exp-company">@ ${exp.company} &bull; ${exp.companyType}</div>
        </div>
        <span class="exp-period">${exp.period}</span>
      </div>

      <div class="exp-metrics-grid">
        ${exp.highlights.map(hl => `
          <div class="metric-pill">
            <span class="metric-value-tag">${hl.metric}</span>
            <span class="metric-name">${hl.title}</span>
            <span class="metric-detail">${hl.text}</span>
          </div>
        `).join('')}
      </div>

      <div class="exp-footer">
        <div class="tech-tag-row">
          ${exp.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <a href="${exp.githubLink}" target="_blank" rel="noopener noreferrer" class="card-github-link" title="Inspect Codebase on GitHub">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <span>Inspect Architecture & Codebase &rarr;</span>
        </a>
      </div>
    </article>
  `).join('');
}

// 4. Render Flagship Systems
function renderProjects() {
  const pContainer = document.getElementById('projects-container');
  if (!pContainer) return;

  pContainer.innerHTML = projectsData.map((project, idx) => `
    <article class="project-card ${project.featured ? 'featured' : ''}">
      <div class="project-img-wrapper">
        <img src="${project.image}" alt="${project.title} Preview" class="project-thumb-img" loading="lazy">
        <div class="project-img-overlay">
          ${project.featured ? `<span class="featured-pill">★ FLAGSHIP BENCHMARK</span>` : `<span class="featured-pill" style="border-color:rgba(255,255,255,0.2);color:#cbd5e1;background:rgba(255,255,255,0.08)">AI/ML SYSTEM</span>`}
        </div>
      </div>

      <div class="project-card-body">
        <div class="project-top-row">
          <span class="project-idx">SYSTEM ARCHITECTURE 0${idx + 1}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>

        <div class="project-metric-row">
          <span class="metric-badge">${Object.values(project.metrics)[0]}</span>
          <span class="metric-caption">${Object.keys(project.metrics)[0]} Validated Metric</span>
        </div>

        <div class="project-tags-row">
          ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>

        <div class="project-actions-row">
          <span style="font-size:0.75rem; color:var(--text-muted); font-family:var(--font-mono)">Verified Repository</span>

          <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="card-github-link" title="View Source Code on GitHub">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            <span>GitHub Code &rarr;</span>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

// 5. Render Verified Certifications
function renderCertifications() {
  const certContainer = document.getElementById('cert-list-container');
  if (!certContainer) return;

  certContainer.innerHTML = educationAndAchievements.certifications.map(cert => `
    <a href="${cert.githubUrl}" target="_blank" rel="noopener noreferrer" class="cert-card" title="Verify credential on GitHub">
      <div>
        <h4 class="cert-title">${cert.name}</h4>
        <div class="cert-issuer">${cert.issuer} &bull; <span style="color:var(--prod-emerald);">${cert.status}</span></div>
        <div class="cert-skills">Focus: ${cert.skills}</div>
      </div>
      <div class="card-github-link" style="flex-shrink: 0;">
        <span>Verify &rarr;</span>
      </div>
    </a>
  `).join('');
}

// 6. Confetti Celebration
function fireCosmicConfetti() {
  confetti({
    particleCount: 120,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#4285f4', '#6366f1', '#38bdf8', '#10b981', '#ffffff']
  });
}

// 7. Real-Time Credit Risk ANN Inference Calculation
function updateRiskSimulation() {
  if (!sliderIncome || !sliderLoan || !sliderCredit || !sliderDti) return;

  const income = parseFloat(sliderIncome.value);
  const loan = parseFloat(sliderLoan.value);
  const fico = parseFloat(sliderCredit.value);
  const dti = parseFloat(sliderDti.value);

  sliderIncomeVal.textContent = `$${income.toLocaleString()}`;
  sliderLoanVal.textContent = `$${loan.toLocaleString()}`;
  sliderCreditVal.textContent = `${fico}`;
  sliderDtiVal.textContent = `${dti}%`;

  const loanToIncome = loan / income;
  const z = 4.2 - (0.012 * fico) + (3.8 * loanToIncome) + (0.065 * dti) - (0.000015 * income);
  const probability = 1 / (1 + Math.exp(-z));
  const probPercent = (probability * 100).toFixed(1);

  simProbDisplay.textContent = `${probPercent}%`;

  if (probability < 0.25) {
    simProbDisplay.style.color = '#10b981';
    simStatusBadge.className = 'inf-status approved';
    simStatusBadge.textContent = 'APPROVED // LOW RISK PROFILE';
  } else {
    simProbDisplay.style.color = '#ef4444';
    simStatusBadge.className = 'inf-status rejected';
    simStatusBadge.textContent = 'FLAGGED FOR MANUAL AUDIT // HIGH DEFAULT RISK';
  }
}

// 8. Scroll & Interaction Setup
function setupInteractions() {
  // Sync Three.js Camera on Scroll
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    cosmicScene.updateScroll(scrollY, maxScroll);

    // Update active nav link based on scroll position
    const scrollMiddle = scrollY + window.innerHeight * 0.35;
    sectionIds.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;
        if (scrollMiddle >= top && scrollMiddle < bottom) {
          navLinks.forEach(link => {
            link.classList.toggle('active', parseInt(link.dataset.section) === idx);
          });
        }
      }
    });
  }, { passive: true });

  // Nav Links click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const secIdx = parseInt(link.dataset.section);
      cosmicScene.warpJetTo(secIdx);
    });
  });

  // Sound Synthesizer toggle
  soundToggleBtn.addEventListener('click', () => {
    const active = sound.toggleMute();
    soundIcon.textContent = active ? '🔊' : '🔇';
    soundText.textContent = active ? 'Audio: ON' : 'Audio: OFF';
    soundToggleBtn.style.borderColor = active ? 'var(--google-blue)' : 'var(--border-subtle)';
  });

  // Celebrate Confetti
  if (triggerConfettiBtn) {
    triggerConfettiBtn.addEventListener('click', () => {
      sound.playChime(784);
      fireCosmicConfetti();
    });
  }

  // Range Slider events
  [sliderIncome, sliderLoan, sliderCredit, sliderDti].forEach(slider => {
    if (slider) {
      slider.addEventListener('input', updateRiskSimulation);
    }
  });
}

// Initial Boot
renderSkills();
renderExperience();
renderProjects();
renderCertifications();
setupInteractions();
updateRiskSimulation();
