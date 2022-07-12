import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import ProtectedRoute from '../components/ProtectedRoute';
import { AuthContextProvider } from "../context/AuthContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
   const router = useRouter();
   const noAuthRequired = ["/", "/login", "/register",'/example'];
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
