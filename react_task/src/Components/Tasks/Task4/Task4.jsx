import React , {useEffect} from "react";
import '../../../Styles/Task4.scss'

class Task4 extends React.Component {
  constructor(props) {
    super(props);
    this.apicall = this.apicall.bind(this); // Have to bind the funtion to work properly
    this.getcity = this.getcity.bind(this)
    this.state = {
        data: [],
        cityname:null
    };
  }
  
  settings = {
    async: true,
    crossDomain: true,
    headers: {
      "X-RapidAPI-Key": "ea1736c136msh0f5c187e704eedbp15d852jsn9c8eb45d2ffd",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  async apicall() {
    try {
      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${this.state.cityname}`;
      const response = await fetch(url, this.settings);
      const data1 = await response.json();
      this.setState({ data: data1 });
      console.log("API Call Result:", this.state.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  getcity(e) {
    if (this.state.cityname !== e.target.id) {
      this.setState({ cityname: e.target.id }, () => {
        console.log(this.state.cityname);
      });
    }
  }
  
  render() {
    return (
      <div className="task4">
        <div className="values">
              {Object.keys(this.state.data).length > 0 ? (
                Object.entries(this.state.data).map(([key, value]) => (
                  <div key={key}>
                    <h3>City: {value.name}</h3>
                    <p>Country: {value.country}</p>
                    <p>Local_time: {value.localtime}</p>
                    <p>Laitude: {value.lat}</p>
                    <p>Longitude: {value.lon}</p>
                  </div>
                ))
              ) : (
                <h1>Loading</h1>
              )}
        </div>

<div>



        <input
          type="checkbox"
          id="india"
          name="india"
          onChange={(e) => this.getcity(e)}
        />
        <label htmlFor="india"> india</label>
        <input
          type="checkbox"
          id="london"
          name="london"
          onChange={(e) => this.getcity(e)}
          />
        <label htmlFor="london"> london</label>
        <input
          type="checkbox"
          id="japan"
          name="japan"
          onChange={(e) => this.getcity(e)}
          />
        <label htmlFor="japan"> japan</label>
        <button onClick={() => this.apicall()}>Submit</button>
      </div>
          </div>
    );
  }
}

export default Task4;
