import './MainContent.css';
import NavigationBar from './NavigationBar/NavigationBar';
import SubCategories from './SubCategories/SubCategories';
import React,{useState, useEffect} from 'react';

function MainContent(props) {

    const[categoryDataa, setcategoryDataa] = useState();

    useEffect( () => {
        console.log()
        props.setcategoryData(categoryDataa);
    }, [props, categoryDataa])

    return(
        <div className='MainContent'>
            <NavigationBar data={props.data}/>
            <SubCategories data={props.data} setcategoryDataa={setcategoryDataa} />
        </div>
    );
}

export default MainContent;