import React from "react";

const Footer = () => {
  return (
    <div className="h-[20px] flex w-max text-white items-center justify-center text-[14px]">
      <footer className="block">
        <p>
          &copy; Website created by:{" "}
          <a href="https://haksiu.pages.dev" target="_blank">
            Haksiu
          </a>{" "}
          2022 - {new Date().getFullYear()} {/* PLEASE DON'T CHANGE */}
        </p>
      </footer>
    </div>
  );
};

export default Footer;
