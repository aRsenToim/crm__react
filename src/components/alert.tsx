import { Alert, AlertTitle, Stack } from '@mui/material';
import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setAlertIsOpen } from '../store/slices/appSlice';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export const AlertWindow: FC = () => {
  const alert = useAppSelector(state => state.appSlice.alert)
  const alertIsOpen = useAppSelector(state => state.appSlice.alertIsOpen)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(setAlertIsOpen(false))  
    }, 4000);
  }, [alertIsOpen])

  return <> {alertIsOpen ? <Stack style={{
    position: 'absolute',
    bottom: "0",
    right: "0",
    width: 500,
    border: '1px solid red'
  }} sx={{ width: '100%' }} spacing={2}><Alert severity="error">
      <AlertTitle>{alert?.title}</AlertTitle>
      {alert?.description}
    </Alert></Stack> : undefined}</>
}