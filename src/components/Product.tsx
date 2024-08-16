const Product = ({
  count,
  setCount,
  cart,
  setCart,
  src,
  alt,
  title,
  description,
  price,
  dataName,
  dataPrice,
}: {
  count: number;
  setCount: (value: number) => void;
  cart: number;
  setCart: (value: number) => void;
  src: string;
  alt: string;
  title: string;
  description: string;
  price: string;
  dataName: string;
  dataPrice: string;
}) => {
  function valueToCart() {
    setCount(count + 1);
    setCart(cart + Number(dataPrice));
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
            onClick={() => valueToCart()}
          >
            <i className="fas fa-cart-plus text-lg text-white"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
