import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ContextProvider } from "./contexts/cart-wishlist-context"
import { FeatureContextProvider } from "./contexts/features-context";
import { BrowserRouter as Router } from "react-router-dom";
import AuthContextProvider from "./contexts/auth-context.js";
 
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
    <AuthContextProvider>
    <FeatureContextProvider>
    <ContextProvider>
    <App />
    </ContextProvider>
    </FeatureContextProvider>
    </AuthContextProvider>
    </Router>
  </StrictMode>,
  rootElement
);
