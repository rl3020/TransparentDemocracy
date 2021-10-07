
const HomeView = () =>{
    return(
        <div className="home-view-container">
            <div style={{
                color: "dimgray",
                fontFamily: "'Darker Grotesque',sans-serif",
                fontSize: "40px",
                fontWeight: 200,
                letterSpacing: "2px",
                marginBottom: "10px"
            }}>
                Welcome,
            </div> 

            <p className="home-description" >
                A Transparent Democracy is designed for the purpose of holding congress accountable by allowing constituents (you) to track and observe the voting patterns and actions of their representatives in Congress.
            </p>

            <p className="sign-up-notification" >
                To receive notifications when congress passes a bill or votes, please sign up below.
            </p>
            
            <div className="sign-up-container">
                <div className="checkbox-container">
                    <input type="checkbox" /><label>Receive Notifications</label>
                    <input type="checkbox" /><label>Votes</label>
                    <input type="checkbox" /><label>Bills</label>
                </div>
                <input type="text" placeholder="name" />
                <input type="text" placeholder="email" />
                <button>Submit</button>

            </div>
            

        </div>
    )
};

export default HomeView; 

