import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="flex flex-col items-center justify-center h-screen w-9/12">
        <div className="flex items-center">
          <h1 className="text-3xl text-center text-gray-900">
            Hi 👋 I'm Alex. Indie Hacker. Music Passionate 
          </h1>
          <div className="tooltip-container">
            <Image className="flex img-1 rounded-full ml-2.5" src="/img/music.png" alt="Description of the image" width={80} height={43} />
            <div className="tooltip-content">
              <iframe
                className="video-iframe rounded-xl"
                width="300"
                height="230"
                src="https://www.youtube.com/embed/V1RBIDFoEJw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="text-3xl items-center text-center">
          <p>
            Rap, R&B, Soul
            <span class="inline-flex items-baseline">
            <Image src="/img/music-2.jpg" alt="" class="self-center rounded-full mx-2.5 img-1"  width={80} height={43} />
           <span>espessialy</span>
            </span>
              on vinyl records. I don’t own an app, but I do other cool things.
            </p>
        </div>
      </div>
    </main>
  );
}
