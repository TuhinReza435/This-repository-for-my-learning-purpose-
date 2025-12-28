import { useState } from "react";
import CarList from "./CarList";
import Header from "./Header";
import Search from "./Search";

function Carshop() {
  const Cars = [
    {
      id: 1,
      title: "Luxury Sedan",
      brand: "Mercedes",
      year: 2023,
      price: 80000,
      isPremium: true,
    },
    {
      id: 2,
      title: "Family SUV",
      brand: "Toyota",
      year: 2022,
      price: 45000,
      isPremium: false,
    },
    {
      id: 3,
      title: "Sports Car",
      brand: "Porsche",
      year: 2023,
      price: 120000,
      isPremium: true,
    },
    {
      id: 4,
      title: "Electric Hatchback",
      brand: "Nissan",
      year: 2022,
      price: 35000,
      isPremium: false,
    },
    {
      id: 5,
      title: "Luxury SUV",
      brand: "BMW",
      year: 2023,
      price: 90000,
      isPremium: true,
    },
  ];

  const [searchItem, setSearchItem] = useState("");
  const [isChacked,setIsChacked]=useState(false);

  if(isChacked){
    console.log('this function is worked');
  }else{
    console.log('this function is not working');
  }
  return (
    <div>
      <Header />
      <Search
        searchItem={searchItem}
        onsetSearchItem={setSearchItem}
        isChacked={isChacked}
        onsetIsChacked={setIsChacked}
      />
      <CarList cars={Cars} searchElement={searchItem} isChacked={isChacked} />
    </div>
  );
}

export default Carshop;
