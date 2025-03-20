# Galactic Grub

Galactic Grub is a A Star Wars-themed recipe-sharing web app where users (Star Wars characters and fans) can post, share and comment on recipes.

Fun backstory: After the Galactic Recipe Hub was destroyed by the Death Star, the app's mission is to preserve recipes from across the galaxy.

## Key Features

- **User Authentication (JWT)**: Sign up, log in, and manage profiles.
- **Recipe Management**: Users can create, edit, and delete recipes.
- **File Upload**: Users can upload recipe images.
- **Comments & Interaction**: Users can comment on and engage with recipes.
- **Theming & Design**: Uses Tailwind CSS (with Shadcn UI) and a dynamic background for an immersive experience.

## Tech Stack

- **Frontend**: React (Vite)
- **State Management**: Zustand
- **Styling**: Tailwind CSS, Shadcn UI
- **Backend**: Node.js, Express, MongoDB, Cloudinary
- **Authentication**: JWT

## Backend API Routes

**Recipes Routes: /api/recipes**

- Get all recipes (READ): GET /
- Get a recipe by ID (READ): GET /:id
- Create a recipe (CREATE): POST /
- Update a recipe (UPDATE): PATCH /:id
- Delete a recipe (DELETE): DELETE /:id

**Auth Routes: /api/auth**

- Sign up user (CREATE): POST /
- Log in user (CREATE): POST /

**Upload Routes: /api/upload**

- Upload an image (CREATE): POST /

## Future Improvements

- Recipe comments
- Recipe filtering, searching & sorting
- Liking & Favoriting
- User search
- Sidebar component for logged in users
- Better user feedback in client
- Cool animations
- Music & Sound Effects
- More Star Wars flavor
- Read-only guest access

## Project Requirements

**Project Structure, Standardization and Convention (20%)**

- Project is organized into appropriate files and directories, following best practices. (2%)
- Project contains an appropriate level of comments. (2%)
- Project is pushed to GitHub, and contains a README file that documents the project, including an overall description of the project. (5%)
- Standard naming conventions are used throughout the project. (2%)
- Ensure that the program runs without errors. (4%)
- Level of effort displayed in creativity, presentation and user experience. (5%)

**Core JavaScript (12%)**

- Demonstrate proper usage of ES6 syntax and tools. (2%)
- Use functions and classes to adhere to the DRY principle. (2%)
- Use Promises and async/await, where appropriate. (2%)
- Use Axios or fetch to retrieve data from an API. (2%)
- Use sound programming logic throughout the application. (2%)
- Use appropriate exception handling. (2%)

**Database (9%)**

- Use MongoDB to create a database for your application. (5%)
- Apply appropriate indexes to your database collections. (2%)
- Create reasonable schemas for your data by following data modeling best practices. (2%)

**Server (19%)**

- Create a RESTful API using Node and Express. (7%)
- Include API routes for all four CRUD operations. (5%)
- Utilize the native MongoDB driver or Mongoose to interface with your database. (5%)
- Include at least one form of user authentication/authorization within the application. (2%)

**Front-End Development (35%)**

- Use React to create the application’s front-end. (10%)
- Use CSS to style the application. (5%)
- Create at least four different views or pages for the application. (5%)
- Create some form of navigation that is included across the application’s pages, utilizing React Router for page rendering. (5%)
- Use React Hooks or Redux for application state management. (5%)
- Interface directly with the server and API that you created. (5%)

**Presentation (5%)**

- Create a short overview of your application. (1%)
- Highlight the use cases of your application. (1%)
- Highlight the technical functionality of the application, from a high-level perspective. (1%)
- Discuss what you have learned through the development of the application. (1%)
- Discuss additional features that could be added to the application in the future. (1%)

## Deliverables

- GitHub Repository: https://github.com/brianetoon/galactic-grub