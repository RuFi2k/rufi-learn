import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "firebase/firestore";
import renderRouter from "./router";
import { ScrollLayout } from "./layouts";
import { AuthProvider } from "./components";

function App() {
  const config = {
    apiKey: "AIzaSyCYk5nEG7FXPJsUxHOjg-x_Yy-fw0nrXn8",
    authDomain: "rufi-learn.firebaseapp.com",
    projectId: "rufi-learn",
    storageBucket: "rufi-learn.appspot.com",
    messagingSenderId: "783900561839",
    appId: "1:783900561839:web:72c22b8fd61fac5de81f5a",
  };

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
