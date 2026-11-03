# Queue-Up

Queue-Up is a smart, automated scheduling web app designed to take the friction out of planning multiplayer game nights. 

Instead of endlessly messaging back and forth in group chats to find a time that works for everyone, Queue-Up allows users to form groups, share their general availability, and vote on playtimes. The application handles the heavy lifting by making it easier to create polls to find playtimes for users, along with notifying users of possible conflicts between schedules.

## Core Concept
*   **Group & Friend Coordination:** Create dedicated groups for specific games and view friends' general availability and events at a glance.
*   **Smart Polling & Auto-Scheduling:** Propose game times, let the group vote, and let the system automatically schedule the winning slot.
*   **Conflict Detection:** Proactive warnings if a proposed time overlaps with a friend's existing scheduled event or personal blocked time.
*   **Personal Availability Management:** Set custom blocked hours and preferred playtimes.

## Tech Stack
*   **Frontend:** React / Expo
*   **Backend:** Supabase (PostgreSQL, Authentication)

## Project Documentation
*This section serves as a living document for the system architecture.*

*   **[App Flow Diagram](#app-flow-diagram)** - Shows basic app flow.
*   **[EER Diagram](#eer-diagram)** - Relational database schema mapping Users, Groups, Polls, and Availability Blocks.
*   **[Relation Table](#relation-table)** - The relation table mapped from the current EER diagram.
*   **[Link to Figma page](https://www.figma.com/design/yH562zYfFqHDNlKmIBL9gr/Queue-Up-Final-?node-id=2-39&t=x1yfr4ENHv6OKrnI-1)** - The current figma page used to design queue-up.
*   **[Changelog and Sprints](#changelog-and-sprints)** - Current changelog and sprint summaries

## App Flow Diagram

<img width="2442" height="850" alt="AppFlow Diagram drawio" src="https://github.com/user-attachments/assets/84bc8cf5-ca5d-43fb-80c4-67c1a51a6d36" />

## EER Diagram

<img width="1442" height="1062" alt="queue-upEER drawio (1)" src="https://github.com/user-attachments/assets/94ff4542-91d0-4b36-8d9b-cbcc5a73503d" />

## Relation Table

<img width="1785" height="315" alt="RelationTable drawio" src="https://github.com/user-attachments/assets/1e86630f-56d7-432c-95b9-ac6c213820d3" />

## Changelog and Sprints

### Changelog
* Modified EER Diagram and added Relation Table Diagram

### Sprints

<details>
<summary><strong>Sprint 1: Initial Planning(Complete)</strong></summary>

- Created a requirements document, listing the requirements for an MVP.
  
- Created an initial EER diagram for the DB.
  
- Created an initial appflow diagram.
  
</details>

<details>
<summary><strong>Sprint 2: Initial Figma Prototype(Complete)</strong></summary>
  
- Designed basic wireframes for Login, User Dashboard, User Calendar, Friends List, and Friend Calendar.

- Changed "Friends" attribute into an entity.
</details>

<details>
<summary><strong>Sprint 3: Initial Figma Prototype(Complete)</strong></summary>
  
- Completed wireframes for User Groups, Group Dashboard, Group Creation, and Poll Creation.
  
- Updated EER Diagram: Added "Games" as an entity to properly track game-specific groups.
  
- Updated README structure: Added Changelog and Sprints sections for better project tracking.

**Preview of Initial Wireframes:**

<img width="367" height="769" alt="image" src="https://github.com/user-attachments/assets/9332d46a-57db-439f-9494-5de72be7d79f" /> 
<img width="956" height="852" alt="image" src="https://github.com/user-attachments/assets/d227f565-012b-4c39-a2df-6a933d7c59df" /> 
<img width="1112" height="839" alt="image" src="https://github.com/user-attachments/assets/63253cff-1d11-4637-86aa-95592dcf1c5c" />

</details>

<details>
<summary><strong>Sprint 4: Refining Figma Design Prototype(Complete)</strong></summary>
  
- Upgrading the basic wireframes into actual UI designs.
  
- Applying the new color scheme across all app screens.
  
- Standardizing UI components like cards and buttons so everything looks consistent.
  
- Adjusting text colors to improve dark mode readability.

- Completed all pages up to the polls. Poll pages will be carried over to the next sprint.

**Preview of Refined Wireframes:**

<img width="407" height="807" alt="Screenshot 2026-10-09 161748" src="https://github.com/user-attachments/assets/67c73cef-3e68-45c2-ba85-648676d90d35" />
<img width="1209" height="894" alt="image" src="https://github.com/user-attachments/assets/2f115ce1-9f7e-48f1-b070-b387aed1c99d" />

</details>

<details>
  <summary><strong>Sprint 5: User Feedback and Final Adjustments(Complete)</strong></summary>

  - Finish designing wireframe for the prototype.

  - Gather feedback for design.

  - Evaluate feedback and make adjustments based on feedback.

  **Preview of Final Wireframes:**
  
<img width="588" height="1242" alt="image" src="https://github.com/user-attachments/assets/554cf773-e91c-490b-9d90-3304ca04d83a" />
<img width="1635" height="1224" alt="image" src="https://github.com/user-attachments/assets/9d047400-00a0-43a3-96a2-88dd925b576f" />
<img width="1119" height="1253" alt="image" src="https://github.com/user-attachments/assets/188acbd0-281a-4910-89e7-e69fa39cef46" />

</details>

<details>
  <summary><strong>Sprint 6: Database, Login, and User Dashboard Development(Ongoing)</strong></summary>

  - Develop relational table with the EER diagram and then create tables in SQL.

  - Develop frontend for login page and the user dashboard.

  - Host project on Vercel.

  - Create serverless functions for the frontend to communicate with the database.

  - Establish third-party login with Google and Discord.

</details>
