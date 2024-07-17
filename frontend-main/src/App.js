import { Route, Routes } from "react-router";
import Users from "./component/users/Users";
import SignUp from "./component/auth/SignUp";
import Login from "./component/auth/Login";
import { AuthProvider } from "./component/AuthContext";
import PrivateRoute from "./component/PrivateRoute";
import PageNotFound from "./component/PageNotFound";
import Header from "./shared/Header";
import { ToastContainer } from "react-toastify";
import RestrictedRoute from "./component/RestrictedRoute";

function App() {
  return (
    <AuthProvider>
      <PrivateRoute element={<Header />} />
      <Routes>
        <Route path="/" element={<PrivateRoute element={<Users />} />} />
        <Route
          path="/login"
          element={<RestrictedRoute element={<Login />} />}
        />
        <Route
          path="/signup"
          element={<RestrictedRoute element={<SignUp />} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </AuthProvider>
  );
}

export default App;
