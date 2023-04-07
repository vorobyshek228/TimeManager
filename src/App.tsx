import { RouterProvider } from "react-router";
import { router } from "./components/router";
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
