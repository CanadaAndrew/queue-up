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
*   **[Insert Link to Figma] - Initial Figma prototype for the mobile webpage.
*   **[Insert Link to Flowchart]** - Logic flows for pages and processes.

## App Flow Diagram

<img width="2442" height="850" alt="AppFlow Diagram drawio" src="https://github.com/user-attachments/assets/84bc8cf5-ca5d-43fb-80c4-67c1a51a6d36" />

## EER Diagram

<img width="1252" height="1022" alt="queue-upEER drawio" src="https://github.com/user-attachments/assets/a3812c7d-23bc-4fc4-bf5b-73a4fc23776f" />
