import Box from "./box";
import Premium from "./premium";

export default function Search({ searchItem, onsetSearchItem, isChacked, onsetIsChacked }) {
  return (
    <div className="flex justify-start gap-7">
      <Box searchItem={searchItem} onsetSearchItem={onsetSearchItem} />
      <Premium isChacked={isChacked} onsetIsChacked={onsetIsChacked} />
    </div>
  );
}
