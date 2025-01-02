const FoodCard = ({item}) => {
    const { recipe, price, name, image } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Food item"
        />
      </figure>
      <p className="absolute right-0 mt-6 mr-6 px-4 bg-slate-900 text-white">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4  uppercase">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
