import { FC, useEffect, useState } from "react";
import Board from "../components/Board/Board";
import { IconButton, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setPaymontsFetch } from "../store/actions/paymontsActions";
import { IPaymont } from "../types/paymontsType";
import { setTotalSum } from "../store/slices/paymontsSlice";
import { setWindow } from "../store/slices/appSlice";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { IPaymontRow } from "../types/pageType";

const columns: GridColDef[] = [
 { field: 'id', headerName: 'ID paymont', width: 200 },
 { field: 'sum', headerName: 'sum', width: 150 },
 { field: 'idAccount', headerName: 'idAccount', width: 200 },
 { field: 'email', headerName: 'email', width: 200 },
 { field: 'telegramID', headerName: 'telegram ID', width: 200 },
];

const Paymonts: FC = () => {
 const paymonts = useAppSelector(state => state.paymontsSlice.paymonts)
 const totalSum = useAppSelector(state => state.paymontsSlice.totalSum)
 const dispatch = useAppDispatch()
 const [isFetch, setIsFetch] = useState<boolean>(false)
 const [rows, setRows] = useState<IPaymontRow[] | null>(null)

 useEffect(() => {
  if (!isFetch) {
   dispatch(setPaymontsFetch())
   setIsFetch(true)
  } else if (paymonts) {
   setRows(paymonts.map((paymont: IPaymont) => {
    return {
     id: paymont.idPaymont,
     sum: paymont.sum,
     idAccount: paymont.account.id,
     email: paymont.account.email,
     telegramID: paymont.account.telegramId
    }
   }))
  }
  dispatch(setTotalSum())
 }, [isFetch, paymonts])


 return <div>
  <Box style={{
   display: "flex",
   alignItems: "start",
   marginTop: "20px",
  }}
   sx={{
    '& > :not(style)': { m: 2, width: '100%' },
   }}>
   <Board title={`${totalSum}$`} description="Total sum" />
   <DataGrid
    rows={rows ?? []}
    columns={columns}
    onCellClick={() => { }}
    initialState={{
     pagination: {
      paginationModel: { page: 0, pageSize: 5 },
     },
    }}
    pageSizeOptions={[5, 10]}
    checkboxSelection
   />
  </Box>
  <Box
   sx={{
    '& > :not(style)': { m: 2, width: '25ch' },
   }}>
   <Button variant="contained" onClick={() => { dispatch(setWindow(true)) }}>Create paymont</Button>
  </Box>
 </div>
}

export default Paymonts