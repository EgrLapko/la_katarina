import React from 'react';

import { ContextConsumer } from '../context/context';
import { english, chinese } from '../language';

const Prints = () => {
    return (
        <div className="prints-page">
            HELLO
        </div>
        // <ContextConsumer>
        //     {
        //         value => {
        //             const { eng } = value;
        //             return (
        //                 <div className="prints-page">
        //                     <div className="prints-page__text">
        //                         <p className="prints-text"> {eng ? english.printRow1 : chinese.printRow1} </p>
        //                         <p className="prints-text"> {eng ? english.printRow2 : chinese.printRow2} </p>
        //                         <p className="prints-text"> {eng ? english.printRow3 : chinese.printRow3} </p>
        //                         <p className="prints-text"> {eng ? english.printRow4 : chinese.printRow4} </p>
        //                         <p className="prints-text"> {eng ? english.printRow5 : chinese.printRow5} </p>
        //                         <p className="prints-text"> {eng ? english.printRow6 : chinese.printRow6} </p>
        //                         <p className="prints-text"> {eng ? english.printRow7 : chinese.printRow7} <span>blazhievskaya.art@gmail.com / Wechat: Katarinaart</span> </p>
        //                     </div>
        //                 </div>
        //             )
        //         }
        //     }
        // </ContextConsumer>
        
    )
}

export default Prints;
