import React, { useState } from 'react';


function StoreData(props){
    const [classNum] = useState(props.classNumber ?? 'Null');
    const handleClick = (e) =>{

    }
    return (
        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow max-h-16' onClick={handleClick}>Store Data for class {classNum}!</button>
    )
}

export default StoreData;