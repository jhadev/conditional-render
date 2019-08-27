import React, { Component } from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Display from './components/Display';
import Card from './components/Card';
import baby from './images/babybeer.png';
import mclovin from './images/mclovin.jpg';
import happy from './images/happy.jpg';
import nope from './images/nope.jpg';

class App extends Component {
  // initialize state with default values
  state = { name: '', age: 0, yearBorn: 0 };

  // THE LIFE CYCLE GOES LIKE THIS IN THIS CASE.

  // initialization of state => render => componentDidMount() => render
  // since we setState in componentDidMount we trigger a render bc changing state always triggers a render
  componentDidMount() {
    this.setState({ name: 'Your Name Here', age: 20, yearBorn: 1999 });
  }

  handleBirthday = () => {
    // this works too but React docs call it an anti-pattern.
    // this.setState({ age: this.state.age + 1 }); this.setState is asychronous.
    // setState takes an optional argument called an updater to reference the previous state
    // using the updater argument allows us to access the guaranteed value of the previous state object
    this.setState(prevState => ({ age: prevState.age + 1 }));
    // console.log(this.state.age); DOES NOT SHOW US FRESHEST STATE
    // EITHER USE REACT DEV TOOLS TO TRACK STATE OR console.log(this.state) in the render() but above the return to get fresh state.
  };

  goBackInTime = () => {
    this.setState(prevState => ({ age: prevState.age - 1 }));
  };
  // this function will get called inside the return of the render() below.
  handleMessage = () => {
    // conditional render outside of the render()
    // rendering cards based on state values
    if (this.state.age >= 21) {
      // if age in state is greater than 21 render this component
      return (
        <Card>
          <h1>Time to hit the bar!</h1>
          <img className="img-fluid" src={happy} alt="happy" />
        </Card>
      );
    } else if (this.state.age < 21 && this.state.age >= 16) {
      // if age in state is less than 21 but greater than or equal to 16 render this component
      return (
        <Card>
          <h1>Get A Fake ID!</h1>
          <img className="img-fluid" src={mclovin} alt="mclovin" />
        </Card>
      );
    } else if (this.state.age === 0) {
      // if age in state is 0 render this component
      return (
        <Card>
          <h1>You were just born {';)'}</h1>
          <img className="img-fluid w-75" src={baby} alt="baby" />
        </Card>
      );
    } else {
      // is age in state is between 1 and 15 render this component.
      return (
        <Card>
          <h1>Don't even think about it!</h1>
          <img className="img-fluid w-100" src={nope} alt="nope" />
        </Card>
      );
    }
  };

  // handling conditionals in the return() of the render. We cannot do traditional if statements here.
  // we need to use inline ternary operators.

  /* 

  <div>{this.state.age === 0 ? `Your parents need a drink!` : `Want a drink?`}</div>
  
  written in if statements it will look like this

  if (this.state.age === 0) {
      return `Your parents needs a drink!
  } else {
      return `Want a drink?`
  }

  */

  render() {
    console.log(this.state);
    return (
      <Container className="text-center m-2">
        <Display
          name={this.state.name}
          age={this.state.age}
          yearBorn={this.state.yearBorn}>
          <div id="msg-text">
            {this.state.age === 0
              ? `Your parents need a drink!`
              : `Want a drink?`}
          </div>
          <Button
            lg
            color={'success'}
            text={`It's My Birthday!`}
            handleClick={this.handleBirthday}
          />
          {this.state.age > 0 && (
            <Button
              lg
              color={'danger'}
              text={'Go Back In Time!'}
              handleClick={this.goBackInTime}
            />
          )}
          <div className="row justify-content-center">
            <div className="col-6">{this.handleMessage()}</div>
          </div>
        </Display>
      </Container>
    );
  }
}

export default App;
