import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      {/* About */}
      <section className="bg-offwhite pt-20 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
            <h2 className="text-6xl font-bold tracking-tight text-zinc-800">
              We strive for continual progress and peak performance.
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              TCM Performance specializes in performance services that can aid
              athletes, performers, and business professionals reach performance
              excellence. With the immense pressure that comes with performing
              in high performance environments, performers require skills that
              will enable them to perform at their best. TCM Performance is
              dedicated to providing clients the necessary tools that will
              contribute to personal success.
            </p>
            <p className="mt-6 text-lg text-slate-600">
              Our mission is to provide resources and services to athletes and high performers
              that enable optimal performance and well-being, both within and
              outside of sport.
            </p>
          </div>
          <div className="mx-auto mt-20">
            <StaticImage
              alt="Trail runners going uphill"
              src="../images/runner.webp"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-offwhite pt-20 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto md:grid md:grid-cols-3">
            <div className="md:col-start-2 md:col-span-2">
              <h2 className="mt-6 text-6xl font-bold tracking-tight text-zinc-800 sm:base">
                Our Consulting Philosophy.
              </h2>
              <div className="mt-6 space-y-7 text-lg text-slate-600">
                <ol className="list-decimal list-inside leading-loose">
                  <li>
                    <span className="font-bold underline underline-offset-4 decoration-4">
                      The Person Comes First:
                    </span>{" "}
                    At the heart of what we do, the performer always comes
                    first.
                  </li>
                  <li>
                    <span className="font-bold underline underline-offset-4 decoration-4">
                      Integrity:
                    </span>{" "}
                    We work with integrity to deliver high quality services
                  </li>
                  <li>
                    <span className="font-bold underline underline-offset-4 decoration-4">
                      Safety &amp; Trust:
                    </span>{" "}
                    We strive to foster a safe, trusting environment.
                  </li>
                  <li>
                    <span className="font-bold underline underline-offset-4 decoration-4">
                      Collaboration:
                    </span>{" "}
                    Practitioners and performers work together to find best
                    practices and
                  </li>
                  solutions.
                  <li>
                    <span className="font-bold underline underline-offset-4 decoration-4">
                      Individuality:
                    </span>{" "}
                    Every performer is different, which requires different
                    approaches to consultation.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="bg-offwhite pt-20 sm:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
            <h2 className="text-6xl font-bold tracking-tight text-zinc-800">
              Meet your coach.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 mt-20">
            <div className="lg:pl-20">
              <div className="max-w-xs lg:max-w-none">
                <StaticImage
                  className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                  alt="Portrait shot of coach Tyler Makepeace"
                  src="../images/tyler-makepeace.webp"
                />
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-800 sm:text-2xl">
                Tyler Makepeace
              </h1>
              <h4 className="mt-2 text-base font-bold tracking-tight text-zinc-800 sm:base">
                Founder & Coach
              </h4>
              <div className="mt-6 space-y-7 text-lg text-slate-600">
                <p>
                  Tyler Makepeace is a mental performance consultant
                  &#40;provisional&#41; and member of the Canadian Sport
                  Psychology Association. He received his Master of Arts in
                  Human Kinetics, specializing in sport and exercise psychology
                  from the University of Ottawa. Tyler&#39;s practice expands
                  Western Canada including athletes competing in the Western
                  Hockey League, British Columbia Hockey League, Alberta Junior
                  Hockey League, and Canadian Separate School Hockey League. He
                  has given workshops and webinars to clubs and associations
                  exploring the impact the mental game has on performance and
                  excellence and is currently affiliated with the Canadian Sport
                  Institute - Calgary. Tyler continues to follow his passion for
                  research, which includes translating research into practice.
                </p>
                <p>
                  Tyler calls Calgary, AB home and enjoys spending his free time
                  with his partner, Meagan, and their dog, Louie.
                </p>
                <div>
                  <h4 className="text-base font-bold tracking-tight text-zinc-800">
                    Publications
                  </h4>
                  <ul className="mt-4">
                    <li className="flex">
                      <a
                        className="text-base text-salte-600 transition hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-500 underline underline-offset-4"
                        href="https://www.taylorfrancis.com/chapters/edit/10.4324/9781003025368-6/sport-psychology-masters-athletes-tyler-makepeace-bradley-young"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Coaching Masters Athletes &#40;pp.78-92&#41;
                      </a>
                    </li>
                    <li className="mt-4">
                      <a
                        className="text-base text-slate-600 transition hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-500 underline underline-offset-4"
                        href="https://doi.org/10.1123/japa.2021-0141"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mental Performance Consultants&apos; Perspectives on
                        Content and Delivery of Sport Psychology Services to
                        Masters Athletes
                      </a>
                    </li>
                    <li className="mt-4">
                      <a
                        className="text-base text-slate-600 transition hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-500 underline underline-offset-4"
                        href="https://doi.org/10.1123/tsp.2020-0110"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Masters Athletes&apos; Views on Sport Psychology for
                        Performance Enhancement and Sport Lifestyle Adherence
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-base font-bold tracking-tight text-zinc-800">
                    Social Media
                  </h4>
                  <ul className="mt-4">
                    <li className="flex">
                      <a
                        className="group flex text-base text-slate-600 transition hover:text-orange-500"
                        href="https://tylermakepeace.substack.com/"
                      >
                        <svg
                          viewBox="0 0 448 511.471"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none fill-slate-600 transition group-hover:fill-orange-500"
                        >
                          <path d="M0 0h448v62.804H0V0zm0 229.083h448v282.388L223.954 385.808 0 511.471V229.083zm0-114.542h448v62.804H0v-62.804z" />
                        </svg>
                        <span className="ml-4 underline underline-offset-4">
                          Substack Newsletter
                        </span>
                      </a>
                    </li>
                    <li className="mt-4 flex">
                      <a
                        className="group flex text-base text-slate-600 transition hover:text-orange-500"
                        href="mailto:tyler@tcmperformance.ca"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none fill-slate-600 transition group-hover:fill-orange-500"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                          ></path>
                        </svg>
                        <span className="ml-4 underline underline-offset-4">
                          tyler@tcmperformance.ca
                        </span>
                      </a>
                    </li>
                    <li className="mt-4 flex">
                      <a
                        className="group flex text-base text-slate-600 transition hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-500"
                        href="https://twitter.com/tcmakepeace"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none fill-slate-600 transition group-hover:fill-orange-500"
                        >
                          <path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path>
                        </svg>
                        <span className="ml-4 underline underline-offset-4">
                          Follow on Twitter
                        </span>
                      </a>
                    </li>
                    <li className="mt-4 flex">
                      <a
                        className="group flex text-base text-slate-600 transition hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-500"
                        href="https://www.instagram.com/_tcmperformance/?hl=en"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none fill-slate-600 transition group-hover:fill-orange-500"
                        >
                          <path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path>
                          <path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path>
                        </svg>
                        <span className="ml-4 underline underline-offset-4">
                          Follow on Instagram
                        </span>
                      </a>
                    </li>
                    <li className="mt-4 flex">
                      <a
                        className="group flex text-base text-slate-600 transition hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-500"
                        href="https://www.tiktok.com/@tcmperformance?lang=en"
                      >
                        <svg
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-orange-500"
                        >
                          <path d="M38.4 21.68V16c-2.66 0-4.69-.71-6-2.09a8.9 8.9 0 0 1-2.13-5.64v-.41l-5.37-.13V30.8a5 5 0 1 1-3.24-5.61v-5.5a10.64 10.64 0 0 0-1.7-.14 10.36 10.36 0 1 0 10.36 10.36 10.56 10.56 0 0 0-.08-1.27v-9.15a14.48 14.48 0 0 0 8.16 2.19Z" />
                        </svg>
                        <span className="ml-4 underline underline-offset-4">
                          Follow on TikTok
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="About Us" />;

export default AboutPage;
