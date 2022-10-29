import './App.css';
import Home from './pages/Home/Home';
import { QueryClientProvider, QueryClient } from "react-query"
import { ProductContextWrapper } from './store/contex';
function App() {
  const queryClient = new QueryClient()
  return (
    <ProductContextWrapper>
    <QueryClientProvider client={queryClient}>
    <Home />
    </QueryClientProvider>
    </ProductContextWrapper>
  );
}

export default App;
