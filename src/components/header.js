import { Link, useStaticQuery, graphql } from "gatsby";
import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <header className="sticky top-0 z-40">      
      <div className="flex bg-offwhite flex-wrap items-center justify-between w-screen mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link to="/">        
          <StaticImage alt={data.site.siteMetadata.title} src="../images/logo-tcm-white.webp" className="w-40"/>
        </Link>

        <button
          className="flex items-center block px-3 py-2 text-black border border-black rounded md:hidden"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto text-center`}
        >
          {[            
            {
              route: `/about`,
              title: `About`,
            },
            {
              route: `/faq`,
              title: `FAQ`,
            },            
          ].map((link) => (
            <Link
              className="block mt-4 no-underline md:inline-block md:mt-0 md:ml-6 rounded-full px-3 py-2 text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:bg-gray-100 hover:delay-[0ms]"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}
          <a
            className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline py-3 px-5 rounded-full font-semibold outline-2 outline-offset-2 transition-colors text-zinc-100 bg-black hover:bg-zinc-600 active:bg-zinc-800 active:text-zinc-100"
            href="mailto:tyler@tcmperformance.ca"    
          >
            Book consultation
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
