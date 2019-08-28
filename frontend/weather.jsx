import React from 'react';
import ReactDOM from 'react-dom';


class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: 0
    }
  }


  componentDidMount() {
    let self = this;

    if (navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function (position) {
        self.weatherRequest(position.coords.latitude, position.coords.longitude);
        console.log(position.coords.latitude, position.coords.longitude);
      }, function(error) {
        console.log("error");
        console.log(error);
      });
    } else {
      alert("NOT WORKING")
    }
    
  }

  weatherRequest(latitude, longitude) {
    let self = this;
    console.log(latitude, longitude)
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
        if (xhr.status == 200) {
          console.log(xhr.responseText)
          let tempKelvin = JSON.parse(xhr.responseText)["list"][0]["main"]["temp"];
          self.setState({temp: tempKelvin});
          //this.setState({ currentTab: tabIndex})
          console.log(tempKelvin)
        }
        else if (xhr.status == 400) {
          alert('There was an error 400');
        }
        else {
          alert('something else other than 200 was returned');
        }
      }
    }

    let url = `http://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&cnt=1&appid=14308baa11c1069b44c051a83d0f5db4`
    xhr.open("GET", url, true);
    xhr.send();
  }

  render() {
    return (
      <h1>{this.state.temp}</h1>
    )
  }
}




// 14308baa11c1069b44c051a83d0f5db4


export default Weather;