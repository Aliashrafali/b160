import React, { useState } from 'react';
import Data from './Data';

const PrintData = () => {

    const [data] = useState(Data);

  return (
    <>
        {
            data.map((item) =>{
                return(
                    <h1>{item.id}, {item.name}, {item.age},  {item.status === 0 ? <span>Active</span> : <span>In-Active</span>}</h1>
                )
            })
        }
    </>
  )
}

export default PrintData