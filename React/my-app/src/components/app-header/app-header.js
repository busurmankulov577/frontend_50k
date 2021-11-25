import React from 'react';
import './app-header.css';
import styled from 'styled-components';

const AppDiv = styled.div`
    display: flex;
    align-items:flex-end;
    justify-content:space-evenly ;
    font-family: emoji;
    margin-top:10px;


    h1 {
        font-size:30px;
        cursor:pointer;
        :hover {
            color:blue;
        }
    }
    span {
        line-height: 40px;
    }
    

`;

// const AppDiv2 = styled(AppDiv)`
//     color:red;

// `;

const AppHeader = ({allPost, likes}) => {
    return(
        <div className="container">
            <AppDiv>

                <h1>Дамирбек Бусурманкулов</h1>
                <span>
                    <span> {allPost} </span>- записи, из них {likes} - понравилось
                </span>            
            </AppDiv>


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