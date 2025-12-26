

const CarDetails = ({detail}) => {
  return (
    <div>
      <div>{detail.title}</div>
      <div>Brand : {detail.brand}</div>
      <div>Year : {detail.year}</div>
      <div>Price : ${detail.price}</div>
      <div>Premium : {detail.isPremium}</div>
      
    </div>
  );
};

export default CarDetails;