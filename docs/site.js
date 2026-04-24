const routes = {
  "/home": "index.html",
  "/journal": "journal.html",
  "/films": "films.html",
  "/catalogue": "catalogue.html",
  "/archive": "archive.html",
  "/objects": "objects.html",
  "/about": "about.html",
  "/contact": "mailto:mattias.camner@gmail.com",

  "/structure": "posts/structure.html",
  "/note 001": "posts/mqlaunch.html",
  "/note 002": "posts/design-prototype.html",
  "/note 003": "posts/structure.html",
  "/note 004": "posts/atlas-one.html",
  "/atlas-one": "posts/atlas-one.html",
  "/film 001": "posts/the-secret-agent.html",
  "/film 002": "posts/two-lane-blacktop.html",
  "/the-secret-agent": "posts/the-secret-agent.html",
  "/two-lane-blacktop": "posts/two-lane-blacktop.html"
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

const commandBar = document.getElementById("commandBar");
const commandInput = document.getElementById("commandInput");

if (commandBar && commandInput) {
  commandBar.addEventListener("submit", function (event) {
    event.preventDefault();

    const command = commandInput.value.trim().toLowerCase();


    if (command === "?" || command === "/help") {
      commandInput.value = "";
      commandInput.placeholder = "Commands: /home /journal /films /archive /objects /about /back";
      return;
    }

    if (command === "/back") {
      window.history.back();
      return;
    }

    if (command.startsWith("/filter ")) {
      const tag = command.replace("/filter ", "").trim();
      document.querySelectorAll("[data-tags]").forEach(function (item) {
        const tags = item.dataset.tags || "";
        item.classList.toggle("is-hidden", !tags.includes(tag));
      });
      commandInput.value = "";
      commandInput.placeholder = "Filtered: " + tag + " · try /clear";
      return;
    }

    if (command === "/clear") {
      document.querySelectorAll("[data-tags]").forEach(function (item) {
        item.classList.remove("is-hidden");
      });
      commandInput.value = "";
      commandInput.placeholder = "/home";
      return;
    }


    if (command.startsWith("/select ")) {
      const id = command.replace("/select ", "").trim();
      document.querySelectorAll("[id^='film-']").forEach(function (item) {
        item.classList.toggle("is-active", item.id === "film-" + id);
      });
      commandInput.value = "";
      commandInput.placeholder = "Selected film " + id + " · try /film " + id;
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

      commandInput.value = "";
      commandInput.placeholder = "Selected " + id + " · try /note " + id + " or /film " + id;
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
    commandInput.placeholder = msg;

    commandInput.value = "";
  });
}
