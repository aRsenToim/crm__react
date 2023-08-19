import { Box, Button } from '@mui/material';
import { FC } from 'react';
import { IRoute, otherRoutes } from '../routes';
import { NavLink } from 'react-router-dom';

const HomePage: FC = () => {
 return <Box component="form"
  sx={{
   '& > :not(style)': { m: 2, width: '25ch'},
  }} style={{
   marginTop: "10px"
  }}>
  {otherRoutes.map((route: IRoute) => <NavLink key={route.path} to={route.path}><Button variant="contained">{route.name}</Button></NavLink>)}
 </Box>
}


export default HomePage