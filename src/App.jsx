import AppRouter from "./routes/AppRoutes";
import { Toaster } from "react-hot-toast";
import { useTheme } from "./context/ThemeContext";

import { Provider } from "react-redux";
import { store } from "../src/redux/store";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`${theme.bg} ${theme.textPrimary} min-h-screen`}>
      <Toaster position="top-right" />
      <AppRouter />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;