🧱 Dev Stack Builder
Dev Stack Builder is an interactive web app designed to help developers browse, select, and organize their ideal tech stack for web development. Users can explore various frontend, backend, database, and DevOps tools, compare ratings and difficulty levels, and curate a customized stack in real time.

🛠️ Tech Stack
Frontend Framework: React.js (TypeScript)

Styling: Tailwind CSS & DaisyUI

Tool: VS Code

Build Tool: Vite

Notifications: React-Toastify

Data Fetching: Native fetch with AI generated JSON data (data.json)

✨ Features
Dynamic Stack Builder: Browse tech cards across 7 distinct categories and add items to your stack sidebar with real-time state updates and duplicate prevention.

Interactive Management: Instantly remove individual items or clear the entire stack with a single click, accompanied by custom toast notifications.

Responsive & Mobile-First Design: Complete layout responsiveness featuring a sticky navbar with a mobile hamburger drawer, adaptive multi-column grid, and stacked sidebar panels.

❓ Frequently Asked React Questions
1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It allows us to write HTML-like markup directly inside JavaScript code. It is used in React because it makes component templates much cleaner to read and write compared to traditional React.createElement() functions.

2. What is the difference between props and state?
Props are read-only data passed from a parent component down to a child component.

State is local data managed inside a component that can change over time based on user actions.

3. What does the useState hook do, and where did you use it in this project?
The useState hook allows functional components to store and update local state data. In this project, useState is used in App.tsx to hold the data fetch promise and inside TechSection.tsx to manage the selectedStack array.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
The useEffect hook handles side-effects in functional components, such as performing asynchronous network requests. Fetching /data.json is a side-effect, and placing it inside a lifecycle mechanism ensures data is fetched properly on mount without triggering infinite render loops.

5. Why does every item in a .map() list need a unique key prop?
React uses the unique key prop to track list items across re-renders. It helps React identify exactly which items have been added, updated, or removed, allowing it to update only the modified DOM nodes efficiently.

6. What is conditional rendering? Show one place you used it.
Conditional rendering means displaying specific UI components based on boolean conditions. In StackSidebar.tsx, I used conditional rendering on stack.length === 0: if true, it shows the empty stack message; if false, it renders the selected items list and the "Remove All" button.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to Child: Data is passed down through props (for example, passing the technologies array from TechSection to TechGrid).

Child to Parent: The parent passes down a callback function as a prop (like onAddToStack). When an event occurs in the child, it executes that callback function to send data back up to the parent.


Now Try Out Our DevStack Web