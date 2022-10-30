import React from "react";

const Header = (props) => {
  const { title, isLoggedIn } = props;

  return (
    <header>
      <nav className="bg-white drop-shadow px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between">
          <a href="/" className="flex items-center">
            <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt={title} />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
              {title}
            </span>
          </a>
          {isLoggedIn && (
            <div className="flex items-center lg:order-2">
              <a
                href="logout"
                className="text-black hover:bg-gray-50 hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log out
              </a>
            </div>
          )}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"></ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
