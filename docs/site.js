// Theme: apply the stored phosphor before anything renders.
(function () {
  try {
    var theme = localStorage.getItem("mcj:theme");
    if (theme && theme !== "default") document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();

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
  "/note 031": "/mcamner-journal/posts/local-is-a-boundary.html",
  "/local-is-a-boundary": "/mcamner-journal/posts/local-is-a-boundary.html",
  "/note 032": "/mcamner-journal/posts/atlas-loop.html",
  "/atlas-loop": "/mcamner-journal/posts/atlas-loop.html",
  "/note 033": "/mcamner-journal/posts/powershell-on-macos.html",
  "/powershell-on-macos": "/mcamner-journal/posts/powershell-on-macos.html",
  "/note 034": "/mcamner-journal/posts/skills-belong-in-the-repository.html",
  "/skills-belong-in-the-repository": "/mcamner-journal/posts/skills-belong-in-the-repository.html",
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
  "/the-shards": "/mcamner-journal/posts/the-shards.html",
  "/book 010": "/mcamner-journal/posts/the-shards-book.html",
  "/the-shards-book": "/mcamner-journal/posts/the-shards-book.html"
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
        "read     /tail /cat <post> /map /boot",
        "fun      /theme [amber|green|mono|default] /operator /wave /sleep /wake",
        "keys     Tab completes · arrow up and down recall history · 1-6 signal map"
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

    const fun = funCommand(command);
    if (fun !== null) {
      respond(fun);
      return;
    }

    if (routes[command]) {
      window.location.href = resolveRoute(routes[command]);
      return;
    }

    errorCount++;
    funOnUnknown();

    let pool;

    if (errorCount <= 2) {
      pool = errorLevels.helpful;
    } else if (errorCount <= 5) {
      pool = errorLevels.witty;
    } else {
      pool = errorLevels.edge;
    }

    const msg = errorCount === 4
      ? "hint: some doors are unlisted."
      : pool[Math.floor(Math.random() * pool.length)];
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
    "/whoami", "/uptime", "/history", "/mute", "/unmute",
    "/theme ", "/theme amber", "/theme green", "/theme mono", "/theme default",
    "/operator", "/wave", "/sleep", "/wake",
    "/tail", "/cat ", "/map", "/boot"
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

// Signal map: freshness per node, core readout, keys 1-6.
(function () {
  const map = document.querySelector(".signal-map");
  if (!map) return;

  const core = map.querySelector("[data-signal-core]");
  const status = map.querySelector("[data-signal-status]");
  const nodes = Array.from(map.querySelectorAll(".signal-node[data-node]"));
  if (!core || !nodes.length) return;

  const DAY = 864e5;
  const HOT = 14;
  const WARM = 45;

  function ageDays(date) {
    const then = new Date(date + "T00:00:00");
    return Math.max(0, Math.floor((Date.now() - then.getTime()) / DAY));
  }

  function formatAge(days) {
    if (days < 1) return "today";
    if (days < 14) return days + "d";
    if (days < 60) return Math.floor(days / 7) + "w";
    if (days < 365) return Math.floor(days / 30) + "mo";
    return Math.floor(days / 365) + "y";
  }

  function setCore(big, label, detail) {
    core.innerHTML = "";
    [["strong", big], ["span", label], ["em", detail]].forEach(function (part) {
      const el = document.createElement(part[0]);
      el.textContent = part[1];
      core.appendChild(el);
    });
  }

  const data = nodes.map(function (node) {
    const name = node.querySelector("strong").textContent;
    const days = ageDays(node.dataset.last);
    const tier = days <= HOT ? "is-hot" : days <= WARM ? "is-warm" : "is-cold";
    const line = map.querySelector('[data-line="' + name.slice(1) + '"]');
    const time = node.querySelector("time");

    node.classList.add(tier);
    if (line) line.classList.add(tier);
    if (time) time.textContent = formatAge(days);
    node.title = name + " · " + node.dataset.count + " · latest: " + node.dataset.latest;

    return { node: node, name: name, days: days, tier: tier, line: line };
  });

  const total = core.querySelector("strong").textContent;
  const freshest = data.slice().sort(function (a, b) { return a.days - b.days; })[0];
  const active = data.filter(function (d) { return d.tier !== "is-cold"; }).length;

  function idle() {
    data.forEach(function (d) { if (d.line) d.line.classList.remove("is-active"); });
    setCore(total, "signals", "last " + freshest.name + " · " + formatAge(freshest.days));
  }

  function show(d) {
    data.forEach(function (x) { if (x.line) x.line.classList.toggle("is-active", x === d); });
    setCore(d.node.dataset.count, d.name + " · " + formatAge(d.days), d.node.dataset.latest);
  }

  if (status) {
    status.textContent = String(active).padStart(2, "0") + " active / " +
      String(data.length - active).padStart(2, "0") + " idle · keys 1-6";
  }

  data.forEach(function (d) {
    d.node.addEventListener("mouseenter", function () { show(d); });
    d.node.addEventListener("focus", function () { show(d); });
    d.node.addEventListener("mouseleave", function () {
      if (document.activeElement !== d.node) idle();
    });
    d.node.addEventListener("blur", idle);
  });

  document.addEventListener("keydown", function (event) {
    if (event.metaKey || event.ctrlKey || event.altKey) return;
    const target = event.target;
    if (target && (target.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName))) return;
    const d = data[Number(event.key) - 1];
    if (!d || !/^[1-9]$/.test(event.key)) return;
    event.preventDefault();
    d.node.focus();
  });

  idle();
})();

/* ── Fun layer: /theme, /operator, unlisted doors ── */
var THEMES = ["default", "amber", "green", "mono"];
var REDUCED_MOTION = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
var operatorEl = null;
var bubbleTimer = null;

function setTheme(name) {
  if (name === "default") delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = name;
  STORE.set("mcj:theme", name);
}

// 16x15 pixel map. O orange, W white, G green, M muted, . empty.
var OPERATOR_BODY = [
  "....OOOO....",
  "...OOOOOO...",
  "...WWWWWW...",
  "...W.WW.W...",
  "...WWWWWW...",
  "....WMMW....",
  ".....WW.....",
  "..OOOOOOOO..",
  ".OOOOOOOOO..",
  ".O.OOOOOO...",
  ".W.OOOOOO..."
];
var OPERATOR_LEGS_A = ["...MMMMMM...", "...MM..MM...", "...MM..MM...", "..WWW..WWW.."];
var OPERATOR_LEGS_B = ["...MMMMMM...", "..MM....MM..", ".MM......MM.", ".WWW....WWW."];
var OPERATOR_COLORS = { O: "var(--orange)", W: "var(--white)", G: "var(--green)", M: "var(--muted)" };

function pixelRects(rows, offsetY) {
  var out = "";
  rows.forEach(function (row, y) {
    var x = 0;
    while (x < row.length) {
      var c = row[x];
      if (c === ".") { x++; continue; }
      var start = x;
      while (x < row.length && row[x] === c) x++;
      out += '<rect x="' + start + '" y="' + (y + (offsetY || 0)) + '" width="' + (x - start) +
        '" height="1" fill="' + OPERATOR_COLORS[c] + '"/>';
    }
  });
  return out;
}

function px(x, y, c) {
  return '<rect x="' + x + '" y="' + y + '" width="1" height="1" fill="' + OPERATOR_COLORS[c] + '"/>';
}

function operatorSvg() {
  return '<svg viewBox="0 0 16 15" shape-rendering="crispEdges" aria-hidden="true">' +
    "<g>" + pixelRects(OPERATOR_BODY) + "</g>" +
    '<g class="op__legs op__legs--a">' + pixelRects(OPERATOR_LEGS_A, 11) + "</g>" +
    '<g class="op__legs op__legs--b">' + pixelRects(OPERATOR_LEGS_B, 11) + "</g>" +
    '<g class="op__eyes">' + px(4, 3, "G") + px(7, 3, "G") + "</g>" +
    '<g class="op__lids">' + px(4, 3, "W") + px(7, 3, "W") + "</g>" +
    '<g class="op__arm op__arm--down">' + px(10, 7, "O") + px(10, 8, "O") + px(10, 9, "O") + px(10, 10, "W") + "</g>" +
    '<g class="op__arm op__arm--up">' + px(10, 7, "O") + px(10, 6, "O") + px(10, 5, "O") + px(10, 4, "W") + "</g>" +
    '<g class="op__zzz">' + px(12, 2, "G") + px(13, 1, "G") + px(14, 0, "G") + "</g>" +
    "</svg>";
}

function operatorSay(text, ms) {
  if (!operatorEl) return;
  var bubble = operatorEl.querySelector(".op__bubble");
  bubble.textContent = text;
  bubble.hidden = false;
  clearTimeout(bubbleTimer);
  bubbleTimer = setTimeout(function () { bubble.hidden = true; }, ms || 3200);
}

function operatorPlay(state, ms) {
  if (!operatorEl) return;
  operatorEl.classList.remove(state);
  void operatorEl.offsetWidth; // restart the animation
  operatorEl.classList.add(state);
  setTimeout(function () { if (operatorEl) operatorEl.classList.remove(state); }, ms);
}

var OPERATOR_LINES = [
  "> hello, operator",
  "> try /theme amber",
  "> /random film?",
  "> i keep the index warm.",
  "> /operator sends me home.",
  "> ? lists everything."
];

function summonOperator(walk) {
  if (operatorEl) return;
  operatorEl = document.createElement("div");
  operatorEl.className = "op";
  operatorEl.innerHTML =
    '<p class="op__bubble" role="status" hidden></p>' +
    '<button class="op__body" type="button" aria-label="Operator. Click to talk.">' + operatorSvg() + "</button>";
  document.body.appendChild(operatorEl);

  operatorEl.querySelector(".op__body").addEventListener("click", function () {
    if (operatorEl.classList.contains("is-sleeping")) {
      operatorEl.classList.remove("is-sleeping");
      operatorSay("> huh. awake.");
      return;
    }
    operatorPlay("is-waving", 1400);
    operatorSay(OPERATOR_LINES[Math.floor(Math.random() * OPERATOR_LINES.length)]);
  });

  STORE.set("mcj:operator", "1");
  if (walk && !REDUCED_MOTION) {
    operatorPlay("is-entering", 1600);
    setTimeout(function () { operatorPlay("is-waving", 1400); operatorSay("> operator on duty."); }, 1600);
  }
}

function dismissOperator() {
  if (!operatorEl) return;
  var el = operatorEl;
  operatorEl = null;
  STORE.set("mcj:operator", "0");
  if (REDUCED_MOTION) { el.remove(); return; }
  el.classList.add("is-leaving");
  setTimeout(function () { el.remove(); }, 1400);
}

function operatorFlip() {
  if (!operatorEl) summonOperator(false);
  operatorPlay("is-flipping", 900);
  operatorSay("> cheat accepted.");
}

function funCommand(command) {
  var read = readerCommand(command);
  if (read !== null) return read;

  if (command === "/theme") {
    var current = document.documentElement.dataset.theme || "default";
    return "theme " + current + " · options " + THEMES.join(" ");
  }

  if (command.indexOf("/theme ") === 0) {
    var name = command.slice(7).trim();
    if (THEMES.indexOf(name) === -1) return "no such phosphor. options " + THEMES.join(" ");
    setTheme(name);
    if (operatorEl) operatorSay("> " + (name === "default" ? "back to blue." : name + " phosphor. nice."));
    return name === "default" ? "theme reset." : "phosphor set to " + name + ". /theme default restores it.";
  }

  if (command === "/operator") {
    if (operatorEl) { dismissOperator(); return "operator off duty."; }
    summonOperator(true);
    return "operator summoned. /wave /sleep /wake · /operator dismisses.";
  }

  if (command === "/wave" || command === "/sleep" || command === "/wake") {
    if (!operatorEl) return "no operator on duty. /operator summons one.";
    if (command === "/wave") { operatorEl.classList.remove("is-sleeping"); operatorPlay("is-waving", 1800); return "operator waves."; }
    if (command === "/sleep") { operatorEl.classList.add("is-sleeping"); return "operator sleeping. /wake or click to wake."; }
    operatorEl.classList.remove("is-sleeping");
    operatorSay("> awake.");
    return "operator awake.";
  }

  // Unlisted doors.
  if (command === "exit" || command === "quit" || command === "/exit" || command === "/quit") {
    return "there is no exit. only /home.";
  }
  if (command === ":q" || command === ":q!") {
    return "this is not vim. but respect.";
  }
  if (command === ":wq" || command === ":x") {
    return "nothing to write. nothing to quit.";
  }
  if (/^(sudo\s+)?rm\s+-rf?\s*\/?\*?$/.test(command) || command === "rm -rf /" || command === "rm -rf") {
    if (operatorEl) { operatorPlay("is-shaking", 700); operatorSay("> please don't."); }
    return "permission denied. the archive stays.";
  }

  return null;
}

function funOnUnknown() {
  if (!operatorEl) return;
  operatorPlay("is-shaking", 700);
}

(function () {
  if (STORE.get("mcj:operator", "0") === "1") summonOperator(false);

  // Konami code outside text fields: the operator does a flip.
  var KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  var konamiAt = 0;
  document.addEventListener("keydown", function (event) {
    var t = event.target;
    if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
    var key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    konamiAt = key === KONAMI[konamiAt] ? konamiAt + 1 : (key === KONAMI[0] ? 1 : 0);
    if (konamiAt === KONAMI.length) { konamiAt = 0; operatorFlip(); }
  });

  // Rotating placeholder hints while the prompt sits idle.
  var input = document.getElementById("commandInput");
  var bar = document.getElementById("commandBar");
  if (input && bar) {
    var hints = ["/help", "/tail", "/theme amber", "/cat stalker", "/operator", "/map", "/random film", "/boot"];
    var hintAt = 0;
    var quietUntil = 0;
    bar.addEventListener("submit", function () { quietUntil = Date.now() + 9000; });
    setInterval(function () {
      if (document.activeElement === input || input.value || Date.now() < quietUntil) return;
      hintAt = (hintAt + 1) % hints.length;
      input.placeholder = hints[hintAt];
    }, 4000);
  }

  // Home figure hints at its mobile twin.
  var homeLink = document.querySelector(".pixel-operator-link span");
  if (homeLink) {
    var parent = homeLink.parentElement;
    parent.addEventListener("mouseenter", function () { homeLink.textContent = "> try /operator"; });
    parent.addEventListener("mouseleave", function () { homeLink.textContent = "> hello, operator"; });
  }
})();

/* ── Reader layer: /tail, /cat, /map, /boot ── */
var readerCache = {};

function fetchCached(key, path, parse) {
  if (!readerCache[key]) {
    readerCache[key] = fetch(BASE_PATH + path, { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error(path); return r.text(); })
      .then(parse)
      .catch(function (e) { delete readerCache[key]; throw e; });
  }
  return readerCache[key];
}

function isoDate(d) {
  var t = new Date(d);
  return isNaN(t) ? "" : t.toISOString().slice(0, 10);
}

function loadFeed() {
  return fetchCached("feed", "/feed.xml", function (xml) {
    var doc = new DOMParser().parseFromString(xml, "application/xml");
    return Array.from(doc.querySelectorAll("item")).map(function (item) {
      var link = (item.querySelector("link") || {}).textContent || "";
      return {
        title: ((item.querySelector("title") || {}).textContent || "").trim(),
        path: resolveRoute(new URL(link.trim()).pathname),
        date: isoDate((item.querySelector("pubDate") || {}).textContent),
        desc: ((item.querySelector("description") || {}).textContent || "").trim()
      };
    });
  });
}

function loadSitemap() {
  return fetchCached("sitemap", "/sitemap.xml", function (xml) {
    var doc = new DOMParser().parseFromString(xml, "application/xml");
    var map = {};
    doc.querySelectorAll("url").forEach(function (u) {
      var loc = (u.querySelector("loc") || {}).textContent || "";
      var mod = (u.querySelector("lastmod") || {}).textContent || "";
      if (loc) map[resolveRoute(new URL(loc.trim()).pathname.replace(/\/$/, "/index.html"))] = mod.trim();
    });
    return map;
  });
}

function loadSignal() {
  return fetchCached("signal", "/signal.json", function (text) { return JSON.parse(text); });
}

// Route key ("/film 006") for a post path, when one exists.
function routeKeyFor(path) {
  var slug = path.split("/").pop();
  var keys = Object.keys(routes).filter(function (k) {
    return routes[k].indexOf("/posts/") !== -1 && routes[k].split("/").pop() === slug;
  });
  var typed = keys.filter(function (k) { return /^\/[a-z]+ \d{3}$/.test(k); });
  return (typed[0] || keys[0] || "");
}

function kindOf(key) {
  var m = /^\/([a-z]+) \d{3}$/.exec(key);
  return m ? "[" + m[1].toUpperCase() + "]" : "[POST]";
}

function ageLabel(date) {
  var days = Math.max(0, Math.floor((Date.now() - new Date(date + "T00:00:00").getTime()) / 864e5));
  if (days < 1) return "today";
  if (days < 14) return days + "d";
  if (days < 60) return Math.floor(days / 7) + "w";
  if (days < 365) return Math.floor(days / 30) + "mo";
  return Math.floor(days / 365) + "y";
}

// A stream owns the output line until any other command overwrites it.
function openStream() {
  var out = document.querySelector(".prompt-out");
  if (!out) return null;
  out.textContent = "";
  out.hidden = false;
  var box = document.createElement("span");
  box.className = "term-stream";
  out.appendChild(box);
  return box;
}

function streamLines(box, lines, done) {
  var i = 0;
  var fast = REDUCED_MOTION;

  function next() {
    if (!box.isConnected) return;
    if (i >= lines.length) { if (done) done(); return; }
    var line = lines[i++];
    var el = document.createElement(line.href ? "a" : "span");
    el.className = "term-line" + (line.cls ? " " + line.cls : "");
    if (line.href) el.href = line.href;
    box.appendChild(el);

    if (fast) { el.textContent = line.text; next(); return; }

    var c = 0;
    (function type() {
      if (!box.isConnected) return;
      c = Math.min(line.text.length, c + 4);
      el.textContent = line.text.slice(0, c);
      if (c < line.text.length) setTimeout(type, 12);
      else setTimeout(next, line.pause || 90);
    })();
  }
  next();
}

function streamError(box, text) {
  if (box && box.isConnected) streamLines(box, [{ text: text, cls: "is-dim" }]);
}

function pad(text, n) { return (text + "                    ").slice(0, n); }

function runTail() {
  var box = openStream();
  loadFeed().then(function (items) {
    var lines = [{ text: "==> feed.xml <== newest first", cls: "is-dim", pause: 200 }];
    items.slice(0, 10).forEach(function (item) {
      var key = routeKeyFor(item.path);
      lines.push({
        text: item.date + "  " + pad(kindOf(key), 9) + item.title + (key ? "  " + key : ""),
        href: item.path
      });
    });
    lines.push({ text: "-- tail: " + Math.min(10, items.length) + " lines · click a line to open", cls: "is-dim" });
    streamLines(box, lines);
  }).catch(function () { streamError(box, "feed unreachable. try /journal"); });
}

function resolvePost(arg) {
  arg = arg.replace(/^\//, "").trim();
  if (!arg) {
    return location.pathname.indexOf("/posts/") !== -1
      ? { path: location.pathname, key: routeKeyFor(location.pathname) }
      : { error: "usage: /cat <post> · e.g. /cat stalker or /cat film 006" };
  }
  var direct = routes["/" + arg];
  if (direct && direct.indexOf("/posts/") !== -1) {
    var directPath = resolveRoute(direct);
    return { path: directPath, key: /^[a-z]+ \d{3}$/.test(arg) ? "/" + arg : routeKeyFor(directPath) };
  }
  var seen = {};
  var hits = [];
  Object.keys(routes).forEach(function (k) {
    var target = routes[k];
    if (target.indexOf("/posts/") === -1 || seen[target]) return;
    if (slugOf(target).indexOf(arg.replace(/\s+/g, "-")) === -1 && k.indexOf(arg) === -1) return;
    seen[target] = true;
    hits.push(target);
  });
  if (hits.length === 1) {
    var path = resolveRoute(hits[0]);
    return { path: path, key: routeKeyFor(path) };
  }
  if (!hits.length) return { error: "cat: " + arg + ": no such entry. try /find " + arg };
  return {
    error: [hits.length + " matches for " + arg + " — be more specific:"].concat(
      hits.slice(0, 8).map(function (t) { return "  /cat " + slugOf(t); })
    ).join("\n")
  };
}

function runCat(arg) {
  var target = resolvePost(arg);
  if (target.error) return target.error;

  var box = openStream();
  Promise.all([
    fetch(target.path).then(function (r) { if (!r.ok) throw new Error(); return r.text(); }),
    loadSitemap().catch(function () { return {}; })
  ]).then(function (res) {
    var doc = new DOMParser().parseFromString(res[0], "text/html");
    var title = (doc.querySelector("title") || {}).textContent || slugOf(target.path);
    title = title.replace(/\s+\|\s+McAmner(?: Journal)?$/, "").trim();
    var desc = (doc.querySelector('meta[name="description"]') || {}).content || "no description.";
    var date = res[1][target.path] || "";
    var lines = [
      { text: "$ cat " + slugOf(target.path) + ".html", cls: "is-dim" },
      { text: "title  " + title },
      { text: "type   " + (target.key ? kindOf(target.key) + " " + target.key : "[POST]") }
    ];
    if (date) lines.push({ text: "date   " + date + " · " + ageLabel(date) + " ago" });
    lines.push({ text: "about  " + desc });
    lines.push({ text: "open → " + (target.key || slugOf(target.path)), href: target.path, cls: "is-open" });
    streamLines(box, lines);
  }).catch(function () { streamError(box, "cat: read error. try /find"); });
  return "";
}

function mapLines(data) {
  var max = Math.max.apply(null, data.nodes.map(function (n) { return n.count; }));
  var lines = [{
    text: "signal map · " + data.total + " signals · last /" + data.last,
    cls: "is-dim", pause: 160
  }];
  data.nodes.forEach(function (n) {
    var days = Math.floor((Date.now() - new Date(n.last + "T00:00:00").getTime()) / 864e5);
    var dot = days <= 14 ? "●" : days <= 45 ? "◐" : "○";
    var bars = Math.max(1, Math.round(n.count / max * 10));
    lines.push({
      text: String(n.id).padStart(2, "0") + " " + pad(n.path, 11) +
        "▮".repeat(bars) + "▯".repeat(10 - bars) + " " +
        String(n.count).padStart(3, "0") + "  " + dot + " " + ageLabel(n.last),
      href: resolveRoute("/mcamner-journal" + n.path + ".html")
    });
  });
  lines.push({ text: "● fresh  ◐ warm  ○ idle · click a node to open", cls: "is-dim" });
  return lines;
}

function runMap() {
  var box = openStream();
  loadSignal().then(function (data) { streamLines(box, mapLines(data)); })
    .catch(function () { streamError(box, "signal.json unreachable. try /home"); });
}

function runBoot() {
  var box = openStream();
  function dots(label) { return (label + " ..........................").slice(0, 24); }
  loadSignal().catch(function () { return null; }).then(function (data) {
    var theme = document.documentElement.dataset.theme || "default";
    var lines = [
      { text: "mcamner-journal bios · stockholm node", cls: "is-dim", pause: 260 },
      { text: dots("memory check") + " ok", pause: 180 },
      { text: dots("scanlines") + " ok" },
      { text: dots("phosphor") + " " + theme }
    ];
    (data ? data.nodes : []).forEach(function (n) {
      lines.push({ text: dots("mounting " + n.path) + " " + String(n.count).padStart(3, "0") + " ok" });
    });
    lines.push({ text: dots("operator") + " " + (operatorEl ? "on duty" : "standby") });
    lines.push({ text: "boot complete. entering /home", cls: "is-open", pause: 700 });
    streamLines(box, lines, function () {
      if (box.isConnected) window.location.href = resolveRoute(routes["/home"]);
    });
  });
}

function readerCommand(command) {
  if (command === "/tail" || command === "tail -f" || command === "/tail -f") {
    setTimeout(runTail, 0);
    return "tail -f feed.xml …";
  }
  if (command === "/cat" || command.indexOf("/cat ") === 0) {
    var arg = command.slice(4);
    var result = resolvePost(arg);
    if (result.error) return result.error;
    setTimeout(function () { runCat(arg); }, 0);
    return "cat …";
  }
  if (command === "/map") {
    setTimeout(runMap, 0);
    return "reading signal map …";
  }
  if (command === "/boot" || command === "/reboot") {
    setTimeout(runBoot, 0);
    return "rebooting …";
  }
  return null;
}
