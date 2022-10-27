import './App.css';
import Home from './pages/Home/Home';
import { QueryClientProvider, QueryClient } from "react-query"
function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <Home />
    </QueryClientProvider>
  );
}

export default App;
