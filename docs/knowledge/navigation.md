# Navigation — McAmner Journal

## Site structure

```
/                    index.html      Home dashboard
/journal.html                        Notes and entries
/catalogue.html                      Films, series, books, music
/films.html                          Film index
/books.html                          Book index
/archive.html                        Visual references
/objects.html                        Object index
/about.html                          Biography and context
/posts/                              Individual post pages
```

---

## Command routing (site.js)

All navigation is handled through a command bar — a text input that maps typed commands to URLs.

Example commands:
```
/home           → index.html
/journal        → journal.html
/archive        → archive.html
/note 001       → posts/mqlaunch.html
/film 001       → posts/the-secret-agent.html
/music 001      → posts/kill-em-all.html
/object 001     → posts/macbook-air-m4.html
/book 001       → posts/ways-of-seeing.html
/random         → random post from /posts/
/show all       → reveal all hidden archive items
/filter music   → filter catalogue by tag
/clear          → remove active filter
/back           → browser history back
?               → show available commands
```

Named aliases also work:
```
/stalker        → posts/stalker.html
/back-in-black  → posts/back-in-black.html
/machine-room   → posts/machine-room.html
```

---

## Content numbering

### Notes (journal)
- Format: `/note NNN` (001, 002, 003...)
- Current range: 001–014
- File naming: kebab-case slug

### Films
- Format: `/film NNN`
- Current range: 001–008

### Music
- Format: `/music NNN`
- Current range: 001–003 (Kill 'Em All, Unknown Pleasures, Back in Black)

### Objects
- Format: `/object NNN`
- Current range: 001–010

### Books
- Format: `/book NNN`
- Current range: 001–009

### Series
- Format: `/series NNN`
- Current range: 001–004

### Archive
- Format: three-digit number (001–050)
- Items are image files in `docs/assets/archive/`
- Shuffled on load, 15 shown at a time

---

## Adding a new route

1. Create HTML file in `docs/posts/`
2. Add to `site.js` routes object:
   ```js
   "/note 014": "/mcamner-journal/posts/filename.html",
   "/filename": "/mcamner-journal/posts/filename.html",
   ```
3. Link from relevant index page (journal.html, catalogue.html, etc.)
4. Add navigation links in related post pages

---

## Error handling

Command not found → escalating error messages:
- First 2 errors: helpful ("Unknown command. Try /home")
- Errors 3–5: witty ("That sounded right. It wasn't.")
- 6+ errors: edge ("You are guessing.")
