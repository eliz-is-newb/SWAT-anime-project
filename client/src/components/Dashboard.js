import { Navbar, Button, Menu, Link, Form, Input } from 'react-daisyui';
import AuthService from '../services/auth.service';
function Dashboard(){
    const currentUser = AuthService.getCurrentUser();

    return (
        <div className="flex w-full component-preview items-center font-bold bg-white justify-center font-sans">

          <h1 className="text-black text-4xl mt-40  mr-6 font-sans"
          style={{position: "absolute", top:"-5px", left:"485px", }}
          >Hewwo! 
          
          <br/> No donde esta biblioteca!<br/> Please enjoy this certified hood classic :(( </h1>
          <br/>
          <iframe  className="mb-20 mt-56"
          width="695" height="415" src="https://www.youtube.com/embed/EnzA6mHQrog" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>

           <Button variant="outline" className="text-black  hover:text-purple-600" 
           style={{position:"absolute", top:"145px", left:"1030px"}}
           href="/loggedin">Back to Home</Button>


{/* 
           <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div> */}
        </div>
    );
}

export default Dashboard;