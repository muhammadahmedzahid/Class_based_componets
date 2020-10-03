import React from "react";
import reactDOM from "react-dom";

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   );
//   return <div>Hi there!</div>;
// };

class App extends React.Component {
  constructor(props) {
    super(); // you can either pass or not props to the super
    // super(props);
    this.state = { lat: null, errorMessage: "" }; // you can initize the state

    window.navigator.geolocation.getCurrentPosition(
      // (position) => console.log(position),
      // (err) => console.log(err)
      (position) => {
        // important we call the below
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.errorMessage });
      }
    );
  }

  render() {
    // the below three which we comment beacuse render method call again and again and we dont know how
    // so we copy and paste that code in the constructor.
    // window.navigator.geolocation.getCurrentPosition(
    //   (position) => console.log(position),
    //   (err) => console.log(err)
    // );
    // below is the javascript object as we used the curly brases around that.
    // return (
    // <div>
    //   Lattitude: {this.state.lat}
    //   <br />
    //   Error:{this.state.errorMessage}
    // </div>
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Error: {this.state.lat}</div>;
    }
    return <div>Loading!</div>;
    // );
  }
}

reactDOM.render(<App />, document.querySelector("#root"));

// Properties of the class component
// 1- Must be a javascript class.
// 2- Must extend (subclass) React.component as it allows you to call buidin functions inside this as when we created the class the javascript hopes that.
// 3- Must define a render method that return some amount of JSX.
// So  why we are going to do that means class type compoenet because the update of the component is not possible in the functional cycle.
// React state system: the above is not going to solve our problem alone.
// Below is the listed of the react states:
// Rules of States in React:
// before the below 1-6 is called the below is called for the first
// JS file is loaded by browser
// Instance of App component is created
// App Components 'constructor' function gets called
// State object is created and assigned to the 'this.state' property
// We call geolocation service
// React calls the components render method
// App returns JSX, gets rendered to page as HTML so this is called
// We get result of geolocation
// We update our state object with a call to 'this.setState'
// React sees that we update the state of the component
// React calls our 'render' method a second time
// 1- Only usable with class component
// 2- You will confuse Props with States
// 3- 'State' is an JS object which contains data relevant to a component
// 4- Updating 'state' on a component causes the component to (almost) instantly rerender
// 5- State must be initialized when the component is  created
// 6- State can only be updated using the function 'setState'
// Lecture 4 APP Life Cycle is explained above

// Handling Erros gracefully -> Below explained

// Understanding Lifecycle Methods Section 6
