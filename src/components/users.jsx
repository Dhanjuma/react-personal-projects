import React from "react";

export class Users extends React.Component {
  state = {
    loading: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      people: data.results,
      loading: false,
    });
    // console.log(data.results[0]);
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (!this.state.people.length) {
      return <div>Unable to fetch People</div>;
    }

    return (
      <div>
        {this.state.people.map((person) => (
          <div key={person.login.uuid}>
            <div>{person.name.title}</div>
            <div>{person.name.first}</div>
            <div>{person.name.last}</div>
            <img src={person.picture.large} alt="dp" />
          </div>
        ))}
      </div>
    );
  }
}
