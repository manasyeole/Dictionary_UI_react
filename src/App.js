import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

function App() {
  const [english, setEnglish] = useState('');
  const [data, setdata] = useState('');

  const handleClick = () => {
    const ret = fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${english}&appid={API_KEY}`
    )
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setdata(data.main.temp);
        // console.log(first);
        return data.main;
      });
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          <TextField
            id='outlined-basic'
            label='English Word'
            variant='outlined'
            onChange={(e) => {
              setEnglish(e.target.value);
            }}
            value={english}
          />
          <Button variant='contained' className='butoon' onClick={handleClick}>
            Submit
          </Button>
        </p>
        {data && <Card variant='outlined'>Temperature:- {data} F</Card>}
      </header>
    </div>
  );
}

export default App;
