import Image from "next/image";
import Link from "next/link";

export default function Work() {
  // Generate array of all work images (1-22)
  const workItems = Array.from({ length: 28 }, (_, i) => ({
    id: i + 1,
    title: `Work ${i + 1}`,
    image: `/img/work/${i + 1}.jpg`,
  }));

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex flex-col flex-grow w-full">
        {/* Back Button */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 pt-8">
          <Link
            href="/"
            className="text-slate-400 hover:text-slate-600 text-sm hover:underline inline-block"
          >
            ← back
          </Link>
        </div>

        {/* Work Section */}
        <section className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {workItems.map((item) => (
              <div
                key={item.id}
                className="w-full aspect-[1440/1024] bg-slate-200 rounded-lg overflow-hidden group cursor-pointer hover:opacity-90 transition-opacity"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1440}
                  height={1024}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
