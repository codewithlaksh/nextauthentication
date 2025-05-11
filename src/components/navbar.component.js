import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from './ui/button'
import { LogOutIcon, MenuIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <>
      <nav className='flex items-center justify-between bg-background/60 backdrop-blur-md shadow px-6 py-4 sticky bottom-0'>
        <Link href="/" className='text-xl font-semibold'>NextAuthentication</Link>

        <ul className='hidden md:flex items-center space-x-6'>
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
            <Link href="/profile">My Profile</Link>
          </li>
          <li>
            <Button className="cursor-pointer mx-0"><LogOutIcon /> Logout</Button>
          </li>
        </ul>

        <Sheet>
          <SheetTrigger className="block md:hidden">
            <MenuIcon />
          </SheetTrigger>
          <SheetContent className="block md:hidden">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription className="hidden">Mobile Menu</SheetDescription>
            </SheetHeader>

            <ul className='space-y-6 px-4'>
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
                <Link href="/profile">My Profile</Link>
              </li>
              <li>
                <Button className="cursor-pointer mx-0"><LogOutIcon /> Logout</Button>
              </li>
            </ul>
          </SheetContent>
        </Sheet>

      </nav>
    </>
  )
}
