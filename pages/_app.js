import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import ProtectedRoute from '../components/ProtectedRoute';
import { AuthContextProvider } from "../context/AuthContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
   const router = useRouter();
   const noAuthRequired = ["/", "/login", "/register",'/example'];

  const loggedIn = typeof window !== 'undefined' ? localStorage.getItem('Token') : null

  console.log('logged in: ', loggedIn)

   return (
     <AuthContextProvider>
       <Navbar loggedIn={!!loggedIn} />
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
