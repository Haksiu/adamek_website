import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="h-screen flex flex-col items-center justify-center text-center overflow-auto"
    >
      <div>
        <div className="flex items-center justify-center z-10 p-2 mt-20">
          <Image
            src="/assets/avatar.jpg"
            width={250}
            height={250}
            className="hover:scale-[1.12] transition-all duration-[350ms] ease-in-out rounded-full overflow-hidden shadow-lg border-[6px] border-[#121212]"
          />
        </div>
        <div className="py-2 px-4 font-semibold tracking-wide">
          <span className="text-gray-200 font-light md:text-[20px] text-[18px] tracking-widest">
            Strona poświęcona streamerowi{" "}
            <span className="text-[#9146FF] font-semibold hover:underline">
              <Link href="https://www.twitch.tv/adamekl">AdameK</Link>
            </span>
          </span>
        </div>
        <div className="md:grid md:grid-cols-2 md:text-left gap-3 flex justify-start items-center flex-col">
          <Link
            href="https://twitch.tv/adamekl"
            className="text-[#9146FF]"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/twitch.png"
              width={30}
              height={30}
              className="inline mx-2"
              alt="twitch adamka"
              title="twitch adamka"
              target="_blank"
              rel="noreferrer"
            />
            <span className="font-semibold">Twitch</span>{" "}
            <span className="text-white">Adamka</span>
          </Link>
          <Link
            href="https://www.youtube.com/c/AdameKl"
            className="text-[#FF0000]"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/AdamekYT.png"
              width={32}
              height={32}
              className="inline mx-2"
              alt="twitch adamka"
              title="twitch adamka"
            />
            <span className="font-semibold">YouTube</span>{" "}
            <span className="text-white">Adamka</span>
          </Link>
          <Link
            href="https://www.tiktok.com/@rakawarte"
            className="text-[#ff0050]"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/TikTok_RakaWarte.png"
              width={32}
              height={32}
              className="inline mx-2"
              alt="twitch adamka"
              title="twitch adamka"
            />
            <span className="font-semibold">TikTok</span>{" "}
            <span className="text-white">@RakaWarte</span>
          </Link>
          <Link
            href="https://www.tiktok.com/@adamek_shoty"
            className="text-[#ff0050]"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/TikTok_TwitchShoty.png"
              width={32}
              height={32}
              className="inline mx-2"
              alt="twitch adamka"
              title="twitch adamka"
            />
            <span className="font-semibold">TikTok</span>{" "}
            <span className="text-white">@TwitchShoty</span>
          </Link>
          <Link
            href="https://www.instagram.com/adamekig/"
            className="text-[#C13584]"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/Instagram_Adamek.png"
              width={30}
              height={30}
              className="inline mx-2"
              alt="twitch adamka"
              title="twitch adamka"
            />
            <span className="font-semibold">Instagram</span>{" "}
            <span className="text-white">Adamka</span>
          </Link>
          <Link
            href="https://www.youtube.com/c/AdameKVOD"
            className="text-[#FF0000]"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/AdamekVODYT.png"
              width={32}
              height={32}
              className="inline mx-2"
              alt="twitch adamka"
              title="twitch adamka"
            />
            <span className="font-semibold">YouTube</span>{" "}
            <span className="text-white">VOD Adamka</span>
          </Link>
          <Link
            href="https://onlyfans.com/ladamekl"
            className="text-[#9146FF]"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/OF_Adamek.png"
              width={32}
              height={32}
              className="inline mx-2"
              alt="twitch adamka"
              title="twitch adamka"
            />
            <span className="font-semibold">OnlyFans</span>{" "}
            <span className="text-white">Adamka</span>
          </Link>
          <Link
            href="https://discord.com/invite/U396kj8YvP"
            className="text-[#9146FF]"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/assets/Discord_Adamek.png"
              width={32}
              height={32}
              className="inline mx-2"
              alt="twitch adamka"
              title="twitch adamka"
            />
            <span className="font-semibold">Discord</span>{" "}
            <span className="text-white">Adamka</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
