import './App.css';
import Header from './Header/header';
import Footer from './Footer/Footer';
import ValidationForm from './ValidationForm/ValidationForm';
import MainContent from './MainContent/MainContent';
import React,{useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  const [data, setData] = useState({
    email:'',
    password:'',
    fname:'',
    lname:'',
    age:'',
    gender:'',
    category:[],
  });

  const [categoryData, setcategoryData] = useState()

  useEffect(()=>{
    
    if(categoryData){
      console.log('0');
      data.category.push(categoryData);
      console.log(categoryData);
    }

  }, [data.category, categoryData])

  useEffect(()=>{
    const saveData = localStorage.getItem('user');

    if(saveData){
      setData(JSON.parse(saveData))         
    }
  }, [])

  useEffect(()=>{
    localStorage.setItem('user', JSON.stringify(data))
  }, [data])

  return (
    <div className="App">
      <Header/>
        <div className='MainDisplay'>
          <Router>
            <Routes>
              <Route exact path="/"
               element={ 
               <ValidationForm data = {data} setData={setData} setcategoryData={setcategoryData}/> }/>
              <Route path= "/loged-in"
               element={ <MainContent data = {data} setcategoryData= {setcategoryData}/> }/>
            </Routes>
          </Router>
        </div>
      <Footer/>
    </div>
  );
}

export default App;