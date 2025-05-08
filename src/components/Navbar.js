"use client"
import React, { useState } from "react";
import Link from "next/link";
import { MdMenu, MdOutlineClose } from "react-icons/md";

export default function Navbar() {
    const [show, setShow] = useState(false);

    return (
        <nav className="block md:flex items-center justify-between p-4 bg-white/60 backdrop-blur-md shadow sticky top-0">
            <div className="flex items-center justify-between">
                <Link href="/" className="text-2xl md:text-xl font-semibold">NextAuthentication</Link>

                <button className="block md:hidden px-2 py-2 bg-black text-white rounded"
                    onClick={() => setShow(!show)}
                >
                    {show ? <MdOutlineClose /> : <MdMenu />}
                </button>
            </div>

            <ul className={`${show ? "block" : "hidden"} md:flex items-start md:items-center space-y-8 space-x-0 md:space-x-6 md:space-y-0 mt-6 md:mt-0`}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">About</Link>
                </li>
                <li>
                    <Link href="/">Contact</Link>
                </li>
                <li>
                    <Link href="/logout" className="px-3 py-2 rounded bg-black text-white">Logout</Link>
                </li>
            </ul>
        </nav >
    )
}