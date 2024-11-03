import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import DashboardPage from './pages/Dashboard'
import SignUpPage from './pages/SignUp'
import Layout from './layout'
import CoursesPage from './pages/Courses'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import ProtectedRoute from './auth/protectedRoutes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <Provider store={store}>
    <HashRouter>
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/courses" element={<ProtectedRoute><CoursesPage /></ProtectedRoute>} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
      <ToastContainer />
      </Layout>
    </HashRouter>
    </Provider>
  )
}

export default App
