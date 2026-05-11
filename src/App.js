import { BrowserRouter, Routes, Route } from "react-router-dom";

import BirthdayPage from "./pages/BirthdayPage";
import PublishedBirthdayPage from "./pages/PublishedBirthdayPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BirthdayPage />} />
        <Route path="/birthday/:slug" element={<PublishedBirthdayPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;