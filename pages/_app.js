import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoute from '../components/ProtectedRoute';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const noAuthRequired = ['/', '/login', '/register'];
  return (
    <AuthContextProvider>
      <Navbar />
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )}
    </AuthContextProvider>
  );
}

export default MyApp;
