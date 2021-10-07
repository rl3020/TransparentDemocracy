
const NavigationBar = ({ handleClick }) => {
    const changeTab = (node) =>{
        let clickedLink = node.target.getAttribute("value");
        handleClick(clickedLink);
    }

    return (
        <div className="navigation-bar">
            <div className="tab" value="home" onClick={changeTab}> HOME</div>
            <div className="tab" value="votes" onClick={changeTab}> VOTES</div>
            <div className="tab" value="bills" onClick={changeTab}> BILLS</div>
        </div>
    )

}; 


export default NavigationBar; 
