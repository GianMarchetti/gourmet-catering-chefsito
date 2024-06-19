import styles from "../../styles/header.module.css";
import tableSet from "../../assets/images/tablesetting-swipe.png";
import Image from "next/image";

const Header = () => {
    return (
        <>
            <div className={styles.shape}></div>

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
            <header className={styles.container} id="home">
                <div className={styles.contentContainer}>
                    <h1>
                        Welcome to <br />
                        <span className={styles.heading1}>Le Traiteurs Chefsito </span>
                    </h1>
                    <span className={styles.heading2}> 🥘 Explore our Food Adventure.</span>
                    <span className={styles.heading2}> 👨‍🍳 Professional Chefs</span>
                    <span className={styles.heading2}>🥇 Most rated Catering</span>
                    <button type="submit" className="btnSend">
                        <span>Get Catering Service</span>
                    </button>
                </div>

                <div className={styles.imageContainer}>
                    <Image src={tableSet} className={styles.Img} alt="traiteurs plate" width='800' height='800' />
                    <Image src={tableSet} className={styles.Img} alt="traiteurs plate" width='800' height='800' />
                </div>
            </header>
        </>
    );
};

export default Header;