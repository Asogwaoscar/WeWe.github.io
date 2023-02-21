import React from "react";
import {
  ShoppingBag,
  BookOpen,
  EnvelopeOpen,
  MapPin,
  PhoneCall,
  EnvelopeSimple,
  Clock,
  Star,
  CurrencyEth,
  CreditCard,
  CurrencyBtc,
  CurrencyNgn,
  CurrencyDollar,
  Handshake,
} from "phosphor-react";

const Footer = () => {
  return (
    <footer class=" bg-black text-white body-font">
      <div class="container flex justify-center items-center ml-44 px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
        <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a href="/" className="flex text-white font-bold items-center">
            <ShoppingBag size={28} color="currentColor" />
            <span className="font-bold font-sans">
              We.<sub>We.</sub>
            </span>
          </a>
          <p class="mt-2 text-sm text-rose-100">
            Our brand maintains its uniqueness and eagerness to meet our
            client's demands.
          </p>
        </div>
        <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">
              <a href="/" className="flex text-white font-bold items-center">
                <BookOpen size={32} color="currentColor" />
                <span className="font-bold px-1 font-sans"> Useful Links</span>
              </a>
            </h2>
            <nav class="list-none mb-10 cursor-pointer">
              <li className="mt-2">
                <a href="/" class="text-rose-100 flex hover:text-gray-800">
                  <Star size={24} color="white" />
                  Brands & Designs
                </a>
              </li>
              <li className="mt-2">
                <a href="/" class="text-rose-100 flex hover:text-gray-800">
                  {" "}
                  <Star size={24} color="white" />
                  Privacy Policy
                </a>
              </li>
              <li className="mt-2">
                <a href="/" class="text-rose-100 flex hover:text-gray-800">
                  {" "}
                  <Star size={24} color="white" />
                  Terms of Services
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font font-bold text-white tracking-widest text-sm mb-3">
              <a href="/" className="flex text-white font-bold items-center">
                <EnvelopeOpen size={32} color="currentColor" />
                <span className="font-bold px-1 font-sans"> Get in Touch</span>
              </a>
            </h2>
            <nav class="list-none mb-10 cursor-pointer">
              <li>
                <a href="/" class="text-rose-100 flex hover:text-gray-800">
                  <MapPin size={24} color="white" />
                  <span>Unizik Tem Site Awka, Nigeria</span>
                </a>
              </li>
              <li className="mt-2">
                <a href="/" class="text-rose-100 flex hover:text-gray-800">
                  <PhoneCall size={24} color="white" /> +234 xxxxxxxxxxx
                </a>
              </li>
              <li className="mt-2">
                <a href="/" class="text-rose-100 flex hover:text-gray-800">
                  <Clock size={24} color="white" /> Office Hours: 24/7
                </a>
              </li>
              <li className="mt-2">
                <a href="/" class="text-rose-100 flex hover:text-gray-800">
                  <EnvelopeSimple size={24} color="white" /> Contact@xxxxx.com
                </a>
              </li>
            </nav>
          </div>
          <div class="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 class="title-font flex font-bold text-white tracking-widest text-sm mb-3">
              <Handshake size={24} color="white" />
              <span className="px-1"> We Accept</span>
            </h2>
            <p className="text-rose-100 ">
              Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt
              adipiscing atgfnte varius at. Sed mollis vestibulum sapien sed{" "}
            </p>
            <a
              href="/"
              rel=""
              className="text-rose-100 flex mt-2 ml-1 rounded-xl bg-white w-40"
              target="_blank"
            >
              <CurrencyNgn size={38} color="red" font="bold" />
              <CurrencyBtc size={38} color="skyblue" />
              <CurrencyEth size={38} color="yellow" />
              <CreditCard size={38} color="green" />
              <CurrencyDollar size={38} color="skyblue" />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-rose-100 text-sm text-center sm:text-left">
            ©{" "}
            <span>
              2023 We.<sub>We. </sub> Stores
            </span>
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-rose-100 ml-1"
              target="_blank"
            >
              - Signor_official
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="/" className="text-rose-100">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-rose-100">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-rose-100">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-rose-100">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
