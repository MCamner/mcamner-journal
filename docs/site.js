const routes = {
  "/home": "/mcamner-journal/index.html",
  "/journal": "/mcamner-journal/journal.html",
  "/films": "/mcamner-journal/films.html",
  "/books": "/mcamner-journal/books.html",
  "/catalogue": "/mcamner-journal/catalogue.html",
  "/archive": "/mcamner-journal/archive.html",
  "/objects": "/mcamner-journal/objects.html",
  "/about": "/mcamner-journal/about.html",
  "/object 001": "/mcamner-journal/posts/macbook-air-m4.html",
  "/object 002": "/mcamner-journal/posts/lamy-2000.html",
  "/object 003": "/mcamner-journal/posts/victorinox-farmer.html",
  "/object 004": "/mcamner-journal/posts/fender-stratocaster.html",
  "/object 005": "/mcamner-journal/posts/jlc-reverso.html",
  "/object 006": "/mcamner-journal/posts/drakes-donkey-chore.html",
  "/object 007": "/mcamner-journal/posts/zippo.html",
  "/object 008": "/mcamner-journal/posts/stiletto.html",
  "/object 009": "/mcamner-journal/posts/sony-tcd5m.html",
  "/object 010": "/mcamner-journal/posts/camaro-1967.html",
  "/object 011": "/mcamner-journal/posts/red-wing-moc-toe.html",
  "/red-wing-moc-toe": "/mcamner-journal/posts/red-wing-moc-toe.html",
  "/object 012": "/mcamner-journal/posts/gibson-les-paul-custom.html",
  "/gibson-les-paul-custom": "/mcamner-journal/posts/gibson-les-paul-custom.html",
  "/object 013": "/mcamner-journal/posts/seymour-duncan-slash-3.html",
  "/seymour-duncan-slash-3": "/mcamner-journal/posts/seymour-duncan-slash-3.html",
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
  "/series 005": "/mcamner-journal/posts/spider-noir.html",
  "/spider-noir": "/mcamner-journal/posts/spider-noir.html",
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
  "/music 003": "/mcamner-journal/posts/back-in-black.html",
  "/back-in-black": "/mcamner-journal/posts/back-in-black.html",
  "/music 004": "/mcamner-journal/posts/is-this-it.html",
  "/is-this-it": "/mcamner-journal/posts/is-this-it.html",
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
  "/note 014": "/mcamner-journal/posts/guitar-pro-8.html",
  "/guitar-pro-8": "/mcamner-journal/posts/guitar-pro-8.html",
  "/note 015": "/mcamner-journal/posts/editorial-engine.html",
  "/editorial-engine": "/mcamner-journal/posts/editorial-engine.html",
  "/note 016": "/mcamner-journal/posts/command-surface.html",
  "/command-surface": "/mcamner-journal/posts/command-surface.html",
  "/note 017": "/mcamner-journal/posts/mq-mcp.html",
  "/mq-mcp": "/mcamner-journal/posts/mq-mcp.html",
  "/note 018": "/mcamner-journal/posts/mq-hal.html",
  "/mq-hal": "/mcamner-journal/posts/mq-hal.html",
  "/note 019": "/mcamner-journal/posts/repo-signal-positioning.html",
  "/repo-signal-positioning": "/mcamner-journal/posts/repo-signal-positioning.html",
  "/note 020": "/mcamner-journal/posts/mcamner-journal-linking.html",
  "/mcamner-journal-linking": "/mcamner-journal/posts/mcamner-journal-linking.html",
  "/note 021": "/mcamner-journal/posts/mq-agent.html",
  "/mq-agent": "/mcamner-journal/posts/mq-agent.html",
  "/note 022": "/mcamner-journal/posts/map-and-memory.html",
  "/map-and-memory": "/mcamner-journal/posts/map-and-memory.html",
  "/note 023": "/mcamner-journal/posts/codegraph.html",
  "/codegraph": "/mcamner-journal/posts/codegraph.html",
  "/note 024": "/mcamner-journal/posts/excalidraw-ai-proxy.html",
  "/excalidraw-ai-proxy": "/mcamner-journal/posts/excalidraw-ai-proxy.html",
  "/excalidraw": "/mcamner-journal/posts/excalidraw-ai-proxy.html",
  "/note 025": "/mcamner-journal/posts/learn-loop.html",
  "/learn-loop": "/mcamner-journal/posts/learn-loop.html",
  "/note 026": "/mcamner-journal/posts/ollama-runtime.html",
  "/ollama-runtime": "/mcamner-journal/posts/ollama-runtime.html",
  "/ollama": "/mcamner-journal/posts/ollama-runtime.html",
  "/note 027": "/mcamner-journal/posts/false-green.html",
  "/false-green": "/mcamner-journal/posts/false-green.html",
  "/note 028": "/mcamner-journal/posts/the-whole-path.html",
  "/the-whole-path": "/mcamner-journal/posts/the-whole-path.html",
  "/note 029": "/mcamner-journal/posts/prompts-are-not-loops.html",
  "/prompts-are-not-loops": "/mcamner-journal/posts/prompts-are-not-loops.html",
  "/note 030": "/mcamner-journal/posts/the-repository-is-the-conversation.html",
  "/the-repository-is-the-conversation": "/mcamner-journal/posts/the-repository-is-the-conversation.html",
  "/mqobsidian": "/mcamner-journal/posts/map-and-memory.html",
  "/series 006": "/mcamner-journal/posts/beef-s2.html",
  "/beef-s2": "/mcamner-journal/posts/beef-s2.html",
  "/series 007": "/mcamner-journal/posts/cape-fear.html",
  "/cape-fear": "/mcamner-journal/posts/cape-fear.html",
  "/film 008": "/mcamner-journal/posts/le-samourai.html",
  "/le-samourai": "/mcamner-journal/posts/le-samourai.html",
  "/film 009": "/mcamner-journal/posts/spider-man-brand-new-day.html",
  "/spider-man-brand-new-day": "/mcamner-journal/posts/spider-man-brand-new-day.html",
  "/brand-new-day": "/mcamner-journal/posts/spider-man-brand-new-day.html",
  "/series 008": "/mcamner-journal/posts/the-shards.html",
  "/the-shards": "/mcamner-journal/posts/the-shards.html"
};

// Routes are authored against the GitHub Pages base path (/mcamner-journal/).
// Locally the site is served with docs/ as the web root (e.g.
// `cd docs && python3 -m http.server 3000`), so the base path is absent.
// Detect which we're on and rewrite absolute route targets accordingly.
const BASE_PATH = location.pathname.startsWith("/mcamner-journal/")
  ? "/mcamner-journal"
  : "";

function resolveRoute(url) {
  if (url.startsWith("/mcamner-journal/")) {
    return BASE_PATH + url.slice("/mcamner-journal".length);
  }
  return url;
}

// Small localStorage wrapper: storage can throw (private mode, blocked
// site data), and the command surface must keep working without it.
const STORE = {
  get: function (key, fallback) {
    try {
      var value = localStorage.getItem(key);
      return value === null ? fallback : value;
    } catch (e) {
      return fallback;
    }
  },
  set: function (key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }
};

// One truth for site uptime: /uptime and the about panel read the same start.
const UPTIME_START = new Date("2022-06-01T00:00:00Z");

function formatUptime(from) {
  var diff    = Date.now() - from.getTime();
  var days    = Math.floor(diff / 86400000);
  var hours   = Math.floor((diff % 86400000) / 3600000);
  var minutes = Math.floor((diff % 3600000) / 60000);
  var seconds = Math.floor((diff % 60000) / 1000);
  return days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}

// Indexed entry types that carry `/type NNN` routes (see tools/check_routes.py).
const ENTRY_TYPES = ["note", "film", "series", "book", "music", "object"];

function entriesOfType(type) {
  return Object.keys(routes)
    .filter(function (key) { return key.indexOf("/" + type + " ") === 0; })
    .sort();
}

function slugOf(target) {
  return target.split("/").pop().replace(/\.html$/, "");
}


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
      "object cache: /objects",
      "command list: /help",
      "newest entry: /latest"
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
    if (STORE.get("mcj:mute", "0") === "1") return;

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
  // The prompt itself only has a placeholder to answer with. Commands that
  // return several lines (/help, /ls, /find) print into a terse output line
  // rendered directly under the prompt.
  let outputLine = null;

  function printOut(text) {
    if (!outputLine) {
      outputLine = document.createElement("pre");
      outputLine.className = "prompt-out";
      outputLine.setAttribute("aria-live", "polite");
      commandBar.insertAdjacentElement("afterend", outputLine);
    }
    outputLine.textContent = Array.isArray(text) ? text.join("\n") : text;
    outputLine.hidden = false;
  }

  function clearOut() {
    if (outputLine) {
      outputLine.hidden = true;
      outputLine.textContent = "";
    }
  }

  function respond(text) {
    commandInput.value = "";
    printOut(text);
  }

  function resetPrompt(placeholder) {
    clearOut();
    commandInput.value = "";
    commandInput.placeholder = placeholder;
  }

  function typeCounts() {
    return ENTRY_TYPES.map(function (type) {
      return type + " " + entriesOfType(type).length;
    }).join(" · ");
  }

  const PAGES = "/home /journal /films /books /catalogue /archive /objects /about";

  // The `/type NNN` route matching the post currently open, if any.
  function currentEntry() {
    for (const type of ENTRY_TYPES) {
      const keys = entriesOfType(type);
      for (const key of keys) {
        if (resolveRoute(routes[key]) === location.pathname) {
          return { type: type, key: key, keys: keys };
        }
      }
    }
    return null;
  }

  function stepEntry(delta) {
    const entry = currentEntry();
    if (!entry) {
      respond("no sequence here — /next and /prev work inside an indexed post.");
      return;
    }
    const i = entry.keys.indexOf(entry.key);
    const target = entry.keys[(i + delta + entry.keys.length) % entry.keys.length];
    window.location.href = resolveRoute(routes[target]);
  }

  function runCommand(rawCommand) {
    const command = rawCommand.trim().toLowerCase();
    if (!command) return;

    if (command === "?" || command === "/help") {
      respond([
        "pages    " + PAGES,
        "entries  /note NNN /film NNN /series NNN /book NNN /music NNN /object NNN",
        "move     /random [type] /latest /next /prev /back /find <text>",
        "list     /ls [type] /show all /filter <tag> /clear /select NNN /open <id>",
        "system   /whoami /uptime /history /mute /unmute /help",
        "keys     Tab completes · arrow up and down recall history"
      ]);
      return;
    }

    if (command === "/back") {
      window.history.back();
      return;
    }

    if (command === "/random" || command.startsWith("/random ")) {
      const kind = command.replace("/random", "").trim().replace(/s$/, "");
      let posts;

      if (kind) {
        if (ENTRY_TYPES.indexOf(kind) === -1) {
          respond("unknown type: " + kind + " — try " + ENTRY_TYPES.join(" / "));
          return;
        }
        posts = entriesOfType(kind).map(function (key) { return routes[key]; });
      } else {
        posts = [...new Set(Object.values(routes).filter(url => url.includes("/posts/")))];
      }

      if (!posts.length) {
        respond("nothing indexed under " + kind + " yet.");
        return;
      }
      window.location.href = resolveRoute(posts[Math.floor(Math.random() * posts.length)]);
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

    if (command === "/show all") {
      var hidden = document.querySelectorAll(".archive-grid article");
      var count = 0;
      hidden.forEach(function (article) {
        if (article.style.display === "none") {
          article.style.display = "";
          var img = article.querySelector("img");
          if (img && img.dataset.src) {
            img.src = img.dataset.src;
          }
          count++;
        }
      });
      resetPrompt("all " + document.querySelectorAll(".archive-grid article").length + " items visible · /archive");
      return;
    }

    if (command.startsWith("/select ")) {
      const id = command.replace("/select ", "").trim();
      const targets = ["note", "film", "series", "book", "music", "object", "item"]
        .map(function (prefix) { return prefix + "-" + id; });
      document
        .querySelectorAll("[id^='note-'], [id^='film-'], [id^='series-'], [id^='book-'], [id^='music-'], [id^='object-'], [id^='item-']")
        .forEach(function (item) {
          item.classList.toggle("is-active", targets.includes(item.id));
        });
      resetPrompt("Selected " + id);
      return;
    }

    if (command.startsWith("/open ")) {
      const arg = command.replace("/open ", "").trim();
      const padded = /^\d+$/.test(arg) ? arg.padStart(3, "0") : arg;
      const el =
        document.getElementById("item-" + padded) ||
        document.getElementById(arg) ||
        document.getElementById(padded);

      if (el) {
        const link = el.querySelector("a[href]");
        if (link) {
          window.location.href = link.href;
          return;
        }
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.classList.add("is-active");
        resetPrompt("opened " + arg);
        return;
      }
      // No matching element: fall through so named routes like
      // "/open linkedin" still resolve via the routes table below.
    }

    if (command === "/ls" || command.startsWith("/ls ")) {
      const kind = command.replace("/ls", "").trim().replace(/s$/, "");

      if (!kind) {
        respond([
          "pages    " + PAGES,
          "indexed  " + typeCounts(),
          "detail   /ls film · /ls note · /ls object"
        ]);
        return;
      }

      if (ENTRY_TYPES.indexOf(kind) === -1) {
        respond("unknown type: " + kind + " — try " + ENTRY_TYPES.join(" / "));
        return;
      }

      respond(entriesOfType(kind).map(function (key) {
        return key + "  " + slugOf(routes[key]);
      }));
      return;
    }

    if (command.startsWith("/find ")) {
      const query = command.replace("/find ", "").trim();
      if (!query) {
        resetPrompt("/find stalker");
        return;
      }

      const seen = new Set();
      const hits = [];

      Object.keys(routes).forEach(function (key) {
        const target = routes[key];
        if (target.indexOf("/posts/") === -1) return;
        if (key.indexOf(query) === -1 && slugOf(target).indexOf(query) === -1) return;
        if (seen.has(target)) return;
        seen.add(target);
        hits.push({ key: key, target: target });
      });

      if (!hits.length) {
        respond("no match for " + query + " — try /ls or /catalogue");
        return;
      }

      if (hits.length === 1) {
        window.location.href = resolveRoute(hits[0].target);
        return;
      }

      respond([hits.length + " matches for " + query].concat(
        hits.slice(0, 12).map(function (hit) {
          return "  " + hit.key + "  " + slugOf(hit.target);
        })
      ));
      return;
    }

    if (command === "/latest") {
      if (typeof fetch !== "function") {
        respond("feed unreachable. try /journal");
        return;
      }
      respond("reading /feed.xml …");
      fetch(BASE_PATH + "/feed.xml")
        .then(function (response) { return response.text(); })
        .then(function (xml) {
          const link = new DOMParser()
            .parseFromString(xml, "application/xml")
            .querySelector("item > link");
          if (!link) throw new Error("empty feed");
          window.location.href = resolveRoute(new URL(link.textContent.trim()).pathname);
        })
        .catch(function () {
          respond("feed unreachable. try /journal");
        });
      return;
    }

    if (command === "/next") { stepEntry(1); return; }
    if (command === "/prev") { stepEntry(-1); return; }

    if (command === "/uptime") {
      respond("uptime " + formatUptime(UPTIME_START) + " · since 2022-06-01");
      return;
    }

    if (command === "/whoami") {
      respond([
        "mattias camner",
        "role      infrastructure architect · curator",
        "location  Stockholm",
        "active    Black Iris · mcamner-journal",
        "more      /about"
      ]);
      return;
    }

    if (command === "/history") {
      if (!history.length) {
        respond("no history yet.");
        return;
      }
      respond(history.slice(-10).reverse().map(function (item, i) {
        return String(i + 1).padStart(2, "0") + "  " + item;
      }));
      return;
    }

    if (command === "/mute") {
      STORE.set("mcj:mute", "1");
      respond("voice off. /unmute restores it.");
      return;
    }

    if (command === "/unmute") {
      STORE.set("mcj:mute", "0");
      respond("voice on.");
      return;
    }

    if (command === "/sudo" || command.startsWith("/sudo ")) {
      respond("denied. there is one account on this system and you are already in it.");
      return;
    }

    if (routes[command]) {
      window.location.href = resolveRoute(routes[command]);
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

  let history = [];
  try {
    const stored = JSON.parse(STORE.get("mcj:history", "[]"));
    if (Array.isArray(stored)) history = stored.filter(function (item) {
      return typeof item === "string";
    });
  } catch (e) {
    history = [];
  }

  let historyIndex = history.length;

  function remember(command) {
    if (!command || history[history.length - 1] === command) return;
    history.push(command);
    history = history.slice(-30);
    historyIndex = history.length;
    STORE.set("mcj:history", JSON.stringify(history));
  }

  // Tab cycles through everything the surface actually accepts.
  const VERBS = [
    "/help", "/ls", "/find ", "/random", "/latest", "/next", "/prev", "/back",
    "/show all", "/filter ", "/clear", "/select ", "/open ",
    "/whoami", "/uptime", "/history", "/mute", "/unmute"
  ];

  function completionPool() {
    return [...new Set(VERBS.concat(Object.keys(routes)))].sort();
  }

  let tabMatches = [];
  let tabIndex = -1;

  commandInput.addEventListener("keydown", function (event) {
    if (event.key === "Tab") {
      const value = commandInput.value.trim().toLowerCase();
      if (!value.startsWith("/")) return;
      event.preventDefault();

      if (!tabMatches.length || tabMatches[tabIndex] !== value) {
        tabMatches = completionPool().filter(function (candidate) {
          return candidate.indexOf(value) === 0;
        });
        tabIndex = -1;
      }

      if (!tabMatches.length) {
        printOut("no completion for " + value);
        return;
      }

      tabIndex = (tabIndex + 1) % tabMatches.length;
      commandInput.value = tabMatches[tabIndex];
      printOut(tabMatches.length === 1
        ? "1 match"
        : tabMatches.length + " matches · Tab cycles · " + tabMatches.slice(0, 8).join(" "));
      return;
    }

    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      if (!history.length) return;
      event.preventDefault();

      historyIndex += event.key === "ArrowUp" ? -1 : 1;
      historyIndex = Math.max(0, Math.min(history.length, historyIndex));
      commandInput.value = historyIndex === history.length ? "" : history[historyIndex];
      return;
    }

    tabMatches = [];
    tabIndex = -1;
  });

  commandBar.addEventListener("submit", function (event) {
    event.preventDefault();
    const entered = commandInput.value.trim().toLowerCase();
    runCommand(commandInput.value);
    remember(entered);
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
    if (item.id.startsWith("series-")) return "series";
    if (item.id.startsWith("book-")) return "book";
    if (item.id.startsWith("music-")) return "music";
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
    // Catalogue spans read "S005" / "B001" / "F001"; the routes use the bare
    // number, so normalise to digits before building the command.
    const num = id.replace(/\D/g, "") || id;
    if (type === "film") return "/film " + num;
    if (type === "series") return "/series " + num;
    if (type === "book") return "/book " + num;
    if (type === "music") return "/music " + num;
    if (type === "note") return "/note " + num;
    if (type === "object") return "/object " + num;
    if (type === "archive") return "/open " + num;
    if (type === "catalogue") return "/open " + num;
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

/* About page: name scramble + uptime */
(function () {
  var scrambleEl = document.querySelector("[data-scramble]");
  if (scrambleEl) {
    var target = scrambleEl.dataset.scramble;
    var chars  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz░▒▓█▄▀#@%&";
    var resolved = 0;
    var total    = target.length;
    var speed    = 38;

    var interval = setInterval(function () {
      var out = "";
      for (var i = 0; i < total; i++) {
        if (target[i] === " ") {
          out += " ";
        } else if (i < resolved) {
          out += target[i];
        } else {
          out += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      scrambleEl.textContent = out;
      resolved++;
      if (resolved > total) {
        scrambleEl.textContent = target;
        clearInterval(interval);
      }
    }, speed);
  }

  var uptimeEl = document.querySelector("[data-uptime]");
  if (uptimeEl) {
    function tick() {
      uptimeEl.textContent = formatUptime(UPTIME_START);
    }

    tick();
    setInterval(tick, 1000);
  }
})();

/* Archive lightbox */
(function () {
  var grid = document.querySelector(".archive-grid");
  if (!grid) return;

  var lb = document.createElement("div");
  lb.className = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.innerHTML =
    '<button class="lightbox__close" aria-label="Close">&times;</button>' +
    '<span class="lightbox__counter"></span>' +
    '<button class="lightbox__prev" aria-label="Previous">&#8592;</button>' +
    '<img class="lightbox__img" src="" alt="">' +
    '<button class="lightbox__next" aria-label="Next">&#8594;</button>' +
    '<div class="lightbox__meta">' +
    '<h2 class="lightbox__title"></h2>' +
    '<p class="lightbox__caption"></p>' +
    "</div>";
  document.body.appendChild(lb);

  var lbImg     = lb.querySelector(".lightbox__img");
  var lbTitle   = lb.querySelector(".lightbox__title");
  var lbCaption = lb.querySelector(".lightbox__caption");
  var lbCounter = lb.querySelector(".lightbox__counter");
  var btnClose  = lb.querySelector(".lightbox__close");
  var btnPrev   = lb.querySelector(".lightbox__prev");
  var btnNext   = lb.querySelector(".lightbox__next");

  var items   = [];
  var current = 0;

  function getItems() {
    return Array.from(grid.querySelectorAll("article"));
  }

  function update() {
    var item   = items[current];
    var src    = item.querySelector("img").src;
    var title  = item.querySelector("h2").textContent;
    var cap    = item.querySelector("p") ? item.querySelector("p").textContent : "";
    var num    = item.querySelector("span") ? item.querySelector("span").textContent : "";
    lbImg.src          = src;
    lbImg.alt          = title;
    lbTitle.textContent   = title;
    lbCaption.textContent = cap;
    lbCounter.textContent = num + "  ·  " + (current + 1) + " / " + items.length;
  }

  function open(index) {
    items   = getItems();
    current = index;
    update();
    lb.classList.add("is-open");
    document.body.style.overflow = "hidden";
    btnClose.focus();
  }

  function close() {
    lb.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function prev() {
    current = (current - 1 + items.length) % items.length;
    update();
  }

  function next() {
    current = (current + 1) % items.length;
    update();
  }

  grid.addEventListener("click", function (e) {
    var article = e.target.closest("article");
    if (!article) return;
    var all   = getItems();
    var index = all.indexOf(article);
    if (index !== -1) open(index);
  });

  btnClose.addEventListener("click", close);
  btnPrev.addEventListener("click", prev);
  btnNext.addEventListener("click", next);

  lb.addEventListener("click", function (e) {
    if (e.target === lb) close();
  });

  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape")      close();
    if (e.key === "ArrowLeft")   prev();
    if (e.key === "ArrowRight")  next();
  });
})();
