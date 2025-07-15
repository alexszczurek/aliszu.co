import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <main className="flex flex-col flex-grow items-center justify-center px-4 sm:px-2 m-0 sm:m10">
        <div className="text-left w-full h-full mx-auto max-w-[540px] relative main-content px-4 sm:px-2 py-8 sm:py-0">
          <div className="text-slate-600 text-sm">
            i'm just trying to figure stuff out,<br/> without losing myself in the process.
          </div>

          <br />

          <div className="text-slate-600 text-sm">
            i didn't follow a straight path.
          </div>

          <br />

          <div className="text-slate-600 text-sm">
            tbh, i spent most of my twenties just grinding and exploring —
            kicked off with learning to code back in 2013, then dove into ux,
            research, strategy, and finally started sharing what i'd picked up.
          </div>

          <br />

          <div className="text-slate-600 text-sm">
            in 2022, i launched uncoverUX on instagram and dropped 3 ebooks.
            a year later, hopped on 𝕏 and co-founded baked studio, which blew up
            way faster than i ever thought.
          </div>

          <br />

          <div className="text-slate-600 text-sm">
            but by mid-2024, i was kinda stuck in the mess in my head i created.<br/> like..<br/>
            trapped in my own damn dreams.
          </div>

          <br />

          <div className="text-slate-400 text-sm">
            so i left
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 18 18"
              style={{
                display: "inline",
                verticalAlign: "middle",
                marginBottom: "3px",
                marginLeft: "4px",
              }}
              fill="currentColor"
            >
              <title>18 arrow persp door in</title>
              <g className="nc-icon-wrapper">
                <path d="M15.254,1.745c-.467-.327-1.065-.407-1.603-.211l-3.5,1.273c-.689,.25-1.152,.911-1.152,1.644v.118l2.841,2.841c.425,.425,.659,.99,.659,1.591s-.234,1.166-.659,1.591l-2.841,2.841v.118c0,.733,.463,1.394,1.152,1.644l3.5,1.273c.194,.07,.396,.105,.597,.105,.355,0,.707-.108,1.005-.317,.467-.327,.746-.863,.746-1.433V3.178c0-.57-.279-1.106-.746-1.433Z"></path>
                <path
                  d="M10.78,8.47l-3.5-3.5c-.293-.293-.768-.293-1.061,0s-.293,.768,0,1.061l2.22,2.22H2.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h5.689l-2.22,2.22c-.293,.293-.293,.768,0,1.061,.146,.146,.338,.22,.53,.22s.384-.073,.53-.22l3.5-3.5c.293-.293,.293-.768,0-1.061Z"
                  data-color="color-2"
                ></path>
              </g>
            </svg>
          </div>

          <br />

          <div className="text-slate-600 text-sm">
            in january 2025, i just walked away from my own studio to get my
            time back and focus on stuff that felt real again.
          </div>

          <br />

          <div className="text-slate-600 text-sm">
            i kept working on <a href="https://uncoverlab.co" className="text-slate-400 hover:underline">[uncoverlab]</a> — it's the kinda thing i wish i'd had
            as a designer — and started building <a href="https://getabode.app" className="text-slate-400 hover:underline">[abode]</a>, basically a chill social
            playground for friends.
          </div>

          <br />

          <div className="text-slate-600 text-sm">
            i love music. <br />
            i collect vinyls records [213 atm] <br />
            i cycle. <br />
            i run. <br />i{" "}
            <a
              href="https://breezy-channel-045311.framer.app"
              className="text-slate-400 hover:underline"
            >
              [makeover]
            </a>{" "}
            brands. <br />
            not chasing unicorns out here. <br />
            just trying to make things that feel good. <br />
          </div>
          <br />

          <div className="text-slate-400 text-sm">
            <ul className="flex flex-wrap items-start mt-3 text-sm space-x-2 sm:mt-0">
              <li>
                <a
                  href="https://twitter.com/aliszu"
                  className="hover:underline"
                >
                  [Twitter]
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com/@alexaszczurek"
                  className="hover:underline "
                >
                  [Medium]
                </a>
              </li>
              <li>
                <a
                  href="https://uncover.gumroad.com"
                  className="hover:underline"
                >
                  [Gumroad]
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
