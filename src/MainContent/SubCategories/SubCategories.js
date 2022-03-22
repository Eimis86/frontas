import './SubCategories.css';
import React, {useState} from 'react';

function SubCategories(props){

    const [categories, setcategories] = useState({
        id:'',
        cName:'',
        parentId:'',
    });

    const newCategories = (item) =>{
        setcategories( () => ({
            id:Math.random() , cName:item, parentId:null 
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(categories.parentId === null){
            props.setcategoryDataa(categories);
        }
        else if(categories){
            console.log('has parentId');
        }
    }

    return(
        <div className='SubCategories'>
            <div className='FormClass'>
                <div className='forms'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='categories'>
                            Category:
                            <input
                            required
                            type='text'
                            name='category'
                            placeholder='Enter new category'
                            value={categories.cName}
                            onChange={ (e) => newCategories(e.target.value)}
                            >
                            </input>
                        </label>
                    <input
                    type='submit'
                    name='submit'></input>
                    </form>
                </div>
                <div className='forms'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='categories'>
                            Category:
                            <input
                            required
                            type='text'
                            name='category'
                            placeholder='Enter new category'
                            //value={categories.cName}
                            //onChange={ (e) => newCategories(e.target.value)}
                            >
                            </input>
                        </label>
                    <input
                    type='submit'
                    name='submit'></input>
                    </form>
                </div>
                <div className='forms'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='categories'>
                            Category:
                            <input
                            required
                            type='text'
                            name='category'
                            placeholder='Enter new category'
                            //value={categories.cName}
                            //onChange={ (e) => newCategories(e.target.value)}
                            >
                            </input>
                        </label>
                    <input
                    type='submit'
                    name='submit'></input>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubCategories;