import './App.css';
import axios from 'axios';
import Card from './components/Card.js';
import {useState,useEffect} from 'react'
function App() {
  const [data,setData]=useState({});
  useEffect(()=>{
    axios.get('https://jsonmock.hackerrank.com/api/football_matches?page=120').then((res)=>{
      setData(res.data);
    }).catch((err)=>{
        console.log(err);
    })
    
  },[])
  return (
    <div className="App" style={{display:"flex",backgroundColor:"lime"}}>
       {data.data && data.data.map((com) => {
        // <Card name="dfdsfdfd" year="2023"/>
       return <Card name={com.competition} year={com.year}  />
       })
       }
       
       
    </div>
  );
}

export default App;
