import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const FaqPage = () => {
  return (
    <Layout>
      <section className="border-t border-gray-200 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-6xl font-bold tracking-tight text-zinc-800">
              Frequently asked questions.
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              If you have anything else you want to ask,{" "}
              <a
                className="text-slate-900 underline"
                href="mailto:tyler.c.makepeace@gmail.com"
              >
                reach out to us
              </a>
            </p>
          </div>

          <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            <li>
              <ul className="space-y-10">
                <li>
                  <h3 className="text-lg font-semibold leading-6 text-slate-900">
                    What is a “mental performance consultant?”
                  </h3>
                  <p className="mt-4 text-lg text-slate-600">
                    Definition of Mental Performance Consultant, as defined by
                    the Canadian Sport Psychology Association: &quot;Mental
                    Performance Consultant&#39;s (MPC) are extensively trained
                    in the area of sport sciences and have acquired fundamental
                    knowledge in psychology and counselling through university
                    undergraduate and graduate coursework. MPCs provide
                    individual or group consultations geared towards improving
                    sport performance and well-being related issues. They do not
                    diagnose or treat mental health issues.&quot;
                  </p>
                  <p className="mt-4 text-lg text-slate-600">
                    It&#39;s important to utilize CSPA members because of the
                    requirements and review process that occurs to obtain
                    membership. MPCs provide consultations geared towards
                    improving performance and well-being related issues. MPCs do
                    not diagnose or treat mental health issues and are not
                    covered by extended medical plans.
                  </p>
                  <p className="mt-4 text-lg text-slate-600">
                    For more information about MPCs and the CSPA, please visit
                    <a href="https://www.cspa-acps.com/" target="_blank" rel="noopener noreferrer">https://www.cspa-acps.com/</a>
                  </p>
                </li>
              </ul>
            </li>

            <li>
              <ul className="space-y-10">
                <li>
                  <h3 className="text-lg font-semibold leading-6 text-slate-900">
                    Are athletes the only ones who can benefit from a mental
                    performance consultant?
                  </h3>
                  <p className="mt-4 text-lg text-slate-600">
                    The answer is simple: No. Anyone working in
                    performance-related realms can benefit from performance
                    psychology and mental skills training. If you are evaluated
                    based upon how you perform in the workplace or sport, the
                    support of a mental performance consultant may be right for
                    you.
                  </p>
                </li>                
                <li>
                  <h3 className="text-lg font-semibold leading-6 text-slate-900">
                    How long do individual sessions generally last for?
                  </h3>
                  <p className="mt-4 text-lg text-slate-600">
                    Sessions generally last between 50-60 minutes in length.
                  </p>
                </li>
              </ul>
            </li>

            <li>
              <ul className="space-y-10">
                <li>
                  <h3 className="text-lg font-semibold leading-6 text-slate-900">
                    What is the difference between my work as an MPC and a
                    clinical psychologist or “sports psychologist?”
                  </h3>
                  <p className="mt-4 text-lg text-slate-600">
                    I am extensively trained in performance psychology and
                    mental skills training. My work with clients is primarily
                    related to performance enhancement and optimizing individual
                    well-being. I am not legally entitled to call myself a
                    “psychologist” or “sports psychologist” as I do not have
                    clinical training. If issues related to suicide,
                    drug/alcohol abuse, eating disorders, among other arise, I
                    will happily refer you to a clinician who is sufficiently
                    trained in supporting these matters.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <Seo title="FAQ" />;

export default FaqPage;
