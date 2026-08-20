# Queue-Up

Queue-Up is a smart, automated scheduling web app designed to take the friction out of planning multiplayer game nights. 

Instead of endlessly messaging back and forth in group chats to find a time that works for everyone, Queue-Up allows users to form groups, share their general availability, and vote on playtimes. The application handles the heavy lifting by automatically resolving schedule conflicts and seamlessly locking in the final game night calendar for the group.

## Core Concept
*   **Group & Friend Coordination:** Create dedicated groups for specific games and view friends' general availability at a glance.
*   **Smart Polling & Auto-Scheduling:** Propose game times, let the group vote, and let the system automatically schedule the winning slot.
*   **Conflict Detection:** Proactive warnings if a proposed time overlaps with a friend's existing scheduled event or personal blocked time.
*   **Personal Availability Management:** Set custom blocked hours and preferred playtimes.

## Tech Stack
*   **Frontend:** React / Expo (Universal Web App)
*   **Backend:** Supabase (PostgreSQL, Authentication)

## Project Documentation
*This section serves as a living document for the system architecture.*

*   **[App Flow Diagram](#app-flow-diagram)** - Shows basic app flow.
*   **[EER Diagram](#eer-diagram)** - Relational database schema mapping Users, Groups, Polls, and Availability Blocks.
*   **[Link to Figma page](https://www.figma.com/design/Z4P8JsJpbluE7xK7F8X0es/Queue-Up?node-id=2-37&t=YqB3jkiyO7DwWifE-1)** - The current figma page used to design queue-up.
*   **[Insert Link to Flowchart]** - Logic flows for pages and processes.
*   **[Changelog and Sprints](#changelog-and-sprints)** - Current changelog and sprint summaries

## App Flow Diagram

<img width="2442" height="850" alt="AppFlow Diagram drawio" src="https://github.com/user-attachments/assets/84bc8cf5-ca5d-43fb-80c4-67c1a51a6d36" />

## EER Diagram

<img width="1402" height="1022" alt="queue-upEERV3 drawio" src="https://github.com/user-attachments/assets/0522c6aa-4a49-4559-beea-37be57648ee9" />

## Changelog and Sprints

### Changelog
* Added "Games" Entity to the database to more accurately reflect the MVP
* Added Sprint summary and changelog

### Sprints

<details>
<summary><strong>Sprint 1: Initial Planning</strong></summary>

- Created a requirements document, listing the requirements for an MVP
  
-   Created an initial EER Diagram for the DB
  
-   Created an initial Appflow Diagram
  
</details>

<details>
<summary><strong>Sprint 2: Initial Figma Prototype</strong></summary>
  
- Designed basic wireframes for Login, User Dashboard, User Calendar, Friends List, and Friend Calendar

-   Changed "Friends" attribute into an entity
</details>

<details>
<summary><strong>Sprint 3: Initial Figma Prototype(IN PROGRESS)</strong></summary>
  
-   Added Changelog and Sprints to the summary
  
-   Working on User Groups, Group page, Group creation, and Poll creation wireframes
  
-   Added "Games" as an entity in the EER Diagram
</details>
