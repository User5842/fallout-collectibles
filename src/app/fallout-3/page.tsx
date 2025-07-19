import Image from "next/image";

type Collectible = {
  name: string;
  image: string; // URL or imported image
  description: string;
  location: string;
  found: boolean;
};

type CollectiblesGridProps = {
  collectibles: Collectible[];
};

const collectibles = [
  {
    name: "Strength Bobblehead",
    description: "Increases Strength by 1 point permanently.",
    location: "Found in the Museum of Technology in the DC ruins.",
    image:
      "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Strength.webp",
    found: false,
  },
  {
    name: "Perception Bobblehead",
    description: "Increases Perception by 1 point permanently.",
    location: "Located in Arlington Cemetery.",
    image:
      "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Perception.webp",
    found: false,
  },
  {
    name: "Endurance Bobblehead",
    description: "Increases Endurance by 1 point permanently.",
    location: "Found in the Sutton Brother's Garage.",
    image:
      "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Endurance.webp",
    found: false,
  },
  {
    name: "Charisma Bobblehead",
    description: "Increases Charisma by 1 point permanently.",
    location: "Located in the Corvega Assembly Plant.",
    image:
      "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Charisma.webp",
    found: false,
  },
  {
    name: "Intelligence Bobblehead",
    description: "Increases Intelligence by 1 point permanently.",
    location: "Found in Rivet City Library.",
    image:
      "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Intelligence.webp",
    found: false,
  },
  {
    name: "Agility Bobblehead",
    description: "Increases Agility by 1 point permanently.",
    location: "Located in the Thieves Den in Upper Seneca.",
    image: "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Agility.webp",
    found: false,
  },
  {
    name: "Luck Bobblehead",
    description: "Increases Luck by 1 point permanently.",
    location: "Found in Paradise Falls.",
    image: "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Luck.webp",
    found: false,
  },
  {
    name: "Small Guns Bobblehead",
    description: "Increases Small Guns skill by 10 points.",
    location: "Found in the Museum of Technology.",
    image:
      "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Small_Guns.webp",
    found: false,
  },
  {
    name: "Big Guns Bobblehead",
    description: "Increases Big Guns skill by 10 points.",
    location: "Located in Lincoln Memorial.",
    image:
      "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Big_Guns.webp",
    found: false,
  },
  {
    name: "Energy Weapons Bobblehead",
    description: "Increases Energy Weapons skill by 10 points.",
    location: "Found in the Repconn Headquarters.",
    image:
      "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Energy_Weapons.webp",
    found: false,
  },
  {
    name: "Explosives Bobblehead",
    description: "Increases Explosives skill by 10 points.",
    location: "Located in the Nuka-Cola Plant.",
    image:
      "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Explosives.webp",
    found: false,
  },
  {
    name: "Lockpick Bobblehead",
    description: "Increases Lockpick skill by 10 points.",
    location: "Found in Vault 106.",
    image:
      "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Lockpick.webp",
    found: false,
  },
  {
    name: "Medicine Bobblehead",
    description: "Increases Medicine skill by 10 points.",
    location: "Located in the Jefferson Memorial.",
    image:
      "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Medicine.webp",
    found: false,
  },
  {
    name: "Melee Weapons Bobblehead",
    description: "Increases Melee Weapons skill by 10 points.",
    location: "Found in the Congressional Office Building.",
    image:
      "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Melee_Weapons.webp",
    found: false,
  },
  {
    name: "Repair Bobblehead",
    description: "Increases Repair skill by 10 points.",
    location: "Located in the Dunwich Building.",
    image: "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Repair.webp",
    found: false,
  },
  {
    name: "Science Bobblehead",
    description: "Increases Science skill by 10 points.",
    location: "Found in the Poseidon Energy Plant.",
    image: "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Science.webp",
    found: false,
  },
  {
    name: "Speech Bobblehead",
    description: "Increases Speech skill by 10 points.",
    location: "Located in the Smithsonian.",
    image: "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Speech.webp",
    found: false,
  },
  {
    name: "Barter Bobblehead",
    description: "Increases Barter skill by 10 points.",
    location: "Found in the Lucky 38 Casino.",
    image: "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Barter.webp",
    found: false,
  },
  {
    name: "Unarmed Bobblehead",
    description: "Increases Unarmed skill by 10 points.",
    location: "Located in the Crimson Caravan Company.",
    image: "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Unarmed.webp",
    found: false,
  },
  {
    name: "Sneak Bobblehead",
    description: "Increases Sneak skill by 10 points.",
    location: "Located in the Crimson Caravan Company.",
    image: "/images/collectibles/fallout-3/bobbleheads/Bobblehead_Sneak.webp",
    found: false,
  },
];

export default function Fallout3Collectibles() {
  return (
    <section className="container mx-auto">
      <div className="mb-4 text-lg font-semibold">
        {`Found ${collectibles.filter((c) => c.found).length} / ${
          collectibles.length
        } collectibles`}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {collectibles.map(({ name, image, description, found }, index) => (
          <div
            className={`relative rounded-lg border p-4 shadow-md flex flex-col items-center text-center transition
              ${
                found
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 bg-white grayscale"
              }
              hover:scale-105 hover:shadow-lg cursor-pointer`}
            key={index}
          >
            <div className="relative w-full aspect-square mb-3">
              <Image
                alt={name}
                className="object-contain rounded-md"
                fill
                src={image}
              />
            </div>
            <h3 className="font-semibold text-lg">{name}</h3>
            {description && (
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                {description}
              </p>
            )}
            {found && (
              <span className="absolute top-3 right-3 inline-block rounded-full bg-green-500 text-white px-2 py-1 text-xs font-bold select-none">
                Found ✓
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
