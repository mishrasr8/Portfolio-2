# Suyash Mishra — Portfolio

> Personal portfolio website showcasing work across full-stack web development, programming and problem solving, databases, embedded systems and electronics, computer vision, Generative AI and RAG, and power electronics.

[![GitHub](https://img.shields.io/badge/GitHub-mishrasr8-181717?logo=github)](https://github.com/mishrasr8)

**Live Portfolio:** [mishrasr8.github.io/Portfolio-2](https://mishrasr8.github.io/Portfolio-2/)
**Repository:** [mishrasr8/Portfolio-2](https://github.com/mishrasr8/Portfolio-2)

---

## About

**Portfolio-2** is the personal portfolio website of **Suyash Mishra**, an Electrical & Electronics Engineering undergraduate at B.M.S. College of Engineering.

The portfolio presents an interdisciplinary body of work spanning:

* Full-stack web development
* Programming and problem solving
* Databases
* Embedded systems and electronics
* Computer vision
* Generative AI and RAG
* Power electronics

The website is implemented as a lightweight static site using HTML, CSS, and vanilla JavaScript, with Bootstrap providing the responsive layout and UI components.

---

## Features

* Responsive portfolio layout built with Bootstrap 5
* Sticky navigation bar
* Mobile-friendly collapsible navigation
* Smooth scrolling between sections
* Navigation offset handling for the sticky navbar
* Interactive skill filtering by technical category
* Scroll-triggered reveal animations using `IntersectionObserver`
* Back-to-top button
* Project showcase with technology tags
* Education section
* Achievements and certifications section
* Contact section with email, LinkedIn, and GitHub
* Links to selected projects and previous portfolio
* Responsive cards and hover interactions
* Bootstrap Icons throughout the interface
* Custom styling layered on top of Bootstrap

---

## Tech Stack

| Category           | Technology                 |
| ------------------ | -------------------------- |
| Markup             | HTML5                      |
| Styling            | CSS3                       |
| Programming        | JavaScript                 |
| UI Framework       | Bootstrap 5.3.3            |
| Icons              | Bootstrap Icons 1.11.3     |
| Typography         | Plus Jakarta Sans          |
| Interaction        | Vanilla JavaScript         |
| Scroll Animation   | `IntersectionObserver`     |
| External Resources | jsDelivr CDN, Google Fonts |

The website is a static frontend and does not use React, Next.js, Vite, or another JavaScript application framework.

---

## Portfolio Sections

### Hero

The landing section introduces Suyash Mishra as an Electrical & Electronics Engineering undergraduate working across software and AI.

It highlights:

* Electrical & Electronics Engineering
* Software and AI
* Full-stack development
* Python
* Embedded systems
* Bengaluru, India

### About

The About section presents the interdisciplinary areas of work and technical interests covered by the portfolio.

### Skills

The Skills section provides interactive filtering by technical category:

* Frontend
* Backend & Programming
* AI & Applied ML
* Cloud & Infrastructure
* Database
* Electrical & Electronics
* Tools

### Projects

The Projects section showcases work across:

* Full-stack web development
* Programming and databases
* Computer vision
* Generative AI
* Embedded systems
* Electronics
* Power electronics

### Education

The Education section presents the academic background from school through undergraduate engineering.

### Highlights

The Highlights section presents achievements, competitive programming activity, project recognition, and certifications.

### Contact

The Contact section provides links for email, LinkedIn, GitHub, and other relevant profiles.

---

## Selected Projects

| Project                                              | Area                       | Technologies / Focus                                        |
| ---------------------------------------------------- | -------------------------- | ----------------------------------------------------------- |
| **WanderLust**                                       | Full-stack web development | Node.js, Express.js, EJS, MongoDB, Mongoose, REST APIs      |
| **Predicting Solar Irradiance Using Cloud Movement** | Computer Vision            | Python, OpenCV, HSV segmentation, cloud-velocity estimation |
| **AI-Based Preventive Health Risk Assessment**       | Generative AI              | RAG, LangFlow, IBM Granite                                  |
| **Interactive Chatbot**                              | NLP + RAG                  | LangChain, OpenAI, RAG, Gradio                              |
| **Library Management System**                        | C++ + DBMS                 | C++, SQL, OOP/STL                                           |
| **Anti-Theft Bag**                                   | Embedded Systems           | ESP32, ADXL335, Bluetooth/BLE                               |
| **Analog Temperature Monitoring Circuit**            | Analog Electronics         | MOSFETs, op-amps, comparator-based control                  |
| **Matrix Converter Simulation**                      | Power Electronics          | SPWM, dead time, THD analysis                               |
| **Simon Says**                                       | Web Development            | HTML, CSS, JavaScript                                       |
| **Portfolio-1**                                      | Web Development            | Previous personal portfolio                                 |

### Project Links

* [WanderLust](https://github.com/mishrasr8/WanderLust) · [Live Site](https://wanderlust-mu7e.onrender.com/)
* [Health-Analyst](https://github.com/mishrasr8/Health-Analyst)
* [Library Management System](https://github.com/mishrasr8/Library-Management-System)
* [Simon Says](https://github.com/mishrasr8/Simon-Says) · [Live Site](https://mishrasr8.github.io/Simon-Says/)
* [Previous Portfolio](https://github.com/mishrasr8/My-Portfolio) · [Live Site](https://mishrasr8.github.io/My-Portfolio/)

---

## Project Structure

```text
Portfolio-2/
├── Portfolio/
│   ├── index.html
│   ├── style.css
│   └── app.js
└── README.md
```

### `Portfolio/index.html`

Contains the main portfolio structure and content, including:

* Navigation
* Hero
* About
* Skills
* Projects
* Education
* Achievements
* Certifications
* Contact information
* External frontend resources

### `Portfolio/style.css`

Contains the custom visual styling for:

* Typography
* Colors
* Section layouts
* Cards
* Buttons
* Hover states
* Responsive behavior
* Reveal animations

### `Portfolio/app.js`

Contains the client-side interactions for:

* Smooth navigation
* Sticky-navbar offset handling
* Mobile navigation
* Skill filtering
* Scroll reveal
* Back-to-top behavior

---

## Running Locally

Since this is a static HTML/CSS/JavaScript project, no Node.js installation or package manager is required.

### Prerequisites

* A modern web browser
* Python 3 is required only if you want to use the optional local development server

### 1. Clone the Repository

```bash
git clone https://github.com/mishrasr8/Portfolio-2.git
cd Portfolio-2
```

### 2. Open the Website Directly

Open the following file in your browser:

```text
Portfolio/index.html
```

This runs the portfolio locally without requiring a development server.

### 3. Run a Local Development Server

For a local HTTP server, run:

```bash
python -m http.server 8000 --directory Portfolio
```

Then open:

```text
http://localhost:8000
```

Any changes made to the HTML, CSS, or JavaScript files can then be viewed by refreshing the browser.

---

## Deploying Online

The portfolio is publicly hosted using **GitHub Pages**.

### Live Website

**https://mishrasr8.github.io/Portfolio-2/**

### GitHub Pages Deployment

Because the project is a static website, it does not require a framework-specific production build.

To deploy the project using GitHub Pages:

1. Push the repository to GitHub.
2. Open the repository on GitHub.
3. Go to **Settings → Pages**.
4. Select the appropriate branch as the publishing source.
5. Configure the publishing source containing the portfolio files.
6. Save the configuration.
7. GitHub Pages will publish the website.

The public website is available at:

```text
https://mishrasr8.github.io/Portfolio-2/
```

### Local vs Online

| Purpose                  | Method                                             |
| ------------------------ | -------------------------------------------------- |
| Edit source              | `Portfolio/index.html`, `style.css`, `app.js`      |
| Open locally             | `Portfolio/index.html`                             |
| Local development server | `python -m http.server 8000 --directory Portfolio` |
| Local URL                | `http://localhost:8000`                            |
| Public hosting           | GitHub Pages                                       |
| Public URL               | `https://mishrasr8.github.io/Portfolio-2/`         |

---

## Build & Development

There is currently no application build system.

The repository does not contain:

* `package.json`
* npm scripts
* Vite configuration
* React configuration
* Webpack configuration
* TypeScript configuration

Therefore, there is no project-specific:

```bash
npm run dev
npm run build
npm run preview
```

command.

The source files can be edited directly and served as static assets.

---

## Environment Variables

No environment variables are required to run this portfolio locally.

The portfolio does not contain an application-level environment configuration. External project links and contact links are defined directly in the HTML.

---

## Customization

Most portfolio content is maintained in:

```text
Portfolio/index.html
```

### Personal Information

Update the hero and contact sections in `Portfolio/index.html`.

This includes:

* Name
* Professional introduction
* Location
* Email
* LinkedIn
* GitHub
* Portfolio links

### Skills

Skills are defined inside the `#skillGrid` element.

Each skill is assigned a category such as:

```text
frontend
backend
ai
cloud
database
eee
tools
```

The filtering behavior in `app.js` uses these categories.

### Projects

Project cards are defined directly inside the Projects section of:

```text
Portfolio/index.html
```

Update the:

* Project title
* Description
* Technology tags
* GitHub URL
* Live-site URL

### Education

Education entries are maintained in the `#education` section of:

```text
Portfolio/index.html
```

### Achievements & Certifications

The `#highlights` section contains the current achievements and certification information.

### Styling

Custom design changes should primarily be made in:

```text
Portfolio/style.css
```

### Interactions

Interactive behavior is implemented in:

```text
Portfolio/app.js
```

---

## Design & UX

The portfolio uses a clean, modern interface built around a white and light-gray foundation with a red accent color.

The design includes:

* Large typographic hero content
* Sticky navigation
* Rounded cards and buttons
* Red accent highlights
* Responsive Bootstrap grid layouts
* Hover effects
* Technology tags
* Section numbering
* Responsive mobile navigation
* Scroll-based content reveals

The hero uses custom CSS decoration rather than an image-based hero illustration.

---

## Interaction & Animation

The project uses lightweight browser-native JavaScript rather than an external animation library.

### Smooth Navigation

Navigation links are handled by `app.js`, which accounts for the sticky navbar and scrolls to target sections smoothly.

### Skill Filtering

Skill filter buttons dynamically toggle the visibility of skill cards based on category.

### Scroll Reveal

Elements marked with the `.reveal` class are observed with `IntersectionObserver`. When they enter the viewport, the `visible` class is applied.

### Back to Top

The back-to-top control appears after scrolling and returns the user to the top with smooth scrolling.

---

## Performance & Accessibility

The implementation keeps the client-side architecture lightweight:

* Static HTML/CSS/JavaScript
* No JavaScript application framework
* No application bundler
* Native `IntersectionObserver` for reveal behavior
* Responsive Bootstrap grid
* Accessible labels where implemented
* External links use `noopener noreferrer`

The repository does not contain an automated accessibility-testing or performance-optimization pipeline.

---

## External Resources

The portfolio loads:

* **Bootstrap 5.3.3**
* **Bootstrap Icons 1.11.3**
* **Google Fonts — Plus Jakarta Sans**

These resources are referenced directly from `Portfolio/index.html`.

---

## Screenshots

No dedicated screenshot assets are currently included in the repository, so this README does not reference a fabricated preview image.

---

## Education

The portfolio currently lists:

**B.M.S. College of Engineering**
Bachelor of Engineering in Electrical and Electronics Engineering
2023–2027

**Jawahar Navodaya Vidyalaya Silvassa**
Secondary School (CBSE)
2018–2020

**Jawahar Navodaya Vidyalaya Silvassa**
Senior Secondary School (CBSE)
2020–2022

---

## Achievements & Certifications

### Achievements

* Codeforces maximum rating: **954**
* Participation in **20+ contests**
* **50+ LeetCode problems solved**
* **2nd Runner-Up** at Phase Shift 2025 for the Anti-Theft Bag
* Anti-Theft Bag exhibited at **ELASIA 2026 International Exhibition**

### Certifications

* IBM — Introduction to Artificial Intelligence
* IBM — Large Language Model Basics
* IBM — Getting Started with Artificial Intelligence
* IBM — Mastering the Art of Prompting
* NxtWave — Introduction to Generative AI
* HackerRank — Python & Problem Solving
* LetsUpgrade — HTML & CSS

---

## Author

### Suyash Mishra

Electrical & Electronics Engineering undergraduate at B.M.S. College of Engineering with project experience spanning:

* Full-stack web development

* Programming and problem solving

* Databases

* Embedded systems and electronics

* Computer vision

* Generative AI and RAG

* Power electronics

* **GitHub:** [@mishrasr8](https://github.com/mishrasr8)

* **LinkedIn:** [Suyash Mishra](https://www.linkedin.com/in/suyashrmishra/)

* **Email:** [suyashmishra4055@gmail.com](mailto:suyashmishra4055@gmail.com)

* **Portfolio:** [mishrasr8.github.io/Portfolio-2](https://mishrasr8.github.io/Portfolio-2/)

* **Previous Portfolio:** [My-Portfolio](https://mishrasr8.github.io/My-Portfolio/)

---

## License

No license is currently specified in the repository.

---

<p align="center">
  Built by <strong>Suyash Mishra</strong>
</p>
