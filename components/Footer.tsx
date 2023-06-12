import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-900">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="/logo.svg" alt="logo" width={118} height={18} />
          <p className="text-base text-gray-700">
            Carhub 20232 <br />
            Allright reserved &copy
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((list: any) => (
            <div key={list.title} className="footer__link">
              <h3 className="font-bold">{list.title}</h3>
              {list.links.map((items: any) => (
                <Link
                  key={items.title}
                  href={items.url}
                  className="text-gray-500"
                >
                  {items.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-900 sm:px-16  px-6 py-10">
        <p>@2023 CarHub. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Police
          </Link>
          <Link href="/" className="text-gray-500">
            Term of use
          </Link>
        </div>
      </div>
    </footer>
  );
}
