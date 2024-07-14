import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Home from "./pages/Home";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const router = createBrowserRouter([{ path: "/", element: <Home /> }]);

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
