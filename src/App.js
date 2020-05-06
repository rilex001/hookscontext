import React, { Component } from 'react';
import './App.css';
import CountryList from './components/CountryList';

class  App extends Component {
  constructor(props){
    super(props)
    this.state = {
      country: [],
      searchField: ''

    }
  }

  

  componentDidMount(){

    fetch("https://restcountries-v1.p.rapidapi.com/all", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
		"x-rapidapi-key": "abe082a00dmsh66da68776798b52p11b56ejsn6f4e4cd5c2a0"
	}
})
.then(response => response.json())
.then((prevState, prevProps) => {
  return { 
    country: prevState.result
  },
  () => console.log(this.state.country)
} 
  )
.catch(err => {
	console.log(err);
});

  }

  // result => {
  //   this.setState({
  //     country: result
  //   })

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render(){
    const {country, searchField} = this.state
    // const filteredCountry = country.filter(country => {
    //   country.name.toLowerCase().includes(searchField.toLowerCase())
    // })

    
  return (
    <div className="App">
      <h1>Wikipedia search</h1>
      <form>
       
        <input type='text'
               name='search' 
               placeholder='Enter a location'
               onChange={this.onSearchChange}
        />

               
        
      </form>
    <CountryList filteredCountry={this.filteredCountry}/>
    </div>
  );
  }
}

export default App;
