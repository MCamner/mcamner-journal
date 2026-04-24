const routes = {
  "/home": "index.html",
  "/journal": "journal.html",
  "/films": "films.html",
  "/catalogue": "catalogue.html",
  "/archive": "archive.html",
  "/objects": "objects.html",
  "/about": "about.html",
  "/object 001": "objects.html",
  "/object 002": "objects.html",
  "/object 003": "objects.html",
  "/object 004": "objects.html",
  "/object 005": "objects.html",
  "/contact": "mailto:mattias.camner@gmail.com",
  "/instagram": "https://www.instagram.com/blackiris_sthlm/",
  "/linkedin": "https://www.linkedin.com/in/mattias-camner-75958022",
  "/open linkedin": "https://www.linkedin.com/in/mattias-camner-75958022",
  "/open instagram": "https://www.instagram.com/blackiris_sthlm/",

  "/structure": "posts/structure.html",
  "/note 001": "posts/mqlaunch.html",
  "/note 002": "posts/design-prototype.html",
  "/note 003": "posts/structure.html",
  "/note 004": "posts/atlas-one.html",
  "/atlas-one": "posts/atlas-one.html",
  "/film 001": "posts/the-secret-agent.html",
  "/film 002": "posts/two-lane-blacktop.html",
  "/film 003": "posts/the-vanishing.html",
  "/series 001": "posts/slow-horses.html",
  "/series 002": "posts/fallout.html",
  "/series 003": "posts/white-lotus.html",
  "/series 004": "posts/dope-thief.html",
  "/book 001": "posts/ways-of-seeing.html",
  "/book 002": "posts/pattern-language.html",
  "/book 003": "posts/remains-of-the-day.html",
  "/book 004": "posts/pilgrim-and-locust.html",
  "/book 005": "posts/city-on-fire.html",
  "/book 006": "posts/crime-von-schirach.html",
  "/note 005": "posts/black-iris-allseeing.html",
  "/the-secret-agent": "posts/the-secret-agent.html",
  "/two-lane-blacktop": "posts/two-lane-blacktop.html",
  "/the-vanishing": "posts/the-vanishing.html",
  "/slow-horses": "posts/slow-horses.html",
  "/fallout": "posts/fallout.html",
  "/white-lotus": "posts/white-lotus.html",
  "/dope-thief": "posts/dope-thief.html",
  "/music 001": "posts/kill-em-all.html",
  "/kill-em-all": "posts/kill-em-all.html"
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
