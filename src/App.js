import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import { publicRoutes } from "./components/Routes";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Ele = route.element
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <DefaultLayout>
                      <Ele />
                    </DefaultLayout>
                  } />
              )
            })
          }
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
