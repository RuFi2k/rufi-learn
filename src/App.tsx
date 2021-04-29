import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "firebase/firestore";
import renderRouter from "./router";
import { ScrollLayout } from "./layouts";
import { AuthProvider } from "./components";

function App() {
  const Routes = renderRouter;

  return (
    <BrowserRouter>
      <AuthProvider>
        <ScrollLayout>
          <Routes />
        </ScrollLayout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
