import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen box-border m-0 p-0">
      <div className='text-left w-full h-full mx-auto max-w-2xl relative main-content'>
        <h1 className='text-3xl'>Hi 👋 I'm Alex. Indie Hacker. Music Passionate
          <div className='group inline-block relative'>
            <Image className='rounded-full mx-1 align-middle img-1' src="/img/music.png" alt="Dan's profile picture" width={80} height={43} />
            <iframe
              className="z-10 iframe-1 absolute top-12 opacity-0 group-hover:opacity-100 rounded-xl"
              width="300"
              height="180"
              src="https://www.youtube.com/embed/V1RBIDFoEJw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <br></br>Rap, R&B, Soul
          <div className='group inline-block relative'>
            <Image className='vertical-align-middle rounded-full mx-1 align-middle img-1' src="/img/music-2.jpg" alt="Dan's profile picture" width={80} height={43} />
            <iframe 
              className="z-10 iframe-1 absolute top-12 opacity-0 group-hover:opacity-100 rounded-xl "
              src="https://open.spotify.com/embed/track/1569dTes74Sj1qQvEG6xvC?utm_source=generator&theme=0" 
              width="300" 
              height="152" 
              frameBorder="0"
              allowfullscreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          </div>
          especially on vinyl records. <br></br>I don’t own an app, but I do other
          <div className='group inline-block relative'>
            <Image className='vertical-align-middle rounded-full mx-1 align-middle img-1' src="/img/music-3.JPG" alt="Alex's with Grubson vinyl, hiding face" width={80} height={43} />
            <iframe  
              src="https://open.spotify.com/embed/playlist/2OKxabe0BDqYFaEoBiWwHU?utm_source=generator" 
              className="z-10 iframe-1 absolute top-12 opacity-0 group-hover:opacity-100 rounded-xl "
              width="300" height="152" frameBorder="0" 
              allowfullscreen="" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy">
            </iframe>
          </div>
          cool things
        </h1>
      </div>

      <div className='w-full px-4 mt-10 h-full mx-auto max-w-2xl relative'>
        <ul className='divide-y divide-gray-200'>
          <li className='py-5'>
            <h2>
              <Image className='rounded-full align-middle mr-2' src="/img/logo-uncover.png" alt='uncoverUX logo' width={25} height={25}/>
              <Link href="https://uncoverUX.club" className='hover:text-orange-400'>uncoverUX</Link>
            </h2>
            <p className='text-zinc-500'>UX knowledge sharing. The tools and resources creators need <br></br>to bring their ideas to fruition. </p>
          </li>
          <li className='py-5'>
            <h2>🥧
              <Link href="https://getbaked.design" className='hover:text-orange-400'> GetBaked</Link>
            </h2>
            <p className='text-zinc-500'>Low-price design services for indie hackers.</p>
          </li>
          <li className='py-5'>
            <h2>
              <Image className='rounded-full align-middle mr-2' src="/img/logo-indie.png" alt='Indie News Logo' width={25} height={25}/>
              <Link href="https://indienews.club" className='hover:text-orange-400'>Indie News</Link>
            </h2>
            <p className='text-zinc-500'>Official #buildinpublic newspaper. Sarcastic dose of updated <br></br>from indie community.</p>
          </li>
        </ul>
      </div>
    </main>
  );
}




