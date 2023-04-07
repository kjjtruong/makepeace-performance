// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      {/* Hero */}
      <div className="overflow-hidden bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="relative z-10 mx-auto lg:col-span-7 lg:max-w-none lg:pt-6">
              <h1 className="uppercase text-7xl font-extrabold tracking-tight text-zinc-800 xs:text-5xl">
                A strong mind equals power
                beyond limits.
              </h1>
              <p className="mt-6 text-lg text-slate-600">
                We are dedicated to enhancing an athlete's mental preparation.
                Enabling them to achieve optimal performance.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                <a
                  className="inline-flex justify-center rounded-full border py-3 px-5 font-semibold outline-2 outline-offset-2 transition-colors text-zinc-100 bg-black hover:bg-zinc-600 active:bg-zinc-800 active:text-zinc-100"
                  href="mailto:tyler@tcmperformance.ca"
                >
                  Book free consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StaticImage
        alt="Female weightlifter doing barbell shouulder presses"
        src="../images/runel.webp"
      />

      {/* Mission */}
      <section className="bg-offwhite pt-20 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
            <h2 className="text-6xl font-bold tracking-tight text-zinc-800">
              People will only go as far as their mind allows.
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Physical preparation can only take athletes so far. If athlete's
              aren't mentally prepared for the obstacles and challenges that lie
              ahead, their true potential will never be reached. It
              doesn't matter if they are a recreational or high level competitive
              athlete, only once their mind is unlocked can they achieve their
              full potential.
            </p>
            <p className="mt-6 text-lg text-slate-600">
              You've put in the physical preparation in the
              offseason, now it's time to put your mental capabilities to the
              test.
            </p>
          </div>

          <div className="mx-auto md:max-w-2xl lg:max-w-7xl mt-16">
            <h2 className="text-3xl font-medium tracking-tight text-zinc-800">
              Our three core steps:
            </h2>
            <ol className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3 mt-8">
              {/* Service 1 */}
              <li className="grid auto-rows-min grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1">
                <div className="relative h-48 overflow-hidden rounded-2xl h-80 sm:h-60">
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                    <StaticImage alt="Lane swimmer looking onto an emptry swimming pool" src="../images/swimmer.webp" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-zinc-800">
                    1. Facing Challenges
                  </h3>
                  <p className="mt-2 text-lg text-slate-600">
                    Athlete's will learn how to cope with anxiety, nerves, or
                    uncertainty that come with tryouts or upcoming competitive
                    events.
                  </p>
                </div>
              </li>
              {/* Service 2 */}
              <li className="grid auto-rows-min grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1">
                <div className="relative h-48 overflow-hidden rounded-2xl h-80 sm:h-60">
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                    <StaticImage alt="Female crossfitter using the assault ropes" src="../images/female-assault-ropes.webp" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-zinc-800">
                    2. Adopting Growth
                  </h3>
                  <p className="mt-2 text-lg text-slate-600">
                    Athlete's will learn how to adopt a growth mindset and
                    embrace challenge, risk, and pressure.
                  </p>
                </div>
              </li>
              {/* Service 3 */}
              <li className="grid auto-rows-min grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1">
                <div className="relative h-48 overflow-hidden rounded-2xl h-80 sm:h-60">
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                    <StaticImage alt="Soccer player training outdoors with the agility ladder" src="../images/runner-agility-ladder.webp" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-zinc-800">
                    3. Taking Action
                  </h3>
                  <p className="mt-2 text-lg text-slate-600">
                    Athletes will learn actionable skills that they can use
                    within and outside of the sport environment.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="mx-auto md:max-w-2xl lg:max-w-7xl mt-16">
            <h2 className="text-3xl font-medium tracking-tight text-slate-900">
              Our primary therapeutic approaches:
            </h2>
            <ol className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3 mt-8">
              {/* Service 1 */}
              <li className="grid auto-rows-min grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1">
                <div className="relative h-48 overflow-hidden rounded-2xl h-80 sm:h-60">
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)] object-cover w-100 h-100">
                    <StaticImage alt="Coach working with hockey goalie during practice" src="../images/coach-goalie-pucks.webp" className="object-cover w-100 h-100" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-zinc-800">
                    Humanistic Therapy
                  </h3>
                  <p className="mt-2 text-lg text-slate-600">
                    Support client self-discovery and realizing their own
                    potential.
                  </p>
                </div>
              </li>
              {/* Service 2 */}
              <li className="grid auto-rows-min grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1">
                <div className="relative h-48 overflow-hidden rounded-2xl h-80 sm:h-60">
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                    <StaticImage alt="Hockey goalie looking out onto an empty rink while stretching" src="../images/goalie-focus.webp" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-zinc-800">
                    Cognitive-Behaviour Therapy
                  </h3>
                  <p className="mt-2 text-lg text-slate-600">
                    Understanding how cognitions and thoughts impact outcomes.
                  </p>
                </div>
              </li>
              {/* Service 3 */}
              <li className="grid auto-rows-min grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1">
                <div className="relative h-48 overflow-hidden rounded-2xl h-80 sm:h-60">
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                    <StaticImage alt="Hockey goalie crouching and focused during a game" src="../images/goalie-focus-game.webp" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-zinc-800">
                    Solution-Focused Brief Therapy
                  </h3>
                  <p className="mt-2 text-lg text-slate-600">
                    Providing clients tools and techniques that can be used
                    immediately to manage problems or challenges.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="mx-auto mt-20">
            <StaticImage
              alt="Trail runner going uphill with a mountain in the backdrop"
              src="../images/runner-mountain-background.webp"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-offwhite pt-20 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto md:grid md:grid-cols-3">
            <div className="md:col-start-2 md:col-span-2">
              <h2 className="text-6xl font-bold tracking-tight text-zinc-800">
                Build a strong mind and become leaps ahead of your competition.
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                We offer virtual/in-person group and individual sessions.
                Weekend workshops are also provided. Athletes can purchase
                sessions on an individual or packaged basis.
              </p>
              <p className="mt-6 text-lg text-slate-600">
                *All services are
                individualized to the athlete or team's specific needs.
              </p>
            </div>
          </div>

          <div className="mx-auto md:max-w-2xl lg:max-w-7xl mt-16">
            <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 rounded-2xl md:px-8 md:pt-16 lg:p-20">
              <div className="relative px-4 py-16 rounded-2xl sm:px-10 md:py-12 lg:px-12">
                <div className="relative flex flex-col">
                  <h3 className="mt-7 text-6xl font-semibold text-zinc-800">
                    1-on-1
                  </h3>
                  <p className="mt-7 text-lg tracking-tight text-slate-600">
                    Services individualized to each client based upon their
                    presenting problem. 1-on-1 sessions take place virtually
                    through Google Meet.
                  </p>
                  <a
                    className="inline-flex justify-center rounded-full py-3 px-5 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900 mt-8"
                    href="mailto:tyler@tcmperformance.ca"
                  >
                    Book consultation
                  </a>
                </div>
              </div>

              <div className="relative px-4 py-16 rounded-2xl sm:px-10 md:py-12 lg:px-12 bg-black sm:shadow-lg">
                <div className="relative flex flex-col">
                  <h3 className="mt-7 text-6xl font-semibold text-white">
                    Group
                  </h3>
                  <p className="mt-7 text-lg tracking-tight text-white">
                    Larger groups and workshops focused primarily on teaching
                    mental skills and their application within the sport
                    environment.
                  </p>
                  <a
                    className="inline-flex justify-center rounded-full py-3 px-5 text-base font-semibold tracking-tight shadow-sm focus:outline-none bg-white text-black hover:text-black focus-visible:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-white active:text-black disabled:opacity-40 disabled:hover:text-black mt-8"
                    href="mailto:tyler@tcmperformance.ca"
                  >
                    Book consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial 1 */}
      <section className="bg-offwhite pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
            <h2 className="text-6xl font-bold tracking-tight text-zinc-800">
              Feel the impact from our athletes
            </h2>
          </div>
          <div className="mt-16 sm:mt-20">
            <div className="md:border-zinc-100">
              <div className="flex flex-col space-y-8">
                <figure className="md:grid md:grid-cols-3 md:items-baseline bg-black rounded-2xl p-8">
                  <figcaption className="group relative flex items-start">
                    <div>
                      <div className="font-medium text-2xl text-white">
                        Lukas, 18
                      </div>
                      <div className="mt-1 uppercase text-base text-orange-500">
                        Hockey
                      </div>
                    </div>
                  </figcaption>
                  <blockquote className="md:block relative md:col-span-2 mb-3 mt-4 md:mt-0 flex items-center text-lg text-white">
                    "Working with Tyler has really increased my overall
                    performance on the ice, I have been working with him for a
                    couple years now and I learn something new every time we
                    chat. I have really learned how to use my mind to my
                    advantage while playing hockey and use it as a positive
                    asset. My mindset on the ice has improved drastically since
                    connecting with Tyler. I feel more confident in myself and a
                    lot more prepared before games and practices."
                  </blockquote>
                </figure>

                <figure className="md:grid md:grid-cols-3 md:items-baseline bg-black rounded-2xl p-8">
                  <figcaption className="group relative flex items-start">
                    <div>
                      <div className="font-medium text-2xl text-white">
                        Carla, 38
                      </div>
                      <div className="mt-1 uppercase text-base text-orange-500">
                        Ultramarathon
                      </div>
                    </div>
                  </figcaption>
                  <blockquote className="md:block relative md:col-span-2 mb-3 mt-4 md:mt-0 flex items-center text-lg text-white">
                    "When I started working with Tyler I was facing some serious
                    mental challenges that were preventing me to reach my full
                    athletic potential. I didn’t have the tools to channel my
                    mental demons. Not very often you can have an expert to
                    listen to everything you are thinking and feeling, and
                    additionally provide the necessary tools to deal with the
                    mental challenge. Tyler coached me for months and thanks to
                    his help I was able to qualify one more time to two major
                    international competitions. I have learned so many tools
                    that I will continue using through major events. I couldn't
                    speak highly enough of how he has helped me over this time."
                  </blockquote>
                </figure>

                <figure className="md:grid md:grid-cols-3 md:items-baseline bg-black rounded-2xl p-8">
                  <figcaption className="group relative flex items-start">
                    <div>
                      <div className="font-medium text-2xl text-white">
                        Runel, 28
                      </div>
                      <div className="mt-1 uppercase text-base text-orange-500">
                        Weighlifting
                      </div>
                    </div>
                  </figcaption>
                  <blockquote className="md:block relative md:col-span-2 mb-3 mt-4 md:mt-0 flex items-center text-lg text-white">
                    "During my sessions with Tyler we dove into why I might be
                    in my head for my lifts. Tyler taught me some exercises to
                    do after our sessions that ultimately helped me get out of
                    my head and to trust myself and capabilities more. I ended
                    up winning gold and tying a provincial record for the clean
                    and jerk. I am not currently training for a meet, but once I
                    am ready to compete again, I will definitely be running back
                    to Tyler"
                  </blockquote>
                </figure>

                <figure className="md:grid md:grid-cols-3 md:items-baseline bg-black rounded-2xl p-8">
                  <figcaption className="group relative flex items-start">
                    <div>
                      <div className="font-medium text-2xl text-white">
                        Josh, 19
                      </div>
                      <div className="mt-1 uppercase text-base text-orange-500">
                        Hockey
                      </div>
                    </div>
                  </figcaption>
                  <blockquote className="md:block relative md:col-span-2 mb-3 mt-4 md:mt-0 flex items-center text-lg text-white">
                    "Talking with Tyler has given me a chance to be able to open up and express my feelings about myself. I have struggled with asking for help, but when I chose to begin working with Tyler I was really happy I did. He provides me lots of tools and exercises that build my confidence or to help me relax. He is a good listener when I have lots to say and sometimes even helps me to express feelings I may not really understand how to say aloud"
                  </blockquote>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-black py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="mx-auto max-w-md sm:text-center">
            <h2 className="text-6xl font-bold tracking-tight text-white">
              Are you mentally prepared?
            </h2>
            <p className="mt-4 text-lg text-white">
              Get a step ahead of your competition.
            </p>
            <a
              className="group inline-flex items-center justify-center rounded-full py-3 px-5 text-base font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-black hover:bg-zinc-200 active:bg-zinc-800 active:text-zinc-100 focus-visible:outline-white mt-10"
              href="mailto:tyler@tcmperformance.ca"
            >
              Book a consultation
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home" />;

// Step 3: Export your component
export default IndexPage;
