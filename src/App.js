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
  state = { name: '', age: 0, yearBorn: 0 };

  componentDidMount() {
    // on mount of the app component this happens AFTER the render()
    this.setState({ name: 'Your Name Here', age: 20, yearBorn: 1999 });
  }

  handleBirthday = () => {
    // this works too
    // this.setState({ age: this.state.age + 1 });
    this.setState(prevState => ({ age: prevState.age + 1 }));
    // console.log(this.state.age);
  };

  goBackInTime = () => {
    this.setState(prevState => ({ age: prevState.age - 1 }));
  };

  handleMessage = () => {
    // conditional render outside of the render()
    // rendering cards based on state values
    if (this.state.age >= 21) {
      return (
        <Card>
          <h1>Time to hit the bar!</h1>
          <img className="img-fluid" src={happy} alt="happy" />
        </Card>
      );
    } else if (this.state.age < 21 && this.state.age >= 16) {
      return (
        <Card>
          <h1>Get A Fake ID!</h1>
          <img className="img-fluid" src={mclovin} alt="mclovin" />
        </Card>
      );
    } else if (this.state.age === 0) {
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

  render() {
    console.log(this.state);
    return (
      <Container className="text-center m-2">
        <Display
          name={this.state.name}
          age={this.state.age}
          yearBorn={this.state.yearBorn}>
          <div id="msg-text">
            {this.state.age > 0
              ? `Want a drink?`
              : `Your parents need a drink!`}
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
