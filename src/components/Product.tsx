const Product = ({src}: {src: string}) => {
  return (
    <div>
      <img
        className="w-32 h-28 rounded-md"
        src={src}
        alt="Hamburguer Smash"
      />
    </div>
  );
}

export default Product