import Image from "next/image";

export default function HomePage() {
  const mockUrls = [
    "https://utfs.io/f/vVpnOLXhoeXV9iSB8aM8THfyGwRNXv3i2DcsjMBLpguOAKmk",
    "https://utfs.io/f/vVpnOLXhoeXVGOqPlr1yBVq5ZT0dwCQkm6Oeht4DcuHvGrn8",
    "https://utfs.io/f/vVpnOLXhoeXVbUmjDvcvbmSNzF3J9lnVaKOYTq5c62uWi4PZ",
  ];

  const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex justify-between">
        <div className="flex flex-wrap justify-center gap-4">
          {mockImages.map((image) => (
            <div key={image.id} className="w-1/2 p-4">
              <Image
                src={image.url}
                alt="image"
                width={1000}
                height={1000}
                className="w-48"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {mockImages.map((image) => (
            <div key={image.id} className="w-1/2 p-4">
              <Image
                src={image.url}
                alt="image"
                width={1000}
                height={1000}
                className="w-48"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {mockImages.map((image) => (
            <div key={image.id} className="w-1/2 p-4">
              <Image
                src={image.url}
                alt="image"
                width={1000}
                height={1000}
                className="w-48"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
