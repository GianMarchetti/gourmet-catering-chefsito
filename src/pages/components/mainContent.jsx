'use client'
import Image from 'next/image'
import tableSet1 from'../../assets/images/tablesetting.png'
import tableSet2 from'../../assets/images/tablesetting2.png'
import Menu from './menu'
import Contact from './contact'

const MainContent = () => {
    return (
        <>
            {/* <!-- Page content --> */}
            <div className="w-full">

            {/* <!-- About Section --> */}
                <div className="border-b py-16 flex flex-col-reverse lg:flex-row" id="about">
                    <div className="w-full px-6 py-3 lg:w-1/2">
                        <Image src={tableSet2} className="opacity-75 rounded w-full h-auto align-middle" alt="Table Setting" width="600" height="750" />
                    </div>

                    <div className="w-full px-6 py-3 lg:w-1/2">
                        <h2>About Catering</h2>
                        <h5 className="my-3 text-lg">Tradition since 1889</h5>
                        <p className="my-2 text-lg">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use <span className="w3-tag w3-light-grey">seasonal</span> ingredients.</p>
                        <p className="my-2 text-lg">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>


                {/* <!-- Menu Section --> */}
                <div className="border-b py-16 w-full flex flex-col items-center" id="menu">
                    <Menu />
                    <div className="py-3 px-6 w-full max-w-6xl">
                        <Image src={tableSet1} className="opacity-75 rounded max-w-full h-auto w-full align-middle" alt="Menu" width="600" height="750" />
                    </div>
                </div>


                {/* <!-- Contact Section --> */}
                <div className="py-16 px-4" id="contact">
                    <Contact />
                </div>

            {/* <!-- End page content --> */}
            </div>
        </>
    )
}

export default MainContent