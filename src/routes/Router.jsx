import { createBrowserRouter} from "react-router";
import App from "../App";
import RetroNotFound from "../error/Error";

export const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <RetroNotFound />,
  },
]);