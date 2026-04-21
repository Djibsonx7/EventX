# EventX Build Status

This file is the living tracker for the EventX product build.
It is meant to evolve continuously as the project advances.

## Purpose
- keep the team aligned on what is already built
- make visible what is still missing
- avoid losing the global architecture while iterating
- track the current phase of the prototype and the next priorities

---

## Current product philosophy
EventX is a **B2B live audience engagement platform** for collective experiences.
It is not only a quiz app.
It is designed for:
- events and ceremonies
- conferences and seminars
- brand activations and stands
- campuses and educational programs
- training sessions and workshops
- institutional and community experiences

The MVP currently focuses first on **Quiz Battle Live** as the reference experience.

---

## Product surfaces
The product is currently thought around these main surfaces:

### 1. Operator Studio
Used by the organization operating the event.
Examples:
- agency
- company
- school
- institution

Main goals:
- create sessions
- configure event identity
- choose game format
- launch the live experience
- monitor participation

### 2. Player Experience
Used by the participant on mobile.
Main goals:
- join via code or QR
- wait in the lobby / waiting room
- play live
- see status and results

### 3. Show Screen / Stage Screen
Used for the public screen / event screen / projection screen.
Main goals:
- display QR + session code
- create event energy
- show countdowns, questions, reveals, rankings
- make sponsorship and branding visible

### 4. Platform Owner Surface
Used by EventX owner/admin.
Main goals:
- manage clients and licenses
- monitor platform activity
- analytics across organizations
- future partner / agency management

> Note: the Show Screen is still missing as a true dedicated surface.

---

## Current architecture status

### Already built
- Home / landing page
- Create Session page
- Join Session page
- Live Control Room page
- Player Waiting Room page
- Player Game page
- local prototype session state in `frontend/src/App.jsx`
- mock host -> player sync simulation
- branding state with:
  - eventName
  - sponsorName
  - hostName
  - theme
- propagation of branding across operator/player pages

### Partially built
- Live experience flow
- host -> player simulated sync
- branding / sponsor presence
- leaderboard visual layer
- player game interaction

### Not yet built
- dedicated Show Screen / Stage Screen
- explicit session phases / moments engine
- richer session engine (question index, reveal state, finale state, etc.)
- real backend persistence
- real join code validation
- real websocket sync
- analytics / ROI dashboard
- platform owner console
- partner / agency specific model

---

## Current prototype pages

### Operator side
- `frontend/src/pages/HomePage.jsx`
- `frontend/src/pages/CreateSessionPage.jsx`
- `frontend/src/pages/LiveSessionPage.jsx`

### Player side
- `frontend/src/pages/JoinSessionPage.jsx`
- `frontend/src/pages/PlayerWaitingRoomPage.jsx`
- `frontend/src/pages/PlayerGamePage.jsx`

### Core app state
- `frontend/src/App.jsx`

---

## Current gaps in the architecture

### Gap 1 — Show Screen
The product still lacks a dedicated public screen / stage screen.
This is currently the most visible architectural missing piece.

### Gap 2 — Moments / phases
The product still lacks an explicit experience model such as:
- lobby / warm-up
- countdown / launch
- question live
- answer lock
- reveal
- leaderboard
- finale

### Gap 3 — richer session engine
The state model is still too light for the final experience.
Needed later:
- phase
- question index
- question set
- reveal state
- leaderboard state
- finale state
- show mode

### Gap 4 — business value layer
Still missing:
- analytics
- sponsor visibility metrics
- participation metrics
- ROI reporting

---

## Current build strategy
We are not building purely by user or purely by frontend/backend split.
We are building by **complete product experience blocks**.

That means each important block should include:
- operator side
- player side
- visible demo flow
- later, stage/spectacle side if relevant

---

## Recommended experience model for Quiz Battle Live

### Moment 1 — Lobby / Warm-up
Surfaces involved:
- operator
- player
- show screen

Expected content:
- QR code
- session code
- avatars joining
- branding
- sponsor visibility
- ready state
- event atmosphere

### Moment 2 — Launch / Countdown
Expected content:
- transition from waiting to live
- countdown
- stronger energy
- clear change of state

### Moment 3 — Question Live
Expected content:
- question visible on stage
- answer flow on mobile
- timer
- live feeling

### Moment 4 — Reveal / Leaderboard
Expected content:
- correct answer
- ranking changes
- score reveal
- sponsor / stage visuals

### Moment 5 — Finale / Wrap-up
Expected content:
- winner view
- sponsor presence
- closing moment
- summary / celebration

---

## What should be built next

### Immediate next architecture block
1. Add a dedicated **ShowScreenPage**
2. Add a real notion of **phase / moment** in session state
3. Separate the 3 event surfaces more clearly:
   - operator
   - player
   - show

### After that
4. Enrich the Quiz Battle Live flow moment by moment
5. Improve transitions, avatars, motion, and live energy
6. Add richer scoring / reveal / leaderboard behavior
7. Move later to backend + analytics

---

## Update rule for this file
This file should be updated whenever:
- a major page or surface is added
- a new architecture block is completed
- a major missing piece is clarified
- the next priority changes

Each update should keep these sections current:
- current architecture status
- current gaps
- what should be built next

---

## Current status summary
EventX already has:
- a strong operator surface
- a visible player surface
- a coherent branding layer
- a demo-worthy prototype flow

EventX still needs:
- a true show screen
- a clearer moments engine
- a richer session engine
- later, analytics and platform layers
