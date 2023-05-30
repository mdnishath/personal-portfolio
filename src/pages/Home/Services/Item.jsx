const Item = ({ item }) => {
  console.log(item);
  return (
    <div className="bg-overlay-light p-4 rounded-md shadow-dark-bottom hover:border-primary duration-200 ease-linear  group border-2 border-borderLight">
      <div className="border-borderLight border-2 inline-block  rounded-full p-6 group-hover:border-primary group-hover:bg-primary duration-200">
        <img className="w-[40px]" src={item.img} />
      </div>
      <h3 className=" text-text uppercase font-semibold text-lg my-4">
        {item.name}
      </h3>
      <p className="text-text-dark text-base">{item.description}</p>
    </div>
  );
};

export default Item;
