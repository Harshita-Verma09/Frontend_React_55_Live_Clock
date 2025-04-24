#  Live Clock - World Time Viewer

A simple and elegant **Live Clock** React application that shows the current time in different cities across the globe. Built with **React Hooks** and styled using **Tailwind CSS**.

---


##  Features

-  Live digital clock updates every second
-  Multiple global time zones supported
-  Uses JavaScript `Intl.DateTimeFormat` API
-  Tailwind CSS-based responsive UI
-  Minimal and efficient code with `useEffect` and `setInterval`

---

##  Time Zones Covered

-  New York
- 🇬🇧 London
- 🇮🇳 Delhi
- 🇯🇵 Tokyo

---

##  Tech Stack

- **Framework:** React
- **Language:** JavaScript
- **Styling:** Tailwind CSS
- **APIs:** `Intl.DateTimeFormat` (built-in JS)

---

##  Folder Structure
live-clock/ ├── src/ │ ├── LiveClock.jsx │ ├── App.js │ └── index.js ├── public/ ├── package.json └── README.md



## How It Works
- The app initializes a state object to hold current time values for each city.

- It sets an interval using setInterval() to update time every second.

- Intl.DateTimeFormat() with respective timeZone formats the time string.

- The result is displayed in a responsive UI with Tailwind CSS.

##  Example Usage
This app can be a part of:

- Personal dashboards

- Developer portfolios

- Educational React projects

- Digital clocks on landing page
