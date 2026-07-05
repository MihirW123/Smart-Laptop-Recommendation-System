<div align="center">

# 💻 Smart Laptop Recommendation System

### An Explainable, Rule-Based Laptop Recommendation & Comparison Platform

*Helping students, developers, gamers, professionals, and creators find the right laptop — with reasons, not guesswork.*

[![Java](https://img.shields.io/badge/Java-17-orange?logo=openjdk&logoColor=white)](#)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.x-brightgreen?logo=springboot&logoColor=white)](#)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](#)
[![MySQL](https://img.shields.io/badge/MySQL-8.x-4479A1?logo=mysql&logoColor=white)](#)
[![JWT](https://img.shields.io/badge/Auth-JWT-black?logo=jsonwebtokens&logoColor=white)](#)
[![WebSocket](https://img.shields.io/badge/Realtime-WebSocket%20%2F%20STOMP-blue?logo=socketdotio&logoColor=white)](#)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.x-38BDF8?logo=tailwindcss&logoColor=white)](#)
[![GitHub](https://img.shields.io/badge/Repo-GitHub-181717?logo=github&logoColor=white)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#-license)
[![Status](https://img.shields.io/badge/Status-In%20Development-yellow)](#)

</div>

---

## 📖 Table of Contents

- [📖 Overview](#-overview)
- [🎯 Project Goals](#-project-goals)
- [✨ Core Features](#-core-features)
- [🧠 Recommendation Engine](#-recommendation-engine)
- [⚖️ Laptop Comparison Module](#️-laptop-comparison-module)
- [🛠️ Technology Stack](#️-technology-stack)
- [📁 Project Structure](#-project-structure)
- [🏗️ System Architecture](#️-system-architecture)
- [🔄 Software Development Life Cycle (SDLC)](#-software-development-life-cycle-sdlc)
- [✅ Functional Requirements](#-functional-requirements)
- [⚙️ Non-Functional Requirements](#️-non-functional-requirements)
- [🧩 Planned Modules](#-planned-modules)
- [🗺️ Development Roadmap](#️-development-roadmap)
- [👥 Team Workflow](#-team-workflow)
- [📸 Screenshots](#-screenshots)
- [📡 API Documentation](#-api-documentation)
- [🚀 Future Enhancements](#-future-enhancements)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 📖 Overview

The **Smart Laptop Recommendation System** is a full-stack web application designed to help users choose the most suitable laptop based on their **personal requirements**, rather than simply filtering products like a traditional e-commerce catalog.

Unlike platforms such as Flipkart or Amazon — which rely on static filters — this system uses an **Explainable Weighted Scoring Recommendation Engine** to suggest laptops and clearly explain **why** each laptop was recommended.

> 💡 **Note:** This project intentionally avoids AI/ML models for its recommendation logic. Instead, it uses a transparent, deterministic, rule-based scoring algorithm — making every recommendation fully explainable and auditable.

**Target Users:** Students · Developers · Gamers · Content Creators · Working Professionals

---

## 🎯 Project Goals

The system is designed to:

- 🎯 Recommend laptops based on real user requirements
- 🗣️ Explain every recommendation in human-readable terms
- ⚖️ Allow side-by-side laptop comparison
- ⭐ Support user reviews and star ratings
- 👍 Support "helpful" votes on reviews
- ❤️ Maintain a personal wishlist
- 🕓 Store recommendation history per user
- 💬 Provide real-time anonymous chat between users
- 🔐 Maintain a secure, JWT-based authentication system
- 🛡️ Include a full-featured admin dashboard

---

## ✨ Core Features

### 👤 User Features

| Feature | Description |
|---|---|
| 🔑 User Registration | Create a new account with validated inputs |
| 🔓 Login | Secure login with JWT-based session handling |
| 🛡️ JWT Authentication | Stateless authentication for all protected routes |
| 🧾 Profile Management | Update personal details and preferences |
| 🧠 Laptop Recommendation | Get personalized, explainable laptop suggestions |
| ⚖️ Laptop Comparison | Compare 2–4 laptops side by side |
| 🔍 Advanced Search | Search laptops by brand, specs, price range, etc. |
| 🧰 Filters | Filter by budget, purpose, RAM, processor, GPU, etc. |
| ❤️ Wishlist | Save laptops for later viewing |
| 📝 Reviews | Write detailed reviews for laptops |
| ⭐ Ratings | Rate laptops on a 5-star scale |
| 👍 Helpful Votes | Mark other users' reviews as helpful |
| 🕓 Recommendation History | View past recommendation sessions |
| 💬 Anonymous Real-Time Chat | Chat anonymously with other users in real time |

### 🛡️ Admin Features

| Feature | Description |
|---|---|
| 📊 Dashboard | Overview of platform statistics and activity |
| 💻 Manage Laptops | Add, update, or remove laptop listings |
| 👥 Manage Users | View, disable, or manage user accounts |
| 📝 Manage Reviews | Moderate and manage user-submitted reviews |
| 📈 View Analytics | Insights into usage trends and popular laptops |

---

## 🧠 Recommendation Engine

> ⚠️ **Important:** This recommendation engine does **NOT** use Artificial Intelligence or Machine Learning. It is a fully transparent, rule-based **Explainable Weighted Scoring Algorithm**.

### How It Works

Each laptop is scored against the user's requirements using weighted parameters. The final score determines ranking, and each contributing factor is surfaced to the user as a plain-language explanation.

### Scoring Parameters

| Parameter | Description | Example Weight* |
|---|---|---|
| 💰 Budget | How well the price fits the user's budget range | High |
| 🎯 Purpose | Coding, Gaming, Editing, Office, Student, AI/ML | High |
| 🧮 Processor | CPU tier and performance relevance to purpose | High |
| 🎮 GPU | Graphics performance for gaming/editing/AI workloads | Medium–High |
| 🧠 RAM | Multitasking and workload suitability | Medium |
| 💾 Storage | Type (SSD/HDD) and capacity | Medium |
| 🔋 Battery Life | Portability and endurance | Medium |
| ⚖️ Weight | Portability factor | Low–Medium |
| 🖥️ Display | Resolution, refresh rate, panel type | Medium |
| 🧑‍💻 User Preferences | Brand, OS, or custom priorities | Variable |

*Weights are configurable and tunable per purpose profile (e.g., Gaming boosts GPU weight; Student boosts Battery + Budget weight).*

### Explainability

Every recommendation includes a **human-readable justification**, for example:

```
✅ Recommended: ASUS TUF Gaming A15

Why this laptop?
- Matches your budget range (₹65,000 - ₹75,000)
- GPU (RTX 4050) strongly suits your "Gaming" purpose
- 16GB RAM comfortably supports multitasking
- Battery life is slightly below average for your portability preference
- Overall Weighted Score: 87.5 / 100
```

---

## ⚖️ Laptop Comparison Module

The comparison module allows users to evaluate laptops side by side.

### Capabilities

- 🔢 Compare **2 to 4 laptops** simultaneously
- 📋 Display specifications in a side-by-side table
- ✅ Highlight superior specifications per category
- 📊 Calculate **weighted performance scores** per laptop
- 🎯 Compare laptops based on **purpose-specific profiles**:
  - Coding
  - Gaming
  - Editing
  - Office
  - Student
  - AI / ML
- 👍👎 Show pros and cons for each laptop
- 🏆 Display a final, explainable recommendation

### Example Comparison Table (Illustrative)

| Specification | Laptop A | Laptop B | Laptop C |
|---|---|---|---|
| Processor | Intel i5-13420H | AMD Ryzen 7 7735HS ✅ | Intel i7-13700H ✅ |
| GPU | RTX 3050 | RTX 4050 ✅ | Integrated Graphics |
| RAM | 16GB | 16GB | 32GB ✅ |
| Storage | 512GB SSD | 512GB SSD | 1TB SSD ✅ |
| Battery Life | 6 hrs | 7 hrs ✅ | 9 hrs ✅ |
| Weighted Score (Gaming) | 72.4 | **88.1** ✅ | 55.3 |
| Final Verdict | Budget Pick | 🏆 Best for Gaming | Best for Productivity |

---

## 🛠️ Technology Stack

### 🎨 Frontend

| Technology | Purpose |
|---|---|
| React.js | Core UI library |
| React Router DOM | Client-side routing |
| Axios | HTTP client for API communication |
| Tailwind CSS | Utility-first styling |
| React Icons | Icon library |
| React Hook Form | Form state management |
| Yup | Schema-based form validation |
| Recharts | Data visualization (admin analytics) |
| Context API | Global state management |

### ⚙️ Backend

| Technology | Purpose |
|---|---|
| Spring Boot | Application framework |
| Spring MVC | REST API layer |
| Spring Security | Authentication & authorization |
| JWT | Token-based authentication |
| Spring Data JPA | Data persistence abstraction |
| Hibernate | ORM implementation |
| Maven | Build & dependency management |
| Lombok | Boilerplate reduction |
| Validation (Jakarta Bean Validation) | Input validation |
| Spring WebSocket | Real-time communication |
| STOMP | Messaging protocol over WebSocket |

### 🗄️ Database

| Technology | Purpose |
|---|---|
| MySQL | Relational data storage |

### 🧰 Tools

| Tool | Purpose |
|---|---|
| IntelliJ IDEA | Backend development IDE |
| VS Code | Frontend development IDE |
| Git | Version control |
| GitHub | Repository hosting & collaboration |
| Postman | API testing |
| MySQL Workbench | Database design & management |
| Figma | UI/UX design |
| Draw.io | Architecture & flow diagrams |

---

## 📁 Project Structure

```
smart-laptop-recommendation-system/
│
├── frontend/                      # React.js client application
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── hooks/
│   │   ├── services/               # Axios API calls
│   │   ├── utils/
│   │   ├── routes/
│   │   └── App.jsx
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/                       # Spring Boot server application
│   ├── src/main/java/com/slrs/
│   │   ├── config/                 # Security, WebSocket, CORS config
│   │   ├── controller/             # REST controllers
│   │   ├── service/                # Business logic
│   │   ├── repository/             # JPA repositories
│   │   ├── entity/                 # JPA entities
│   │   ├── dto/                    # Data Transfer Objects
│   │   ├── security/                # JWT filters, providers
│   │   ├── recommendation/          # Scoring engine logic
│   │   ├── exception/               # Global exception handling
│   │   └── SmartLaptopApplication.java
│   ├── src/main/resources/
│   │   └── application.yml
│   └── pom.xml
│
├── database/                      # SQL scripts & schema
│   ├── schema.sql
│   ├── seed-data.sql
│   └── er-diagram.png
│
├── diagrams/                      # Architecture & flow diagrams
│   ├── system-architecture.png
│   ├── jwt-auth-flow.png
│   ├── recommendation-flow.png
│   └── comparison-flow.png
│
├── docs/                          # Documentation
│   ├── api/
│   │   └── API_DOCUMENTATION.md
│   ├── requirements/
│   │   └── SRS.md
│   └── meeting-notes/
│
├── screenshots/                   # UI screenshots (placeholders)
│   ├── home-page.png
│   ├── recommendation-page.png
│   ├── comparison-page.png
│   └── admin-dashboard.png
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🏗️ System Architecture

### 🌐 Overall System Architecture

```
┌────────────────────┐        HTTPS / REST        ┌─────────────────────┐
│                    │ ─────────────────────────► │                     │
│   React Frontend   │                             │   Spring Boot API   │
│   (Client - SPA)   │ ◄───────────────────────── │   (Backend Server)  │
│                    │        JSON Responses       │                     │
└────────────────────┘                             └──────────┬──────────┘
                                                                │
                                                                │ JPA / Hibernate
                                                                ▼
                                                     ┌─────────────────────┐
                                                     │      MySQL DB       │
                                                     │  (Persistent Store) │
                                                     └─────────────────────┘

        ▲
        │ WebSocket (STOMP over SockJS)
        │
┌───────┴────────────┐
│  Real-Time Chat     │
│  Module (Anonymous) │
└─────────────────────┘
```

### 🎨 Frontend Architecture

```
App.jsx
 ├── Router (React Router DOM)
 │    ├── Public Routes  → Home, Login, Register
 │    └── Protected Routes → Dashboard, Recommendation, Comparison, Wishlist, Chat
 │
 ├── Context API
 │    ├── AuthContext        (JWT, user session)
 │    ├── RecommendationContext
 │    └── ChatContext
 │
 ├── Services (Axios)
 │    ├── authService.js
 │    ├── laptopService.js
 │    ├── recommendationService.js
 │    └── chatService.js
 │
 └── Components
      ├── UI Components (Buttons, Cards, Modals)
      ├── Forms (React Hook Form + Yup)
      └── Charts (Recharts - Admin Analytics)
```

### ⚙️ Backend Architecture

```
Controller Layer   →  Handles HTTP requests, request validation
        │
        ▼
Service Layer      →  Business logic, recommendation scoring, comparison logic
        │
        ▼
Repository Layer   →  Spring Data JPA interfaces
        │
        ▼
Entity Layer       →  Hibernate-mapped MySQL tables

Cross-Cutting:
 ├── Security Layer (Spring Security + JWT Filter Chain)
 ├── Exception Handling (Global @ControllerAdvice)
 └── WebSocket Layer (STOMP endpoints for chat)
```

### 🔐 JWT Authentication Flow

```
User               Frontend               Backend                Database
 │                    │                       │                       │
 │  Enter credentials │                       │                       │
 ├───────────────────►│                       │                       │
 │                    │  POST /auth/login     │                       │
 │                    ├──────────────────────►│                       │
 │                    │                       │  Validate credentials │
 │                    │                       ├──────────────────────►│
 │                    │                       │◄──────────────────────┤
 │                    │  JWT Access Token     │                       │
 │                    │◄──────────────────────┤                       │
 │  Store token       │                       │                       │
 │◄───────────────────┤                       │                       │
 │                    │  Request + Bearer JWT │                       │
 │                    ├──────────────────────►│                       │
 │                    │              Validate JWT (Filter)            │
 │                    │◄──────────────────────┤ Protected Resource    │
```

### 🧠 Recommendation Engine Flow

```
User Input (Budget, Purpose, Preferences)
            │
            ▼
   Requirement Validation
            │
            ▼
  Fetch Candidate Laptops from DB
            │
            ▼
  Apply Weighted Scoring Algorithm
   ├── Score: Budget Fit
   ├── Score: Purpose Fit
   ├── Score: Processor
   ├── Score: GPU
   ├── Score: RAM
   ├── Score: Storage
   ├── Score: Battery
   ├── Score: Weight
   └── Score: Display
            │
            ▼
   Aggregate Weighted Total Score
            │
            ▼
   Rank Laptops by Score (Descending)
            │
            ▼
  Generate Human-Readable Explanation
            │
            ▼
   Return Top-N Recommendations + Save to History
```

### ⚖️ Laptop Comparison Flow

```
User Selects 2–4 Laptops
            │
            ▼
   Fetch Full Specifications
            │
            ▼
  Apply Purpose-Based Weight Profile
   (Coding / Gaming / Editing / Office / Student / AI-ML)
            │
            ▼
  Calculate Weighted Score per Laptop
            │
            ▼
  Highlight Best Spec per Category
            │
            ▼
  Generate Pros & Cons per Laptop
            │
            ▼
   Display Final Recommendation
```

### 💬 WebSocket Chat Flow

```
Client A                     Backend (STOMP Broker)                 Client B
   │                                  │                                  │
   │  Connect via SockJS/STOMP        │                                  │
   ├─────────────────────────────────►│                                  │
   │                                  │  Connect via SockJS/STOMP        │
   │                                  │◄─────────────────────────────────┤
   │  Subscribe: /topic/chat/{room}   │                                  │
   ├─────────────────────────────────►│                                  │
   │                                  │  Subscribe: /topic/chat/{room}   │
   │                                  │◄─────────────────────────────────┤
   │  Send: /app/chat.send            │                                  │
   ├─────────────────────────────────►│                                  │
   │                                  │  Broadcast to /topic/chat/{room} │
   │                                  ├─────────────────────────────────►│
   │                                  │◄─────────────────────────────────┤ (Anonymous identity)
```

---

## 🔄 Software Development Life Cycle (SDLC)

| Phase | Description |
|---|---|
| **1. Planning** | Define project scope, objectives, target users, and success criteria. Establish team roles and timeline. |
| **2. Requirement Analysis** | Gather and document functional & non-functional requirements. Identify data entities and user stories. |
| **3. Design** | Design system architecture, database schema (ER diagrams), UI/UX wireframes (Figma), and API contracts. |
| **4. Development** | Implement frontend and backend modules incrementally, following the Git branching strategy. |
| **5. Testing** | Perform unit testing, integration testing, and manual QA using Postman and browser-based testing. |
| **6. Deployment** | Deploy backend, frontend, and database to a hosting environment (placeholders — actual deployment TBD). |
| **7. Maintenance** | Monitor for bugs, gather user feedback, apply patches, and plan iterative feature releases. |

> 📌 **Methodology:** This project follows an **Agile-inspired iterative approach**, with features developed and reviewed in short cycles (sprints) rather than a strict waterfall model.

---

## ✅ Functional Requirements

| ID | Requirement |
|---|---|
| FR-01 | The system shall allow users to register with a valid email and password. |
| FR-02 | The system shall authenticate users using JWT-based login. |
| FR-03 | The system shall allow authenticated users to update their profile information. |
| FR-04 | The system shall collect user requirements (budget, purpose, preferences) for recommendations. |
| FR-05 | The system shall generate laptop recommendations using the weighted scoring engine. |
| FR-06 | The system shall provide a human-readable explanation for every recommended laptop. |
| FR-07 | The system shall allow users to compare 2–4 laptops side by side. |
| FR-08 | The system shall calculate and display weighted performance scores in comparisons. |
| FR-09 | The system shall allow users to search and filter laptops by specifications. |
| FR-10 | The system shall allow users to add and remove laptops from a wishlist. |
| FR-11 | The system shall allow users to submit reviews and star ratings for laptops. |
| FR-12 | The system shall allow users to mark reviews as "helpful." |
| FR-13 | The system shall store and display a user's recommendation history. |
| FR-14 | The system shall provide real-time anonymous chat between users via WebSocket. |
| FR-15 | The system shall provide an admin dashboard to manage laptops, users, and reviews. |
| FR-16 | The system shall allow admins to view platform analytics and usage statistics. |

---

## ⚙️ Non-Functional Requirements

| ID | Requirement |
|---|---|
| NFR-01 | **Security:** All sensitive endpoints must be protected using JWT-based authentication and Spring Security. |
| NFR-02 | **Performance:** Recommendation results should be generated within an acceptable response time (e.g., < 2 seconds). |
| NFR-03 | **Scalability:** The backend architecture should support horizontal scaling as user load increases. |
| NFR-04 | **Usability:** The UI should be intuitive, responsive, and accessible across desktop and mobile screen sizes. |
| NFR-05 | **Maintainability:** Code should follow clean architecture principles with clear separation of concerns. |
| NFR-06 | **Reliability:** The system should handle invalid inputs and API failures gracefully with proper error handling. |
| NFR-07 | **Explainability:** All recommendation logic must remain transparent and auditable (no black-box AI/ML). |
| NFR-08 | **Data Integrity:** Database constraints and validations must prevent inconsistent or duplicate data. |
| NFR-09 | **Real-Time Performance:** Chat messages should be delivered with minimal latency over WebSocket. |
| NFR-10 | **Portability:** The application should be deployable across different environments with minimal configuration changes. |

---

## 🧩 Planned Modules

| Module | Description |
|---|---|
| 🔐 **Authentication Module** | Handles registration, login, JWT issuance, and route protection. |
| 💻 **Laptop Module** | Manages laptop data, specifications, search, and filtering. |
| 🧠 **Recommendation Engine** | Core weighted scoring logic and explanation generator. |
| ⚖️ **Comparison Module** | Handles multi-laptop comparison and purpose-based scoring. |
| ❤️ **Wishlist Module** | Manages user wishlists. |
| 📝 **Review Module** | Manages reviews, ratings, and helpful votes. |
| 💬 **Chat Module** | Real-time anonymous messaging via WebSocket/STOMP. |
| 🛡️ **Admin Module** | Dashboard, laptop/user/review management, and analytics. |

---

## 🗺️ Development Roadmap

- [ ] 📋 Project planning & scope finalization
- [ ] 📝 Requirement gathering & documentation (SRS)
- [ ] 🎨 UI/UX wireframing in Figma
- [ ] 🗄️ Database schema design (ER diagrams)
- [ ] 🏗️ System architecture design
- [ ] 🔐 Authentication module (Backend + Frontend)
- [ ] 💻 Laptop catalog module (CRUD, search, filters)
- [ ] 🧠 Recommendation engine (scoring algorithm + explanation generator)
- [ ] ⚖️ Laptop comparison module
- [ ] ❤️ Wishlist module
- [ ] 📝 Review & rating module
- [ ] 👍 Helpful votes feature
- [ ] 🕓 Recommendation history tracking
- [ ] 💬 Real-time anonymous chat (WebSocket/STOMP)
- [ ] 🛡️ Admin dashboard & analytics
- [ ] 🧪 Unit & integration testing
- [ ] 🐞 Bug fixing & code refactoring
- [ ] 📖 Documentation finalization (README, API docs)
- [ ] 🚀 Deployment

---

## 👥 Team Workflow

This project is developed collaboratively by a team of **three members** using Git for version control.

### 🌿 Branching Strategy

```
main        → Production-ready, stable code only
 │
develop     → Integration branch for completed features
 │
feature/*   → Individual feature branches (e.g., feature/jwt-auth, feature/chat-module)
```

### 🔀 Git Workflow

1. Create a feature branch from `develop`:
   `feature/<module-name>` (e.g., `feature/recommendation-engine`)
2. Commit changes with clear, descriptive commit messages.
3. Push the feature branch and open a **Pull Request (PR)** into `develop`.
4. At least **one other team member** must review and approve the PR.
5. Resolve review comments and merge using **squash merge** to keep history clean.
6. Periodically merge `develop` into `main` for stable releases.

### 📝 Commit Message Convention

```
feat: add JWT authentication filter
fix: correct weighted score calculation for GPU
docs: update API documentation for comparison endpoint
refactor: simplify recommendation service logic
```

### 🧑‍🤝‍🧑 Suggested Work Division (3 Members)

| Member | Primary Responsibility |
|---|---|
| **Member 1 — Backend Lead** | Spring Boot setup, Authentication (JWT/Security), Recommendation Engine logic, Database design |
| **Member 2 — Frontend Lead** | React setup, UI/UX implementation, Forms & Validation, Comparison & Wishlist UI |
| **Member 3 — Full-Stack / Integration Lead** | WebSocket Chat module, Review & Ratings module, Admin Dashboard, API integration & testing |

> 🤝 **Tip:** Roles can rotate per sprint to ensure all members gain full-stack exposure, which is valuable for portfolio and interview purposes.

---

## 📸 Screenshots

> 🖼️ Screenshots will be added here as the UI is developed.

| Page | Preview |
|---|---|
| Home Page | `screenshots/home-page.png` *(placeholder)* |
| Recommendation Page | `screenshots/recommendation-page.png` *(placeholder)* |
| Comparison Page | `screenshots/comparison-page.png` *(placeholder)* |
| Wishlist Page | `screenshots/wishlist-page.png` *(placeholder)* |
| Admin Dashboard | `screenshots/admin-dashboard.png` *(placeholder)* |

---

## 📡 API Documentation

> 📄 Detailed API documentation will be maintained at: `docs/api/API_DOCUMENTATION.md`

**Planned API Groups:**

| Group | Base Path (Placeholder) |
|---|---|
| Authentication | `/api/auth/**` |
| Users | `/api/users/**` |
| Laptops | `/api/laptops/**` |
| Recommendation | `/api/recommendation/**` |
| Comparison | `/api/comparison/**` |
| Wishlist | `/api/wishlist/**` |
| Reviews | `/api/reviews/**` |
| Chat | `/ws/chat/**` |
| Admin | `/api/admin/**` |

> 🧪 A full **Postman Collection** will be added under `docs/api/` once endpoints are finalized.

---

## 🚀 Future Enhancements

- 🤖 AI/ML-based personalized recommendations (as an optional advanced mode)
- 💹 Price prediction based on market trends
- 📉 Historical price tracking per laptop
- 🔔 Notification system (price drops, new arrivals, chat messages)
- 📱 Dedicated mobile application (React Native / Flutter)
- 🎯 Deeper recommendation personalization using user behavior
- 🌙 Dark mode support
- 🌍 Multi-language support

---

## 🤝 Contributing

Contributions are welcome and appreciated! This project follows standard open-source contribution practices.

### How to Contribute

1. **Fork** the repository
2. **Clone** your fork:
   ```bash
   git clone https://github.com/<your-username>/smart-laptop-recommendation-system.git
   ```
3. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Make your changes and commit:
   ```bash
   git commit -m "feat: add your feature description"
   ```
5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. Open a **Pull Request** against the `develop` branch

### Contribution Guidelines

- Follow existing code style and naming conventions
- Write clear, descriptive commit messages
- Ensure your changes do not break existing functionality
- Add relevant documentation/comments where necessary
- Be respectful and constructive in code reviews

> 🐛 Found a bug or have a feature request? Please open an [Issue](../../issues).

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2026 <Your Name / Team Name>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

### ⭐ If you find this project useful, consider giving it a star!

**Built with ❤️ as a Third-Year Computer Engineering Portfolio Project**

</div>
