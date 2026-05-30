# Kona Omeshwar Reddy — Portfolio

A dark-themed, animated portfolio for a Backend Developer built with React + Vite + GSAP.

## 🚀 Tech Stack

- **Frontend**: React 18, Vite, GSAP animations, Lenis smooth scroll
- **Backend**: Vercel Serverless Functions (Node.js)
- **Database**: MongoDB (Atlas) — contact form submissions

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🔧 Environment Variables

1. Copy `.env.example` to `.env.local`
2. Add your MongoDB URI:

```
MONGODB_URI=mongodb+srv://...
```

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Add `MONGODB_URI` in Environment Variables
4. Deploy!

The `/api/contact` endpoint will automatically work as a Vercel serverless function.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Skills/
│   ├── Experience/
│   ├── Projects/
│   ├── Achievements/
│   ├── Contact/
│   └── Footer/
├── pages/
│   └── Home.jsx
├── styles/
│   └── global.css
└── main.jsx
api/
└── contact.js  ← MongoDB serverless endpoint
```

## ✏️ Customization

- Update GitHub/LinkedIn URLs in `About.jsx` and `Footer.jsx`
- Add your real GitHub project links in `Projects.jsx`
- Update `MONGODB_URI` in Vercel dashboard when you have your Atlas URL

---

Built by Kona Omeshwar Reddy
