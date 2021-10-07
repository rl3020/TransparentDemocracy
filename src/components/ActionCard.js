

const ActionCard = ({data}) =>{
    console.log("Action Card got: ", data);
    return(
        <div className="action-card">
            <div className="left-container" >
                <div className="action-title" >
                    {data.title}
                </div>
                <div className="action-description" >
                    {data.title}
                </div>
            </div>
            <div className="right-container">
                <div className="action-date" >
                    {data.date}
                </div>
                <div className="action-time" >
                    {data.time}
                </div>
            </div>
        </div>
    )
}; 

export default ActionCard; 


