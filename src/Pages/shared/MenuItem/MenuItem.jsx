const MenuItem = ({ item }) => {
  const { recipe, price, name, image } = item;
  return (
    <div className="flex space-x-2">
      <img
        style={{ borderRadius: "0 150px 150px 150px" }}
        className="w-[100px]"
        src={image}
        alt="recipe image"
      />
      <div>
        <h3 className="uppercase">{name}---------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
