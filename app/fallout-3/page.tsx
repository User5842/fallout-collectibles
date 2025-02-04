import Image from "next/image";
import { fallout3Collectibles } from "./collectibles";

export default function Fallout3() {
  return (
    <div>
      <section>
        <header>
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
            collectibles.map((collectible, index) => (
              <div
                className="bg-black aspect-square opacity-30 hover:opacity-100 cursor-pointer duration-300 ease-in-out"
                key={index}
              >
                <Image
                  alt="A Fallout 3 bobblehead"
                  className="h-full w-full object-contain"
                  src={collectible.image}
                />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
