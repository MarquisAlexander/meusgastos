import "./src/styles/global.css";
import NavigationRoutes from "@/routes";
import { AuthContextProvider } from "@/context/auth.context";
import { SnackBarContextProvider } from "@/context/snackBar.context";

export default function App() {
  return (
    <SnackBarContextProvider>
      <AuthContextProvider>
        <NavigationRoutes />
      </AuthContextProvider>
    </SnackBarContextProvider>
  );
}
