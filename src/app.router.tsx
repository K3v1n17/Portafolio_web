import { createBrowserRouter } from "react-router";
import { Layout } from "./layouts/Layout";
import { Presentation } from "./Pages/Presentation";
import { Experience } from "./Pages/Experience";
import { Projects } from "./Pages/Projects";
import { Skills } from "./Pages/Skills";
import { Contact } from "./Pages/Contact";

export const Approuter = createBrowserRouter(
    [
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Presentation />
                },
                {
                    path: "experiencia",
                    element: <Experience />
                },
                {
                    path: "proyectos",
                    element: <Projects />
                },
                {
                    path: "habilidades",
                    element: <Skills />
                },
                {
                    path: "contacto",
                    element: <Contact />
                }
            ]
        }
    ]
)
