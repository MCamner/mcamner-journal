const routes = {
  "/home": "/mcamner-journal/index.html",
  "/journal": "/mcamner-journal/journal.html",
  "/films": "/mcamner-journal/films.html",
  "/books": "/mcamner-journal/books.html",
  "/catalogue": "/mcamner-journal/catalogue.html",
  "/archive": "/mcamner-journal/archive.html",
  "/objects": "/mcamner-journal/objects.html",
  "/about": "/mcamner-journal/about.html",
  "/object 001": "/mcamner-journal/objects.html",
  "/object 002": "/mcamner-journal/objects.html",
  "/object 003": "/mcamner-journal/objects.html",
  "/object 004": "/mcamner-journal/objects.html",
  "/object 005": "/mcamner-journal/objects.html",
  "/object 006": "/mcamner-journal/objects.html",
  "/object 007": "/mcamner-journal/objects.html",
  "/object 008": "/mcamner-journal/objects.html",
  "/object 009": "/mcamner-journal/objects.html",
  "/object 010": "/mcamner-journal/objects.html",
  "/contact": "mailto:mattias.camner@gmail.com",
  "/instagram": "https://www.instagram.com/mattias.camner/",
  "/linkedin": "https://www.linkedin.com/in/mattias-camner-75958022",
  "/open linkedin": "https://www.linkedin.com/in/mattias-camner-75958022",
  "/open instagram": "https://www.instagram.com/mattias.camner/",

  "/structure": "/mcamner-journal/posts/structure.html",
  "/note 001": "/mcamner-journal/posts/mqlaunch.html",
  "/note 002": "/mcamner-journal/posts/design-prototype.html",
  "/note 003": "/mcamner-journal/posts/structure.html",
  "/note 004": "/mcamner-journal/posts/atlas-one.html",
  "/atlas-one": "/mcamner-journal/posts/atlas-one.html",
  "/film 001": "/mcamner-journal/posts/the-secret-agent.html",
  "/film 002": "/mcamner-journal/posts/two-lane-blacktop.html",
  "/film 003": "/mcamner-journal/posts/the-vanishing.html",
  "/film 004": "/mcamner-journal/posts/paris-texas.html",
  "/film 005": "/mcamner-journal/posts/the-conversation.html",
  "/film 006": "/mcamner-journal/posts/stalker.html",
  "/film 007": "/mcamner-journal/posts/good-time.html",
  "/stalker": "/mcamner-journal/posts/stalker.html",
  "/good-time": "/mcamner-journal/posts/good-time.html",
  "/paris-texas": "/mcamner-journal/posts/paris-texas.html",
  "/the-conversation": "/mcamner-journal/posts/the-conversation.html",
  "/series 001": "/mcamner-journal/posts/slow-horses.html",
  "/series 002": "/mcamner-journal/posts/fallout.html",
  "/series 003": "/mcamner-journal/posts/white-lotus.html",
  "/series 004": "/mcamner-journal/posts/dope-thief.html",
  "/book 001": "/mcamner-journal/posts/ways-of-seeing.html",
  "/book 002": "/mcamner-journal/posts/pattern-language.html",
  "/book 003": "/mcamner-journal/posts/remains-of-the-day.html",
  "/book 004": "/mcamner-journal/posts/pilgrim-and-locust.html",
  "/book 005": "/mcamner-journal/posts/city-on-fire.html",
  "/book 006": "/mcamner-journal/posts/crime-von-schirach.html",
  "/book 007": "/mcamner-journal/posts/brave-new-world.html",
  "/book 008": "/mcamner-journal/posts/first-blood.html",
  "/book 009": "/mcamner-journal/posts/arkangel.html",
  "/brave-new-world": "/mcamner-journal/posts/brave-new-world.html",
  "/first-blood": "/mcamner-journal/posts/first-blood.html",
  "/arkangel": "/mcamner-journal/posts/arkangel.html",
  "/note 005": "/mcamner-journal/posts/black-iris-allseeing.html",
  "/the-secret-agent": "/mcamner-journal/posts/the-secret-agent.html",
  "/two-lane-blacktop": "/mcamner-journal/posts/two-lane-blacktop.html",
  "/the-vanishing": "/mcamner-journal/posts/the-vanishing.html",
  "/slow-horses": "/mcamner-journal/posts/slow-horses.html",
  "/fallout": "/mcamner-journal/posts/fallout.html",
  "/white-lotus": "/mcamner-journal/posts/white-lotus.html",
  "/dope-thief": "/mcamner-journal/posts/dope-thief.html",
  "/music 001": "/mcamner-journal/posts/kill-em-all.html",
  "/kill-em-all": "/mcamner-journal/posts/kill-em-all.html",
  "/music 002": "/mcamner-journal/posts/unknown-pleasures.html",
  "/unknown-pleasures": "/mcamner-journal/posts/unknown-pleasures.html",
  "/note 006": "/mcamner-journal/posts/zephyr-workbench.html",
  "/zephyr-workbench": "/mcamner-journal/posts/zephyr-workbench.html",
  "/note 007": "/mcamner-journal/posts/macos-scripts.html",
  "/macos-scripts": "/mcamner-journal/posts/macos-scripts.html",
  "/note 008": "/mcamner-journal/posts/atlas-prompt-library.html",
  "/atlas-prompt-library": "/mcamner-journal/posts/atlas-prompt-library.html",
  "/note 009": "/mcamner-journal/posts/mqmirror.html",
  "/mqmirror": "/mcamner-journal/posts/mqmirror.html",
  "/note 010": "/mcamner-journal/posts/macos-enterprise-dashboard.html",
  "/macos-enterprise-dashboard": "/mcamner-journal/posts/macos-enterprise-dashboard.html",
  "/note 011": "/mcamner-journal/posts/mac-terminal-guide.html",
  "/mac-terminal-guide": "/mcamner-journal/posts/mac-terminal-guide.html",
  "/note 012": "/mcamner-journal/posts/coolthing.html",
  "/coolthing": "/mcamner-journal/posts/coolthing.html",
  "/coolThing": "/mcamner-journal/posts/coolthing.html",
  "/note 013": "/mcamner-journal/posts/machine-room.html",
  "/machine-room": "/mcamner-journal/posts/machine-room.html",
  "/film 008": "/mcamner-journal/posts/le-samourai.html",
  "/le-samourai": "/mcamner-journal/posts/le-samourai.html"
};


let errorCount = 0;

const errorLevels = {
  helpful: [
    "Unknown command. Try /home",
    "Not found. Available: /journal /films /archive",
  ],
  witty: [
    "That sounded right. It wasn’t.",
    "Close. But not a command.",
    "System is waiting for something real.",
  ],
  edge: [
    "You are guessing.",
    "This is not how it works.",
    "Stop improvising. Use the system.",
    "Still no.",
  ]
};


const errorMessages = [
  "Command not found. But it sounded confident.",
  "Nothing there. Try thinking first.",
  "Unknown route. System unimpressed.",
  "That command does not exist. Yet.",
  "You are improvising. System is not."
];

function shuffleItems(items) {
  for (let i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

const archiveGrid = document.querySelector('.archive-grid');
if (archiveGrid) {
  const articles = shuffleItems(Array.from(archiveGrid.querySelectorAll('article')));

  articles.forEach(function(article, i) {
    if (i >= 15) {
      article.style.display = 'none';
    } else {
      archiveGrid.appendChild(article);
      const img = article.querySelector('img');
      if (img) {
        if (img.complete && img.naturalWidth > 0) {
          article.classList.add('loaded');
        } else {
          img.addEventListener('load', function() { article.classList.add('loaded'); });
          img.addEventListener('error', function() { article.classList.add('loaded'); });
        }
      }
    }
  });
}

const indexPulse = document.querySelector('[data-random-index]');
if (indexPulse) {
  const cards = shuffleItems(Array.from(indexPulse.querySelectorAll('a')));

  cards.forEach(function(card) {
    const labels = (card.dataset.labels || "").split("|").filter(Boolean);
    const label = labels[Math.floor(Math.random() * labels.length)];
    const labelTarget = card.querySelector('span');

    if (label && labelTarget) {
      labelTarget.textContent = label;
    }

    indexPulse.appendChild(card);
  });
}

const systemStatus = document.querySelector('[data-random-status]');
if (systemStatus) {
  const statusPools = [
    [
      "boot: mcamner-journal",
      "boot: quiet systems",
      "boot: signal console",
      "boot: archive node"
    ],
    [
      "mode: observing",
      "mode: indexing",
      "mode: collecting fragments",
      "mode: returning to things"
    ],
    [
      "last updated: /catalogue",
      "open thread: /journal",
      "visual feed: /archive",
      "object cache: /objects"
    ]
  ];

  Array.from(systemStatus.querySelectorAll('p')).forEach(function(line, i) {
    const pool = statusPools[i] || [];
    const text = pool[Math.floor(Math.random() * pool.length)];

    if (text) {
      line.textContent = "> " + text;
    }
  });
}

const signalList = document.querySelector('[data-random-signals]');
if (signalList) {
  const limit = Number(signalList.dataset.limit) || 5;
  const signals = shuffleItems(Array.from(signalList.querySelectorAll('.signal-row')));

  signals.forEach(function(signal, i) {
    signal.hidden = i >= limit;
    signalList.appendChild(signal);
  });
}

const voiceTriggers = document.querySelectorAll(".welcome h1, .bot span, .post-figure svg");
if (voiceTriggers.length && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window) {
  let lastSpokenAt = 0;

  function speakSiteOwner() {
    const now = Date.now();
    if (now - lastSpokenAt < 1200) return;

    lastSpokenAt = now;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance("Mattias Camner. Master of this site.");
    utterance.lang = "en-US";
    utterance.rate = 0.9;
    utterance.pitch = 0.85;

    window.speechSynthesis.speak(utterance);
  }

  voiceTriggers.forEach(function(trigger) {
    trigger.setAttribute("tabindex", "0");
    trigger.setAttribute("role", "button");
    trigger.setAttribute("aria-label", "Say Mattias Camner, Master of this site");
    trigger.setAttribute("title", "Mattias Camner · Master of this site");

    trigger.addEventListener("mouseenter", speakSiteOwner);
    trigger.addEventListener("click", speakSiteOwner);
    trigger.addEventListener("keydown", function(event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        speakSiteOwner();
      }
    });
  });
}

const commandBar = document.getElementById("commandBar");
const commandInput = document.getElementById("commandInput");

if (commandBar && commandInput) {
  function resetPrompt(placeholder) {
    commandInput.value = "";
    commandInput.placeholder = placeholder;
  }

  function runCommand(rawCommand) {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    if (command === "?" || command === "/help") {
      resetPrompt("Commands: /home /journal /films /archive /objects /about /random /back");
      return;
    }

    if (command === "/back") {
      window.history.back();
      return;
    }

    if (command === "/random") {
      const posts = [...new Set(Object.values(routes).filter(url => url.includes("/posts/")))];
      window.location.href = posts[Math.floor(Math.random() * posts.length)];
      return;
    }

    if (command.startsWith("/filter ")) {
      const tag = command.replace("/filter ", "").trim();
      document.querySelectorAll("[data-tags]").forEach(function (item) {
        const tags = (item.dataset.tags || "").split(/\s+/);
        item.classList.toggle("is-hidden", !tags.includes(tag));
      });
      resetPrompt("Filtered: " + tag + " · try /clear");
      return;
    }

    if (command === "/clear") {
      document.querySelectorAll("[data-tags]").forEach(function (item) {
        item.classList.remove("is-hidden");
      });
      resetPrompt("/filter film");
      return;
    }

    if (command.startsWith("/select ")) {
      const id = command.replace("/select ", "").trim();
      document.querySelectorAll("[id^='note-'], [id^='film-']").forEach(function (item) {
        item.classList.toggle(
          "is-active",
          item.id === "note-" + id || item.id === "film-" + id
        );
      });
      resetPrompt("Selected " + id + " · try /note " + id + " or /film " + id);
      return;
    }

    if (routes[command]) {
      window.location.href = routes[command];
      return;
    }

    errorCount++;

    let pool;

    if (errorCount <= 2) {
      pool = errorLevels.helpful;
    } else if (errorCount <= 5) {
      pool = errorLevels.witty;
    } else {
      pool = errorLevels.edge;
    }

    const msg = pool[Math.floor(Math.random() * pool.length)];
    resetPrompt(msg);
  }

  commandBar.addEventListener("submit", function (event) {
    event.preventDefault();
    runCommand(commandInput.value);
  });

  document.querySelectorAll("[data-command]").forEach(function (button) {
    button.addEventListener("click", function () {
      runCommand(button.dataset.command || "");
      commandInput.focus();
    });
  });

  document.querySelectorAll(".film-tags span, .catalogue-tags span, .object-tags span").forEach(function (tag) {
    const value = (tag.textContent || "").trim().toLowerCase();
    if (!value) return;

    tag.setAttribute("role", "button");
    tag.setAttribute("tabindex", "0");
    tag.setAttribute("title", "Filter " + value);
    tag.setAttribute("aria-label", "Filter by " + value);

    function filterTag(event) {
      event.preventDefault();
      event.stopPropagation();
      runCommand("/filter " + value);
      commandInput.focus();
    }

    tag.addEventListener("click", filterTag);
    tag.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        filterTag(event);
      }
    });
  });
}

/* Global focus panel */
(function () {
  const items = document.querySelectorAll(
    ".journal-list article, .films-list article, .object-list article, .archive-grid article, .catalogue-list article"
  );

  if (!items.length) return;

  let panel = document.querySelector(".focus-panel");

  if (!panel) {
    panel = document.createElement("aside");
    panel.className = "focus-panel";
    panel.innerHTML = `
      <h2>SELECTED ITEM</h2>
      <p><strong>id:</strong> <span data-focus-id>—</span></p>
      <p><strong>type:</strong> <span data-focus-type>—</span></p>
      <p><strong>title:</strong> <span data-focus-title>—</span></p>
      <p><strong>detail:</strong> <span data-focus-detail>—</span></p>
      <p><strong>command:</strong> <span data-focus-command>hover item</span></p>
    `;

    const target =
      document.querySelector(".prompt") ||
      document.querySelector(".boot-box") ||
      document.querySelector("main");

    target.insertAdjacentElement("afterend", panel);
  }

  function clean(text) {
    return (text || "").replace(/\s+/g, " ").trim();
  }

  function getType(item) {
    if (item.id.startsWith("film-")) return "film";
    if (item.id.startsWith("note-")) return "note";
    if (item.id.startsWith("object-")) return "object";
    if (item.id.startsWith("item-")) return "archive";
    if (item.closest(".catalogue-list")) return "catalogue";
    return "entry";
  }

  function getId(item) {
    const firstSpan = item.querySelector(":scope > span");
    if (firstSpan) return clean(firstSpan.textContent);
    if (item.id) return item.id.replace(/^[a-z]+-/, "");
    return "—";
  }

  function getTitle(item) {
    const title = item.querySelector("h2, a");
    return title ? clean(title.textContent) : "—";
  }

  function getDetail(item) {
    const detail = item.querySelector("p");
    return detail ? clean(detail.textContent) : "—";
  }

  function getCommand(type, id, title) {
    if (type === "film") return "/film " + id;
    if (type === "note") return "/note " + id;
    if (type === "object") return "/object " + id;
    if (type === "archive") return "/open " + id;
    if (type === "catalogue") return "/open " + id;
    return "/open " + title.toLowerCase().replace(/\s+/g, "-");
  }

  items.forEach(function (item) {
    item.setAttribute("tabindex", "0");

    function updatePanel() {
      const id = getId(item);
      const type = getType(item);
      const title = getTitle(item);
      const detail = getDetail(item);
      const command = getCommand(type, id, title);

      document.querySelector("[data-focus-id]").textContent = id;
      document.querySelector("[data-focus-type]").textContent = type;
      document.querySelector("[data-focus-title]").textContent = title;
      document.querySelector("[data-focus-detail]").textContent = detail;
      document.querySelector("[data-focus-command]").textContent = command;

      items.forEach(i => i.classList.remove("is-focused"));
      item.classList.add("is-focused");
      panel.classList.add("is-visible");
    }

    item.addEventListener("mouseenter", updatePanel);
    item.addEventListener("focus", updatePanel);
  });
})();
