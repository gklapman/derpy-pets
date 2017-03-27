import React from 'react';
import ReactDOM from 'react-dom';

import { dogsData, catsData } from '../data';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'all',
      dogs: dogsData,
      cats: catsData,
    }
  }

  render() {
    const animalsToDisplay = this.state.view === 'all' ?
      [...this.state.cats, ...this.state.dogs] :
      this.state[this.state.view];

    return (
      <div className="App">
        <div className="App-header">
          <img src="/logo.png" className="App-logo" alt="logo" />
          <h3>derpy pets</h3>
        </div>

        <div className="container cat-or-dog">
          <div className="row">
            <button className="btn-flat btn-large col s5">I WANT A MEOWER</button>
            <button className="btn-flat btn-large col s5 offset-s2">I WANT A BARKER</button>
          </div>
        </div>

        <div className="App-content container-fluid">
          <AnimalsList view={this.state.view} animals={animalsToDisplay} />
        </div>
      </div>
    );
  }
}

const AnimalsList = ({ view, animals }) => {
  return (
    <div className="row">
      <h4>{view} for adoption</h4>
      <ul>
        {
          animals.map(animal => {
            return <AnimalCard
              key={animal.id}
              animal={animal}
            />
          })
        }
      </ul>
    </div>
  );
}

const AnimalCard = ({ animal }) => {
  return (
    <div className="col s3">
      <img className="animal-img" src={animal.imageUrl} />
      <p className="animal-label">{animal.name} ({animal.gender})</p>
    </div>
  );
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);














