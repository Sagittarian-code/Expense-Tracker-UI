import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import Button from '@mui/material/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, Links } from 'react-router-dom';
import { baseUrl } from '../api';

export default function ExpenseTable({ allExpenses, fetchAllExpenses }) {
  const handleDelete = async (expensesId) => {
    try {
      const res = await axios.delete(`${baseUrl}/api/expense/delete/${expensesId}`)
      // console.log(res.data);
      if (res.data.success) {
        fetchAllExpenses();
        toast.success(res.data.message)
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ bgcolor: "primary.main" }} >
            <TableCell sx={{ color: "white" }}>Sl.No</TableCell>
    <TableCell sx={{ color: "white" }}>Title</TableCell>
    <TableCell sx={{ color: "white" }}>Category</TableCell>
    <TableCell sx={{ color: "white" }}>Amount</TableCell>
    <TableCell sx={{ color: "white" }}>Spent On</TableCell>
    <TableCell sx={{ color: "white" }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allExpenses.length == 0 ? (
            <TableRow>
              <TableCell colSpan={6} align="center">
              No Data Found !
            </TableCell>
            </TableRow>
          ) :
            allExpenses.map((row, index) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.catg}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>{moment(row.createdAt).format('Do MMM  YYYY, h:mm a')}</TableCell>
                <TableCell>
                  <Button
                  component={Link}
                  to={`/edit/${row._id}`}
                    variant='contained'
                    color='error'
                    sx={{ ml: 1 }}>
                    Edit</Button>
                  <Button onClick={() => handleDelete(row?._id)}
                    variant='contained'
                    color='success'
                    sx={{ ml: 1 }}>
                    Delete</Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
