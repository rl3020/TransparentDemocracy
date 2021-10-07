import {useState} from 'react'
import ActionCard from './ActionCard.js'


const CongressionalActions = ({ chamber }) => {
    // Set the state of each congressional action to be an empty
    // array to start. Will make fetch call to get data 
    const [senateCongressionalActions, setSenateCongressionalActions] = useState([]);
    const [houseCongressionalActions, setHouseCongressionalActions] = useState([]);  

    const getCongressionalActions = async (chamber) =>{
        let requestURL = ` https://api.propublica.org/congress/v1/${chamber}/floor_updates/2021/08/10.json`;
        const settings = {
            method: 'GET', 
            headers:{
                "content-type": "application/json",
                "X-API-Key" :"8OLgd3DVeLTmGg1u5FwUqKA15efcmoVV8qPyqlzY",
            }
        }

        const response = await fetch(requestURL, settings); 
        const data = await response.json();
        console.log("ProPublica Returned", data);
        return data;
    }

    const getData = ()=>{
        return {
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." ,
            date: "08/20/2021", 
            time: "10:30am EST", 
            title: "Senate Bill 276"
        }
    }

    //Use this when API is Ready
    //getCongressionalActions(chamber);
    let data = [];
    for(let i = 0; i < 15; i ++){
        data.push(getData());
    }
    console.log(data); 

    return (
        <div className="congressional-actions-container"> 
            {
               data.map( 
                   (element) => (< ActionCard data={element} />)
                   )
            }
        </div>
    )
};

export default CongressionalActions;





