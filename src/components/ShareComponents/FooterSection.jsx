import React, { useState } from "react";
import Map from "./Map";
import { Slide, Fade } from "react-reveal";

const FooterSection = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  window.addEventListener("scroll", getScrollValue);
  function getScrollValue() {
    setShowBackToTop(window.scrollY);
  }

  return (
    <section
      className="pt-20 -mt-[88px]"
      style={{
        backgroundImage: `url(https://images.squarespace-cdn.com/content/v1/6434de7a3f788a47f32b88e8/365c6c65-10bd-4ad8-9924-5eebc08cd484/footerbg.jpg)`,
        width: "100%",
        zIndex: "-1",
      }}>
      <hr className="border-t-2 w-10/12 mx-auto py-5" />
      <div className="container mx-auto">
        <Slide right cascade duration={1500}>
          <Map />
        </Slide>
        <Fade bottom big cascade duration={1500}>
          <footer className="footer bg-transparent p-10 text-gray-100 container mx-auto">
            <div>
              <span className="footer-title text-gray-100 text-2xl opacity-100">
                SITEMAP
              </span>
              <a className="link link-hover link-primary">Catering</a>
              <a className="link link-hover link-primary">Private Dining</a>
              <a className="link link-hover link-primary">Careers</a>
              <a className="link link-hover link-primary">View Menu</a>
            </div>

            <div>
              <span className="footer-title text-gray-100 text-2xl opacity-100">
                Legal
              </span>
              <a className="link link-hover link-primary">Terms of use</a>
              <a className="link link-hover link-primary">Privacy policy</a>
              <a className="link link-hover link-primary">Cookie policy</a>
            </div>
            <div>
              <span className="footer-title text-gray-100 text-2xl opacity-100">
                Follow US
              </span>
              <div className="grid grid-flow-col gap-4">
                <a href="#" className="hover:animate-pulse hover:bg-gray-700 p-3 rounded-full transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:animate-pulse hover:bg-gray-700 p-3 rounded-full transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
                <a href="#" className="hover:animate-pulse hover:bg-gray-700 p-3 rounded-full transition-all">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="fill-current">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <span className="footer-title text-gray-100 text-2xl opacity-100">
                JOIN OUR MAILING LIST
              </span>
              <div className="form-control w-80">
                <label className="label">
                  <span className="label-text text-gray-100">
                    Stay in the know for all news Nooshé Jān related!
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input bg-[#253333] input-bordered w-full pr-16"
                  />
                  <button className="btn hover:animate-pulse btn-primary absolute top-0 right-0 rounded-l-none">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </Fade>
      </div>

      <div className="text-gray-100 container mx-auto pt-5 pb-1">
        <h6 className="text-center">
          Copyright &copy; 2023 - {new Date().getFullYear()} - Develop by{" "}
          <a
            className="text-yellow-200"
            href="https://programming-dude.com/founder/"
            target="_blank"
            rel="noopener noreferrer">
            Programming-Dude
          </a>
        </h6>
      </div>
      {/* Back to Top */}
      {showBackToTop > 150 && (
        <button
          style={{ zIndex: "999" }}
          className="bg-red-600 inline fixed p-3 rounded-[50px] bottom-2 right-2">
          <a href="#backToTop">
            <img
              style={{ zIndex: "999" }}
              src="https://em-content.zobj.net/source/skype/289/rocket_1f680.png"
              alt=""
              className="w-12 h-12 rounded"
            />
          </a>
        </button>
      )}
    </section>
  );
};

export default FooterSection;
