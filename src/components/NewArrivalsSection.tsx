import { Card } from "./Card";
export function NewArrivalsSection({ items, onClickCard }: any) {
  return (
    <div className="mt-20">
      <div className="flex-center">
        <div className="bg-[url('../../public/assets/lines.png')] bg-center text-4xl font-extrabold dark:text-white">
          NEW ARRIVALS Click them
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 justify-between gap-x-6 gap-y-24 md:grid-cols-2 xl:grid-cols-[repeat(3,25%)]">
        {items.map((item: any) => (
          <Card key={item.id} item={item} onClick={onClickCard} />
        ))}
      </div>
    </div>
  );
}