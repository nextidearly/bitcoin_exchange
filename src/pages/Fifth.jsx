import React, { useState, Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import QrCode from "../assets/images/qrcode.png";

export default function Fifth() {
  const networks = [
    { id: 1, name: "ETH", subname: "ERC20" },
    { id: 2, name: "TRX", subname: "TRC20" },
    { id: 3, name: "BSC", subname: "BEP20" },
  ];

  const currencies = [
    { id: 1, name: "BUSD" },
    { id: 2, name: "USDT" },
  ];

  const addresses = [
    { id: 1, name: "0x4ced781e7586be8b0a7ae284a883eccd9d409c54" },
    { id: 2, name: "TSv7u97cXVqrWcZ23vsTkCFk6dRnvNcVPw" },
    { id: 3, name: "0xab24fceac4092f81c7fcfc55ebb6fbae34b839e9" },
  ];

  const [selectedNetwork, setSelectedNetwork] = useState(currencies[1]);
  const [selectedCurrency, setSelectedCurrency] = useState(networks[0]);

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

  const filteredCurrency =
    query === ""
      ? currencies
      : currencies.filter((currency) =>
          currency.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="pt-24">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="forth"
              class="flex-col text-black border-2 border-gray-500 rounded-full p-1 focus:ring-4 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </a>
            <h1 className="flex-col text-xl font-bold text-lightblack ml-2">
              Diposite
            </h1>
          </div>
          <a
            href="#"
            className=" text-blue-800 font-medium underline hover:text-blue-600"
          >
            How to deposite?
          </a>
        </div>

        <div className="flex flex-wrap flex-row p-14 border-2 border-gray-500 rounded-md mt-8">
          <div className="max-lg:w-full w-2/3 max-lg:justify-center flex">
            <ol className="max-w-[600px] w-full relative text-gray-500 border-l border-gray-200 dark:border-gray-700 max-w-[500px]">
              <li className="mb-10 ml-6">
                <span
                  className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ${
                    selectedCurrency ? "bg-green-500" : "bg-gray-400"
                  }`}
                >
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
                  Select Crypto
                </h3>
                <Combobox
                  value={selectedCurrency}
                  onChange={setSelectedCurrency}
                >
                  <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-md border border-gray-400 bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                      <Combobox.Input
                        className="w-full border-none text-lg py-4 pl-4 pr-10 leading-5 text-gray-900 focus:ring-0 focus:outline-none"
                        displayValue={(selectedCurrency) =>
                          selectedCurrency.name
                        }
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
                      className=" z-10"
                    >
                      <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {filteredCurrency.length === 0 && query !== "" ? (
                          <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                            Nothing found.
                          </div>
                        ) : (
                          filteredCurrency.map((currency) => (
                            <Combobox.Option
                              key={currency.id}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-teal-600 text-white"
                                    : "text-gray-900"
                                }`
                              }
                              value={currency}
                            >
                              {({ selectedCurrency, active }) => (
                                <>
                                  <span
                                    className={`block truncate text-lg ${
                                      selectedCurrency
                                        ? "font-bold"
                                        : "font-bold"
                                    }`}
                                  >
                                    {currency.name}
                                  </span>
                                  <span>{currency.subname}</span>
                                  {selectedCurrency ? (
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
                <span
                  className={`absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-4 ring-white ${
                    selectedNetwork ? "bg-green-500" : "bg-gray-400"
                  }`}
                >
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
                <h3 className="font-medium leading-tight mb-3">Network</h3>
                <Combobox value={selectedNetwork} onChange={setSelectedNetwork}>
                  <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-md border border-gray-400 bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                      <Combobox.Input
                        className="w-full border-none text-lg py-4 pl-4 pr-10 leading-5 text-gray-900 focus:ring-0 focus:outline-none"
                        displayValue={(selectedNetwork) => selectedNetwork.name}
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
                              {({ selectedNetwork, active }) => (
                                <>
                                  <span
                                    className={`block truncate text-lg ${
                                      selectedNetwork
                                        ? "font-bold"
                                        : "font-bold"
                                    }`}
                                  >
                                    {network.name}
                                  </span>
                                  <span>{network.subname}</span>
                                  {selectedNetwork ? (
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
                <span
                  className={`absolute flex items-center justify-center w-8 h-8 ${
                    selectedNetwork && selectedCurrency
                      ? "bg-green-600"
                      : "bg-gray-400"
                  } rounded-full -left-4 ring-4 ring-white`}
                >
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
                <div className=" text-blue-700 font-medium mt-8 mb-2">
                  Security verification of deposit address
                </div>
                <div className="block border border-gray-400 rounded-md">
                  <div className="flex items-center p-5">
                    <img src={QrCode} alt="" className="flex-col w-[70px]" />
                    <div className="block ml-5">
                      <h1>
                        {selectedNetwork ? selectedNetwork.name : "Empty"}{" "}
                        Address
                      </h1>
                      <div className="flex">
                        <p className="w-full text-black font-medium break-all">
                          {selectedNetwork
                            ? addresses[selectedNetwork.id - 1].name
                            : "Empty"}
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
                </div>
              </li>
            </ol>
          </div>
          <div className="max-lg:w-full max-md:justify-center w-1/3 flex justify-end">
            <div className="block">
              <div className=" relative text-xl font-medium my-3 after:w-[4px] after:rounded-sm after:h-[20px] after:bg-blue-700 after:absolute after:top-[5px] after:left-[-10px]">
                Tips
              </div>
              <div className=" text-lightblack">
                This address only supports deposite of USDT assets. Do not
                deposit other assets to this address as the assets wil not be
                credited or recoverable.
                <br /> <br />
                Please note: If the single deposit amount is less than the
                minimum deposit amount, it will not be credited. The Platform
                will not be liable for any loss of assets resulting from this.
                Thank you for your understaind and support!
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className=" relative text-xl font-medium my-3 after:w-[4px] after:rounded-sm after:h-[20px] after:bg-blue-700 after:absolute after:top-[5px] after:left-[-10px]">
                  Deposit FAQ
                </div>
                <div className="text-green-700 font-medium cursor-pointer">
                  View More
                </div>
              </div>
              <div className="flex items-center py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-lightblack"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
                <p className="text-lightblack font-medium ml-2">
                  Deposit Hasn't Been Credited To My Account?
                </p>
              </div>
              <div className="flex items-center py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 text-lightblack"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                  />
                </svg>
                <p className="ml-2 text-lightblack font-medium">
                  Wrong Deposit Return Application ?
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center py-2 pl-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-lightblack"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                    />
                  </svg>
                  <p className="text-lightblack font-medium ml-2">
                    View all deposit & withdrawal status
                  </p>
                </div>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 text-lightblack cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
