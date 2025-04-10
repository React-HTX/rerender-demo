# React Rendering Demo – “Why Did This Re-render?”

This is a Next.js 15+ app designed for a live talk about React rendering. It walks through common rendering patterns using `useState`, `useEffect`, and intentional re-render pitfalls.

## ⚙️ Tech Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript 5**
- **Heroicons + Headless UI**
- **Static content via JSON**

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/ctopaul.git
cd ctopaul
```

### 2. Install dependencies

Using NPM:

```bash
npm install
```

Or Yarn:

```bash
yarn install
```

### 3. Run the dev server

```bash
npm run dev
```

Open your browser to [http://localhost:3000](http://localhost:3000)

---

## 🧪 Demo Scenarios

### 🔹 `/one-render`

Static-only render. No re-renders after mount.

### 🔹 `/state-render`

Demonstrates how `useState` triggers re-renders.

### 🔹 `/after-render`

- Mount-time `useEffect`
- Dependency-triggered `useEffect`
- Cleanup logging

### 🔹 `/blogposts` (main demo)

- Dynamic post switching
- Simulated fetch delay
- Like toggling

---

## 💣 Infinite Loop Demo (Optional)

Inside `BlogPosts.tsx`, uncomment this block to simulate an infinite re-render:

## 🧠 Author

**Paul Barrón**  
Frontend Dev, Technical PM  
_Cowritten by ChatGPT 🤝_

---

## 📄 License

MIT License – Use, remix, and teach freely!
