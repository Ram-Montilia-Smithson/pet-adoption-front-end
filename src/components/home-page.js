import Login from "./login"
import Signup from "./signup"



// Components:
// Login / Signup button
// Login / Signup modal(triggered when the button is pressed)


function Homepage() {
    return (
        <div>
            when logged out:
            <div>
                <h1>Welcome to the site!</h1>
                <p>description to the service provided</p>
                <button>login/signup</button>
                the button should trigger a modal with either:
                <br/>
                <Signup />
                or
                <Login />
                link to the search page
            </div>
            when logged in:
            <div>
                <h1>Welcome to the site First Name Last Name</h1>
                <button>search</button>
                <br />
                <a href> link to My Pets Page</a>
                <br />
                Has access to navigate to profile settings
            </div>
        </div>
    );
} 


export default Homepage