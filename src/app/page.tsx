import Image from "next/image";
import Link from "next/link";

export default function GameSelection() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Link href="/fallout-3">
        <figure className="flex flex-col items-center text-center">
          <div className="relative w-full flex-1 aspect-[3/4] rounded-lg overflow-hidden shadow-md">
            <Image
              alt="Fallout 3 cover art"
              className="object-cover"
              fill
              src="https://yjpphv5stqjhntza.public.blob.vercel-storage.com/cover-art/fallout-3.webp"
            />
          </div>
          <figcaption className="mt-3 font-semibold text-lg">
            Fallout 3
          </figcaption>
        </figure>
      </Link>
      <Link href="/fallout-new-vegas">
        <figure className="flex flex-col items-center text-center">
          <div className="relative w-full flex-1 aspect-[3/4] rounded-lg overflow-hidden shadow-md">
            <Image
              alt="Fallout: New Vegas cover art"
              className="object-cover"
              fill
              src="https://yjpphv5stqjhntza.public.blob.vercel-storage.com/cover-art/fallout-new-vegas.webp"
            />
          </div>
          <figcaption className="mt-3 font-semibold text-lg">
            Fallout: New Vegas
          </figcaption>
        </figure>
      </Link>
      <Link href="/fallout-4">
        <figure className="flex flex-col items-center text-center">
          <div className="relative w-full flex-1 aspect-[3/4] rounded-lg overflow-hidden shadow-md">
            <Image
              alt="Fallout 4 cover art"
              className="object-cover"
              fill
              src="https://yjpphv5stqjhntza.public.blob.vercel-storage.com/cover-art/fallout-4.webp"
            />
          </div>
          <figcaption className="mt-3 font-semibold text-lg">
            Fallout 4
          </figcaption>
        </figure>
      </Link>
    </section>
  );
}
