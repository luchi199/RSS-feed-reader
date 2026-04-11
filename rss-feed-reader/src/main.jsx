import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";

import FeedPage from "./pages/FeedPage.jsx";
import DigestPage from "./pages/DigestPage.jsx";
import DiscoverPage from "./pages/DiscoverPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<FeedPage />} />
          <Route path="digest" element={<DigestPage />} />
          <Route path="discover" element={<DiscoverPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
