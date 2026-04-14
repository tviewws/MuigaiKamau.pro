import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { OurFounder } from "./pages/OurFounder";
import { WhatWeOffer } from "./pages/WhatWeOffer";
import { Perspectives } from "./pages/Perspectives";
import { ContactUs } from "./pages/ContactUs";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "our-founder", Component: OurFounder },
      { path: "what-we-offer", Component: WhatWeOffer },
      { path: "perspectives", Component: Perspectives },
      { path: "contact-us", Component: ContactUs },
      { path: "*", Component: NotFound },
    ],
  },
]);
