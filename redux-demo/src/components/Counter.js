
import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';


const Counter = () => {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)
  const visibitity = useSelector(state => state.visibility)

  const incrementHandler = () => {

    dispatch({ type: 'increment' })
  }

  const decrementHandler = () => {

    dispatch({ type: 'decrement' })
  }

  const increaseHandler = () => {

    dispatch({ type: 'increase', payload: 5 })
  }


  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' })

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div style={{ visibility: visibitity }} className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler} >Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
