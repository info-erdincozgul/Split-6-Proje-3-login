# Secure Login Application with Form Validation
## About the Project
This project is a form page built with React that applies specific rules to validate user login information (email and password). The project uses the reactstrap library to provide a modern form interface, while the useState hook manages form data, error states, and button activation.

The main goal of the application is to demonstrate a dynamic form validation mechanism that provides instant feedback to user interaction and displays error messages.
## Key Features
* Real-Time Form Validation: As the user enters data into the form fields, rules for email format, password length, and terms of service consent are checked instantly.
* Visual Feedback: Visual error messages and colored borders (FormFeedback component) are displayed for fields that do not comply with the validation rules.
* Conditional Button Activation: The "Sign In" button is disabled until all fields in the form are valid, preventing the submission of incomplete or incorrect data.
* React Router Integration: The react-router-dom library is used for navigation between different pages (, /main, /error). A successful login redirects the user to the main page, while a failed login redirects them to an error page.
* Component-Based Design: The application is separated into logical components such as Login, Header, Footer, and ErrorPage.
## Project Structure
Proje, kodun farklı sorumluluklarını ayıran aşağıdaki dosya ve klasörlerden oluşmaktadır:
src/:
* App.jsx: The main component of the application. It manages page routing (, /main, /error) with react-router-dom and calls other components.
* components/
    * Login.jsx: The most important component of the application. It contains all the logic for managing the form's state, validation rules, and the button.
    * ErrorPage.jsx: The informational page shown to the user in case of an invalid login.
    * Header.jsx: Includes the application title and basic navigation elements like the login button.
    * Footer.jsx: A component that displays the page's footer.
    * Layout.css: Contains the application's general layout and styles (e.g., header, footer, error-container).
## How to Run
To run this project on your local machine, you need to have Node.js and npm installed. The project uses external libraries such as axios, react-router-dom, and reactstrap, so these packages must be installed first.
1. Install Required Packages: In your project folder's terminal, run the following command to install the necessary dependencies:
```
Bash
npm install
```
2. Start the Application: After the dependencies are installed, use the following command to start the application in development mode:
```
Bash
npm run dev
```
3. View in Browser: Once the command is run, your project will typically open automatically at http://localhost:3000 (or a similar port). If it doesn't, you can manually type this address into your browser's address bar to view it.
## Learning Outcomes
* You will learn to implement client-side routing using react-router-dom to create a multi-page application. The App.jsx file defines routes for a login page, a main products page, and an error page, allowing for seamless navigation without full page reloads.
* You will gain experience with component-based architecture by separating different parts of the UI into reusable components. The project demonstrates this by using distinct components for the header, footer, sidebar, product display, and forms.
* You will learn to manage component-level state and handle form validation using the useState hook. The Login.jsx component uses this approach to manage form input, track validation errors, and determine if the form is valid before submission.
* You will learn how to integrate and use external libraries to simplify common tasks. The project utilizes axios for making API calls, reactstrap for pre-styled UI components like forms and buttons, and react-router-dom for routing.