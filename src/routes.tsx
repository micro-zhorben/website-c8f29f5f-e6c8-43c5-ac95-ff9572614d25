import { Routes as RouterRoutes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Fun } from "./pages/fun";
import { Silly } from "./pages/silly";
import { SillyHeader } from "./components/silly-header";

const Routes = () => (
  <>
    <SillyHeader />
    <main className="container py-6">
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/silly" element={<Silly />} />
      </RouterRoutes>
    </main>
  </>
);

export { Routes };