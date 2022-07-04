import React, { useState } from 'react'
import Answer3 from '../../components/Answer3'


function Answer2() {
    const [answer, setAnswer] = useState('?');
    
    const conditionView = (answer) => {
        if (answer === "words") {
        return <Answer3 />;
        } else {
        return " ";
        };
        };

return (

<div className="Answer2">
                    <label>
                    lmkzgxb
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
    
export default Answer2;