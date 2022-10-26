import { Navbar, Button, Menu, Link, Form, Input } from 'react-daisyui';

function LandingBar(){
    return (
        <div className="flex w-full component-preview items-center justify-center font-sans">
            <Navbar className='text-neutral-content'>
                <Navbar.Start>
                    <Link href="/">
                    <Button className="text-xl normal-case" color="ghost">
                        <img src="/assets/img/logo.png" alt="SillyTsundereTV" className="w-10 h-10 text-white p-2"/>
                        SillyTsundereTV
                    </Button>
                    </Link>
                </Navbar.Start>
                <Navbar.Center>
                    <Form>
                        <Input className="w-96" bordered type="text" placeholder="Search" />
                    </Form>
                </Navbar.Center>
                <Navbar.End className='space-x-4 m-1'>
                    <Button variant="outline" href="login">Login</Button>
                    <Button color="primary" href="register">register</Button>
                </Navbar.End>
            </Navbar>
        </div>
    );
}

export default LandingBar;