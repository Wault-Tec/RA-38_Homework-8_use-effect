import { useEffect, useState } from "react"
import "./Details.css"

const Details = (props) => {
  const [info, setInfo] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(()=>{
    if(props.info.id === undefined) {
      return
    }
    const url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${props.info.id}.json`
    try {
      fetch(url)
      .then((responce) => responce.json())
      .then((json) => {
        setInfo(json) 
        setLoaded(true)
      })
    } catch(e) {
        console.error(e);
    } 
  }, [props.info.id])

  return ( 
    loaded &&
    <div className="userDetails">
      <div className="imgWrapper">
      <img key={info.id} src={info.avatar} alt={'user avatar'}></img>
      </div>
      <h2>{info.name}</h2>
      <ul>
        <li>City: {info.details.city}</li>
        <li>Company: {info.details.company}</li>
        <li>Position: {info.details.position}</li>
      </ul>
    </div>
  );
}

export default Details