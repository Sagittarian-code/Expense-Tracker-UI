import React, { useState } from 'react'
import { Box, Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@mui/material'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import { toast } from 'react-toastify'
import { useEffect } from 'react'

export default function Edit() {
  // const params = useParams()
  // console.log(params)
  const { expensesid } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    // to update the data we need setFormData
    // to access the data we need fromData 
    title: "",
    amount: 0,
    catg: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const fetchSingleExpense = async () => {
    try {
      const res = await axios.get(`http://localhost:7000/api/expense/view/${expensesid}`)
      // console.log(res.data)
      if (res.data.success) {
        setFormData(res.data.expenseDetails)
      } else {
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => { fetchSingleExpense() }, [])
  // user hook that is used to handle sideffect in your company
  // console.log(formData)
  const handleSubmit = async () => {
    // console.log(formData)
    setIsLoading(true)
    try {
      const res = await axios.put(`http://localhost:7000/api/expense/edit/${expensesid}`, formData)
      console.log(res)
      if (res.data.success) {
        toast.success(res.data.message)
        setTimeout(() => {
          navigate("/")
        }, 2000)
      } else {
        toast.error(res.data.message)
        // alert(res.data.message)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout((() => { setIsLoading(false) }, 2000))
    }
  }
  return <Box>
    <Box sx={{ textAlign: "center" }}>
      <Typography variant='h4'>Expense List </Typography>
    </Box>
    <Box sx={{
      backgroundColor: "lavender",
      p: 4, display: "flex",
      justifyContent: "center",
      alignContent: "center",
    }}>
      <Paper sx={{ width: "70%", p: 3 }}>
        <TextField
          value={formData.title} fullWidth
          onChange={(e) => setFormData({
            ...formData,
            title: e.target.value
          })}
          type='text'
          label="Enter Expense Title"
          placeholder='Enter Expense Title Here'
          sx={{ mb: 2 }} />
        <TextField
          value={formData.amount} fullWidth
          onChange={(e) => setFormData({
            ...formData,
            amount: e.target.value
          })}
          type='number'
          label="Enter Expense Amount"
          placeholder='Enter Expense Title Here'
          sx={{ mb: 2 }} />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Expense Catg</InputLabel>
          <Select
            value={formData.catg}
            onChange={(e) => setFormData({
              ...formData,
              catg: e.target.value
            })}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Select Expense Catg"
            // onChange={handleChange}
            sx={({ mb: 2 })}
          >
            <MenuItem value={"Transport"}>Transport</MenuItem>
            <MenuItem value={"Food"}>Food</MenuItem>
            <MenuItem value={"Other"}>Other</MenuItem>
          </Select>
        </FormControl>

        <Button onClick={handleSubmit}
          sx={{ mb: 1 }}
          variant='contained'
          fullWidth
          loading={isLoading}
        > Submit
        </Button>
        <Button
          component={Link}
          to={"/"} sx={{ mb: 1 }}
          variant='contained'
          color='secondary'
          fullWidth> View Enteries
        </Button>
      </Paper>
    </Box>
  </Box>
}