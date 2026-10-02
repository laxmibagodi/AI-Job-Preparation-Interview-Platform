/**
 * Main Application Component
 * ==========================
 * Root component providing:
 * - Authentication state management with JWT handling
 * - Interview session state management
 * - Client-side routing with protected routes
 * - Context-based state propagation to child components
 */

import { RouterProvider } from "react-router"
import { router } from "./app.routes.jsx"
import { AuthProvider } from "./features/auth/auth.context.jsx"
import { InterviewProvider } from "./features/interview/interview.context.jsx"

/**
 * App Component Structure:
 * AuthProvider → Manages user authentication & token persistence
 *   └─ InterviewProvider → Manages interview sessions & reports
 *      └─ Router → Application navigation & page routing
 */
function App() {
  return (
    <AuthProvider>
      <InterviewProvider>
        <RouterProvider router={router} />
      </InterviewProvider>
    </AuthProvider>
  )
}

export default App
