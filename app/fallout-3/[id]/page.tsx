import { Quote } from "lucide-react";
import { fallout3Collectibles } from "../collectibles";
import Image from "next/image";

export default async function Fallout3Collectible({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const fallout3CollectibleId = (await params).id;
  const fallout3Collectible = Object.values(fallout3Collectibles)
    .flat()
    .find(({ id }) => id == fallout3CollectibleId);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {fallout3Collectible?.images.map((image, index) => (
            <div className="aspect-square" key={index}>
              <Image
                alt={`Contextual image for the ${fallout3Collectible.name} bobblehead`}
                className="h-full w-full object-contain"
                src={image}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
