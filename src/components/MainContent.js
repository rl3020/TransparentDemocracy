import {useState} from 'react'
import NavigationBar from './NavigationBar.js'
import HomeView from './HomeView.js'
import VotesView from './VotesView.js'
import BillsView from './BillsView.js'


const MainContent = () =>{

    const [currentView, changeCurrentView ] = useState("home");

    const selectView = (currentView) =>{
        if(currentView ==="home"){
            return <HomeView />
        }else if(currentView ==="votes"){
            return <VotesView />
        }else if(currentView ==="bills"){
            return <BillsView />
        }
    }

    return (
        <div className="main-content-container" >
            < NavigationBar handleClick={changeCurrentView}/>
            { selectView(currentView) }
        </div>
    )
}

export default MainContent; 


