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

const basketTeams = BasketballTeams.teams;

function Welcome() {
  return <h1>List of Basketball Teams</h1>;
}

//This will print out one band at a time
class BasketballTeam extends React.Component<BBallProps> {
  render() {
    //The properties are specified in the above interface (BandProps)
    const oneTeam = this.props;

    return (
      <div>
        <h2>{oneTeam.school}</h2>
        <h4>{oneTeam.name}</h4>
        <h4>
          {oneTeam.city}, {oneTeam.state}
        </h4>
      </div>
    );
  }
}

//We use the map to loop through all the elements of the JSON object
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

// We cahnged this function to display new things
function App() {
  return (
    <div className="App">
      <Welcome />
      {/* In order to get the list of bands,
      we created another ocmponenet that is just a single band
      (see Band Class) */}
      <BBallList />
    </div>
  );
}

export default App;
