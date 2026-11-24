// Amruta Bahinipati - Portfolio Data with Official SVG Logos & Project Imagery

export const personalData = {
  name: "Amruta Bahinipati",
  role: "Data Scientist | AI & ML Engineer",
  tagline: "Neural Networks • Computer Vision • NLP • GenAI Multi-Agent Systems • End-to-End MLOps",
  location: "Bengaluru, Karnataka, India",
  locationLink: "https://maps.google.com/?q=Bengaluru,India",
  email: "amrutabahinipati@gmail.com",
  phone: "+91 8093238350",
  phoneClean: "+918093238350",
  github: "https://github.com/amrutabahinipati",
  linkedin: "https://linkedin.com/in/amruta-bahinipati",
  summary: `Fresher AI ML Engineer with hands-on experience building and deploying end-to-end ML systems across Neural Networks, Computer Vision, NLP, and Generative AI. Smart India Hackathon (SIH) 2023 National Finalist. Delivered real-world predictions with 0.91 ROC-AUC, 94%+ accuracy, and sub-5% RMSE on time-series forecasting. Proficient in Scikit-Learn, TensorFlow, PyTorch, Docker, LangChain, and Flask/FastAPI microservices.`,
  stats: [
    { label: "ROC-AUC Score", value: "0.91", detail: "Credit Risk ANN" },
    { label: "Model Accuracy", value: "94%+", detail: "Classification Pipelines" },
    { label: "Time-Series RMSE", value: "< 5%", detail: "LSTM OHLCV Market Data" },
    { label: "API Latency", value: "< 200ms", detail: "Flask / FastAPI Production" }
  ]
};

// Official SVG Brand Logos for Skills
export const skillLogos = {
  python: `<svg viewBox="0 0 128 128"><path fill="#387EB8" d="M63.7 3.5c-15.6 0-25 6.8-25 19.3v14.4h25.7v3.6H29.9c-12.8 0-23.7 8.2-23.7 23.8 0 15.7 10.4 24.3 23.7 24.3h8v-11.4c0-13.6 11.8-24.3 25.7-24.3h25V39.2c0-12.2-10.4-21.4-25-21.4h-.2c.1-.1.2-.1.3-.1zm-13.4 7.4c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5-4.5-2-4.5-4.5 2-4.5 4.5-4.5z"/><path fill="#FFE052" d="M64.3 124.5c15.6 0 25-6.8 25-19.3v-14.4H63.6v-3.6h34.5c12.8 0 23.7-8.2 23.7-23.8 0-15.7-10.4-24.3-23.7-24.3h-8v11.4c0 13.6-11.8 24.3-25.7 24.3h-25v14.1c0 12.2 10.4 21.4 25 21.4h.2c-.2 0-.3.1-.3.1zm13.4-7.4c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/></svg>`,
  tensorflow: `<svg viewBox="0 0 128 128"><path fill="#FF6F00" d="M64 3.7L18.4 30.1v31.7l18.2-10.5V37.6l27.4-15.8 27.4 15.8v72.8L64 126.3l-18.2-10.5v-21L27.6 84.3v31.7L64 136.3l45.6-26.3V30.1L64 3.7z"/><path fill="#FFA800" d="M64 53.4L45.8 63.9v21L64 95.4l18.2-10.5v-21L64 53.4z"/></svg>`,
  pytorch: `<svg viewBox="0 0 128 128"><path fill="#EE4C2C" d="M64 12.8a51.2 51.2 0 0 0-41.9 80.6l10.3-6.4A39.4 39.4 0 0 1 24.6 64a39.4 39.4 0 1 1 76.7 13.7l10.4 6.3A51.2 51.2 0 0 0 64 12.8zm21.5 23.6a6.8 6.8 0 0 0-6.8 6.8 6.8 6.8 0 0 0 6.8 6.8 6.8 6.8 0 0 0 6.8-6.8 6.8 6.8 0 0 0-6.8-6.8zM61 31.4v22.7l14.7 14.7-4.2 4.2-10.5-10.5v39.8h-6V43.8L41.3 57.5l-4.2-4.2L61 31.4z"/></svg>`,
  scikitlearn: `<svg viewBox="0 0 128 128"><path fill="#F89939" d="M78 8.5C51 8.5 29.2 30.3 29.2 57.3c0 9.8 2.9 19 7.9 26.7l5.9-4.8c-4-6.4-6.3-14-6.3-21.9 0-22.9 18.5-41.4 41.4-41.4 22.9 0 41.4 18.5 41.4 41.4 0 22.9-18.5 41.4-41.4 41.4-7.9 0-15.5-2.3-21.9-6.3l-4.8 5.9c7.7 5 16.9 7.9 26.7 7.9 27 0 48.8-21.8 48.8-48.8S105 8.5 78 8.5z"/><circle fill="#3499CD" cx="42" cy="74" r="28"/><circle fill="#fff" cx="42" cy="74" r="14"/></svg>`,
  opencv: `<svg viewBox="0 0 128 128"><path fill="#EA212D" d="M64 6.4a28.8 28.8 0 1 0 28.8 28.8A28.8 28.8 0 0 0 64 6.4zm0 43.2a14.4 14.4 0 1 1 14.4-14.4A14.4 14.4 0 0 1 64 49.6z"/><path fill="#57AC3E" d="M100.8 64a28.8 28.8 0 1 0 28.8 28.8A28.8 28.8 0 0 0 100.8 64zm0 43.2a14.4 14.4 0 1 1 14.4-14.4 14.4 14.4 0 0 1-14.4 14.4z"/><path fill="#0757AC" d="M27.2 64a28.8 28.8 0 1 0 28.8 28.8A28.8 28.8 0 0 0 27.2 64zm0 43.2a14.4 14.4 0 1 1 14.4-14.4 14.4 14.4 0 0 1-14.4 14.4z"/></svg>`,
  docker: `<svg viewBox="0 0 128 128"><path fill="#0db7ed" d="M121.7 54.3c-1.3-.9-5.4-3.4-14.7-2.6-3.7-5.9-9.1-10.2-9.4-10.5l-3.3-2.5-2.2 3.5c-3.1 5-4.4 10.9-4 16.7-2.7 1.4-8.8 4.4-18.1 4.5H4.2c-2.4 9.4-1.2 24.3 7 35.5 10 13.6 27.4 20.8 51.7 21.3 40.5.9 61.7-18.7 65.6-39.7 7.5-3.3 9.7-14.6 9.8-15.1l.2-1.3-16.8-9.3zM45 32.5h-9.9v9.9H45v-9.9zm13.2 0h-9.9v9.9h9.9v-9.9zm13.2 0h-9.9v9.9h9.9v-9.9zm-39.6 13.2h-9.9v9.9h9.9v-9.9zm13.2 0h-9.9v9.9H45v-9.9zm13.2 0h-9.9v9.9h9.9v-9.9zm13.2 0h-9.9v9.9h9.9v-9.9z"/></svg>`,
  aws: `<svg viewBox="0 0 128 128"><path fill="#FF9900" d="M42.4 83.3c-14.1 0-25.5-6.2-34.1-18.6l10-8.6c6.2 9.1 14.4 13.6 24.1 13.6 11.5 0 17.7-6 17.7-14.4 0-7.3-4.8-11.4-18.6-14.7C23.4 36.6 14.6 30 14.6 17.5 14.6 7 24.7.7 39.7.7c11.9 0 21.6 4.3 29.1 13l-9.3 8.8C54 16 47.7 13.1 39.7 13.1c-7.7 0-12.7 4.1-12.7 9.8 0 6.2 5.1 9.4 16.8 12.3 20 5 26.6 12.4 26.6 23.4-.1 14.5-10.7 24.7-28 24.7zm76.5 24.6C103.5 118.8 84 123.6 64 123.6c-24.8 0-49-7.3-64-16.9l4.5-9.6c13.7 8.6 36.3 15.3 59.5 15.3 18.5 0 36.2-4.4 51-14.4l3.9 9.9z"/></svg>`,
  langchain: `<svg viewBox="0 0 128 128"><path fill="#2E6F40" d="M38 18h52c11 0 20 9 20 20v52c0 11-9 20-20 20H38c-11 0-20-9-20-20V38c0-11 9-20 20-20z"/><path fill="#fff" d="M42 42h44v10H42zM42 59h44v10H42zM42 76h44v10H42z"/></svg>`,
  huggingface: `<svg viewBox="0 0 128 128"><circle fill="#FFD21E" cx="64" cy="64" r="58"/><circle fill="#000" cx="45" cy="55" r="7"/><circle fill="#000" cx="83" cy="55" r="7"/><path fill="none" stroke="#000" stroke-width="6" stroke-linecap="round" d="M45 80c9 10 29 10 38 0"/></svg>`,
  powerbi: `<svg viewBox="0 0 128 128"><rect fill="#F2C811" x="18" y="58" width="22" height="52" rx="4"/><rect fill="#F2C811" x="53" y="38" width="22" height="72" rx="4"/><rect fill="#F2C811" x="88" y="18" width="22" height="92" rx="4"/></svg>`,
  fastapi: `<svg viewBox="0 0 128 128"><circle fill="#059669" cx="64" cy="64" r="58"/><path fill="#fff" d="M68 20L36 72h24l-4 36 32-52H64l4-36z"/></svg>`,
  sql: `<svg viewBox="0 0 128 128"><ellipse fill="#00758F" cx="64" cy="32" rx="48" ry="18"/><path fill="#00758F" d="M16 32v64c0 10 21.5 18 48 18s48-8 48-18V32H16z"/><ellipse fill="#009FB7" cx="64" cy="32" rx="44" ry="15"/></svg>`,
  java: `<svg viewBox="0 0 128 128"><path fill="#EA2D2E" d="M48 96s-5 3 4 5c12 2 18 2 32-1 0 0 4 3 9 4-22 9-54 1-45-8zm-5-14s-6 4 4 6c14 2 24 2 44-1 0 0 3 2 7 3-27 8-67 2-55-8zm24-34c4 5 1 9-5 13-10 6-17 11-3 18 0 0-18-9-7-18 9-7 14-8 15-13z"/></svg>`,
  pandas: `<svg viewBox="0 0 128 128"><rect fill="#150458" x="20" y="24" width="20" height="80" rx="4"/><rect fill="#FFD43B" x="54" y="44" width="20" height="60" rx="4"/><rect fill="#E70488" x="88" y="24" width="20" height="80" rx="4"/></svg>`,
  numpy: `<svg viewBox="0 0 128 128"><path fill="#013243" d="M64 12l48 28v56L64 124 16 96V40L64 12z"/><path fill="#4DABCF" d="M64 24L26 46v44l38 22 38-22V46L64 24z"/></svg>`,
  git: `<svg viewBox="0 0 128 128"><path fill="#F05032" d="M122.7 57.3L70.7 5.3c-4.4-4.4-11.5-4.4-15.9 0L5.3 54.8c-4.4 4.4-4.4 11.5 0 15.9l52 52c4.4 4.4 11.5 4.4 15.9 0l49.5-49.5c4.4-4.4 4.4-11.5 0-15.9z"/><circle fill="#fff" cx="46" cy="64" r="10"/><circle fill="#fff" cx="82" cy="46" r="10"/><circle fill="#fff" cx="82" cy="82" r="10"/></svg>`,
  crewai: `<svg viewBox="0 0 128 128"><circle fill="#FF007A" cx="64" cy="64" r="56"/><circle fill="#fff" cx="64" cy="48" r="16"/><path fill="#fff" d="M38 96c0-14 12-26 26-26s26 12 26 26H38z"/></svg>`
};

export const skillsData = [
  {
    category: "AI & Deep Learning",
    color: "#00F0FF",
    skills: [
      { name: "TensorFlow", level: "Advanced", desc: "ANN, CNN, LSTM architectures & Keras", logo: "tensorflow" },
      { name: "PyTorch", level: "Proficient", desc: "Deep neural nets, custom training loops", logo: "pytorch" },
      { name: "Scikit-Learn", level: "Expert", desc: "ColumnTransformers, SMOTE, Pipelines", logo: "scikitlearn" },
      { name: "OpenCV", level: "Proficient", desc: "Computer Vision & feature extraction", logo: "opencv" },
      { name: "NLTK & NLP", level: "Proficient", desc: "Text preprocessing & sentiment pipelines", logo: "python" }
    ]
  },
  {
    category: "GenAI & LLMs",
    color: "#FF007A",
    skills: [
      { name: "LangChain", level: "Advanced", desc: "Autonomous agentic chains & tools", logo: "langchain" },
      { name: "LangGraph", level: "Proficient", desc: "Stateful cyclic multi-agent graphs", logo: "langchain" },
      { name: "CrewAI", level: "Proficient", desc: "Cooperative autonomous AI teams", logo: "crewai" },
      { name: "RAG Systems", level: "Advanced", desc: "Hybrid semantic retrieval & vector index", logo: "sql" },
      { name: "Transformers", level: "Proficient", desc: "Hugging Face model fine-tuning & PEFT", logo: "huggingface" }
    ]
  },
  {
    category: "Languages & Core",
    color: "#7928CA",
    skills: [
      { name: "Python", level: "Expert", desc: "Algorithms, vectorized logic, OOP", logo: "python" },
      { name: "SQL", level: "Advanced", desc: "Complex queries, aggregations, window funcs", logo: "sql" },
      { name: "Java", level: "Intermediate", desc: "Object-oriented backend architectures", logo: "java" }
    ]
  },
  {
    category: "MLOps & Cloud",
    color: "#00E599",
    skills: [
      { name: "FastAPI & Flask", level: "Advanced", desc: "Sub-200ms REST inference microservices", logo: "fastapi" },
      { name: "Docker", level: "Proficient", desc: "Reproducible container deployments", logo: "docker" },
      { name: "AWS Cloud", level: "Proficient", desc: "S3 data lakes & EC2 compute instances", logo: "aws" },
      { name: "Git & GitHub", level: "Advanced", desc: "Version control & CI/CD workflows", logo: "git" }
    ]
  },
  {
    category: "Data & Analytics",
    color: "#FFB800",
    skills: [
      { name: "Pandas & NumPy", level: "Expert", desc: "High-throughput vectorized operations", logo: "pandas" },
      { name: "Power BI", level: "Proficient", desc: "Automated business KPI reporting", logo: "powerbi" },
      { name: "Matplotlib", level: "Advanced", desc: "Statistical visualization & model diagnostics", logo: "numpy" }
    ]
  }
];

export const experienceData = [
  {
    role: "AI Engineer Intern",
    company: "Rubixe",
    companyType: "Remote",
    period: "Aug 2025 – Present",
    githubLink: "https://github.com/amrutabahinipati",
    highlights: [
      {
        metric: "5+ Models",
        title: "Production ML Deployments",
        text: "Designed and deployed 5+ production ML models across structured and unstructured datasets."
      },
      {
        metric: "~40% Time Cut",
        title: "Reusable Preprocessing Pipelines",
        text: "Built Scikit-learn preprocessing pipelines (imputation, encoding, scaling) cutting feature engineering time by ~40%."
      },
      {
        metric: "88% Accuracy",
        title: "NLP Sentiment Classifier",
        text: "Trained TensorFlow NLP classifier on real customer feedback; served via 3 Flask REST APIs with sub-200ms response time."
      },
      {
        metric: "30% Prep Reduction",
        title: "CNN Image Models & Dashboards",
        text: "Trained CNN & ANN models; automated 10+ Power BI and Matplotlib reporting dashboards saving 30% manual prep time."
      }
    ],
    tech: ["TensorFlow", "Scikit-Learn", "Flask APIs", "CNN", "ANN", "Power BI", "Python"]
  },
  {
    role: "Data Science Intern",
    company: "Quizero",
    companyType: "Remote / Hybrid",
    period: "Jun 2023 – Aug 2023",
    githubLink: "https://github.com/amrutabahinipati",
    highlights: [
      {
        metric: "< 5% RMSE",
        title: "LSTM Equity Price Forecaster",
        text: "Built LSTM model trained on 5+ years of OHLCV market data with rolling normalization and multivariate lag sequences."
      },
      {
        metric: "92% Accuracy",
        title: "4-Class Mobile Price Classifier",
        text: "Engineered mobile price range classifier using Random Forest and XGBoost with EDA feature selection, beating baseline by 11 points."
      }
    ],
    tech: ["PyTorch", "LSTM", "XGBoost", "Random Forest", "Time-Series", "EDA"]
  }
];

export const projectsData = [
  {
    title: "AI-Driven Credit Risk Prediction System",
    subtitle: "Enterprise Loan Default Risk Modeling & Real-Time Inference API",
    tagline: "Solved extreme class imbalance and financial noise with 0.91 ROC-AUC",
    image: "/project-credit-risk.jpg",
    tags: ["TensorFlow", "Scikit-Learn", "Flask REST API", "SMOTE", "Docker"],
    githubUrl: "https://github.com/amrutabahinipati",
    featured: true,
    metrics: { "ROC-AUC": "0.91", "Recall": "89%", "Inference": "45ms" },
    description: `End-to-end credit scoring system predicting default probability accurately on noisy financial datasets with severe class imbalance. Built modular Scikit-learn ColumnTransformer pipelines, applied SMOTE to heavily oversample default candidates, and trained deep ANN with Batch Normalization & Dropout. Served via high-performance Flask REST API.`,
    features: [
      "Modular ColumnTransformer pipeline handling imputation, scaling & encoding",
      "Synthetic Minority Over-sampling (SMOTE) prioritizing high-risk recall",
      "Deep Artificial Neural Network with batch norm & dropout regularization",
      "Production Flask REST API for client-ready real-time scoring"
    ]
  },
  {
    title: "Multivariate LSTM Equity Price Forecaster",
    subtitle: "Deep Learning Time-Series Prediction on 5+ Years Market Data",
    tagline: "Rolling normalized sequence modeling achieving sub-5% RMSE",
    image: "/project-lstm.jpg",
    tags: ["PyTorch", "LSTM", "Time-Series", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/amrutabahinipati",
    featured: false,
    metrics: { "RMSE": "< 5%", "History": "5+ Years", "Horizon": "30 Days" },
    description: `Multi-layer Long Short-Term Memory (LSTM) network for equity price trajectory forecasting. Engineered multivariate input sequences with moving averages, RSI, MACD, and lag tensors to capture non-linear financial market volatility.`,
    features: [
      "Trained on 5+ years of high-frequency OHLCV market history",
      "Rolling multivariate normalization preventing lookahead leakage",
      "Backtested with cross-validation and visualized predictive confidence bands"
    ]
  },
  {
    title: "Multi-Agent Autonomous GenAI RAG Assistant",
    subtitle: "Context-Aware Retrieval Engine Powered by LangChain & CrewAI",
    tagline: "Hybrid semantic search with multi-agent collaborative workflows",
    image: "/project-genai.jpg",
    tags: ["LangChain", "CrewAI", "Vector DB", "RAG", "FastAPI"],
    githubUrl: "https://github.com/amrutabahinipati",
    featured: false,
    metrics: { "Speed": "180ms", "Chunking": "Hybrid", "Relevance": "96%" },
    description: `Autonomous multi-agent system utilizing CrewAI and LangChain to reason over and synthesize complex multi-document repositories using vector embeddings, semantic reranking, and dynamic task orchestration.`,
    features: [
      "Stateful agentic decision graph with LangGraph & CrewAI agents",
      "Vector embeddings stored in Chroma / FAISS with reciprocal rank fusion",
      "FastAPI backend microservice with streaming response protocol"
    ]
  },
  {
    title: "Customer Sentiment Intelligence Pipeline",
    subtitle: "Real-Time NLP Feedback Classifier with Flask API Microservice",
    tagline: "88% classification accuracy on unstructured real-world feedback",
    image: "/project-nlp.jpg",
    tags: ["TensorFlow", "NLP", "Flask", "NLTK", "Word2Vec"],
    githubUrl: "https://github.com/amrutabahinipati",
    featured: false,
    metrics: { "Accuracy": "88%", "Throughput": "1.2k req/min", "Latency": "<200ms" },
    description: `NLP text classification system processing live customer reviews and feedback streams. Employs advanced tokenization, stop-word reduction, and deep neural embeddings to classify sentiment across multiple granular tiers.`,
    features: [
      "End-to-end tokenization and embedding pipeline with TensorFlow",
      "Sub-200ms inference served via lightweight Flask REST API",
      "Integrated automated Matplotlib & Power BI analytics dashboard"
    ]
  }
];

export const educationAndAchievements = {
  achievements: [
    {
      title: "Smart India Hackathon (SIH) 2023 - National Finalist",
      organization: "Ministry of Education & AICTE, Govt. of India",
      year: "2023",
      category: "National Honor",
      desc: "Selected as National Finalist in India's prestigious hackathon for innovating an AI-driven solution addressing high-impact national challenges.",
      icon: "trophy",
      githubUrl: "https://github.com/amrutabahinipati"
    },
    {
      title: "Top Performer in Machine Learning Deployments",
      organization: "Industry Internship Award",
      year: "2024",
      category: "Excellence",
      desc: "Recognized for architecting reusable Scikit-learn pipelines that cut feature engineering duration by 40% across cross-functional teams.",
      icon: "award",
      githubUrl: "https://github.com/amrutabahinipati"
    }
  ],
  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering / AI & ML",
      status: "Graduated with Honors",
      location: "India",
      desc: "Coursework in Neural Networks, Deep Learning, Statistical Machine Learning, Data Structures & Algorithms, Database Systems, Cloud Computing.",
      githubUrl: "https://github.com/amrutabahinipati"
    }
  ],
  certifications: [
    {
      name: "Deep Learning & Neural Networks with TensorFlow",
      issuer: "DeepLearning.AI / Coursera",
      status: "Verified Credential",
      skills: "ANN, CNN, RNN, Transfer Learning, Optimization",
      githubUrl: "https://github.com/amrutabahinipati"
    },
    {
      name: "Generative AI with Large Language Models (LLMs)",
      issuer: "AWS & DeepLearning.AI",
      status: "Verified Credential",
      skills: "Transformers, RAG, Fine-Tuning, PEFT, Prompt Engineering",
      githubUrl: "https://github.com/amrutabahinipati"
    },
    {
      name: "MLOps: Machine Learning in Production & Docker",
      issuer: "Professional Certification",
      status: "Verified Credential",
      skills: "Docker, Flask, FastAPI, AWS S3/EC2, CI/CD Pipelines",
      githubUrl: "https://github.com/amrutabahinipati"
    }
  ]
};

export const stations = [
  { id: 0, name: "Developer Sanctuary", code: "PAD-00", planet: "Planet Cyber-Prime", subtitle: "Profile & Workstation", color: "#00F0FF" },
  { id: 1, name: "Neural Constellation", code: "PAD-01", planet: "Planet Cyan-Glow", subtitle: "Technical Skills", color: "#FF007A" },
  { id: 2, name: "Quantum Foundry", code: "PAD-02", planet: "Gas Giant Obsidian-V", subtitle: "Work Experience", color: "#7928CA" },
  { id: 3, name: "Orbital Nexus", code: "PAD-03", planet: "Galactic Asteroid Citadel", subtitle: "Key AI/ML Projects", color: "#00E599" },
  { id: 4, name: "Stellar Apex", code: "PAD-04", planet: "Solar Pulsar Beacon", subtitle: "Education & Honors", color: "#FFB800" }
];
