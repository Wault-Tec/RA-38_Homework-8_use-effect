import { useState, useEffect } from "react";
import "./List.css"

const List = (props) => {
  const [list, setList] = useState([])
  const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

  useEffect(() => {
      try {
        fetch(url)
        .then((responce) => responce.json())
        .then((json) => setList(json))
      } catch(e) {
          console.error(e);
      }
  }, [])  

  const handleClick = (id) => {
    props.handleClick(list[id])
  }
  return (
    <div className="list">
      <ul>
        {list.map((o) => (
          <li key={o.id} onClick={() => handleClick(o.id-1)}>
            {o.name}
          </li>
        ))}
      <li>...</li>
      </ul>
    </div>
  )
} 

export default List