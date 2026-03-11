# Mehedi Hassan — Developer Portfolio

A modern, full-stack developer portfolio built with **React + TailwindCSS** (frontend) and **Java Spring Boot** (backend). Designed with gamification in mind and tried to make the portfolio look fun.
---

## Features

- **Dark, modern UI** with gradient accents, grid background, and glassmorphism
- **Typing animation** hero section with role cycling
- **Animated skill bars** with intersection observer triggers
- **Project filtering** (All / Web / Android)
- **Working contact form** connected to Spring Boot REST API
- **Mobile-first responsive** design with hamburger menu
- **Smooth scroll navigation** with active section highlighting
- **Section reveal animations** on scroll
- **SEO meta tags** and Open Graph support

---

## Project Structure

```
mehedi-portfolio/
├── backend/                      # Spring Boot API
│   ├── src/main/java/com/mehedi/portfolio/
│   │   ├── PortfolioApplication.java
│   │   ├── controller/
│   │   │   ├── ProjectController.java   # GET /api/projects
│   │   │   ├── SkillController.java     # GET /api/skills
│   │   │   └── ContactController.java  # POST /api/contact
│   │   ├── service/
│   │   │   ├── ProjectService.java
│   │   │   ├── SkillService.java
│   │   │   └── ContactService.java
│   │   ├── model/
│   │   │   ├── Project.java
│   │   │   ├── Skill.java
│   │   │   └── ContactMessage.java
│   │   ├── dto/
│   │   │   ├── ContactRequest.java
│   │   │   └── ApiResponse.java
│   │   └── config/
│   │       └── WebConfig.java          # CORS configuration
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
│
└── frontend/                     # React App
    ├── src/
    │   ├── App.jsx
    │   ├── index.js
    │   ├── index.css               # Global styles + Tailwind
    │   ├── components/
    │   │   ├── Navbar.jsx           # Sticky nav + mobile menu
    │   │   ├── Hero.jsx             # Hero with typing animation
    │   │   ├── About.jsx            # Bio + tech stack grid
    │   │   ├── Skills.jsx           # Animated skill bars
    │   │   ├── Projects.jsx         # Project cards + filter
    │   │   ├── Experience.jsx       # Experience + education
    │   │   ├── Contact.jsx          # Contact form → API
    │   │   └── Footer.jsx
    │   └── data/
    │       ├── api.js               # Axios API client
    │       └── staticData.js        # Fallback data
    ├── public/index.html
    ├── tailwind.config.js
    ├── package.json
    └── vercel.json
```

---

## Local Development

### Prerequisites
- **Java 17+**
- **Maven 3.8+**
- **Node.js 18+**
- **npm 9+**

### 1. Clone the Repository
```bash
git clone https://github.com/mehedihassan/portfolio.git
cd mehedi-portfolio
```

### 2. Start Backend (Spring Boot)
```bash
cd backend
mvn spring-boot:run
```
API will run at: `http://localhost:8080`

Available endpoints:
- `GET  /api/projects` — All projects
- `GET  /api/projects/{id}` — Single project
- `GET  /api/skills` — All skills
- `POST /api/contact` — Send contact message

### 3. Start Frontend (React)
```bash
cd frontend
npm install
cp .env.example .env.local
npm start
---

## 📱 Sections

| # | Section | Description |
|---|---------|-------------|
| 1 | **Hero** | Name, animated role titles, CTA buttons, stats |
| 2 | **About** | Bio, quick facts, tech stack grid |
| 3 | **Skills** | Animated progress bars by category |
| 4 | **Projects** | Filterable project cards with links |
| 5 | **Experience** | Work history + education |
| 6 | **Contact** | Form connected to backend API |

---

## 📝 License

MIT — feel free to use this as a template for your own portfolio.

---

Built with ❤️ by Mehedi Hassan | Bangladesh 🇧🇩
