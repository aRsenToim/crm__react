import { FC } from "react";
import { Route, Routes } from 'react-router-dom';
import { IRoute, UnivalnyeRoute, otherRoutes, routes } from ".";
import Layout from "../pages/layout";

const RoutesApp: FC = () => {
 return <div>
  <Routes>
   {UnivalnyeRoute.map((route: IRoute) => <Route path={route.path} element={<route.component />} />)}
   <Route path="/" element={<Layout />}>
    {routes.map((route: IRoute) => <Route path={route.path} key={route.path} element={<route.component />} />)}
    {otherRoutes.map((route: IRoute) => <Route path={route.path} key={route.path} element={<route.component />} />)}
   </Route>
  </Routes>
 </div>
}

export default RoutesApp