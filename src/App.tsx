import React from 'react';
import './App.css';
import { JSX } from 'react/jsx-runtime';
import BasketballTeams from './CollegeBasketballTeams.json';
import { ListFormat } from 'typescript';

interface BBallProps {
  school: string;
  name: string;
  state: string;
  city: string;
}

//Make sure to grab the data in the correct format!
const basketTeams = BasketballTeams.teams;

//Welcome Message (Function/Component 1)
function Welcome() {
  return <h1>List of Basketball Teams</h1>;
}

//This will print out one team at a time (Function/Component 2)
class BasketballTeam extends React.Component<BBallProps> {
  render() {
    //The properties are specified in the above interface (BBallProps)
    const oneTeam = this.props;

    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h4>{oneTeam.name}</h4>
        <h4>
          {oneTeam.city}, {oneTeam.state}
        </h4>
        <br />
      </div>
    );
  }
}

//We use the map to loop through all the elements of the JSON object
//(Function/Component 3)
function BBallList() {
  return (
    <div>
      {/* This goes out to band names JSON
      and says I want to map one band at a time by
      going to the band component and grabbing the
      information for that one band. */}
      {basketTeams.map((oneTeam: BBallProps) => (
        <BasketballTeam {...oneTeam} />
      ))}
    </div>
  );
}

//Button to display welcome message (Function/Component 4)
function MyButton() {
  return (
    <button onClick={() => alert('Learn more about Basketball teams here!!')}>
      Welcome message
    </button>
  );
}

// We cahnged this function to display new things
function App() {
  return (
    <div className="App">
      <Welcome />
      <p>Click the button below to view a welcome message</p>
      <MyButton />
      <br />
      {/* In order to get the list of basketball teams,
      I created another component that is just a single team
      (see BasketballTeam Class) */}
      <BBallList />
    </div>
  );
}

export default App;
