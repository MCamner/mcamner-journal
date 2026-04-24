const routes = {
  "/home": "index.html",
  "/journal": "journal.html",
  "/films": "films.html",
  "/archive": "archive.html",
  "/objects": "objects.html",
  "/about": "about.html",
  "/contact": "mailto:mattias.camner@gmail.com",

  "/structure": "posts/structure.html",
  "/film 001": "posts/the-secret-agent.html",
  "/film 002": "posts/two-lane-blacktop.html",
  "/the-secret-agent": "posts/the-secret-agent.html",
  "/two-lane-blacktop": "posts/two-lane-blacktop.html"
};

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

    if (routes[command]) {
      window.location.href = routes[command];
      return;
    }

    commandInput.value = "";
    commandInput.placeholder = "Unknown command. Try /home";
  });
}
