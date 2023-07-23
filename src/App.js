import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import BsModal from './Comp/BsModal';
import { SplitButton } from 'react-bootstrap';

function App() {
  const [open,setOpen] = useState(false)
  const [model,setModel] = useState({})
  const [arr,setArr] = useState([
    {
      id:1,
      name:"Hafeez",
      check:"active"
    },
    {
      id:2,
      name:"waqar",
      check:"nonactive"
    },
    {
      id:3,
      name:"Huzaifa",
      check:"active"
    },
    {
      id:4,
      name:"rohail",
      check:"active"
    },
    {
      id:5,
      name:"hamza",
      check:"active"
    },
  ])
  const [fil,setFil] = useState([...arr])

  const editBtn = (e) =>{
    console.log(arr[e.id])
    setModel({...e})
    setOpen(() => true)
  }

  const confrimBtn = () =>{
    let text = arr[model.id]
    console.log(text)
  }

  const searchFun = (e) =>{
  //   setModel({...model,search:e.target.value})
  //   if(e.target.value == ""){
  //     return setFil([...arr])
  //   }else{
  //    let a = arr.filter( (x,i) => {
  //   return  x.name.toLocaleLowerCase().includes(model.search.toLocaleLowerCase()) 
  //   })
  //   setFil(a)
  // }
  }

  const deleteBtn = (e) =>{
    let ind = arr.findIndex( (x) => x.id == e)
    let mod = [...arr]
    mod.splice(ind,1)
    setArr(mod)
  }
  console.log(arr)

  return (
    <>
      
    <Box className="container">
    <Box>
      <TextField placeholder='search' onChange={searchFun} />
    </Box>

      <BsModal confBtn={confrimBtn}
       open={open} val={model.name || ""} close={(e) => setOpen(e)} name="name" 
      onChange={(e) => setModel({...model,name:e.target.value})}/>
      <Grid container>
    {fil.map( (x,i) =>{
      return(
        <>
        <Grid key={i} item md={4}>
          <Typography variant='h6'>{x.name}</Typography>
        </Grid>
        <Grid item md={4}>
        <Typography variant='h6'>{x.check}</Typography>
      </Grid>
      <Grid item md={4}>
      <Button onClick={() => editBtn(x)} variant="contained">Edit</Button>
      <Button  variant="contained" onClick={() => deleteBtn(x.id)}>delete</Button>
    </Grid>
    </>
        )
      })}
      </Grid>
      </Box>
    </>
  );
}

export default App;
