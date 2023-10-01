import { RouterProvider } from "react-router-dom";
import Layouts from "./layouts";
import PageRouter from "./router.js";
import "./App.css";

function App() {
  return (
    <Layouts>
      <RouterProvider router={PageRouter} />
    </Layouts>
  );
}

export default App;
