import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component.index';
import './App.css';

const App = () => {
  const [searchFiled, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);
 

  console.log('render')

  useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
    
  }, []);


  useEffect(() =>{
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchFiled);
    });
  
    setFilterMonsters(newFilteredMonsters)
  }, [monsters, searchFiled])
  


  const onSearchChange = (event) => {
    const searchFiledString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFiledString);
    };
  


  
  return(
    <div className="App">
      <h1 className='app-title'>
        Monsters Rolodex
      </h1>
      <SearchBox 
        onChangeHandler = {onSearchChange}
        placeholder = 'Search Monsters'
        className = 'monsters-search-box'
      />
      <CardList 
        monsters = {filteredMonsters}
      />
    </div>
  ); 
  

}


// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchFiled: '',
//     };
//     //console.log('constructor');
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => 
//         this.setState(
//           () => {
//           return {monsters: users};
//         },
//         () => {
//           //console.log(this.state);
//         }
//         )
//       )
//       //console.log('component did mount');
//   };

//   onSearchChange = (event) => {
//     const searchFiled = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchFiled}; 
//     },
//     () => {
//       console.log(searchFiled)
      
//     }
//     )
//   }


//   render() {
//     //console.log('render from AppJS');

//     const {monsters, searchFiled} = this.state;
//     const {onSearchChange} = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchFiled);
//     });


//     //console.log(this.state.monsters)
//     return(
//       <div className="App">
//         <h1 className='app-title'>
//           Monsters Rolodex
//         </h1>
//         <SearchBox 
//           onChangeHandler = {onSearchChange}
//           placeholder = 'Search Monsters'
//           className = 'monsters-search-box'
//         />
//         <CardList 
//           monsters = {filteredMonsters}
//         />
//       </div>
//     ); 
    
//   }
  
// }

export default App;
