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
    ctaText: "Take part in a sustainability quiz to get a free gift (While stocks last)!"
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
    ctaText: "Take part in a quiz tailored to your interests to get a free gift!"
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
    ctaText: "Take part in a quiz tailored to your interests to get a free gift!"
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
    ctaText: "Take part in a quiz tailored to your interests to get a free gift!"
  }
};

const QUESTIONS = [
  {
    id: "q1",
    isTieBreaker: true,
    prompt: "It’s a chill Saturday morning. What’s your ideal way to spend it?",
    options: [
      {
        text: "Heading outdoors for a walk in nature to unwind, observe the surroundings, and recharge.",
        role: "B"
      },
      {
        text: "Tinkering with a fun craft or project and letting my creative mind wander wherever it wants.",
        role: "A"
      },
      {
        text: "Journaling, reflecting on the week, and catching up on an insightful podcast or book.",
        role: "D"
      },
      {
        text: "Preparing a cozy homemade meal to share with people I care about.",
        role: "C"
      }
    ]
  },
  {
    id: "q2",
    prompt: "When starting a new project, what part of the process gives you the biggest thrill?",
    options: [
      {
        text: "Designing the master blueprint—mapping out how all the moving pieces fit into the big picture.",
        role: "D"
      },
      {
        text: "Assembling the team—getting everyone energized, aligned, and ready to collaborate.",
        role: "C"
      },
      {
        text: "Making the physical or digital prototype—turning an abstract idea into something tangible.",
        role: "A"
      },
      {
        text: "Doing the preliminary fieldwork—getting out into the space, observing details, and gathering facts.",
        role: "B"
      }
    ]
  },
  {
    id: "q3",
    prompt: "What kind of environment helps you do your best thinking?",
    options: [
      {
        text: "A dynamic workshop or studio packed with tools, materials, and creative freedom.",
        role: "A"
      },
      {
        text: "A quiet nook with a cup of coffee/tea, a notebook, and room to think deep thoughts undisturbed.",
        role: "D"
      },
      {
        text: "A calming space in nature surrounded by greenery.",
        role: "B"
      },
      {
        text: "A warm, welcoming communal space filled with conversation, food, and good energy.",
        role: "C"
      }
    ]
  },
  {
    id: "q4",
    prompt: "If you could jump back into school for a day, which subject would you pick?",
    options: [
      {
        text: "Home Economics / Social Studies: Exploring culture, community dynamics, and practical skills for everyday living.",
        role: "C"
      },
      {
        text: "Biology / Geography: Understanding natural systems, ecosystems, and how the physical world operates.",
        role: "B"
      },
      {
        text: "History / Economics: Analyzing past patterns, global systems, and big-picture cause-and-effect trends.",
        role: "D"
      },
      {
        text: "Design & Technology / Art: Hands-on creation, building models, and bringing ideas to life visually.",
        role: "A"
      }
    ]
  },
  {
    id: "q5",
    prompt: "You're picking a movie or show for movie night. What genre are you putting on?",
    options: [
      {
        text: "Nature & Wildlife Documentaries: Immersive, grounded stories showcasing wild landscapes and hidden natural wonder.",
        role: "B"
      },
      {
        text: "Sci-Fi: Full of futuristic gadgets, creative world-building, and cool visual aesthetics.",
        role: "A"
      },
      {
        text: "Thrillers / Dramas: Complex narratives packed with strategy and high-stakes decisions.",
        role: "D"
      },
      {
        text: "Romantic Comedies / Reality TV: Feel-good stories centered around human connection, shared meals, and community.",
        role: "C"
      }
    ]
  },
  {
    id: "q6",
    prompt: "What's your ultimate travel style when exploring a brand-new city?",
    options: [
      {
        text: "Visiting historical monuments, national museums, and learning the history and culture of a city.",
        role: "D"
      },
      {
        text: "Visiting bustling local markets, joining a food tour, and eating where the locals gather.",
        role: "C"
      },
      {
        text: "Hunting down hidden pop-ups, creative spaces, and modern design museums.",
        role: "A"
      },
      {
        text: "Exploring natural parks, botanical reserves, and coastal trails.",
        role: "B"
      }
    ]
  }
];

const BOARDS = {
  1: {
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
  2: {
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
  3: {
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
  4: {
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
  5: {
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
  6: {
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
  7: {
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
  8: {
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
  9: {
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
  10: {
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
        <div class="washi-tape yellow"></div>
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
        <div class="washi-tape green"></div>
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
        <div class="washi-tape yellow"></div>

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

      <div class="bestie-row">
        <div class="postit-note">
          <div class="postit-text">Your Eco bestie</div>
        </div>

        <div class="polaroid-frame">
          <img src="${hero.bestieImage}" alt="${hero.bestieLabel}" />
          <div class="polaroid-caption">${hero.bestieLabel}</div>
        </div>

        <button id="open-pin-btn" class="sticker-cta-btn" type="button">${hero.ctaText}</button>
      </div>
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
        <div class="washi-tape yellow"></div>

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
          <div class="washi-tape green"></div>
          <h2 id="pin-modal-title" class="hand-title" style="font-size: 1.65rem;">Enter Board PIN</h2>
          <p class="hand-note" style="margin: 0;">
            Head to <strong>Board #${hero.primaryBoardId}</strong> (${BOARDS[hero.primaryBoardId].title}) and enter its 4-digit PIN.
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
          <div class="washi-tape green"></div>
          <div class="progress-pill">Board #${board.id} • ${board.title}</div>
          <h2 id="trivia-modal-title" class="hand-title" style="font-size: 1.35rem;">${board.question}</h2>
          <p class="hero-bio" style="margin-bottom: 8px; color: var(--ink-muted);">
            <strong>Hint:</strong> ${board.hint}
          </p>
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
          state.feedbackMessage = `Not quite! Hint: ${board.hint}`;
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
    state.feedbackMessage = `That PIN belongs to Board #${matchedBoard.id} (${matchedBoard.title}). Head to Board #${hero.primaryBoardId} for ${hero.title}!`;
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
