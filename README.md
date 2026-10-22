# Saqlain Mostak — Developer Portfolio

A modern, responsive, and professional personal portfolio built with **Next.js, React, JavaScript, and CSS**. It showcases my web development skills, featured projects, technical experience, education, and contact information through a clean, accessible, and user-friendly interface.

### Live Website

**[View My Portfolio](https://nextjs-portfolio-brown-theta.vercel.app/)**

### GitHub Repository

**[View Source Code](https://github.com/Saklainmostak-learner/nextjs-portfolio)**

---

## About This Project

This portfolio represents my journey as an aspiring **Junior Full Stack Developer**, with a focus on React.js, Next.js, responsive web design, and practical full-stack development.

The goal of this project is to present my skills and completed work in a professional, organized, and accessible way while providing recruiters, employers, and collaborators with an easy way to learn more about me.

The portfolio includes dedicated project case studies, a downloadable resume, responsive navigation, and direct contact options.

## Key Features

- **Responsive Navigation:** A navigation bar optimized for desktop, tablet, and mobile devices.
- **Professional Hero Section:** An introduction featuring my designation, professional photograph, and primary action buttons.
- **Downloadable Resume:** A resume download button connected to a PDF document.
- **About Me:** An introduction to my programming journey, interests, and development approach.
- **Technical Skills:** Categorized frontend, backend, database, and development tools.
- **Featured Projects:** Four selected web development projects with real website screenshots.
- **Project Details Pages:** Individual pages featuring project descriptions, technologies, development challenges, and future improvements.
- **Education & Experience:** My academic background and independent project-based development experience.
- **Contact Section:** Direct email, phone, WhatsApp, GitHub, and LinkedIn links.
- **Clean UI:** Consistent typography, reusable components, balanced spacing, and an organized layout.
- **SEO Metadata:** Page titles, descriptions, and social sharing metadata.

---

## Technologies Used

| Category | Technologies |
|---|---|
| Framework | Next.js 15 (App Router) |
| Library | React |
| Programming Language | JavaScript |
| Styling | CSS3 |
| Icons | Lucide React |
| Version Control | Git & GitHub |
| Deployment | Vercel |
| Development Tools | VS Code, npm |

## Featured Projects

The portfolio showcases four selected projects.

### 1. SportNest — Sports Facility Booking Platform

A sports facility discovery and booking application designed to help users explore venues, view facility details, and manage bookings.

**Technologies:** React, Tailwind CSS, Node.js, Express.js, MongoDB

**Key Features:**
- Sports facility browsing and discovery
- Facility details and booking workflows
- Authentication and protected routes
- User booking management
- Facility management features

**Links:**
- [Live Website](https://sportnest-client-seven.vercel.app/)
- [Client GitHub Repository](https://github.com/Saklainmostak-learner/sportnest-client)
- [Portfolio Case Study](https://nextjs-portfolio-brown-theta.vercel.app/projects/sportnest)

### 2. ArtHub — Digital Art Marketplace

A digital artwork marketplace developed to showcase creative work and provide artwork discovery and management features.

**Technologies:** Next.js, React, Tailwind CSS, Express.js, MongoDB, Better Auth

**Key Features:**
- Artwork browsing
- Featured artworks and artists
- Artwork categories
- User authentication
- Favorites and dashboard functionality
- Artwork management workflows

**Links:**
- [Live Website](https://arthub-client-sigma.vercel.app/)
- [Client GitHub Repository](https://github.com/Saklainmostak-learner/arthub-client)
- [Portfolio Case Study](https://nextjs-portfolio-brown-theta.vercel.app/projects/arthub)

### 3. FORMA — Product Storefront

A modern product storefront featuring a curated shopping interface, product discovery, authentication, and protected product management.

**Technologies:** Next.js, React, Firebase Authentication, CSS

**Key Features:**
- Responsive product catalog
- Product search and filtering
- Google authentication
- Protected routes
- Product management workflows

**Links:**
- [Live Website](https://forma-nextjs-six.vercel.app/)
- [Client GitHub Repository](https://github.com/Saklainmostak-learner/forma-nextjs)
- [Portfolio Case Study](https://nextjs-portfolio-brown-theta.vercel.app/projects/forma)

### 4. KeenKeeper — Relationship Management Application

A responsive React application designed to help users organize personal connections and track meaningful interactions.

**Technologies:** React, JavaScript, Responsive CSS

**Key Features:**
- Contact and relationship tracking
- Contact overview cards
- Interaction timelines
- Activity statistics
- Responsive dashboard interface

**Links:**
- [Live Website](https://keenkeeper-tau.vercel.app/)
- [Client GitHub Repository](https://github.com/Saklainmostak-learner/-keenkeeper)
- [Portfolio Case Study](https://nextjs-portfolio-brown-theta.vercel.app/projects/keenkeeper)

---

## Project Screenshots

This portfolio uses actual homepage screenshots from the four featured applications rather than generic project illustrations.

Screenshots are stored in the `public/projects/` directory.

Each project has two image assets:

- `project-name-preview.webp` — Optimized preview used in the project card.
- `project-name-full.webp` — Full-page screenshot used in the project details page.

The screenshot assets help visitors understand the visual design and functionality of each project before visiting its live website.

## Portfolio Sections

| Section | Description |
|---|---|
| Navbar | Responsive navigation across portfolio sections |
| Hero | Professional introduction, portrait, and resume download |
| About | Background, programming journey, and personal interests |
| Skills | Frontend, backend, database, and development tools |
| Projects | Four featured applications and their case studies |
| Education | Academic qualifications |
| Experience | Independent project-based web development |
| Contact | Email, phone, WhatsApp, and professional profiles |
| Footer | Additional navigation and contact links |

---

## Folder Structure

```text
nextjs-portfolio/
│
├── app/
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.jsx
│   ├── globals.css
│   ├── layout.jsx
│   ├── not-found.jsx
│   └── page.jsx
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProjectCard.jsx
│
├── data/
│   └── site.js
│
├── public/
│   ├── projects/
│   │   ├── sportnest-preview.webp
│   │   ├── sportnest-full.webp
│   │   ├── arthub-preview.webp
│   │   ├── arthub-full.webp
│   │   ├── forma-preview.webp
│   │   ├── forma-full.webp
│   │   ├── keenkeeper-preview.webp
│   │   └── keenkeeper-full.webp
│   ├── saqlain-profile.webp
│   ├── resume.pdf
│   └── og-cover.png
│
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
└── README.md
```

## Installation and Local Setup

### Prerequisites

Ensure that Node.js and npm are installed on your computer.

### 1. Clone the Repository

```bash
git clone https://github.com/Saklainmostak-learner/nextjs-portfolio.git
```

### 2. Navigate to the Project Directory

```bash
cd nextjs-portfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the following URL in your browser:

`http://localhost:3000`

### 5. Create a Production Build

```bash
npm run build
```

### 6. Start the Production Server Locally

```bash
npm run start
```

## Configuration

This portfolio does not require database credentials or private environment variables for its core functionality.

Portfolio content is managed through:

`data/site.js`

This file contains:
- Personal information
- Professional profile links
- Skills
- Project information
- Project screenshots
- Live project URLs
- GitHub repository URLs

Resume and profile image assets are stored in the `public/` directory.

## Deployment

The application is hosted on **Vercel**.

To deploy your own version:

1. Fork or clone this repository.
2. Push the source code to GitHub.
3. Sign in to [Vercel](https://vercel.com/).
4. Import your GitHub repository.
5. Select **Next.js** as the framework.
6. Deploy the application.

The production website is available at:

https://nextjs-portfolio-brown-theta.vercel.app/

---

## Future Improvements

- Improve performance and accessibility through regular testing.
- Add more technical case studies and completed projects.
- Introduce optional light/dark theme switching.
- Add automated browser testing.
- Expand animations and micro-interactions while maintaining performance.
- Improve project filtering as the portfolio grows.

## About Me

I'm **Saklain Mostak**, a Mathematics graduate and aspiring Junior Full Stack Developer based in Bangladesh.

I work with technologies including React, Next.js, JavaScript, Node.js, Express.js, and MongoDB.

I enjoy building responsive applications, designing thoughtful user interfaces, solving technical challenges, and continuously improving my programming knowledge.

My academic background in Mathematics supports my interest in logical reasoning, problem-solving, and computer science.

## Education

**B.Sc. (Honours) in Mathematics**

Dinajpur Government College  
National University, Bangladesh  
Academic Session: 2019–2023

## Contact

I'm open to junior frontend and full-stack development opportunities, collaborations, and interesting project ideas.

- **Email:** [saklainmostak.learner@gmail.com](mailto:saklainmostak.learner@gmail.com)
- **GitHub:** [Saklainmostak-learner](https://github.com/Saklainmostak-learner)
- **LinkedIn:** [dev-saklain-mostak](https://www.linkedin.com/in/dev-saklain-mostak/)
- **Portfolio:** [Saqlain Mostak](https://nextjs-portfolio-brown-theta.vercel.app/)

---

© 2026 Saqlain Mostak. Built with Next.js, React, and CSS.
