import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Home from "./pages/Home";
import ErrorPage from "./components/ErrorPage";
import Resume from "./components/Resume/Resume";
import Contact from "./components/Contact";
import { Skills } from "./components/Resume/Skills";
import WebDevelopmentExpertise from "./pages/WebDevelopment";
import DataAnalyticsExpertise from "./pages/DataAnalyticsExpertise";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <Projects /> },
      { path: "resume", element: <Resume /> },
      { path: "contact", element: <Contact /> },
      { path: "skills", element: <Skills /> },
      {
        path: "/analytics",
        element: <DataAnalyticsExpertise />,
      },

      { path: "web-development", element: <WebDevelopmentExpertise /> },
      {
        path: "projects/:projectId",
        element: <ProjectDetails />,
        loader: async ({ params }) => {
          const response = await fetch("/projects.json");
          if (!response.ok) {
            throw new Response("Not Found", { status: 404 });
          }
          const projects = await response.json();
          const project = projects.find(
            (p) => p.id.toString() === params.projectId
          );

          if (!project) {
            throw new Response("Not Found", { status: 404 });
          }

          return project;
        },
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
