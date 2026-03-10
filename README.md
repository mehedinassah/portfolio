# 🚀 Mehedi Hassan — Developer Portfolio

A modern, full-stack developer portfolio built with **React + TailwindCSS** (frontend) and **Java Spring Boot** (backend). Designed to impress international recruiters and land remote developer jobs.

---

## ✨ Features

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

## 🏗️ Project Structure

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

## 🛠️ Local Development

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
```
App will run at: `http://localhost:3000`

---

## 🚀 Deployment

### Frontend → Vercel (Free)

1. Push your code to GitHub

2. Go to [vercel.com](https://vercel.com) → **New Project**

3. Import your GitHub repo

4. Set **Root Directory** to `frontend`

5. Set **Build Command**: `npm run build`

6. Set **Output Directory**: `build`

7. Add Environment Variable:
   ```
   REACT_APP_API_URL = https://your-backend.railway.app/api
   ```

8. Click **Deploy** ✅

---

### Backend → Railway (Free Tier)

1. Go to [railway.app](https://railway.app)

2. Click **New Project** → **Deploy from GitHub repo**

3. Select your repo → Set **Root Directory** to `backend`

4. Railway auto-detects Maven and builds the JAR

5. Add Environment Variables in Railway dashboard:
   ```
   CORS_ALLOWED_ORIGINS=https://your-frontend.vercel.app
   PORT=8080
   ```

6. Copy the generated Railway URL (e.g., `https://portfolio-backend.railway.app`)

7. Update Vercel env var `REACT_APP_API_URL` with this URL

---

### Backend → Render (Alternative)

1. Go to [render.com](https://render.com) → **New Web Service**

2. Connect GitHub repo, set **Root Directory** to `backend`

3. Set **Build Command**:
   ```
   mvn clean package -DskipTests
   ```

4. Set **Start Command**:
   ```
   java -jar target/portfolio-1.0.0.jar
   ```

5. Add environment variables and deploy

---

## 🎨 Customization Guide

### Update Your Info
Edit `frontend/src/data/staticData.js`:
- Update project titles, descriptions, GitHub URLs
- Update experience and education details

Edit `frontend/src/components/Hero.jsx`:
- Change name, roles, bio text

Edit `frontend/src/components/Contact.jsx`:
- Update your email address and social links

Edit `frontend/src/components/Footer.jsx`:
- Update social media URLs

### Update Backend Data
Edit `backend/src/main/java/com/mehedi/portfolio/service/ProjectService.java`:
- Add/update your real projects

Edit `backend/src/main/java/com/mehedi/portfolio/service/SkillService.java`:
- Adjust skill levels and categories

### Add Email Notifications (Optional)
Add Spring Mail to `pom.xml`:
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-mail</artifactId>
</dependency>
```

Add to `application.properties`:
```properties
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=${MAIL_USERNAME}
spring.mail.password=${MAIL_APP_PASSWORD}
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
```

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

## 🔗 API Reference

### GET /api/projects
Returns all projects.
```json
{
  "success": true,
  "message": "Projects fetched successfully",
  "data": [
    {
      "id": 1,
      "title": "AI Website Builder",
      "description": "...",
      "techStack": ["React", "Next.js", "OpenAI API"],
      "githubUrl": "https://github.com/...",
      "liveDemoUrl": "https://...",
      "category": "Web"
    }
  ]
}
```

### POST /api/contact
Send a contact message.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'd love to discuss a remote opportunity..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! I'll get back to you soon.",
  "data": { ... }
}
```

---

## 🎯 Tips for Getting Remote Jobs

1. **Replace placeholder GitHub links** with your real repositories
2. **Add screenshots** to your projects (use a `/public/images/` folder)
3. **Keep it updated** — add new projects as you build them
4. **Add your LinkedIn** to the footer and contact section
5. **Deploy live** — a live URL is 10x more impressive than just code
6. **Write READMEs** for all your GitHub repos (recruiters check these)
7. **Pin your best repos** on GitHub profile

---

## 📝 License

MIT — feel free to use this as a template for your own portfolio.

---

Built with ❤️ by Mehedi Hassan | Bangladesh 🇧🇩
