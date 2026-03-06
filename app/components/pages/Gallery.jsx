"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import client from "../../lib/contentful";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGallery() {
      try {
        const response = await client.getEntries({
          content_type: "gallery",
          order: "fields.order",
        });

        const formatted = response.items.map((item) => ({
          id: item.sys.id,
          title: item.fields.title,
          url: item.fields.image?.fields?.file?.url
            ? `https:${item.fields.image.fields.file.url}`
            : null,
          width: item.fields.image?.fields?.file?.details?.image?.width || 400,
          height: item.fields.image?.fields?.file?.details?.image?.height || 300,
        }));

        setImages(formatted.filter((img) => img.url));
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGallery();
  }, []);

  return (
    <div>
      <div
        id="gallery"
        className="scroll-mt-[80px] min-h-[calc(100vh-104px)] w-full bg-darkPurple text-cream resp-px p-14"
      >
        <p className="clash-display font-semibold text-3xl mb-12">Gallery</p>
        {loading ? (
          <div className="min-h-[50vh] flex items-center justify-center">
            <div className="clash-display text-2xl text-cream/80 animate-pulse">
              Loading Gallery...
            </div>
          </div>
        ) : images.length === 0 ? (
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
