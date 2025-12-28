import CarDetails from "./CarDetails";

export default function CarList({ cars, searchElement, isChacked }) {
  const rows = [];

  const searchTerm = searchElement || "";

  cars.forEach((element) => {
    if (element.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }

    if (isChacked == true) {
      if (element.isPremium == true) {
        rows.push(
          <div key={element.id} className="flex-grow basis-[calc(33.33%-1rem)]">
            <CarDetails detail={element} />
          </div>
        );
      }
      return;
    }
    {
      rows.push(
        <div key={element.id} className="flex-grow basis-[calc(33.33%-1rem)]">
          <CarDetails detail={element} />
        </div>
      );
    }
  });

  return (
    <div className="flex flex-wrap gap-4 p-10 w-full bg-gray-50">{rows}</div>
  );
}
