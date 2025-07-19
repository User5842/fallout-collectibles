import Image from "next/image";
const collectible = {
  name: "Strength Bobblehead",
  description: "Increases Strength by 1 point permanently.",
  location: "Found in the Museum of Technology in the DC ruins.",
  image: "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Strength.webp",
  found: false,
};

export default function Fallout3Collectible() {
  return (
    <main className="container mx-auto p-6 max-w-4xl">
      <div
        className={`rounded-lg border p-6 shadow-md transition ${
          collectible.found
            ? "border-green-500 bg-green-50"
            : "border-gray-300 bg-white"
        }`}
      >
        <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg mb-6">
          <Image
            src={collectible.image}
            alt={`${collectible.name} main image`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 400px"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">{collectible.name}</h1>
          {collectible.found && (
            <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold select-none">
              Found ✓
            </span>
          )}
        </div>
        <p className="mb-3 text-gray-700">{collectible.description}</p>
        <p className="mb-6 text-sm text-gray-500">
          <strong>Location:</strong> {collectible.location}
        </p>
      </div>
    </main>
  );
}
