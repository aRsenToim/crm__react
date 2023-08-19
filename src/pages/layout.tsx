import { FC, useEffect } from "react"
import { AppBar, Avatar, Box, Button, Container, FormControl, IconButton, InputLabel, Menu, MenuItem, Select, Toolbar, Tooltip, Typography } from '@mui/material'
import { NavLink, Outlet } from 'react-router-dom'
import { routes } from '../routes';
import Popup from "../components/popup";
import { AlertWindow } from "../components/alert";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getGroupsFetch } from "../store/actions/groupsActions";
import { getTeachersFetch } from "../store/actions/teachersActions";

const Layout: FC = () => {
 const groups = useAppSelector(state => state.groupsSlice.groups)
 const teachers = useAppSelector(state => state.teacherSlice.teachers)
 const dispatch = useAppDispatch()


 useEffect(() => {
  if (groups === null) dispatch(getGroupsFetch())
  if (!teachers) {
   dispatch(getTeachersFetch())
  }
 })
 return <div>
  <Popup />
  <AppBar position="static">
   <Container maxWidth="xl">
    <Toolbar disableGutters>
     <Typography
      variant="h6"
      noWrap
      component="a"
      href="/"
      sx={{
       mr: 2,
       display: { xs: 'none', md: 'flex' },
       fontFamily: 'Arial',
       fontWeight: 500,
       fontSize: 23,
       color: 'inherit',
       textDecoration: 'none',
      }}
     >
      REACT ADMIN PANEL
     </Typography>
     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {routes.map(el => <NavLink key={el.path} className='navlink' to={el.path}><Button
       sx={{ my: 2, color: 'white', display: 'block' }}
      >
       {el.name}
      </Button></NavLink>)}
     </Box>
    </Toolbar>
   </Container>
  </AppBar>
  <Container maxWidth="xl">
   <Outlet />
  </Container>
  <AlertWindow />
 </div>
}

export default Layout