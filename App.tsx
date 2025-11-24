import "./src/styles/global.css";
import NavigationRoutes from "@/routes";
import { AuthContextProvider } from "@/context/auth.context";
import { SnackBarContextProvider } from "@/context/snackBar.context";
import { SnackBar } from "@/components/SnackBar";
import { BottomSheetProvider } from "@/context/bottomSheet.context";

export default function App() {
  return (
    <SnackBarContextProvider>
      <AuthContextProvider>
        <BottomSheetProvider>
          <NavigationRoutes />
          <SnackBar />
        </BottomSheetProvider>
      </AuthContextProvider>
    </SnackBarContextProvider>
  );
}
