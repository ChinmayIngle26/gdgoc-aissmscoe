import Image from "next/image";

export default function Gallery({ images = [] }) {
  return (
    <div>
      <div
        id="gallery"
        className="scroll-mt-[80px] min-h-[calc(100vh-104px)] w-full bg-darkPurple text-cream resp-px p-14"
      >
        <p className="clash-display font-semibold text-3xl mb-12">Gallery</p>
        {images.length === 0 ? (
          <div className="min-h-[50vh] flex items-center justify-center">
            <p className="clash-display text-xl text-cream/60">
              No images yet — check back soon!
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
              {images.map((img) => (
                <div
                  key={img.id}
                  className="w-full rounded-lg break-inside-avoid overflow-hidden"
                >
                  <Image
                    src={img.url}
                    alt={img.title}
                    width={img.width}
                    height={img.height}
                    className="w-full h-auto rounded-lg object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
