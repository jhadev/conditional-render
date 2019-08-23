import React, { Component } from 'react';
import Button from './components/Button';

class App extends Component {
  state = { name: '', age: 16 };

  componentDidMount() {
    // on mount of the app component this happens AFTER the render()
    this.setState({ name: 'Your Name Here' });
  }

  handleBirthday = () => {
    // this works too
    // this.setState({ age: this.state.age + 1 });
    this.setState(prevState => ({ age: prevState.age + 1 }));
  };

  drinkFromTheFountainOfYouth = () => {
    this.setState(prevState => ({ age: prevState.age - 1 }));
  };

  handleMessage = () => {
    // conditional render outside of the render()
    // rendering h1 tags based on state values
    if (this.state.age >= 21) {
      return <h1>Time to hit the bar!</h1>;
    } else if (this.state.age < 21 && this.state.age >= 16) {
      return <h1>Get A Fake ID!</h1>;
    } else if (this.state.age === 0) {
      return <h1>You were just born {';)'}</h1>;
    } else {
      return <h1>Don't even think about it!</h1>;
    }
  };

  render() {
    // console.log(this.state);
    return (
      <div>
        <h1>Hello, {this.state.name}</h1>
        <h1>Age: {this.state.age}</h1>
        <span style={{ fontSize: 40, fontWeight: 'bold' }}>
          {/* conditional render inside the render() -- need to use ternarys */}
          {this.state.age > 0 ? `Want a drink...` : `Your parents are drunk!`}
        </span>
        {/* this will run on every render bc we call it like a method */}
        {this.handleMessage()}
        <Button color={'success'} handleBirthday={this.handleBirthday} />
        {/* if we don't need a second condition can use && */}
        {/* only appears if age in state is greater than 0 */}
        {this.state.age > 0 && (
          <Button
            color={'danger'}
            fountainOfYouth={this.drinkFromTheFountainOfYouth}
          />
        )}
      </div>
    );
  }
}

export default App;