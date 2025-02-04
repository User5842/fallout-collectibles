import Image from "next/image";
import { fallout3Collectibles } from "./collectibles";
import Link from "next/link";

export default function Fallout3Collectibles() {
  return (
    <div>
      <section>
        <header className="space-y-4">
          <h2 className="font-semibold text-lg">
            Bobbleheads (0 / {fallout3Collectibles[0].length})
          </h2>
          <p className="text-sm">
            Vault-Tec bobbleheads are found on the eastern side of the former
            United States, throughout the Capital Wasteland. Bobbleheads were
            exclusive Vault-Tec merchandise available to executive-level
            employees of the Vault-Tec Corporation. They were also offered as
            gifts to individuals who had been accepted into vaults.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 lg:grid-cols-5">
          {fallout3Collectibles.map((collectibles) =>
            collectibles.map((collectible) => (
              <Link href={`/fallout-3/${collectible.id}`} key={collectible.id}>
                <div className="bg-black aspect-square opacity-30 hover:opacity-100 duration-300 ease-in-out">
                  <Image
                    alt="A Fallout 3 bobblehead"
                    className="h-full w-full object-contain"
                    src={collectible.image}
                  />
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
