import { Navbar, Button, Menu, Link, Form, Input } from 'react-daisyui';
import AuthService from '../services/auth.service';
function Dashboard(){
    const currentUser = AuthService.getCurrentUser();

    return (
        <div className="flex w-full component-preview items-center font-bold bg-white justify-center font-sans">

          <h1 className="text-black font-sans">Hewwo!</h1>
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