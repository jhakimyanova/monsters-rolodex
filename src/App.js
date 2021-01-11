import { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Card } from "./components/card/card.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={(e) => {
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            );
          }}
        />
        <CardList>
          {this.state.monsters.map((monster) => (
            <Card key={monster.id} monster={monster} />
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
