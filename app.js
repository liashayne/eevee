const QUESTIONS = [
  {
    id: "q1",
    text: "What’s your ideal way to spend a chill Saturday morning?",
    isTieBreaker: true,
    options: [
      { key: "A", label: "Heading outdoors for a walk in nature to unwind and recharge.", role: "B" },
      { key: "B", label: "Tinkering with a fun craft or project and letting my creative juices flow.", role: "A" },
      { key: "C", label: "Journaling, reflecting on the week, and catching up on an insightful podcast or book.", role: "D" },
      { key: "D", label: "Preparing a cozy homemade meal to share with people I love.", role: "C" }
    ]
  },
  {
    id: "q2",
    text: "What do you like most about starting a new project?",
    isTieBreaker: false,
    options: [
      { key: "A", label: "Designing the master blueprint—mapping out how all the moving pieces fit into the big picture.", role: "D" },
      { key: "B", label: "Encouraging the team - making sure that everyone is well-fed, energised and ready to collaborate", role: "C" },
      { key: "C", label: "Making the physical or digital prototype—turning an abstract idea into something tangible.", role: "A" },
      { key: "D", label: "Doing the preliminary fieldwork—getting out into the space, observing details, and gathering facts.", role: "B" }
    ]
  },
  {
    id: "q3",
    text: "What kind of environment helps you to think?",
    isTieBreaker: false,
    options: [
      { key: "A", label: "A dynamic work space packed with different tools and materials.", role: "A" },
      { key: "B", label: "A quiet nook with a cup of coffee/tea and a notebook.", role: "D" },
      { key: "C", label: "A calming space in nature surrounded by greenery.", role: "B" },
      { key: "D", label: "A warm communal space filled with conversation, food, and good energy.", role: "C" }
    ]
  },
  {
    id: "q4",
    text: "What is/was your favourite subject in school?",
    isTieBreaker: false,
    options: [
      { key: "A", label: "Home Economics/Food and Consumer Education (FCE): Learning how to put together a delicious and nutritious menu", role: "C" },
      { key: "B", label: "Biology/Geography: Understanding ecosystems, and how the physical world works.", role: "B" },
      { key: "C", label: "History/Social Studies: Understanding how our actions affect the world around us", role: "D" },
      { key: "D", label: "Design & Technology/Art: Hands-on creation and bringing ideas to life visually.", role: "A" }
    ]
  },
  {
    id: "q5",
    text: "What is your favourite movie genre?",
    isTieBreaker: false,
    options: [
      { key: "A", label: "Nature Documentaries: Immersive, grounded stories showcasing hidden natural wonders.", role: "B" },
      { key: "B", label: "Sci-Fi: Full of futuristic gadgets and cool visual effects.", role: "A" },
      { key: "C", label: "Thrillers/Dramas: Complex narratives packed with strategy and high-stakes decisions.", role: "D" },
      { key: "D", label: "Romantic Comedies/Reality TV: Feel-good stories centered around human connection and community.", role: "C" }
    ]
  },
  {
    id: "q6",
    text: "What's your travel style when exploring a brand-new city?",
    isTieBreaker: false,
    options: [
      { key: "A", label: "Visiting national museums and learning the history and culture of a city.", role: "D" },
      { key: "B", label: "Visiting bustling local markets and eating where the locals gather.", role: "C" },
      { key: "C", label: "Hunting down hidden creative spaces and visiting modern design museums.", role: "A" },
      { key: "D", label: "Exploring natural parks, botanical reserves, and coastal trails.", role: "B" }
    ]
  }
];

const CHARACTERS = {
  A: {
    role: "A",
    title: "The Eco-Architect",
    subtitle: "The Maker",
    traits: ["CREATIVE TINKERER", "SYSTEMS BUILDER", "TECH INNOVATOR"],
    description:
      "You are the one who naturally brings abstract ideas to life. You love figuring out how things work, building prototypes, and designing smart solutions that make sustainability functional and exciting.",
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
    traits: ["GROUND-UP RESEARCHER", "NATURE LOVER", "DETAIL-ORIENTED"],
    description:
      "You are the one who wholeheartedly connects with the natural world. You value ground-level facts, care deeply about preserving biodiversity, and notice the critical ecological details others often miss.",
    image: "./assets/roles/role-b.jpg",
    bestieLabel: "The Food Lover",
    bestieImage: "./assets/roles/role-c.jpg",
    primaryBoardId: 6,
    ctaText: "Unlock Your Gift at Your Board (While Stocks Last)!"
  },
  C: {
    role: "C",
    title: "The Food Lover",
    subtitle: "The Collaborator",
    traits: ["COMMUNITY CONNECTOR", "COLLABORATION BUILDER", "WARM PRESENCE"],
    description:
      "You are the one who naturally brings people together. Whether through shared meals, community spaces, or fostering local collaboration, you know that sustainability thrives on human connection.",
    image: "./assets/roles/role-c.jpg",
    bestieLabel: "The Wildlife Guardian",
    bestieImage: "./assets/roles/role-b.jpg",
    primaryBoardId: 3,
    ctaText: "Unlock Your Gift at Your Board (While Stocks Last)!"
  },
  D: {
    role: "D",
    title: "The Climate Changemaker",
    subtitle: "The Visionary",
    traits: ["MACRO THINKER", "PATTERN FINDER", "STRATEGIC PLANNER"],
    description:
      "You are the one who naturally zooms out to see the whole board. You analyse global trends, understand complex policy systems, and look for deep structural solutions to secure a sustainable future.",
    image: "./assets/roles/role-d.jpg",
    bestieLabel: "The Eco-Architect",
    bestieImage: "./assets/roles/role-a.jpg",
    primaryBoardId: 9,
    ctaText: "Unlock Your Gift at Your Board (While Stocks Last)!"
  }
};

const BOARDS = [
  {
    id: 1,
    title: "Too Cool for Fuel",
    pin: "1235",
    question:
      "The Flower Dome is cooled using alternative cooling technologies. Complete the sentence: By only cooling ________________, less energy is used.",
    options: [
      "the walls of the Flower Dome",
      "the glass panels of the Flower Dome",
      "the area of the Flower Dome where plants and people are present",
      "the planter boxes in the Flower Dome"
    ],
    correctIndex: 2,
    hint: "Who/What benefits from the cool air?"
  },
  {
    id: 2,
    title: "Guardians of the Grove",
    pin: "5462",
    question:
      "Global warming causes unfavourable weather conditions for all plants grown for food, including olive trees. One of the consequences of this is smaller harvests. What are the consequences of a smaller harvest for humans?",
    options: [
      "Less food is produced for local consumption.",
      "Less food is produced for export, affecting the country’s economy.",
      "Local farmers earn less.",
      "All of the above."
    ],
    correctIndex: 3,
    hint: "Global warming has widespread impact."
  },
  {
    id: 3,
    title: "Grow it Yourself!",
    pin: "2168",
    question:
      "Gardening enthusiasts in the neighbourhood often work together to start and look after community gardens, providing both social and environmental benefits. Which of the following is a social benefit of having community gardens in neighbourhoods?",
    options: [
      "They attract pollinators like birds and insects.",
      "They provide a space for people to meet and build friendships.",
      "They beautify the neighbourhood.",
      "They provide fresh ingredients for local residents."
    ],
    correctIndex: 1,
    hint: "“Social” refers to human connection and community building. How do community gardens improve community ties?"
  },
  {
    id: 4,
    title: "Green is Cool",
    pin: "3548",
    question: "Why are the Supertrees covered with many plants?",
    options: [
      "The plants help to keep their surroundings cool.",
      "The roots of the plants keep the Supertrees upright.",
      "The plants prevent mosquito breeding by absorbing water from the Supertrees.",
      "The plants absorb nutrients from the Supertree."
    ],
    correctIndex: 0,
    hint: "Look at the panel again - Other than beautifying the Supertrees, what is another benefit of growing plants on the Supertrees?"
  },
  {
    id: 5,
    title: "The Lake Cycle",
    pin: "8798",
    question: "Which of the Four National Taps does Dragonfly Lake contribute to?",
    options: [
      "Water from local catchment",
      "NEWater",
      "Imported water",
      "Desalinated water"
    ],
    correctIndex: 0,
    hint: "Where does water from Dragonfly Lake flow into?"
  },
  {
    id: 6,
    title: "The Amazon River",
    pin: "5468",
    question:
      "Singapore may be far away from the Amazon, but we can also do our part to protect its biodiversity. What should we avoid doing to protect biodiversity in the Amazon?",
    options: [
      "Choose paper products from sustainable sources",
      "Learn about the Amazon and share what we have learnt with our family and friends",
      "Use more paper",
      "Reduce our consumption of beef, palm oil, and soybeans."
    ],
    correctIndex: 2,
    hint: "pssstt...the question is asking for what we should AVOID"
  },
  {
    id: 7,
    title: "Superpowered Supertrees",
    pin: "8756",
    question:
      "The Supertrees are part of Gardens by the Bay’s sustainability efforts. How do the Supertrees help to power the Gardens sustainably?",
    options: [
      "Turbines on the top of the Supertrees are turned when it is windy, converting kinetic energy into electricity.",
      "Turbines on the top of the Supertrees are turned when there is heavy rain, converting kinetic energy into electricity.",
      "Solar panels on the top of the Supertrees absorb solar energy which is converted into electricity.",
      "The Supertrees absorb heat which is used to generate steam. The steam turns turbines in a room under the Supertrees."
    ],
    correctIndex: 2,
    hint: "The Supertrees light up beautifully every night. Where do you think that energy was collected during the day?"
  },
  {
    id: 8,
    title: "Food for Thought",
    pin: "1568",
    question:
      "Climate change has affected farmers and the crops they grow. Should climate change worsen, food supplies around the world will be affected. How does climate change affect food supplies?",
    options: [
      "Crops grow poorly due to unfavourable weather conditions. Farmers are unable to grow enough food.",
      "More storms occur due to unpredictable weather patterns. Ships and airplanes face difficulties transporting food around the world.",
      "More heat-related injuries are occurring due to increasing temperatures. Farmers spend less time in the fields to prevent heatstroke.",
      "Roads are cut off due to more intense flooding. Trucks are unable to deliver equipment and supplies that farmers need."
    ],
    correctIndex: 0,
    hint: "“Food supplies” refers to the amount of food available. How does climate change affect the amount of food produced?"
  },
  {
    id: 9,
    title: "Climate Change - A Global Problem",
    pin: "9849",
    question: "How do human activities speed up climate change?",
    options: [
      "Human activities release more greenhouse gases than needed to keep Earth warm, causing more heat to be trapped in the atmosphere.",
      "Human activities release greenhouse gases that damage the atmosphere, causing more heat from the sun to reach Earth.",
      "Human activities release greenhouse gases that are flammable, causing more intense forest fires which generates more heat.",
      "Human activities release greenhouse gases which form a layer over the Earth’s surface, preventing the cold temperatures in space from cooling Earth."
    ],
    correctIndex: 0,
    hint: "Look at the panel again – What do greenhouse gases in the atmosphere cause?"
  },
  {
    id: 10,
    title: "Every Move Matters",
    pin: "4879",
    question:
      "Some Mercedes-Benz cars give waste a second life. Which of the following is a material used to make selected vehicle parts?",
    options: [
      "Newspapers",
      "Old fishing nets",
      "Aluminum cans",
      "Glass bottles"
    ],
    correctIndex: 1,
    hint: "Look at the “Materials” section closely!"
  }
];

const STORAGE_KEY = "eevee_game_session_v1";

function generateEcoToken() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 4; i += 1) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return `#ECO-${code}`;
}

function loadSavedSession() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null;
  } catch {
    return null;
  }
}

function saveSession(session) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
  } catch {
    // Ignore storage quota or private mode restrictions
  }
}

function calculateMatchedRole(answers) {
  const tally = { A: 0, B: 0, C: 0, D: 0 };
  answers.forEach((opt) => {
    if (opt && tally[opt.role] !== undefined) {
      tally[opt.role] += 1;
    }
  });

  const maxVotes = Math.max(...Object.values(tally));
  const topRoles = Object.keys(tally).filter((role) => tally[role] === maxVotes);

  if (topRoles.length === 1) {
    return topRoles[0];
  }

  // Question 1 explicit tie-breaker
  const q1Role = answers[0]?.role;
  if (q1Role && topRoles.includes(q1Role)) {
    return q1Role;
  }

  return topRoles[0];
}

const state = {
  screen: "home", // "home" | "quiz" | "reveal" | "reward"
  questionIndex: 0,
  answers: [],
  role: null,
  token: null,
  redeemed: false,
  modal: null, // null | "pin" | "trivia"
  shakeModal: false,
  feedbackMessage: ""
};

// Restore completed reward session if already claimed on this device
const saved = loadSavedSession();
if (saved && saved.role && saved.token) {
  state.role = saved.role;
  state.token = saved.token;
  state.redeemed = Boolean(saved.redeemed);
  state.screen = "reward";
}

const appEl = document.getElementById("app");
const modalRootEl = document.getElementById("modal-root");

function getAssignedBoard() {
  const hero = CHARACTERS[state.role];
  return BOARDS.find((b) => b.id === hero?.primaryBoardId) || BOARDS[0];
}

function render() {
  renderScreen();
  renderModal();
}

function renderScreen() {
  if (state.screen === "home") {
    appEl.innerHTML = `
      <section class="scrap-card">
        <div class="washi-tape"></div>
        <div class="pushpin"></div>
        <h1 class="hand-title" style="font-size: 2.5rem;">Discover Your Sustainability Hero!</h1>
        <p class="hand-note">
          6 quick questions to match your eco personality—then visit your board to unlock a gift.
        </p>
        <button id="start-quiz-btn" class="primary-btn" type="button">Start Quiz</button>
      </section>
    `;
    document.getElementById("start-quiz-btn").addEventListener("click", () => {
      state.screen = "quiz";
      state.questionIndex = 0;
      state.answers = [];
      state.feedbackMessage = "";
      render();
    });
    return;
  }

  if (state.screen === "quiz") {
    const q = QUESTIONS[state.questionIndex];
    appEl.innerHTML = `
      <section class="scrap-card">
        <div class="washi-tape teal"></div>
        <div class="pushpin"></div>
        <span class="progress-pill">Question ${state.questionIndex + 1} of ${QUESTIONS.length}</span>
        <h2 class="hand-title" style="font-size: 1.95rem;">${q.text}</h2>
        <div class="option-list">
          ${q.options
            .map(
              (opt, idx) => `
                <button class="option-btn" type="button" data-opt-index="${idx}">
                  <strong>${opt.key})</strong> ${opt.label}
                </button>
              `
            )
            .join("")}
        </div>
      </section>
    `;

    appEl.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.dataset.optIndex);
        state.answers[state.questionIndex] = q.options[idx];

        if (state.questionIndex < QUESTIONS.length - 1) {
          state.questionIndex += 1;
        } else {
          state.role = calculateMatchedRole(state.answers);
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
        <div class="pushpin"></div>

        <div class="hero-print-wrap">
          <img class="hero-print-img" src="${hero.image}" alt="${hero.title}" />
        </div>

        <h1 class="hand-title" style="font-size: 2.35rem;">You are ${hero.title.toUpperCase()}.</h1>
        <div class="hand-note" style="font-weight: 700; font-size: 1.3rem;">${hero.subtitle}</div>

        <div class="trait-row">
          ${hero.traits.map((t) => `<span class="trait-tag">${t}</span>`).join("")}
        </div>

        <p style="margin: 0; font-size: 0.95rem; line-height: 1.45;">${hero.description}</p>
      </section>

      <div class="bestie-section">
        <div class="bestie-label">Your eco bestie:</div>
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
        <div class="pushpin"></div>

        <div class="hero-print-wrap" style="margin-top: 26px;">
          <img class="crown-overlay" src="./assets/victory-crown.png" alt="Victory Crown" />
          <img class="hero-print-img" src="${hero.image}" alt="${hero.title}" />
        </div>

        <h1 class="hand-title" style="font-size: 2.25rem; text-align: center;">${hero.title}</h1>

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
                <span class="hold-label">Staff Verification (Hold 2s to Stamp)</span>
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
  const board = getAssignedBoard();

  if (!state.modal) {
    modalRootEl.innerHTML = "";
    return;
  }

  if (state.modal === "pin") {
    modalRootEl.innerHTML = `
      <div class="modal-backdrop" role="dialog" aria-modal="true">
        <div class="scrap-card no-margin-line modal-card ${state.shakeModal ? "shake" : ""}">
          <div class="washi-tape teal"></div>
          <h2 class="hand-title" style="font-size: 1.85rem;">
            Find "${board.title}" and key in the 4 digit pin
          </h2>
          <input
            id="pin-input"
            class="pin-input"
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
            maxlength="4"
            placeholder="••••"
            autocomplete="off"
          />
          ${state.feedbackMessage ? `<div class="feedback-box">${state.feedbackMessage}</div>` : ""}
          <button id="submit-pin-btn" class="primary-btn" type="button">Unlock Trivia</button>
        </div>
      </div>
    `;

    const inputEl = document.getElementById("pin-input");
    inputEl.focus();

    document.getElementById("submit-pin-btn").addEventListener("click", () => {
      const entered = inputEl.value.trim();
      if (entered === board.pin) {
        state.modal = "trivia";
        state.feedbackMessage = "";
        state.shakeModal = false;
        render();
      } else {
        state.feedbackMessage = "That PIN doesn't match this board—check the 4-digit sticker and try again.";
        state.shakeModal = true;
        render();
        setTimeout(() => {
          state.shakeModal = false;
        }, 400);
      }
    });
    return;
  }

  if (state.modal === "trivia") {
    modalRootEl.innerHTML = `
      <div class="modal-backdrop" role="dialog" aria-modal="true">
        <div class="scrap-card no-margin-line modal-card ${state.shakeModal ? "shake" : ""}">
          <div class="washi-tape coral"></div>
          <span class="progress-pill">${board.title}</span>
          <h2 class="hand-title" style="font-size: 1.7rem;">${board.question}</h2>
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
          ${
            state.feedbackMessage
              ? `<div class="feedback-box">
                  <strong>Not quite! Try another answer.</strong><br />
                  <span>Hint: ${board.hint}</span>
                </div>`
              : ""
          }
        </div>
      </div>
    `;

    modalRootEl.querySelectorAll("[data-trivia-idx]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const chosen = Number(btn.dataset.triviaIdx);
        if (chosen === board.correctIndex) {
          state.modal = null;
          state.token = generateEcoToken();
          state.redeemed = false;
          state.screen = "reward";
          render();
        } else {
          state.feedbackMessage = board.hint;
          state.shakeModal = true;
          render();
          setTimeout(() => {
            state.shakeModal = false;
          }, 400);
        }
      });
    });
  }
}

function setupPressAndHold(buttonEl) {
  if (!buttonEl) return;

  const HOLD_DURATION_MS = 2000;
  let startTime = null;
  let rafId = null;

  const resetHold = () => {
    startTime = null;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
    buttonEl.style.setProperty("--hold-progress", "0%");
  };

  const step = (now) => {
    if (!startTime) startTime = now;
    const elapsed = now - startTime;
    const pct = Math.min(100, (elapsed / HOLD_DURATION_MS) * 100);
    buttonEl.style.setProperty("--hold-progress", `${pct}%`);

    if (elapsed >= HOLD_DURATION_MS) {
      resetHold();
      state.redeemed = true;
      render();
      return;
    }
    rafId = requestAnimationFrame(step);
  };

  buttonEl.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    resetHold();
    rafId = requestAnimationFrame(step);
  });

  buttonEl.addEventListener("pointerup", resetHold);
  buttonEl.addEventListener("pointerleave", resetHold);
  buttonEl.addEventListener("pointercancel", resetHold);
}

render();
