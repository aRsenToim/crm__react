import { Box, Button, Modal, Typography } from "@mui/material"
import { FC } from "react"
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/hooks";
import { setPopup } from "../store/slices/appSlice";

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

const Popup: FC = () => {
 const dispatch = useDispatch()
 const popup = useAppSelector(state => state.appSlice.popup)
 const dataPopup = useAppSelector(state => state.appSlice.dataPopup)
 return <Modal
  open={popup}
  onClose={() => {dispatch(setPopup(false))}}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
 >
  <Box sx={style}>
   <Typography id="modal-modal-title" variant="h6" component="h2">
    {dataPopup?.title}
   </Typography>
   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    {dataPopup?.description}
   </Typography>
   <Button onClick={() => {
    dispatch(setPopup(false))
    dataPopup?.callback()
    }} variant="contained">{dataPopup?.btn}</Button>
  </Box>
 </Modal>
}

export default Popup