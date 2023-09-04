import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import { useContext } from "react";
import AuthContext from "./store/auth-context";



function App() {
  const autCtx = useContext(AuthContext);
  return (
    // <Layout>
    //   <Routes>
    //     <Route path="/" exact element={<HomePage />} />
    //     {!autCtx.isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
    //     <Route path="/profile" element={autCtx.isLoggedIn && <UserProfile />  } >{ !autCtx.isLoggedIn && <Navigate to="/" />}</Route>
    //     <Route path="*" element={<Navigate to="/" />} />
    //   </Routes>
    // </Layout>


    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {!autCtx.isLoggedIn && <Route path="/auth" element={<AuthPage />} />}
        <Route
          path="/profile"
          element={
            autCtx.isLoggedIn ? (
              <UserProfile />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;
