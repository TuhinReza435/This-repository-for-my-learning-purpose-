const CarDetails = ({ detail }) => {
  return (
    <div className="shadow-md border rounded-xl p-4 bg-white w-full h-full">
      <div className="font-bold text-lg">{detail.title}</div>
      <div>Brand : {detail.brand}</div>
      <div>Year : {detail.year}</div>
      <div>Price : ${detail.price}</div>
      <div>Premium : {detail.isPremium ? "Yes" : "No"}</div>
    </div>
  );
};

export default CarDetails;
