export default function Premium({ isChacked, onsetIsChacked }) {
  return (
    <div>
      <input
        type="checkbox"
        checked={isChacked}
        className="w-5 h-5 cursor-pointer accent-blue-600 border-gray-300 rounded focus:ring-blue-500"
        onChange={(event) => onsetIsChacked(event.target.checked)}
      />
      <label htmlFor="" className="font-semibold text-2xl px-1">
        Show Premium only{" "}
      </label>
      
    </div>
  );
}
