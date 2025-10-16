import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./assets/components/App/App";
import { Provider } from "react-redux";
import store from "./assets/redux/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
