import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { ServiceDetail } from "./pages/ServiceDetail";
import { Cases } from "./pages/Cases";
import { Firm } from "./pages/Firm";
import { LegalIndex } from "./pages/legal/LegalIndex";
import { Immigration } from "./pages/legal/Immigration";
import { Criminal } from "./pages/legal/Criminal";
import { Labor } from "./pages/legal/Labor";
import { Fraud } from "./pages/legal/Fraud";
import { ChinaFamily } from "./pages/legal/ChinaFamily";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        { index: true, Component: Home },
        { path: "about", Component: About },
        { path: "services", Component: Services },
        { path: "services/:slug", Component: ServiceDetail },
        { path: "cases", Component: Cases },
        { path: "firm", Component: Firm },
        { path: "legal", Component: LegalIndex },
        { path: "legal/immigration", Component: Immigration },
        { path: "legal/criminal", Component: Criminal },
        { path: "legal/labor", Component: Labor },
        { path: "legal/fraud", Component: Fraud },
        { path: "legal/china-family", Component: ChinaFamily },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL }
);
