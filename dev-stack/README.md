Name of the Project: Dev Stack (Assignment-5)
-------------------

About the Project:
------------------
Dev Stack is a responsive web application built with React that helps developers explore different technologies used in modern web development. Users can browse frontend, backend, database, programming language, styling, and DevOps technologies, then create their own custom development stack by adding their preferred tools. Each technology is displayed in a card showing its category, difficulty level, and rating. Users can add technologies to their stack with a single click, while duplicate entries are automatically prevented. Technologies can be removed individually or all at once, and toast notifications provide feedback for every action. The project was developed using React, Vite, Tailwind CSS, DaisyUI, and React-Toastify, with all technology data loaded from a local JSON file.

Technologies Used:
-------------------
React.js (with Vite)
JavaScript (ES6+)
Tailwind CSS and DaisyUI
React-Toastify
JSON (for technology data)

Features:
----------
Add to Stack: Add any technology to your stack. The same technology cannot be added twice, and its button becomes "✓ Added to Stack".

Remove and Remove All: Remove a single technology with the ✕ button, or clear the whole stack at once.

Responsive design with toast alerts: The layout works on mobile, tablet and desktop, and toast messages tell you what happened after every action.

Questions:
----------
1. What is JSX, and why is it used in React?

=> JSX stands for JavaScript XML. It allows us to write HTML-like code inside JavaScript. React uses JSX because it makes the UI code easier to read and understand. Instead of creating elements with complex JavaScript functions, we can write code that looks similar to HTML.

2. What is the difference between props and state?

=> Props and state are both used to store data in React, but they work differently. Props are passed from a parent component to a child component and cannot be changed by the child. State is managed inside a component and can be updated whenever needed. In short, props are read-only, while state is changeable.

3. What does the useState hook do, and where did you use it in this project?

=> The useState hook is used to create and update state in a functional component. It helps React remember values between renders. In this project, I used useState in App.jsx to store the technologies list, the loading status, and the stack of selected technologies. I also used it in Navbar.jsx to keep track of the mobile menu and the active link.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

=> The useEffect hook is used to perform side effects in a React component, such as fetching data from an API or loading files. I used useEffect to load the JSON data when the component was first rendered. This ensures that the data is loaded automatically when the page opens and does not reload continuously.

5. Why does every item in a .map() list need a unique key prop?

=> Every item in a .map() list needs a unique key prop so React can identify each element correctly. It helps React update the UI efficiently when items are added, removed, or changed. Without unique keys, React may have trouble tracking which item has been updated.

6. What is conditional rendering? Show one place you used it.

=> Conditional rendering means displaying different content based on a condition. It allows certain elements to appear only when specific conditions are true. For example, I used conditional rendering to show a loading message while data was being fetched and display the actual content after the data had finished loading. I also used it in YourStack.jsx to show the "Your stack is empty." message when no technology is selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

=> Data is passed from a parent component to a child component through props. If a child component needs to send information back to the parent, the parent passes a function as a prop, and the child calls that function with the required data. This allows communication between the child and parent components. In this project, App.jsx passes handleAdd to TechCard as onAdd, and the card calls it when the "Add to Stack" button is clicked.