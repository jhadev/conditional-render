import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Display from './components/Display';
import Card from './components/Card';
import baby from './images/babybeer.png';
import mclovin from './images/mclovin.jpg';
import happy from './images/happy.jpg';
import nope from './images/nope.jpg';

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
    if (state.age >= 21) {
      return (
        <Card>
          <h1>Time to hit the bar!</h1>
          <img className="img-fluid" src={happy} alt="happy" />
        </Card>
      );
    } else if (state.age < 21 && state.age >= 16) {
      return (
        <Card>
          <h1>Get a fake ID!</h1>
          <img className="img-fluid" src={mclovin} alt="mclovin" />
        </Card>
      );
    } else if (state.age === 0) {
      return (
        <Card>
          <h1>You were just born {';)'}</h1>
          <img className="img-fluid w-75" src={baby} alt="baby" />
        </Card>
      );
    } else {
      return (
        <Card>
          <h1>Don't even think about it!</h1>
          <img className="img-fluid w-100" src={nope} alt="nope" />
        </Card>
      );
    }
  };

  return (
    <Container className="text-center m-2">
      <Display name={state.name} age={state.age} yearBorn={state.yearBorn}>
        <div
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            margin: 20
          }}>
          {state.age > 0 ? `Want a drink?` : `Your parents need a drink!`}
        </div>
        <Button
          lg
          color={'success'}
          text={`It's My Birthday!`}
          handleClick={handleBirthday}
        />
        {state.age > 0 && (
          <Button
            lg
            color={'danger'}
            text={'Go Back In Time!'}
            handleClick={goBackInTime}
          />
        )}
        <div className="row justify-content-center">
          <div className="col-6">{handleMessage()}</div>
        </div>
      </Display>
    </Container>
  );
};

export default App;
