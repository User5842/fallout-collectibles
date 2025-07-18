import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import Fallout3CoverArt from "../../public/images/cover-art/fallout-3.webp";
import FalloutNewVegasCoverArt from "../../public/images/cover-art/fallout-new-vegas.webp";
import Fallout4CoverArt from "../../public/images/cover-art/fallout-4.webp";

export default function GameSelection() {
  return (
    <main className="container mx-auto p-4">
      <header className="flex items-center justify-between">
        <div>
          <h1>Fallout Collectibles</h1>
          <p>Track every collectible you find across the Fallout universe</p>
        </div>
        <Button variant="outline">Log In</Button>
      </header>
      <Separator className="my-4" />
      <section className="flex flex-wrap gap-4">
        <Image
          alt="Fallout 3 cover art"
          className="flex-1 min-w-[100px] object-contain h-96"
          src={Fallout3CoverArt}
        />
        <Image
          alt="Fallout: New Vegas cover art"
          className="flex-1 min-w-[100px] object-contain h-96"
          src={FalloutNewVegasCoverArt}
        />
        <Image
          alt="Fallout 4 cover art"
          className="flex-1 min-w-[100px] object-contain h-96"
          src={Fallout4CoverArt}
        />
      </section>
    </main>
  );
}
