import './NavigationBar.css';
import React, {useState} from 'react'; 

function NavigationBar(props){

    const [userInfo, ] = useState(props.data);
    console.log(userInfo);
    /*            {props.data.category.map(item => 
                <div className='categories' key={item.id}>{item.cName}</div>
            )}*/
    return(
        <div className='NavigationBar'>

        </div>
    );
}

export default NavigationBar;