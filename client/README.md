# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## Added: Student Dashboard & Technical Round Page

This project now includes an initial student dashboard and a technical coding round page with an embedded code editor.

### Routes

| Route              | Description                                                                                                                        | Auth Required |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `/dashboard`       | Student dashboard with role recommendations, quick actions, feedback placeholders, resume upload, challenges, sessions             | Yes           |
| `/technical-round` | Coding environment with problem statement, sample tests, run button, Monaco editor (fallback to textarea if dependency not loaded) | Yes           |

Both protected by `ProtectedRoute` using a `token` in `localStorage`.

### Technical Round Features (MVP)

- Editable code (JavaScript) with starter function.
- Sample tests executed in-browser (placeholder evaluator) via `Run Tests`.
- Tabs: Problem / Tests / Output.
- Monaco Editor powered by `@monaco-editor/react` (already installed).

> NOTE: Current execution uses `new Function` and is NOT secure. Replace with a backend sandbox / containerized evaluator for production.

### Dashboard Widgets (Placeholders)

- Guidance strip (next best action)
- Recommended roles (progress ring mock)
- Quick actions grid
- Latest interview feedback summary
- Progress charts placeholder
- Resume analyzer upload UI (no backend yet)
- Practice challenges mini-cards
- Upcoming sessions list

### Local Development

1. Start the dev server:

```bash
npm run dev
```

2. Log in / set a token manually for now:

```js
localStorage.setItem("token", "dev-token");
```

3. Navigate to `/dashboard` or `/technical-round`.

### Next Steps (Suggested)

- Implement `/api/dashboard/summary` to hydrate widgets.
- Replace inline test runner with secure API.
- Add more problems & language selector backend support.
- Persist resume analyses & feedback.
- Add charts (skills over time, radar, achievements).
