import { Navbar, Button, Menu, Link, Form, Input } from 'react-daisyui';
import { useNavigate } from "react-router-dom";


function UserCoreBar(){

// fetch deleting our session on log out. 

const navigate = useNavigate();

// function handleLogOut() {
//     fetch('http://localhost/logout', {
//         method: 'DELETE',

//       })
      
//       then((r) => {
//         if (r.ok) {
//           setUser(null);
//         }
//       });
//     }




return (
        <div className="flex w-full component-preview items-center justify-center font-sans">
            <Navbar className='text-neutral-content'>
                <Navbar.Start>
                    <Link href="/">
                    <Button className="text-xl text-black normal-case" color="ghost">
                        <img src="/assets/img/logo.png" alt="SillyTsundereTV" className="w-10 h-10 text-black p-2"/>
                        SillyTsundereTV
                    </Button>
                    </Link>
                </Navbar.Start>
                <Navbar.Center>
                    <Form>
                        <Input className="w-96 text-black" bordered type="text" placeholder="Search..." />
                    </Form>
                </Navbar.Center>
                <Navbar.End className='space-x-4 m-1 font-sans'>
                    <Button variant="outline" href="/dashboard">Dashboard</Button>  
                     <Button color="primary" >Log out</Button>
                </Navbar.End>
            </Navbar>
        </div>
    );
}

export default UserCoreBar;