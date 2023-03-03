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
      <div className="overflow-hidden py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="relative z-10 mx-auto lg:col-span-7 lg:max-w-none lg:pt-6">
              <h1 className="uppercase text-7xl font-extrabold tracking-tight text-zinc-800 xs:text-5xl">
                A weak mind equals a weak body. A strong mind equals power
                beyond limits.
              </h1>
              <p className="mt-6 text-lg text-slate-600">
                We are dedicated to enhancing an athlete's mental preparation.
                Enabling them to achieve optimal performance.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                <a
                  className="inline-flex justify-center rounded-full border py-3 px-5 font-semibold outline-2 outline-offset-2 transition-colors text-zinc-100 bg-orange-500 hover:bg-zinc-600 active:bg-zinc-800 active:text-zinc-100"
                  href="https://calendly.com/tcmperformance/tcm-performance-coaching"
                  target="_blank"
                  rel="noreferrer"
                >
                  Train me now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/runel.webp"
      />

      {/* Mission */}
      <section className="pt-20 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
            <h2 className="text-6xl font-bold tracking-tight text-zinc-800">
              People will only go as far as their mind allows.
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Physical preparation can only take athletes so far. It doesn't
              matter if they are a recreational or high level competitive
              athlete, only once their mind is unlocked can they achieve their
              full potential. You've put in the physical preparation in the
              offseason, now it's time to put your mental capabilities to the
              test. If athlete's aren't mentally prepared for the obstacles and
              challenges that lie ahead, their true potential will never be
              reached.
            </p>
          </div>
          <div className="mx-auto mt-20">
            <StaticImage
              alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
              src="../images/runner.webp"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pt-20 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto md:grid md:grid-cols-3">
            <div className="md:col-start-2 md:col-span-2">
              <h2 className="text-6xl font-bold tracking-tight text-zinc-800">
                Build a strong mind and become leaps ahead of your competition.
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                We offer virtual/in-person group and individual sessions.
                Weekend workshops are also provided. Athletes can purchase
                sessions on an individual or packaged basis. All services are
                individualized to the athlete or team's specific needs. Here are
                our three core concepts.
              </p>
            </div>            
          </div>

          <div className="mx-auto md:max-w-2xl lg:max-w-7xl mt-16">
            <ol className="grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {/* Service 1 */}
              <li className="grid auto-rows-min grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1">
                <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg h-80 sm:h-60">
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                    <StaticImage src="../images/swimmer.webp" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-slate-900">
                    Facing Challenges
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
                <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg h-80 sm:h-60">
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                    <StaticImage src="../images/female-assault-ropes.webp" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-slate-900">
                    Adopting Growth
                  </h3>
                  <p className="mt-2 text-lg text-slate-600">
                    Athlete's will learn how to adopt a growth mindset and
                    embrace challenge, risk, and pressure.
                  </p>
                </div>
              </li>
              {/* Service 3 */}
              <li className="grid auto-rows-min grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1">
                <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg h-80 sm:h-60">
                  <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                    <StaticImage src="../images/runner-agility-ladder.webp" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium tracking-tight text-slate-900">
                    Taking Action
                  </h3>
                  <p className="mt-2 text-lg text-slate-600">
                    Athletes will learn actionable skills that they can use
                    within and outside of the sport environment.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Testimonial 1 */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
            <h2 className="text-6xl font-bold tracking-tight text-zinc-800">
              Feel the impact from our athletes
            </h2>
          </div>
          <div className="mt-16 sm:mt-20">
            <div className="md:border-zinc-100">
              <div className="flex flex-col space-y-8">
                <figure className="md:grid md:grid-cols-3 md:items-baseline border-solid border-2 rounded-2xl p-8">
                  <figcaption className="group relative flex items-start">
                    <div>
                      <div className="font-medium text-xl text-slate-800">
                        Lukas, 17
                      </div>
                      <div className="mt-1 uppercase text-base text-orange-500">
                        Hockey
                      </div>
                    </div>
                  </figcaption>
                  <blockquote className="md:block relative md:col-span-2 mb-3 mt-4 md:mt-0 flex items-center text-lg text-slate-800">
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

                <figure className="md:grid md:grid-cols-3 md:items-baseline border-solid border-2 rounded-2xl p-8">
                  <figcaption className="group relative flex items-start">
                    <div>
                      <div className="font-medium text-xl text-slate-800">
                        Carla, 38
                      </div>
                      <div className="mt-1 uppercase text-base text-orange-500">
                        Ultramarathon
                      </div>
                    </div>
                  </figcaption>
                  <blockquote className="md:block relative md:col-span-2 mb-3 mt-4 md:mt-0 flex items-center text-lg text-slate-800">
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

                <figure className="md:grid md:grid-cols-3 md:items-baseline border-solid border-2 rounded-2xl p-8">
                  <figcaption className="group relative flex items-start">
                    <div>
                      <div className="font-medium text-xl text-slate-800">
                        Runel, 28
                      </div>
                      <div className="mt-1 uppercase text-base text-orange-500">
                        Weighlifting
                      </div>
                    </div>
                  </figcaption>
                  <blockquote className="md:block relative md:col-span-2 mb-3 mt-4 md:mt-0 flex items-center text-lg text-slate-800">
                    "During my sessions with Tyler we dove into why I might be in
                    my head for my lifts. Tyler taught me some exercises to do
                    after our sessions that ultimately helped me get out of my
                    head and to trust myself and capabilities more. I ended up
                    winning gold and tying a provincial record for the clean and
                    jerk. I am not currently training for a meet, but once I am
                    ready to compete again, I will definitely be running back to
                    Tyler"
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
            <p className="mt-4 text-lg text-gray-300">
              Get a step ahead of your competition.
            </p>
            <a
              className="group inline-flex items-center justify-center rounded-full py-3 px-5 text-base font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-orange-500 text-white hover:bg-zinc-600 active:bg-zinc-800 active:text-zinc-100 focus-visible:outline-white mt-10"
              href="https://calendly.com/tcmperformance/tcm-performance-coaching"
              target="_blank"
              rel="noreferrer"
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
export const Head = () => <Seo title="Home Page" />;

// Step 3: Export your component
export default IndexPage;
