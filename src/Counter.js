import React,{useState} from 'react';

const Counter = ({initialValue}) => {

    console.log(initialValue); //undefined
    //0에서 출발
    //1씩 증가하고 1씩 감소하는
    //count 상태

    const [count,setCount] = useState(initialValue);

    const onIncrease = () => {
        setCount(count+1);
    };

    const onDecrease = () => {
        setCount(count-1);
    };
        
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>    
    )
}

Counter.defaultProps = {
    initialValue:0
}
export default Counter