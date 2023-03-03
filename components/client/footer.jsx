import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-dark px-8 py-8 w-full flex justify-center">
      <div>
        <div className="flex justify-center">
          <h1 className="font-black text-2xl">Banyumas</h1>
        </div>
        <div className="pt-6 flex justify-center items-center space-x-4">
          <div className="border-white border rounded-full px-2 py-2 cursor-pointer hover:bg-orange hover:border-orange duration-300 ease-linear">
            <FaFacebookF size={14} />
          </div>
          <div className="border-white border rounded-full px-2 py-2 cursor-pointer hover:bg-orange hover:border-orange duration-300 ease-linear">
            <FaYoutube size={14} />
          </div>
          <div className="border-white border rounded-full px-2 py-2 cursor-pointer hover:bg-orange hover:border-orange duration-300 ease-linear">
            <FaInstagram size={14} />
          </div>
          <div className="border-white border rounded-full px-2 py-2 cursor-pointer hover:bg-orange hover:border-orange duration-300 ease-linear">
            <FaTwitter size={14} />
          </div>
        </div>
        <div className="pt-8 text-sm font-medium">
          <Link
            className="border-r-2 px-2 hover:text-orange border-white duration-150 ease-linear"
            href="/"
          >
            Kebijakan Privasi
          </Link>
          <Link
            className="border-r-2 px-2 hover:text-orange border-white duration-150 ease-linear"
            href="/"
          >
            Kebijakan Cookie
          </Link>
          <Link
            className="px-2 hover:text-orange duration-150 ease-linear"
            href="/"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
