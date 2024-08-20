import { v4 as uuidv4 } from "uuid";
interface CartItems {
  id: string;
  nameItems: string;
  priceItems: number;
  quantity: number;
}
interface ProductProps {
  cart: CartItems[];
  setCart: (value: CartItems[]) => void;
  src: string;
  alt: string;
  title: string;
  description: string;
  price: string;
  dataName: string;
  dataPrice: string;
}

const Product: React.FC<ProductProps> = ({
  cart,
  setCart,
  src,
  alt,
  title,
  description,
  price,
  dataName,
  dataPrice,
}) => {
  const priceItems = Number(dataPrice);
  const nameItems = dataName;

  function addToCart(nameItems: string, priceItems: number) {
    const existItem = cart.find((item) => item.nameItems === nameItems);

    if (existItem) {
      const newCart = cart.map((item) => {
        if (item.nameItems === nameItems) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(newCart);
    } else {
      const newCart = [
        ...cart,
        {
          id: uuidv4(),
          nameItems,
          priceItems,
          quantity: 1,
        },
      ];
      setCart(newCart);

    }
    console.log(cart);
  }

  return (
    <div className="flex gap-2 w-full">
      <img
        className="w-32 h-28 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
        src={src}
        alt={alt}
      />
      <div className="w-full">
        <p className="font-bold">{title}</p>
        <p className="text-sm">{description}</p>
        <div className="flex items-center gap-2 justify-between mt-3">
          <p className="">{price}</p>
          <button
            className="bg-gray-900 px-5 rounded add-to-cart-btn"
            data-name={dataName}
            data-price={dataPrice}
            onClick={() => addToCart(nameItems, priceItems)}
          >
            <i className="fas fa-cart-plus text-lg text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
