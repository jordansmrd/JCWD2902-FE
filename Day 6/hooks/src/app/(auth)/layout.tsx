/** @format */

import { Metadata } from "next";
import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "ini auth",
  description: "Generated by create next app",
};

export default function template({ children }: Props) {
  return (
    <div className="flex flex-col mt-10 ">
      <Link href={"/"} className=" font-bold text-2xl w-full text-center">
        Main
      </Link>
      {children}
    </div>
  );
}