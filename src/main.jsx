import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../src/styles/App.css"
import AppRoutes from "./app/AppRoutes";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";

createRoot(document.getElementById("root")).render(<AppRoutes />);
