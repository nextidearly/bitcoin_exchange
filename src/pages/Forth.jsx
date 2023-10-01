import React, { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import QrCode from "../assets/images/qrcode.png";
import CountDown from "../components/CountDown";

export default function Forth() {
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
        <div className="flex justify-center mt-16">
          <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 max-w-[500px]">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 rounded-full -left-4 ring-4 ring-white">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
              <h3 className="font-medium leading-tight mb-3">
                Enter your wallet address that you wish to receive the BTC at
              </h3>
              <input
                type="text"
                placeholder="wallet address"
                className="text-lg p-4 w-full border-2 border-gray-400 rounded-md focus:outline-none"
              />
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full -left-4 ring-4 ring-white">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
              <h3 className="font-medium leading-tight mb-3">Select network</h3>
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
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-500 rounded-full -left-4 ring-4 ring-white">
                <svg
                  className="w-3.5 h-3.5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 12"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5.917 5.724 10.5 15 1.5"
                  />
                </svg>
              </span>
              <h3 className="font-medium leading-tight mb-3">
                Deposit Address
              </h3>
              <div className="block border-2 border-gray-400 rounded-md">
                <div className="flex items-center p-5 border-b-2 border-gray-400">
                  <img src={QrCode} alt="" className="flex-col w-[70px]" />
                  <div className="block ml-5">
                    <h1>ERC20 Address</h1>
                    <div className="flex">
                      <p className="w-full text-black font-medium">
                        0x4ced781e7586be8b0a7ae284a883ecc
                        <br />
                        d9d409c54
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 cursor-pointer"
                      >
                        <path d="M7.5 3.375c0-1.036.84-1.875 1.875-1.875h.375a3.75 3.75 0 013.75 3.75v1.875C13.5 8.161 14.34 9 15.375 9h1.875A3.75 3.75 0 0121 12.75v3.375C21 17.16 20.16 18 19.125 18h-9.75A1.875 1.875 0 017.5 16.125V3.375z" />
                        <path d="M15 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0017.25 7.5h-1.875A.375.375 0 0115 7.125V5.25zM4.875 6H6v10.125A3.375 3.375 0 009.375 19.5H16.5v1.125c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V7.875C3 6.839 3.84 6 4.875 6z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="block p-5">
                  <div className="flex items-center justify-between">
                    <h1>Minimum deposit amount</h1>
                    <p className="text-black font-medium">0.001 BUSD</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <h1>Expected Arrival</h1>
                    <p className="text-black font-medium">
                      64 network confirmation
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <h1>Contract address</h1>
                    <p className="text-black font-medium">
                      Ending with{" "}
                      <a href="" className=" text-blue-700 underline">
                        c7c53
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
