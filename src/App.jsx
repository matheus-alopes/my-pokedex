import { AppRoutes } from "./pages/routes"
import { ThemeProvider } from "./contexts/theme-provider"

function App() {
  window.addEventListener('beforeunload',
    () => {
      localStorage.clear();
    }
  );

  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App