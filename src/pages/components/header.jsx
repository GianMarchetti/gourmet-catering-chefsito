import tableSet from '../../assets/images/tablesetting1.png'
import Image from 'next/image'

const Header = () => {
    return (
        <>
            {/* <!-- Navbar (sit on top) --> */}
            <nav className="top-0 fixed w-full shadow-md z-50">
            <div className="flex justify-between w-full p-2 tracking-tighter font-medium" >
                <a href="#home" className="p-3 font-semibold">Traiteurs Gourmet Chefsito</a>
                {/* <!-- Right-sided navbar links. Hide them on small screens --> */}
                <div className="p-3">
                <a href="#about" className="p-3  hover:font-semibold">About</a>
                <a href="#menu" className="p-3  hover:font-semibold">Menu</a>
                <a href="#contact" className="p-3  hover:font-semibold">Contact</a>
                </div>
            </div>
            </nav>

            {/* <!-- Header --> */}
            <header className="w-full min-w-96 relative" id="home">
            <Image className="banner" src={tableSet} alt="Duck à l'Orange" width="800" height="800" />
            <div className="px-6 py-3 absolute left-0 bottom-0">
                <h1 className="text-4xl">Le Catering</h1>
            </div>
            </header>
        </>
    );
};

export default Header;