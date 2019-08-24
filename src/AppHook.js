import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Display from './components/Display';

const App = () => {
  const [state, setState] = useState({ name: '', age: 0, yearBorn: 0 });

  useEffect(() => {
    setState({ name: 'Your Name Here', age: 20, yearBorn: 1999 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBirthday = () => {
    setState(currentState => ({ ...currentState, age: currentState.age + 1 }));
  };

  const goBackInTime = () => {
    setState(currentState => ({ ...currentState, age: currentState.age - 1 }));
  };

  const handleMessage = () => {
    // conditional render outside of the return
    // rendering h1 tags based on state values
    if (state.age >= 21) {
      return <h1>Time to hit the bar!</h1>;
    } else if (state.age < 21 && state.age >= 16) {
      return <h1>Get A Fake ID!</h1>;
    } else if (state.age === 0) {
      return <h1>You were just born {';)'}</h1>;
    } else {
      return <h1>Don't even think about it!</h1>;
    }
  };

  return (
    <Container className="text-center mt-5">
      <Display name={state.name} age={state.age} yearBorn={state.yearBorn}>
        <span style={{ fontSize: state.age * 5 || 40, fontWeight: 'bold' }}>
          {/* conditional render inside the render() -- need to use ternarys */}
          {state.age > 0 ? `Want a drink...` : `Your parents are drunk!`}
        </span>
        {/* this will run on every render bc we call it like a method */}
        {handleMessage()}
      </Display>
      <Button color="success" handleBirthday={handleBirthday} />
      {/* if we don't need a second condition can use && */}
      {/* only appears if age in state is greater than 0 */}
      {state.age > 0 && <Button color="danger" goBackInTime={goBackInTime} />}
    </Container>
  );
};

export default App;
