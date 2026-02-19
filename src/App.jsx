import { AuthProvider } from "../src/context/AuthContext";
import AppRouter from "../src/routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
