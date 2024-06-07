import Image from 'next/image';
import { useEffect, useState } from 'react';

const Menu = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      const response = await fetch('/menu.json');
      const data = await response.json();
      setMenuData(data);
    };

    fetchMenuData();
  }, []);

  return (
    <>
      <h2>Our Menus</h2>
      <div className='py-3 px-6 w-fit'>
        {menuData.map((menu) => (
          <div key={menu.type} className='carta p-4 my-4'>
            <h3>{menu.type}</h3>
            <ul className='flex flex-wrap justify-center p-2'>
              {menu.items.map((item) => (
                <li key={item.name} className='card flex flex-col w-52 p-4 m-2'>
                  <Image src={item.image} alt={item.name} width='400' height='400' className='rounded-lg mb-2' />
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
