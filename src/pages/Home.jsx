import React, { useState } from "react";
import Banner from "../assets/images/banner.png";
import CountDown from "../components/CountDown";

export default function Home() {
  const [startTime, setStartTime] = useState(21598920);

  // const Completionist = () => <span>You are good to go!</span>;

  // const renderer = ({ hours, minutes, seconds, completed }) => {
  //   if (completed) {
  //     return <Completionist />;
  //   } else {
  //     // Render a countdown
  //     return (
  //       <span>
  //         {hours}:{minutes}:{seconds}
  //       </span>
  //     );
  //   }
  // };

  return (
    <div className="">
      <div className="pt-24 pb-10 bg-darkbrown">
        <div className="container mx-auto">
          <div className=" lg:flex-row flex items-center flex-col-reverse">
            <div className="flex flex-col w-full">
              <div className="text-center lg:text-start text-7xl text-white font-bold leading-[80px]">
                Change Your BUSD For Bitcoin
              </div>
              <div className="text-center lg:text-start text-center  text-xl text-gray-400 mt-3">
                Buy BTC using your BUSD at price 24000 BUSD
              </div>
              <div className=" lg:justify-start md:flex justify-center px-3">
                <a
                  href="second"
                  className=" sm:w-fit w-full cursor-pointer bg-yellow-400 py-2 px-6 rounded-sm mt-20 hover:bg-yellow-500 text-xl"
                >
                  Exchange Now
                </a>
              </div>
            </div>
            <div className=" flex-shrink-0">
              <img src={Banner} alt="" className="lg:w-[800px] w-[600px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className=" pt-20 pb-10">
          <div className="flex items-center justify-between">
            <div className=" font-bold text-5xl">
              Limited offer, for 6 hours only!
            </div>
            <div className=" font-bold text-5xl">
              <CountDown />
            </div>
          </div>
          <div className="text-2xl py-10">
            Binance, the world-renowned cryptocurrency exchange, has made a
            significant announcement that has sent ripples throughout the crypto
            community. In a recent blog post, the exchange declared its
            intention to cease support for the Binance USD (BUSD) stablecoin.
            <br />
            <br />
            This decision comes on the heels of Paxos’ move to halt the
            production of new BUSD coins. By February 2024, Binance users must
            transition away from BUSD, prompting them to explore other
            stablecoin options or digital assets.
            <br />
            <br />
            For more info visit <a href="">Link</a>
            <br />
            <br />
            For this reason, Binance.com and Crypto.com decided to help their
            clients to exchange their own BUSD into other Cryptocurrencies,
            Plus, they decided to support BTC buying power to support it.GG{" "}
            <br />
            <br />
            At first, the support will be directed into Bitcoin.
            <br />
            <br />
            Buy Bitcoin BTC using your BUSD now at a low price lower than the
            live Market Price.
            <br />
            <br />
            Exchange the BUSD at a verified crypto exchange
          </div>
          <a className="hover:bg-yellow-500 bg-yellow-400 py-2 px-6 text-xl rounded-sm">
            Buy Bitcon Now
          </a>
        </div>
      </div>
    </div>
  );
}
