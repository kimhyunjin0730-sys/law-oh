import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Cases } from "./pages/Cases";
import { LegalIndex } from "./pages/legal/LegalIndex";
import { Immigration } from "./pages/legal/Immigration";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: Home },
        { path: "about", Component: About },
        { path: "services", Component: Services },
        { path: "cases", Component: Cases },
        { path: "legal", Component: LegalIndex },
        { path: "legal/immigration", Component: Immigration },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);
