import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { deleteGroupFetch, getGroupsFetch } from '../store/actions/groupsActions'
import { DataGrid, GridColDef, GridEventListener, GridValueGetterParams } from '@mui/x-data-grid';
import { IGroup } from '../types/groupsType';
import { IRow } from '../types/pageType';
import { Box, Button, Typography } from '@mui/material';
import { setDataPopup, setPopup } from '../store/slices/appSlice';

const columns: GridColDef[] = [
 { field: 'id', headerName: 'ID', width: 330 },
 { field: 'title', headerName: 'title', width: 200 },
 { field: 'time', headerName: 'time (in months)', width: 200 },
 { field: 'price', headerName: 'price', width: 200 },
 { field: 'teacher', headerName: 'teacher', width: 200 },
];
const Groups: FC = () => {
 const [isRow, setIsRow] = useState<string | null>(null)
 const [rows, setRows] = useState<IRow[] | null>(null)
 const groups = useAppSelector(state => state.groupsSlice.groups)
 const dispatch = useAppDispatch()



 const handleEvent: GridEventListener<'cellClick'> = (params) => {
  if (!params.value) {
   setIsRow(params.row.id)
  } else {
   setIsRow(null)
  }
 };

 const deleteGroupHandle = () => {
  if (isRow) {
   dispatch(setPopup(true))
   dispatch(setDataPopup({
    title: "Are you sure you want to remove the group?",
    description: "If deleted, the group will not be reinstated",
    btn: "delete user",
    callback: () => {
     dispatch(deleteGroupFetch(isRow))
    }
   }))
  }
 }

 useEffect(() => {
  if (groups === null) dispatch(getGroupsFetch())
  if (groups) {
   let arr = groups?.map((group: IGroup) => {
    console.log();

    let row: IRow = {
     id: group.id,
     title: group.title,
     time: group.time,
     price: group.price,
     teacher: `${group.teacher?.name} ${group.teacher?.lastname}`
    }
    return row
   })
   setRows(arr);
  }
 }, [groups])
 return <div style={{
  width: "1190px",
  margin: "50px auto"
 }}>
  <Box
   sx={{
    '& > :not(style)': { m: 2, width: '25ch' },
   }}>
   <Typography variant="h6" component="h2">
    Groups:
   </Typography>
  </Box>
  <DataGrid
   rows={rows ?? []}
   columns={columns}
   onCellClick={handleEvent}
   initialState={{
    pagination: {
     paginationModel: { page: 0, pageSize: 5 },
    },
   }}
   pageSizeOptions={[5, 10]}
   checkboxSelection
  />
  {isRow ? <Button onClick={deleteGroupHandle} variant="contained">Delete Group</Button> : <Button variant="contained" disabled>
   Delete Group
  </Button>}
 </div>
}

export default Groups