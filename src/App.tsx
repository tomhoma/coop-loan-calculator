import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.5)' }}
  >
    +
  </Box>
);

const card = (
  <>
  
    <CardContent>
       <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h1" component="div">
        Vite{bull}React
      </Typography>
      {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography> */}
      <Typography variant="body2">
  
      </Typography> 
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo react" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
      
    </CardActions>
  </>
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
      </Box>
    
 

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    
    </>
  )
}
export default App
