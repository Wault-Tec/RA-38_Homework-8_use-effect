import './App.css';
import { useState } from "react";
import Details from './components/Details/Details';
import List from './components/List/List';

const App = () => {
  const [info, setInfo] = useState({});

  const handleClick = (info) => setInfo(info)

  return (
    <div className="appWrapper">
    <List handleClick={handleClick}/>
    <Details info={info}/>
    </div>
  );
}

export default App;
