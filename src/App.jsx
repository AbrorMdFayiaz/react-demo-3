import './App.css'
import Countries from './Countries/Countries'

const promiseData = ()=> {
  const fetchData=fetch("https://openapi.programming-hero.com/api/all").then(res=>res.json());
  return fetchData;
}

function App() {

  
  return (
    <>
    <h1>abcd</h1>
    <Countries promiseData={()=>promiseData()} ></Countries>
    </>
  )
}

export default App
