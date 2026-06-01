const siteConfig = {
  profile: {
    name: "Ryan Liu",
    intro:
      "Undergraduate at Central South University. Currently exploring multimodal LLMs and AI agents.",
    location: "Changsha, China",
  },

  education: {
    school: "Central South University",
    major: "B.S. in Information and Computing Science",
    period: "2023.09 — 2027.06",
  },

  awards: [
    { title: "Outstanding Winner & ASA Award", event: "MCM", date: "2026.01" },
    { title: "Silver Medal", event: "ICPC Asia Regional (Hangzhou)", date: "2024.10" },
  ],

  research: {
    title: "Video Transmission Optimization in Multimodal LLM Real-time Communication",
    period: "2026.03 — Present",
    points: [
      "Explored adaptive frame rate strategies to reduce end-to-end latency in real-time video transmission for multimodal LLMs",
      "Built the full infrastructure from scratch: model inference service, data pipeline, and end-to-end integration",
    ],
  },

  projects: [
    {
      title: "csbaoyan-chat-daily",
      summary:
        "Automated data processing pipeline powered by LLMs that cleanses, anonymizes, and extracts semantics from massive unstructured group chat logs, generating structured daily digests with multi-platform auto-distribution.",
      stack: ["Python", "LLM", "GitHub Pages"],
      href: "https://csbaoyan.icelon.top",
      repo: "https://github.com/jielosc/csbaoyan-chat-daily",
      status: "67 Stars",
    },
  ],

  about: {
    paragraphs: [
      "ENTP. Strong curiosity for cutting-edge technology, passionate about exploring challenging technical problems.",
      "Interests: programming, gaming, frontier tech, music, table tennis.",
    ],
  },

  contacts: [
    {
      label: "GitHub",
      value: "jielosc",
      href: "https://github.com/jielosc",
    },
    {
      label: "Telegram",
      value: "@ghoogloo",
      href: "https://t.me/ghoogloo",
    },
  ],
};

const setText = (selector, value) => {
  const el = document.querySelector(selector);
  if (el) el.textContent = value;
};

const renderEducation = () => {
  const el = document.querySelector("#education-content");
  if (!el) return;
  const d = siteConfig.education;
  el.innerHTML = `
    <div class="edu-row">
      <span class="edu-school">${d.school}</span>
      <span class="edu-period">${d.period}</span>
    </div>
    <div class="edu-detail">${d.major}</div>
  `;
};

const renderAwards = () => {
  const el = document.querySelector("#awards-list");
  if (!el) return;
  el.innerHTML = siteConfig.awards
    .map(
      (a) => `
      <div class="award-row">
        <div class="award-main">
          <span class="award-title">${a.title}</span>
          ${a.event ? `<span class="award-event">${a.event}</span>` : ""}
        </div>
        <span class="award-date">${a.date}</span>
      </div>
    `
    )
    .join("");
};

const renderResearch = () => {
  const el = document.querySelector("#research-content");
  if (!el) return;
  const r = siteConfig.research;
  el.innerHTML = `
    <div class="research-header">
      <span class="research-title">${r.title}</span>
      <span class="research-period">${r.period}</span>
    </div>
    <ul class="research-points">
      ${r.points.map((p) => `<li>${p}</li>`).join("")}
    </ul>
  `;
};

const renderProjects = () => {
  const el = document.querySelector("#project-grid");
  if (!el) return;
  el.innerHTML = siteConfig.projects
    .map(
      (p) => `
      <article class="project-card">
        <div class="project-head">
          <h3>${p.title}</h3>
          <span class="project-status">${p.status}</span>
        </div>
        <p class="project-stack">${p.stack.join(" · ")}</p>
        <p class="project-summary">${p.summary}</p>
        <div class="project-links">
          ${
            p.href
              ? `<a href="${p.href}" target="_blank" rel="noreferrer">Live</a>`
              : ""
          }
          ${
            p.repo && p.repo !== p.href
              ? `<a href="${p.repo}" target="_blank" rel="noreferrer">Repo</a>`
              : ""
          }
        </div>
      </article>
    `
    )
    .join("");
};

const renderAbout = () => {
  const el = document.querySelector("#about-content");
  if (!el) return;
  el.innerHTML = siteConfig.about.paragraphs
    .map((p) => `<p>${p}</p>`)
    .join("");
};

const renderContacts = () => {
  const el = document.querySelector("#contact-list");
  if (!el) return;
  el.innerHTML = siteConfig.contacts
    .map(
      (c) => `
      <div class="contact-row">
        <span class="contact-label">${c.label}</span>
        ${
          c.href
            ? `<a href="${c.href}" target="_blank" rel="noreferrer">${c.value}</a>`
            : `<span>${c.value}</span>`
        }
      </div>
    `
    )
    .join("");
};

const setupReveal = () => {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  items.forEach((item, i) => {
    item.style.transitionDelay = `${Math.min(i * 60, 300)}ms`;
    observer.observe(item);
  });
};

const init = () => {
  setText("#hero-name", siteConfig.profile.name);
  setText("#hero-intro", siteConfig.profile.intro);
  setText("#profile-location", siteConfig.profile.location);
  setText("#footer-year", new Date().getFullYear());

  renderEducation();
  renderAwards();
  renderResearch();
  renderProjects();
  renderAbout();
  renderContacts();
  setupReveal();
};

init();
