import Image from "next/image";
import { fallout3Collectibles } from "./collectibles";
import Link from "next/link";

export default function Fallout3Collectibles() {
  return (
    <div>
      <section>
        <header className="space-y-4">
          <h2>Bobbleheads (0 / {fallout3Collectibles.bobbleheads.length})</h2>
          <p>
            Vault-Tec bobbleheads are found on the eastern side of the former
            United States, throughout the Capital Wasteland. Bobbleheads were
            exclusive Vault-Tec merchandise available to executive-level
            employees of the Vault-Tec Corporation. They were also offered as
            gifts to individuals who had been accepted into vaults.
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 xl:grid-cols-5">
          {fallout3Collectibles.bobbleheads.map(({ id, images, name }) => (
            <Link href={`/fallout-3/${id}`} key={id} title={name}>
              <div className="aspect-square opacity-30 hover:opacity-100 duration-300 ease-in-out">
                <Image
                  alt="A Fallout 3 bobblehead"
                  className="h-full w-full object-contain"
                  src={images[0]}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
