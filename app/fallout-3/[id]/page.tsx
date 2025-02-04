import { Quote } from "lucide-react";
import { fallout3Collectibles } from "../collectibles";

export default async function Fallout3Collectible({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const fallout3CollectibleId = (await params).id;
  const fallout3Collectible = fallout3Collectibles
    .flat()
    .find((collectible) => collectible.id == fallout3CollectibleId);

  return (
    <div>
      <section>
        <header className="space-y-4">
          <h2 className="font-semibold text-lg">{fallout3Collectible?.name}</h2>
          <p className="text-sm">{fallout3Collectible?.description}</p>
          <p className="text-sm italic bg-gray-100 p-2 flex gap-4 items-center">
            <Quote />
            {fallout3Collectible?.quote}
          </p>
        </header>
        <div className="mt-4"></div>
      </section>
    </div>
  );
}
