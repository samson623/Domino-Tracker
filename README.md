# Domino Tracker

Domino Tracker is a web-based scoreboard for recording domino matches. Open
`index.html` in your browser and start tracking games with ease.

## Features
- **Single or team play** – score one-on-one games or 2‑vs‑2 team matches.
- **First to series** – play a single game or choose a first to 3 or first to 5 match.
- **PETAROLL rule** – if a team wins 75‑0 or reaches 150 while the other team
  has less than 75, it counts as two wins.
- **Live scoring** with quick add/subtract buttons and undo support.
- **Leaderboard and history** pages to review past results and player
  statistics.
- **Achievements** to unlock badges for milestones like 10 wins or the first
  PETAROLL, showing who earned each achievement.
- **Dark mode** toggle.
- **Voice control** – use your microphone to add scores, undo actions, or declare winners with simple phrases. The microphone keeps listening while the voice button is active.
- **Local storage** – all data is saved in your browser and can be exported or
  reset at any time.

## Usage
1. Clone or download this repository.
2. Open `index.html` in your preferred web browser.
3. Create teams or enter player names and start a new game.

Your game data stays in the browser, so there's no server setup required.

## Supabase Authentication

1. Create a project at [Supabase](https://supabase.com/).
2. In your project dashboard, go to **Authentication → Providers** and enable the **Google** provider.
3. From **Project Settings → API**, copy the `supabaseUrl` and `supabaseAnonKey` and place them in `supabase-config.js`.
4. Open `index.html` in your browser to run the app.

### Security considerations

- Use only the public `supabaseAnonKey`; never expose service-role keys in the browser.
- Ensure the redirect URL in Supabase matches the location where you serve `index.html`.
