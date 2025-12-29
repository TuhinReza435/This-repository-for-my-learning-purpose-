<<<<<<< HEAD
import Box from "./Box";
=======
import Box from "./Box"; 
>>>>>>> e9760e0 (sdfkj)
import Premium from "./Premium";

export default function Search({
  searchItem,
  onsetSearchItem,
  isChacked,
  onsetIsChacked,
}) {
  return (
    <div className="flex justify-start gap-7">
      <Box searchItem={searchItem} onsetSearchItem={onsetSearchItem} />
      <Premium isChacked={isChacked} onsetIsChacked={onsetIsChacked} />
    </div>
  );
}
