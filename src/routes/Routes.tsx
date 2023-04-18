import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { UserDetail } from "./UserDetail";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:userLogin" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export { MainRoutes };
