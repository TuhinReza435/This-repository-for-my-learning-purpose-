export default function Box({ searchItem, onsetSearchItem }) {
  return (
    <div className=" border-1 pr-20 rounded-2xl ">
      <input
        type="search"
        placeholder="Search cars..."
        className="text-center outline-none"
        value={searchItem}
        onChange={(event) => onsetSearchItem(event.target.value)}
      />
    </div>
  );
}
