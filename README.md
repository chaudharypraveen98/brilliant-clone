# Brilliant Clone

This project is a clone of the Brilliant.com user experience, implemented using React, Vite, Tailwind CSS, Redux Toolkit, and Firebase Authentication. The application includes a landing page, an authentication flow, and a course dashboard.

## Features Implemented
- Responsive design with a desktop-first approach
- Landing page with hero section, category icons, and social proof
- Authentication flow using Google OAuth and email/password
- Course dashboard with progress indicators and course recommendation cards
- Smooth page transitions and loading states
- Error handling integrated with Redux and React Toastify

## Technologies Used
- **Frontend Stack**: React 18+, Vite, TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Authentication
- **Error Handling**: Redux and React Toastify

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd brilliant-clone
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root of the project with the following content:
   ```env
   VITE_FIREBASE_API_KEY=xxx
   VITE_FIREBASE_AUTH_DOMAIN=xxx
   VITE_FIREBASE_PROJECT_ID=xxx
   VITE_FIREBASE_STORAGE_BUCKET=xxx
   VITE_FIREBASE_MESSAGING_SENDER_ID=xxx
   VITE_FIREBASE_APP_ID=xxx
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Technical Decisions and Trade-offs
- **State Management**: I chose Redux Toolkit for its simplicity in managing state and integrating with React. It helped streamline the handling of user authentication and global error states.
- **Styling**: Tailwind CSS was used for rapid UI development and maintaining consistency with the Figma designs.
- **Authentication**: Firebase was selected for its ease of use and built-in support for various authentication methods.

## Known Limitations
- Some animations may not perfectly match the provided Figma designs due to time constraints.
- Error handling is basic; further enhancements can be made to improve user feedback.

## Time Spent
Approximately 5 hours on implementation, testing, and debugging.

## Local Development Instructions
- Follow the setup instructions above to run the project locally.
- Make sure to have the required environment variables configured correctly.

## Additional Notes
- The application uses dummy data for all content.
- Maintain consistent loading and error states throughout the application.
- Focused on core functionality to meet assignment requirements.
- Code is commented and organized for maintainability.