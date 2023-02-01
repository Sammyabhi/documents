/*******************************************************************************
* Contributors: Abhishek Kuamr Yadav
*******************************************************************************/
import React from 'react';
import Header from './Components/app/Header/header';
import Search from './Components/app/Seachbar/Searchbar'
import 'semantic-ui-css/semantic.min.css';
import './Components/assests/CSS/main.css'
function App() {
  return (
    <React.Fragment>
      <div>
        <Header />
        <Search />
      </div>
    </React.Fragment>
  );
}
export default App;