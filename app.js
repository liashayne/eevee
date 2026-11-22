const CHARACTERS = {
  A: {
    role: "A",
    title: "The Eco-Architect",
    subtitle: "The Maker",
    traits: ["CREATIVE TINKERER", "SYSTEMS BUILDER", "TECH INNOVATOR"],
    description:
      "You are the one who naturally brings abstract ideas to life. You love figuring out how things work, building prototypes, and designing smart solutions that make sustainability functional and exciting.",
    ownBestieNote:
      "Your best match is someone who spots everyday community needs while you engineer clever, hands-on fixes together.",
    image: "./assets/roles/role-a.jpg",
    bestieLabel: "The Climate Changemaker",
    bestieImage: "./assets/roles/role-d.jpg",
    primaryBoardId: 1,
    ctaText: "Unlock Your Gift at Your Board (While Stocks Last)!"
  },
  B: {
    role: "B",
    title: "The Wildlife Guardian",
    subtitle: "The Protector",
    traits: ["NATURE DEFENDER", "EMPATHETIC OBSERVER", "HABITAT STEWARD"],
    description:
      "You notice the quiet details of the living world that others rush past. You care deeply about protecting ecosystems, biodiversity, and the creatures that share our spaces.",
    ownBestieNote:
      "Your best match is someone who brings vibrant energy to shared meals and gatherings while keeping nature front and center.",
    image: "./assets/roles/role-b.jpg",
    bestieLabel: "The Food Lover",
    bestieImage: "./assets/roles/role-c.jpg",
    primaryBoardId: 3,
    ctaText: "Unlock Your Gift at Your Board (While Stocks Last)!"
  },
  C: {
    role: "C",
    title: "The Food Lover",
    subtitle: "The Nourisher",
    traits: ["CONSCIOUS TASTER", "COMMUNITY CONNECTOR", "SEASONAL CURATOR"],
    description:
      "For you, sustainability starts at the table. You celebrate local ingredients, mindful sourcing, and the joy of bringing people together over food that respects both craft and planet.",
    ownBestieNote:
      "Your best match is someone who protects the land and wildlife behind every ingredient you love sharing.",
    image: "./assets/roles/role-c.jpg",
    bestieLabel: "The Wildlife Guardian",
    bestieImage: "./assets/roles/role-b.jpg",
    primaryBoardId: 6,
    ctaText: "Unlock Your Gift at Your Board (While Stocks Last)!"
  },
  D: {
    role: "D",
    title: "The Climate Changemaker",
    subtitle: "The Catalyst",
    traits: ["BOLD ADVOCATE", "ACTION SPARK", "FUTURE VISIONARY"],
    description:
      "You turn concern into momentum. Whether rallying friends, starting conversations, or pushing for greener choices, you help others see that small collective actions add up fast.",
    ownBestieNote:
      "Your best match is someone who turns your big momentum into practical prototypes and lasting systems.",
    image: "./assets/roles/role-d.jpg",
    bestieLabel: "The Eco-Architect",
    bestieImage: "./assets/roles/role-a.jpg",
    primaryBoardId: 9,
    ctaText: "Unlock Your Gift at Your Board (While Stocks Last)!"
  }
};

const QUESTIONS = [
  {
    id: 1,
    prompt: "When you walk into a creative space or venue, what catches your eye first?",
    options: [
      { text: "Clever structures, upcycled materials, and how the space is put together", role: "A" },
      { text: "Plants, natural textures, and signs of care for living things", role: "B" },
      { text: "Where snacks or drinks come from and how thoughtfully they're prepared", role: "C" },
      { text: "Ideas, messages, and energy that inspire people to take action", role: "D" }
    ]
  },
  {
    id: 2,
    prompt: "A friend wants to start a greener habit this week. How do you help?",
    options: [
      { text: "Help them set up a practical system or DIY swap that makes it effortless", role: "A" },
      { text: "Share how it protects local habitats, animals, or natural spaces", role: "B" },
      { text: "Suggest a tasty local or low-waste food swap they'll actually look forward to", role: "C" },
      { text: "Cheer them on, keep them motivated, and invite others to join in", role: "D" }
    ]
  },
  {
    id: 3,
    prompt: "Which weekend project sounds most fun to you?",
    options: [
      { text: "Building, fixing, or designing something useful from scratch", role: "A" },
      { text: "Spending time outdoors learning about native plants and wildlife", role: "B" },
      { text: "Experimenting with seasonal recipes or visiting a farmers' market", role: "C" },
      { text: "Hosting a mini swap, cleanup, or campaign with friends", role: "D" }
    ]
  },
  {
    id: 4,
    prompt: "What kind of impact makes you feel proudest?",
    options: [
      { text: "Making a smart, durable solution that works in real life", role: "A" },
      { text: "Helping living creatures and natural environments thrive", role: "B" },
      { text: "Connecting people through good food and mindful choices", role: "C" },
      { text: "Sparking conversations and shifting habits across a group", role: "D" }
    ]
  },
  {
    id: 5,
    prompt: "Pick the scrapbook sticker or item you'd add to your board:",
    options: [
      { text: "A blueprint sketch or mini tool kit", role: "A" },
      { text: "A pressed leaf, bird illustration, or forest badge", role: "B" },
      { text: "A citrus slice, herb sprig, or recipe card", role: "C" },
      { text: "A megaphone, sunburst, or 'Let's Go!' banner", role: "D" }
    ]
  },
  {
    id: 6,
    prompt: "How do you usually approach a big sustainability challenge?",
    options: [
      { text: "Break it down into parts and prototype a workable fix", role: "A" },
      { text: "Start by protecting what's most vulnerable around you", role: "B" },
      { text: "Look at daily routines—especially what we eat and share", role: "C" },
      { text: "Rally people together and keep the momentum going", role: "D" }
    ]
  }
];

const BOARDS = {
  1: {
    id: 1,
    pin: "1042",
    question: "Board #1 Trivia: What is a key benefit of designing modular or repairable items?",
    options: [
      "They extend product lifespan and reduce whole-item waste",
      "They require single-use glue so parts never separate",
      "They must be thrown away as soon as one piece wears out"
    ],
    correctIndex: 0
  },
  3: {
    id: 3,
    pin: "3087",
    question: "Board #3 Trivia: Why do native plants matter so much for local wildlife?",
    options: [
      "They provide familiar food and shelter adapted to local pollinators and birds",
      "They stop all insects from visiting a garden",
      "They need heavy chemical treatments every week"
    ],
    correctIndex: 0
  },
  6: {
    id: 6,
    pin: "6159",
    question: "Board #6 Trivia: What is one simple way to cut food waste at home or events?",
    options: [
      "Plan portions ahead and store or repurpose leftovers creatively",
      "Cook double portions with no plan for extras",
      "Buy perishable items only when already overripe"
    ],
    correctIndex: 0
  },
  9: {
    id: 9,
    pin: "9274",
    question: "Board #9 Trivia: Why does community action matter in climate solutions?",
    options: [
      "Shared habits and group norms multiply individual effort into visible change",
      "Group efforts never influence what others try",
      "Only silent, isolated actions can ever inspire others"
    ],
    correctIndex: 0
  }
};

const STORAGE_KEY = "eevee_quiz_session_v1";

const state = {
  screen: "home",
  qIndex: 0,
  answers: [],
  role: null,
  modal: null,
  selectedBoardId: null,
  pinInput: "",
  feedbackMessage: "",
  shakeModal: false,
  token: null,
  redeemed: false
};

let holdTimerId = null;
let holdRafId = null;

function loadSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (_) {
    return null;
  }
}

function saveSession(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (_) {
    // Ignore storage quota or private mode errors
  }
}

function calculateRole(answers) {
  const counts = { A: 0, B: 0, C: 0, D: 0 };
  for (const r of answers) {
    if (counts[r] !== undefined) counts[r] += 1;
  }

  let topScore = -1;
  let tiedRoles = [];
  for (const roleKey of ["A", "B", "C", "D"]) {
    if (counts[roleKey] > topScore) {
      topScore = counts[roleKey];
      tiedRoles = [roleKey];
    } else if (counts[roleKey] === topScore) {
      tiedRoles.push(roleKey);
    }
  }

  if (tiedRoles.length === 1) return tiedRoles[0];
  const q1Role = answers[0];
  if (q1Role && tiedRoles.includes(q1Role)) return q1Role;
  return tiedRoles[0] || "A";
}

function generateToken(role) {
  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  return `EEVEE-${role}-${randomDigits}`;
}

function findBoardByPin(pin) {
  const trimmed = String(pin || "").trim();
  return Object.values(BOARDS).find((b) => b.pin === trimmed) || null;
}

const appEl = document.getElementById("app");
const modalRootEl = document.getElementById("modal-root");

function render() {
  clearHoldAnimation();
  renderScreen();
  renderModal();
}

function renderScreen() {
  appEl.classList.toggle("reveal-screen", state.screen === "reveal");

  if (state.screen === "home") {
    appEl.innerHTML = `
      <section class="scrap-card no-margin-line">
        <div class="washi-tape"></div>
        <div class="progress-pill">Venue Challenge • 6 Questions</div>
        <h1 class="hand-title" style="font-size: 2rem;">Meet Your Sustainability Hero</h1>
        <p class="hand-note">
          Take a quick 6-question quiz to uncover your eco archetype, match with your eco bestie,
          and unlock a board reward at the venue.
        </p>
        <button id="start-quiz-btn" class="primary-btn" type="button">Start Quiz</button>
      </section>
    `;

    document.getElementById("start-quiz-btn").addEventListener("click", () => {
      state.screen = "quiz";
      state.qIndex = 0;
      state.answers = [];
      state.role = null;
      state.modal = null;
      state.feedbackMessage = "";
      render();
    });
    return;
  }

  if (state.screen === "quiz") {
    const q = QUESTIONS[state.qIndex];
    appEl.innerHTML = `
      <section class="scrap-card">
        <div class="washi-tape teal"></div>
        <div class="progress-pill">Question ${state.qIndex + 1} of ${QUESTIONS.length}</div>
        <h1 class="hand-title" style="font-size: 1.45rem;">${q.prompt}</h1>
        <div class="option-list">
          ${q.options
            .map(
              (opt, idx) => `
                <button class="option-btn" type="button" data-option-idx="${idx}">
                  ${opt.text}
                </button>
              `
            )
            .join("")}
        </div>
      </section>
    `;

    appEl.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-option-idx"));
        state.answers.push(q.options[idx].role);
        if (state.qIndex + 1 < QUESTIONS.length) {
          state.qIndex += 1;
        } else {
          state.role = calculateRole(state.answers);
          state.screen = "reveal";
        }
        render();
      });
    });
    return;
  }

  if (state.screen === "reveal") {
    const hero = CHARACTERS[state.role];
    appEl.innerHTML = `
      <section class="scrap-card no-margin-line">
        <div class="washi-tape coral"></div>

        <p class="reveal-eyebrow">You are...</p>
        <h1 class="reveal-hero-name">${hero.title.toUpperCase()}</h1>
        <div class="reveal-subtitle">${hero.subtitle}</div>

        <div class="hero-print-wrap">
          <img class="hero-print-img" src="${hero.image}" alt="${hero.title}" />
        </div>

        <div class="trait-row">
          ${hero.traits.map((t) => `<span class="trait-tag">${t}</span>`).join("")}
        </div>

        <p class="hero-bio">${hero.description}</p>
      </section>

      <section class="own-bestie-card">
        <h2 class="own-bestie-heading">Your own eco bestie</h2>
        <p class="own-bestie-note">${hero.ownBestieNote}</p>
      </section>

      <div class="bestie-section">
        <div class="bestie-label">Your eco bestie</div>
        <div class="polaroid-frame">
          <img src="${hero.bestieImage}" alt="${hero.bestieLabel}" />
          <div class="polaroid-caption">${hero.bestieLabel}</div>
        </div>
      </div>

      <button id="open-pin-btn" class="primary-btn" type="button">${hero.ctaText}</button>
    `;

    document.getElementById("open-pin-btn").addEventListener("click", () => {
      state.modal = "pin";
      state.feedbackMessage = "";
      state.shakeModal = false;
      render();
    });
    return;
  }

  if (state.screen === "reward") {
    const hero = CHARACTERS[state.role];
    saveSession({
      role: state.role,
      token: state.token,
      redeemed: state.redeemed
    });

    appEl.innerHTML = `
      ${state.redeemed ? `<div class="redeemed-stamp">REDEEMED</div>` : ""}
      <section class="scrap-card no-margin-line">
        <div class="washi-tape"></div>

        <div class="reward-hero-wrap">
          <img class="reward-hero-img" src="${hero.image}" alt="${hero.title}" />
          <img class="crown-overlay" src="./assets/victory-crown.png" alt="Victory Crown" />
        </div>

        <h1 class="hand-title" style="font-size: 2rem; text-align: center;">${hero.title}</h1>

        <div class="token-badge">
          <div style="font-size: 0.78rem; text-transform: uppercase; font-weight: 700; color: var(--ink-muted);">
            Reward Token
          </div>
          <div class="token-code">${state.token}</div>
        </div>

        ${
          state.redeemed
            ? `<div class="feedback-box" style="text-align: center; font-weight: 700;">
                This reward has been verified and stamped as REDEEMED.
              </div>`
            : `<button id="hold-redeem-btn" class="hold-btn" type="button">
                <span class="hold-fill"></span>
                <span class="hold-label">Staff Verification</span>
              </button>`
        }
      </section>
    `;

    if (!state.redeemed) {
      setupPressAndHold(document.getElementById("hold-redeem-btn"));
    }
  }
}

function renderModal() {
  if (!state.modal) {
    modalRootEl.innerHTML = "";
    return;
  }

  const hero = CHARACTERS[state.role];
  const shakeClass = state.shakeModal ? "shake" : "";

  if (state.modal === "pin") {
    modalRootEl.innerHTML = `
      <div class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="pin-modal-title">
        <section class="scrap-card no-margin-line modal-card ${shakeClass}">
          <div class="washi-tape teal"></div>
          <h2 id="pin-modal-title" class="hand-title" style="font-size: 1.65rem;">Enter Board PIN</h2>
          <p class="hand-note" style="margin: 0;">
            Head to <strong>Board #${hero.primaryBoardId}</strong> (${hero.title}) and enter its 4-digit PIN.
          </p>
          <input
            id="board-pin-input"
            class="pin-input"
            type="text"
            inputmode="numeric"
            maxlength="4"
            placeholder="••••"
            value="${state.pinInput}"
            autocomplete="off"
          />
          ${state.feedbackMessage ? `<div class="feedback-box">${state.feedbackMessage}</div>` : ""}
          <button id="submit-pin-btn" class="primary-btn" type="button">Verify PIN</button>
          <button id="close-modal-btn" class="option-btn" style="margin-top: 8px; text-align: center;" type="button">
            Back to Hero Card
          </button>
        </section>
      </div>
    `;

    const inputEl = document.getElementById("board-pin-input");
    inputEl.focus();
    inputEl.addEventListener("input", (e) => {
      state.pinInput = e.target.value.replace(/\D/g, "").slice(0, 4);
      e.target.value = state.pinInput;
    });

    document.getElementById("submit-pin-btn").addEventListener("click", handlePinSubmit);
    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handlePinSubmit();
    });

    document.getElementById("close-modal-btn").addEventListener("click", () => {
      state.modal = null;
      state.feedbackMessage = "";
      state.shakeModal = false;
      render();
    });
    return;
  }

  if (state.modal === "trivia") {
    const board = BOARDS[state.selectedBoardId];
    modalRootEl.innerHTML = `
      <div class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="trivia-modal-title">
        <section class="scrap-card no-margin-line modal-card ${shakeClass}">
          <div class="washi-tape coral"></div>
          <div class="progress-pill">Board #${board.id} Challenge</div>
          <h2 id="trivia-modal-title" class="hand-title" style="font-size: 1.45rem;">${board.question}</h2>
          <div class="option-list">
            ${board.options
              .map(
                (opt, idx) => `
                  <button class="option-btn" type="button" data-trivia-idx="${idx}">
                    ${opt}
                  </button>
                `
              )
              .join("")}
          </div>
          ${state.feedbackMessage ? `<div class="feedback-box">${state.feedbackMessage}</div>` : ""}
          <button id="close-trivia-btn" class="option-btn" style="margin-top: 10px; text-align: center;" type="button">
            Cancel
          </button>
        </section>
      </div>
    `;

    modalRootEl.querySelectorAll("[data-trivia-idx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chosen = Number(btn.getAttribute("data-trivia-idx"));
        if (chosen === board.correctIndex) {
          state.modal = null;
          state.feedbackMessage = "";
          state.shakeModal = false;
          state.token = state.token || generateToken(state.role);
          state.redeemed = false;
          state.screen = "reward";
          render();
        } else {
          state.feedbackMessage = "Not quite! Give that trivia question another try.";
          state.shakeModal = true;
          render();
          setTimeout(() => {
            state.shakeModal = false;
            renderModal();
          }, 380);
        }
      });
    });

    document.getElementById("close-trivia-btn").addEventListener("click", () => {
      state.modal = null;
      state.feedbackMessage = "";
      state.shakeModal = false;
      render();
    });
  }
}

function handlePinSubmit() {
  const hero = CHARACTERS[state.role];
  const matchedBoard = findBoardByPin(state.pinInput);

  if (!matchedBoard) {
    state.feedbackMessage = "Incorrect PIN. Check the 4-digit code on your board and try again.";
    state.shakeModal = true;
    render();
    setTimeout(() => {
      state.shakeModal = false;
      renderModal();
    }, 380);
    return;
  }

  if (matchedBoard.id !== hero.primaryBoardId) {
    state.feedbackMessage = `That PIN belongs to Board #${matchedBoard.id}. Head to Board #${hero.primaryBoardId} for ${hero.title}!`;
    state.shakeModal = true;
    render();
    setTimeout(() => {
      state.shakeModal = false;
      renderModal();
    }, 380);
    return;
  }

  state.selectedBoardId = matchedBoard.id;
  state.pinInput = "";
  state.feedbackMessage = "";
  state.shakeModal = false;
  state.modal = "trivia";
  render();
}

function clearHoldAnimation() {
  if (holdTimerId) {
    clearTimeout(holdTimerId);
    holdTimerId = null;
  }
  if (holdRafId) {
    cancelAnimationFrame(holdRafId);
    holdRafId = null;
  }
}

function setupPressAndHold(btnEl) {
  if (!btnEl) return;
  const DURATION_MS = 2000;
  let startTime = null;

  const updateProgress = (now) => {
    if (!startTime) startTime = now;
    const elapsed = now - startTime;
    const pct = Math.min(100, (elapsed / DURATION_MS) * 100);
    btnEl.style.setProperty("--hold-progress", `${pct}%`);
    if (pct < 100) {
      holdRafId = requestAnimationFrame(updateProgress);
    }
  };

  const startHold = (e) => {
    e.preventDefault();
    clearHoldAnimation();
    startTime = performance.now();
    holdRafId = requestAnimationFrame(updateProgress);

    holdTimerId = setTimeout(() => {
      clearHoldAnimation();
      state.redeemed = true;
      saveSession({
        role: state.role,
        token: state.token,
        redeemed: true
      });
      render();
    }, DURATION_MS);
  };

  const cancelHold = () => {
    clearHoldAnimation();
    btnEl.style.setProperty("--hold-progress", "0%");
  };

  btnEl.addEventListener("pointerdown", startHold);
  btnEl.addEventListener("pointerup", cancelHold);
  btnEl.addEventListener("pointerleave", cancelHold);
  btnEl.addEventListener("pointercancel", cancelHold);
}

(function init() {
  const existing = loadSession();
  if (existing && existing.role && CHARACTERS[existing.role] && existing.token) {
    state.role = existing.role;
    state.token = existing.token;
    state.redeemed = Boolean(existing.redeemed);
    state.screen = "reward";
  }
  render();
})();