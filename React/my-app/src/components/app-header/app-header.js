import React from 'react';
import './app-header.css';
const AppHeader = () => {
    return(
        <div className="container">
            <div   className="app-header d-flex justify-content-evenly">
                <h1 className="fs-2">Дамирбек Бусурманкулов</h1>
                <span className="smallText">
                    <span> 3 </span>- Записи, из них 0 - понравилось
                </span>
            </div>
        </div>
    )
}

export default AppHeader;

// import React from 'react';

// const AppHeader = () => {
//     return(


//     )
// }

// export default AppHeader;