# 📌 Rättningsrapport – fed24d-the-last-todos-NicoleSilfverling

## 🎯 Uppgiftens Krav:
# Todo App Web Application

## Overview

This is a modern, responsive Todo web application built using React, TypeScript, Tailwind CSS, and Vite. Users can add, manage, and sort their tasks with support for due dates, overdue highlighting, and completion tracking. The interface is clean, minimalist, and optimized for both desktop and mobile experiences.

---

## Key Features

- **Add Todos**: Create tasks with title, description, and due date.
- **Completion Tracking**: Mark tasks as completed or uncompleted.
- **Overdue Detection**: Tasks are marked as overdue if the current date is past the due date.
- **Sorting Options**:
  - By Newest or Oldest
  - By Due Date (Soonest or Latest)
  - Alphabetically (A–Z, Z–A)
- **Form Toggle**: Show/hide the add-todo form using a single button.
- **Responsive Design**: Stacks and aligns elements appropriately for small screens and larger desktops.
- **Local Storage Support**: Todos persist between page reloads.

---

## Technologies

- **React**: UI rendering and component logic.
- **TypeScript**: Static typing and developer experience.
- **Tailwind CSS**: Utility-first styling for rapid design.
- **Vite**: Fast development server and optimized build system.
- **GitHub Pages**: For deployment of the live site.

---

## Demo

You can view the live project [here](https://medieinstitutet.github.io/fed24d-the-last-todos-NicoleSilfverling/).



## 🔍 ESLint-varningar:


## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller alla krav specificerade i uppgifter och dessutom har flera förbättrade funktioner som renderar ett välorganiserat projekt och visar på en hög kodstandard. Användningen av TypeScript ger extra stöd för utveckling med typer, och Tailwind CSS erbjuder en konsekvent lågfriktionsmetod för styling. Web appen är responsiv och hanterar local storage, vilket visar på bred förståelse av frontend-utveckling.

💡 **Förbättringsförslag:**  
För fortsatt förbättring kan man överväga att implementera funktionalitet för att redigera en uppgift. Funktionen för lagring och återställning från localStorage sker vid varje state-uppdatering, vilket kan undvikas för att effektivisera lagringen, t.ex. med en 'useEffect' hook som triggar endast när 'todos' ändras.