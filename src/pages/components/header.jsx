import tableSet from '../../assets/images/tablesetting1.png'
import fondo from '../../assets/images/fondoset.png'
import logo from '../../assets/images/logo.png'
import Image from 'next/image'

const Header = () => {
    return (
        <>
            {/* <!-- Navbar (sit on top) --> */}
            <nav className="top-0 fixed w-full shadow-md z-50">
                <ul>
                    <li><a href="#home" className="font-semibold link"><h1 className="w-fit">Traiteurs Chefsito</h1></a></li>
                    {/* <!-- Right-sided navbar links. Hide them on small screens --> */}
                    <div className="p-3">
                        <li><a href="#about" className="link">About</a></li>
                        <li><a href="#menu" className="link">Menu</a></li>
                        <li><a href="#contact" className="link">Contact</a></li>
                    </div>
                </ul>
            </nav>

            {/* <!-- Header --> */}
            <header className=" w-full min-w-96 flex flex-row-reverse items-center border-b relative" id="home">
                <Image className="banner w-full max-h-lvh" src={fondo} alt="Duck à l'Orange" width="800" height="800" />
                <div className="px-6 py-3 absolute bottom-0 left-0">
                    <h1 className="text-3xl md:text-6xl">Le Catering Chefsito</h1>
                </div>
            </header>
        </>
    );
};

export default Header;