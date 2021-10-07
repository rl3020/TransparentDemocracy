import CongressionalActions from './CongressionalActions.js'


const HappeningNow = () =>{
    return(
        <div className="happening-now-container">

            <div className="happening-now-title">HAPPENING NOW</div>

            <div className="congress-container">
                <div className="congress-title">SENATE</div>
                <CongressionalActions chamber={"senate"} />
            </div>

            <div className="congress-container">
                <div className="congress-title">HOUSE OF REPS</div>
                <CongressionalActions chamber={"house"} />
            </div>
        </div>
    )   
}

export default HappeningNow;


