import AppRouter from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme.bg} ${theme.textPrimary} min-h-screen`}>
      <Toaster position="top-right" />
      <AppRouter />
    </div>
  );
}

export default App;