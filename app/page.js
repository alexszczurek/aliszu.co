import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col flex-grow items-center justify-center min-h-screen box-border m-0 p-0">
      <div className='text-left w-full h-full mx-auto max-w-4xl relative main-content px-4 sm:px-8'>
        <h1 className='text-4xl'>Hi 👋 I'm Alex. Indie Hacker. Music Passionate
          <div className='group inline-block relative'>
            <Image className='rounded-full mx-1 align-middle img-1' src="/img/music.png" alt="[AOMIX] EP.23 Playlist to Warm Up to While Drinking Whiskey by DJ Wow" width={80} height={43} />
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
            <Image className='vertical-align-middle rounded-full mx-1 align-middle img-1' src="/img/music-2.jpg" alt="Pa Salieu - Mista (Freestyle)" width={80} height={43} />
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
          especially on vinyl records. <br></br> I don’t own an app, but I do other
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

      <div className='w-full px-4 mt-12 h-full mx-auto max-w-4xl relative text-xl px-4 sm:px-8'>
        <ul className='divide-y divide-gray-200'>
          <li className='py-6'>
            <h2>
              <Image className='rounded-full align-middle mr-2' src="/img/logo-uncover.png" alt='uncoverUX logo' width={25} height={25}/>
              <Link href="https://uncoverUX.club" className='hover:text-orange-400'>uncoverUX</Link>
            </h2>
            <p className='text-zinc-500 pt-1'>UX knowledge sharing. Products that will make your UX process easier </p>
          </li>
          <li className='py-6'>
            <h2>🥧
              <Link href="https://getbaked.design" className='hover:text-orange-400'> GetBaked</Link>
            </h2>
            <p className='text-zinc-500 pt-1'>Low-price design services for indie hackers.</p>
          </li>
          <li className='py-6'>
            <h2>
              <Image className='rounded-full align-middle mr-2' src="/img/logo-indie.png" alt='Indie News Logo' width={25} height={25}/>
              <Link href="https://indienews.club" className='hover:text-orange-400'>Indie News</Link>
            </h2>
            <p className='text-zinc-500 pt-1'>Official #buildinpublic newspaper.</p>
          </li>
          <li className='py-6'>
            <h2>
              <Image className='rounded-full align-middle mr-2' src="/img/logo-baked.png" alt='Baked Studio Logo' width={25} height={25}/>
              <Link href="https://baked.design" className='hover:text-orange-400'>Baked Design</Link>
            </h2>
            <p className='text-zinc-500 pt-1'>Accelerate UI Design, Optimize User Experience, and Drive Business Success with Our Customized Framework and Expert Services</p>
          </li>
          <li className='py-6'>
            <h2>
              <Image className='rounded-full align-middle mr-2' src="/img/logo-opt.png" alt='OPT - color picker Logo' width={25} height={25}/>
              <Link href="https://chrome.google.com/webstore/detail/opt-colour-picker/clhmnfanfdeoehleeeklflcdcjedefpd?hl=en-US" className='hover:text-orange-400'>Opt - Color Picker</Link>
            </h2>
            <p className='text-zinc-500 pt-1'>Yes I know that Developer Tools exist, but this is so cool.</p>
          </li>
        </ul>
      </div>


      <footer class="bg-white w-full mx-auto max-w-4xl absolute bottom-0">
          <div class="w-full p-4 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Alex Szczurek. All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                  <a href="https://twitter.com/aliszu" class="mr-4 hover:underline md:mr-6 ">Twitter</a>
              </li>
              <li>
                  <a href="https://uncover.gumroad.com" class="mr-4 hover:underline md:mr-6">Gumroad shop</a>
              </li>
          </ul>
          </div>
      </footer>

    </main>
  );
}




