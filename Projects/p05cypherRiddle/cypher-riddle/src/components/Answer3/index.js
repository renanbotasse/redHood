import React, { useState } from 'react'
import Glory from '../../components/Glory'


function Answer3() {
    const [answer, setAnswer] = useState('?');

    const conditionView = (answer) => {
        if (answer === "zrugv") {
        return <Glory />;
        } else {
        return " ";
        };
        };

return (

<div className="Answer3">
        <label>
        hqfubsw
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
}
    
export default Answer3;
    