import { useState } from "react";
import { Affix } from "antd";

const Filter = ({ sortRank, sortName }) => {
  const [hiddenFilter, setHiddenFilter] = useState(true);
  return (
    <Affix offsetTop={0}>
      <div className="relative z-10 flex items-baseline justify-between pt-12 pb-6 border-b border-gray-200 bg-white">
        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
          New Arrivals
        </h2>

        <div className="flex items-center">
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                id="menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={() => {
                  setHiddenFilter(!hiddenFilter);
                }}
              >
                Sort
                <svg
                  className={`flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500 ${
                    hiddenFilter ? "" : "rotate-180"
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div
              className={`${
                hiddenFilter ? "hidden" : ""
              } origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <p
                  className="text-gray-500 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                  onClick={() => {
                    sortName(false);
                    setHiddenFilter(true);
                  }}
                >
                  Name: A to Z
                </p>

                <p
                  className="text-gray-500 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                  onClick={() => {
                    sortName(true);
                    setHiddenFilter(true);
                  }}
                >
                  Name: Z to A
                </p>

                <p
                  className="text-gray-500 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-3"
                  onClick={() => {
                    sortRank(true);
                    setHiddenFilter(true);
                  }}
                >
                  Rank: Low to High
                </p>

                <p
                  className="text-gray-500 block px-4 py-2 text-sm cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-4"
                  onClick={() => {
                    sortRank(false);
                    setHiddenFilter(true);
                  }}
                >
                  Rank: High to Low
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Affix>
  );
};

export default Filter;
