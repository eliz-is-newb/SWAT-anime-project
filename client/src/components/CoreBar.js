import { Navbar, Button, Menu, Link, Form, Input } from 'react-daisyui';

function LandingBar(){
    return (
        <div className="flex w-full bg-black component-preview items-center justify-center font-sans">
            <Navbar className='text-neutral-content'>
                <Navbar.Start>
                    <Link href="/">
                    <Button className="text-xl text-white normal-case mt-3" color="ghost">
                        <img src="/assets/img/logo.png" alt="SillyTsundereTV" className="w-10 h-10 text-white"/>
                        &nbsp; SillyTsundereTV
                    </Button>
                    </Link>
                </Navbar.Start>
                <Navbar.Center>
                    {/* <Form>
                        <Input className="w-96 h-10 mt-2 text-black " bordered type="text" placeholder="Search..." />
                    </Form> */}
                </Navbar.Center>
                <Navbar.End className='space-x-4 m-1 mr-3 font-sans'>
                    <Button variant="outline" className="text-white  hover:text-purple-600" href="login">Login</Button>
                    <Button color="primary"className="bg-white hover:bg-lime-400   text-black" href="register">register</Button>
                </Navbar.End>
            </Navbar>
        </div>
    );
}

export default LandingBar;