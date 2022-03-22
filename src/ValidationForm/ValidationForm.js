import './ValidationForm.css';
import React,{useState, /*useEffect*/} from 'react';
import {useNavigate} from 'react-router-dom';

function ValidationForm(props){

    const [userdata, setuserdata] = useState(props.data);

    const [category, setcategory] = useState({
        id:'',
        cName:'',
        parentId:'',
    })

   const updateCategory = (item) =>{

        setcategory( () =>({
            cName:item, id:Math.random(1), parentId:null
        }))

    }

    let history = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(props.data){
            props.setData(userdata);
            props.setcategoryData(category);
            history('/loged-in');
        }
    }

    return(
        <div className='ValidationForm'>
            <div className='FormContainer'>
            <h2>Create account</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>
                    Email:
                    <input
                    required
                     type='email'
                     name='email'
                     placeholder='Enter email'
                     value={setuserdata.email}
                     onChange={(e) => setuserdata({...userdata, email:e.target.value})}>
                     </input>
                </label>
                <label htmlFor='password'>
                    Password:
                    <input
                    required
                     type='password'
                     name='password'
                     placeholder='Enter password'
                     value={setuserdata.password}
                     onChange={(e)=> setuserdata({...userdata, password:e.target.value})}>
                     </input>
                </label>
                <label htmlFor='name'>
                    First Name:
                    <input
                    required
                     type='text'
                     name='name'
                     placeholder='Enter name'
                     value={setuserdata.fname}
                     onChange={(e)=>setuserdata({...userdata, fname:e.target.value})}>
                     </input>
                </label>
                <label htmlFor='lname'>
                    Last name:
                    <input
                    required
                     type='text'
                     name='lname'
                     placeholder='Enter last name'
                     value={setuserdata.lname}
                     onChange={(e)=>setuserdata({...userdata, lname:e.target.value})}>
                     </input>
                </label>
                <label htmlFor='age'>
                    Age:
                    <input
                    required
                     type='number'
                     name='age'
                     placeholder='Enter age'
                     value={setuserdata.age}
                     onChange={(e)=>setuserdata({...userdata, age:e.target.value})}>
                     </input>
                </label>
                <label htmlFor='gender'>
                    Gender:
                    <select 
                    id='gender'
                    required
                    value={setuserdata.gender}
                    onChange={(e)=>setuserdata({...userdata, gender:e.target.value})}>
                        <option value='' disabled selected>Select gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                </label>
                <label htmlFor='categories'>
                    Category:
                    <input
                    required
                     type='text'
                     name='category'
                     placeholder='Enter starting Category'
                     value={category.cName}
                     onChange={(e) =>  updateCategory(e.target.value)}>
                     </input>
                </label>
                <input
                type='submit'
                name='submit'></input>
            </form>
            </div>
        </div>
    );
}

export default ValidationForm;