"use client";
/**
 * you have to use client directive when working with dom manipulation like button events, input events etc. ,and using hooks
 * otherwise nextJs will treat that component as a server component and use client directive declaration will always be in the first line of component
 * and all the child component will inherit thi use client directive no need to declare in those component
 * When using only Link component you can omit use client if there is no dom manipulation.
 * page.js is the default file name that you have to give to a file inside nextjs
 * folder name of the file will define the route
 * difference between Linking and navigating to a page is that Link don't affect the website at all wherease navigation affects the website
 * that's why when using navigation we need to write 'use client' directive
 */
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <main>
      <h1>Home Page</h1>
      <Link href="/login">Link to Login</Link>
      <br></br>

      <Link href="/about">Link to About</Link>
      <br></br>
      <Link href="/productlist">Link to Product List</Link>

      <br></br>
      <button onClick={() => router.push("/login")}>
        Click me to navigate to login
      </button>
      <br></br>

      <button onClick={() => router.push("/about")}>
        Click me to navigate to about
      </button>
    </main>
  );
}
