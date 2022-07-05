import React, { useState } from 'react'
import Answer2 from '../../components/Answer2'


function Home() {
    const [answer, setAnswer] = useState('?');
        
    const conditionView = (answer) => {
            if (answer === "we hurt without moving we poison without touching we bear the truth and the lies we are not to be judged by our size what are we") {
            return <Answer2 />;
            } else {
            return "  ";
            };
            };

return (
    
<div className="Home">
        <h2>SORRYFRI3ND</h2>
        < br />
        <p>em pczb eqbpwcb uwdqvo em xwqawv eqbpwcb bwckpqvo em jmiz bpm bzcbp ivl bpm tqma em izm vwb bw jm rcloml jg wcz aqhm epib izm em 
        </p> 
    < br/>
            <label>epib qa bpm ycmabqwv
                    <input
                    type="text"
                    value={answer}
                    onChange={(event) => {
                        const value = event.target.value;
                        setAnswer(value);
                    }}>
                    </input>
            </label>
{conditionView(answer)}

</div>
);
};

export default Home;