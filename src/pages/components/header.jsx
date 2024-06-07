import tableSet from '../../assets/images/tablesetting1.png'
import logo from '../../assets/images/logo.png'
import Image from 'next/image'

const Header = () => {
    return (
        <>
            {/* <!-- Navbar (sit on top) --> */}
            <nav className="top-0 fixed w-full shadow-md z-50">
                <ul>
                    <li><a href="#home" className="font-semibold link">                    <h1 className="w-fit">Traiteurs Chefsito</h1>
</a></li>
                    {/* <!-- Right-sided navbar links. Hide them on small screens --> */}
                    <div className="p-3">
                        <li><a href="#about" className="link">About</a></li>
                        <li><a href="#menu" className="link">Menu</a></li>
                        <li><a href="#contact" className="link">Contact</a></li>
                    </div>
                </ul>
            </nav>

            {/* <!-- Header --> */}
            <header className="w-full min-w-96 relative" id="home">
                <Image className="banner" src={tableSet} alt="Duck à l'Orange" width="800" height="800" />
            </header>
        </>
    );
};

export default Header;