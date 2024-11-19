import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-[#0f172a] flex flex-col py-10 px-5 text-gray-400">
      {/* Links Section */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-center md:items-start md:justify-between md:text-left">
        <div className="flex flex-col space-y-3 w-full md:w-64">
          <span className="font-semibold text-white">Product</span>
          <span>Pricing</span>
          <span>Overview</span>
          <span>Browse</span>
          <span>Accessibility</span>
          <span>Five</span>
        </div>
        <div className="flex flex-col space-y-3 w-full md:w-64">
          <span className="font-semibold text-white">Company</span>
          <span>About</span>
          <span>Careers</span>
          <span>Press</span>
          <span>Investors</span>
          <span>Partners</span>
        </div>
        <div className="flex flex-col space-y-3 w-full md:w-64">
          <span className="font-semibold text-white">Support</span>
          <span>Help Center</span>
          <span>Contact</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
        <div className="flex flex-col space-y-3 w-full md:w-64 items-center md:items-start">
          <span className="font-semibold text-white">Download</span>
          <img width={120} src="/appstore.png" alt="App Store" />
          <img width={120} src="/googleplay.png" alt="Google Play" />
          <div className="space-y-2 pt-4">
            <h2 className="font-semibold text-white">Follow us</h2>
            <div className="flex flex-row space-x-4 justify-center md:justify-start">
              <FaFacebook size={20} />
              <FaYoutube size={20} />
              <FaTwitter size={20} />
              <FaInstagram size={20} />
              <FaLinkedin size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center justify-center mt-10 border-t pt-6 border-t-gray-500 space-y-4 text-center md:flex-row md:justify-between md:items-center md:text-left md:space-y-0">
        <div>Collers @ 2023. All rights reserved.</div>
        <div className="flex space-x-4">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
          <span>Accessibility</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
