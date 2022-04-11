import { HashRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import { Layout } from "../containers/Layout";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NotFound } from "../pages/NotFound";
import "../styles/App.css";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:id" element={<Details />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Layout>
      </HashRouter>
    </Provider>
  );
}

export default App;
