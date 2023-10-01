import React, { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import CountDown from "../components/CountDown";

export default function Second() {
  const networks = [
    { id: 1, name: "TRX", subname: "RC20" },
    { id: 2, name: "BSC", subname: "BEP20(BSC)" },
    { id: 3, name: "ETH", subname: "ERC20" },
  ];

  const [selected, setSelected] = useState();
  const [query, setQuery] = useState("");

  const filteredNetwork =
    query === ""
      ? networks
      : networks.filter((network) =>
          network.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="pt-24">
      <div className="container mx-auto">
        <div className=" md:justify-start flex justify-between flex-row flex-wrap">
          <div className="sm:text-start text-4xl font-bold text-center">
            Limitted offer, for 6 hours only!
          </div>
          <div className="sm:text-start max-sm:w-full max-sm:m-0 text-4xl font-bold text-center ml-10">
            <CountDown />
          </div>
        </div>
        <div className="flex justify-center items-center mt-20">
          <div className="">
            <div className="block mb-14">
              <label
                htmlFor=""
                className="text-lg font-bold w-full text-lightblack"
              >
                Enter your wallet address that you wish to receive the BTC at
              </label>
              <input
                type="text"
                placeholder="wallet address"
                className="text-lg p-5 w-full border-2 border-gray-400 rounded-md focus:outline-none"
              />
            </div>
            <div className="block mb-14">
              <label
                htmlFor=""
                className="text-lg font-bold w-full text-lightblack"
              >
                Select Network
              </label>
              <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                  <div className="relative w-full cursor-default overflow-hidden rounded-md border-2 border-gray-400 bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                    <Combobox.Input
                      className="w-full border-none text-lg py-6 pl-4 pr-10 leading-5 text-gray-900 focus:ring-0 focus:outline-none"
                      displayValue={(selected) => selected.name}
                      placeholder="select network"
                      onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </Combobox.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    afterLeave={() => setQuery("")}
                  >
                    <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {filteredNetwork.length === 0 && query !== "" ? (
                        <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                          Nothing found.
                        </div>
                      ) : (
                        filteredNetwork.map((network) => (
                          <Combobox.Option
                            key={network.id}
                            className={({ active }) =>
                              `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                active
                                  ? "bg-teal-600 text-white"
                                  : "text-gray-900"
                              }`
                            }
                            value={network}
                          >
                            {({ selected, active }) => (
                              <>
                                <span
                                  className={`block truncate text-lg ${
                                    selected ? "font-bold" : "font-bold"
                                  }`}
                                >
                                  {network.name}
                                </span>
                                <span>{network.subname}</span>
                                {selected ? (
                                  <span
                                    className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                      active ? "text-white" : "text-teal-600"
                                    }`}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Combobox.Option>
                        ))
                      )}
                    </Combobox.Options>
                  </Transition>
                </div>
              </Combobox>
            </div>
            <div className="flex justify-center">
              <a
                href="third"
                className="px-7 py-2 bg-yellow-400 hover:bg-yellow-500 text-xl rounded-sm"
              >
                Continue
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
