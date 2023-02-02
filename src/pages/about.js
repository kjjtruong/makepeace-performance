import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <section className="border-t border-gray-200 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
            <div className="lg:pl-20">
              <div className="max-w-xs sm:px-2.5 lg:max-w-none">
                <StaticImage
                  className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                  alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
                  src="../images/tyler-makepeace.webp"
                />
              </div>
            </div>
            <div className="lg:order-first lg:row-span-2">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Coach Tyler Makepeace.
              </h1>
              <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  Tyler Makepeace is a graduate from the University of Ottawa
                  where he received his Master of Arts in Human Kinetics,
                  specializing in sport and exercise psychology.
                </p>
                <p>
                  He is currently a member of the Canadian Sport Psychology
                  Association. Tyler's work has expanded several different
                  sports, including: Cycling, ultra-marathon, weightlifting,
                  hockey, baseball, and golf.
                </p>
                <p>
                  He also writes a weekly newsletter focused on enhancing
                  personal wellness and striving for excellence called "Tyler
                  Talks", which can be found on his Substack page.                  
                </p>
                <ul>
                  <li className="flex">
                    <a
                      className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                      href="tylermakepeace.substack.com."
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                        ></path>
                      </svg>
                      <span className="ml-4">Read Substack Newsletter</span>
                    </a>
                  </li>
                  <li className="mt-4 flex">
                    <a
                      className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                      href="mailto:tyler.c.makepeace@gmail.com"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
                        ></path>
                      </svg>
                      <span className="ml-4">tyler.c.makepeace@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
