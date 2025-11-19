import "./src/styles/global.css";
import NavigationRoutes from "@/routes";
import { AuthContextProvider } from "@/context/auth.context";
import { SnackBarContextProvider } from "@/context/snackBar.context";
import { SnackBar } from "@/components/SnackBar";

export default function App() {
  return (
    <SnackBarContextProvider>
      <AuthContextProvider>
        <NavigationRoutes />
        <SnackBar />
      </AuthContextProvider>
    </SnackBarContextProvider>
  );
}
