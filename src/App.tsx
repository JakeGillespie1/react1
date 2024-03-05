import React from 'react';
import './App.css';

interface BandProps {
  name: string;
  members: string;
  formed: number;
}

const bandNames = [
  { name: 'The Beastie Boys', members: 'Ad Rock, MKA, Mike D', formed: 1979 },
  { name: 'Wolfmother', members: 'Andrew, Bobby, Manish', formed: 2004 },
  {
    name: 'Cream',
    members: 'Joseph, Eric Clappie, Jack Ruce, Ginger Baker',
    formed: 1966,
  },
  { name: 'Nirvana', members: 'Juniper, Lilly, Lake Town', formed: 1909 },
];

function Welcome() {
  return <h1>The Best Music Trios Ever</h1>;
}

//This will print out one band at a time
class Band extends React.Component<BandProps> {
  render() {
    //The properties are specified in the above interface (BandProps)
    const oneBand = this.props;

    return (
      <div>
        <img />
        <h2>{oneBand.name}</h2>
        <h2>{oneBand.members}</h2>
        <h2>{oneBand.formed}</h2>
      </div>
    );
  }
}

//We use the map to loop through all the elements of the JSON object
function BandList() {
  return (
    <div>
      {/* This goes out to band names JSON
      and says I want to map one band at a time by
      going to the band component and grabbing the
      information for that one band. */}
      {bandNames.map((oneBand) => (
        <Band {...oneBand} />
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
      <BandList />
    </div>
  );
}

export default App;
