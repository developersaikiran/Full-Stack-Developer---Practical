import logo from './logo.svg';
import './App.css';
// import { Route, Router, RouterProvider, Routes } from 'react-router-dom';
// import { ConfigProvider } from 'antd';
// import { routeList } from './routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
  // return (
  //   <ConfigProvider
  //     theme={{
  //       hashed: false,
  //       token: {
  //         fontFamily: "Euclid Circular A, sans-serif",
  //       },
  //     }}
  //   >
  //     <h1>12</h1>
  //     {/* <Router>
  //       <Routes>
  //         {routeList?.map((routeItem, routeIndex) => {
  //           return (
  //             <Route
  //               key={routeIndex}
  //               path={routeItem?.path}
  //               element={
  //                 <ProtectedRoute
  //                   path={routeItem?.path}
  //                   name={routeItem?.name}
  //                   component={routeItem?.component}
  //                   isAuth={routeItem?.isAuth}
  //                   accessRoles={routeItem?.accessRoles}
  //                 >
  //                   {routeItem.component}
  //                 </ProtectedRoute>
  //               }
  //             />
  //           )
  //         })}
  //       </Routes>
  //     </Router> */}

  //     <RouterProvider router={routeList}/>
  //   </ConfigProvider>

  // );
}

export default App;
