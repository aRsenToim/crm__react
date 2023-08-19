import { FC } from "react";
import { Route, Routes } from 'react-router-dom';
import { otherRoutes, routes } from ".";
import Layout from "../pages/layout";

const RoutesApp: FC = () => {
 return <div>
  <Routes>
   <Route path="/" element={<Layout />}>
    {routes.map(route => <Route path={route.path} key={route.path} element={<route.component />} />)}
    {otherRoutes.map(route => <Route path={route.path} key={route.path} element={<route.component />} />)}
   </Route>
  </Routes>
 </div>
}

export default RoutesApp