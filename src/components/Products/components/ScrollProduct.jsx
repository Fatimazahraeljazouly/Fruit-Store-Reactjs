import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from '../../../assets/fruits/strawbery.png';
import img2 from '../../../assets/fruits/passionfruit.png';
import img3 from '../../../assets/fruits/kiwi.png';
import img4 from '../../../assets/fruits/spatMommey.png';
import img5 from '../../../assets/fruits/apricot.png';
import { IoBagHandleSharp } from "react-icons/io5";

const Products = [
  {
    id: 1,
    title: 'strawberry',
    img: img1, 
    price: '12DH',
    caption: 'Fresh and juicy strawberry',
  },
  {
    id: 2,
    title: 'Avocado',
    img: img2, 
    price: '24DH',
    caption: 'Rich in healthy fats',
  },
  {
    id: 3,
    title: 'KIWI',
    img: img3, 
    price: '18DH', 
    caption: 'Exotic and refreshing', 
  },
  {
    id: 4,
    title: 'Mamey Sapote',
    img: img4, 
    price: '43DH',
    caption: 'Mamey Sapote Magana Live Plant',
  },
  {
    id: 5,
    title: 'apricot',
    img: img5, 
    price: '15DH', 
    caption: 'Crispy and sweet apricot',
  },
];

const ScrollProduct = () => {
  return (
    <Slide >
      {Products.map(menu => (
        <div key={menu.id} className="flex justify-center items-center h-[300px] bg-orange-100 rounded-xl shadow-md p-6 mt-10 each-slide-effect">
          <div className=" flex flex-col text-center items-center ">
            <img 
              className='w-[120px] h-[120px] mx-auto transform transition duration-400 hover:scale-105 hover:rotate-2' 
              src={menu.img} 
              alt={menu.title} 
            />
            <h2 className="text-lg font-bold font-averia mt-4 text-gray-800">{menu.title} <span className="text-orange-600">{menu.price}</span></h2>
            <p className="text-sm text-gray-600 font-mono mt-2">{menu.caption}</p>
            <button className="mt-4 flex justify-center items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-700 transition duration-300">
              <IoBagHandleSharp /> Order Now
            </button>
          </div>
        </div>
      ))}
    </Slide>
  );
};

export default ScrollProduct;
