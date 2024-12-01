import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full shadow-md z-10 bg-customPrimaryBlue text-white p-3">
    <div className="container mx-auto">
      <div className="flex justify-between">
        <Link href="/">
          <h1 className="text-2xl font-bold">Moalboal</h1>
        </Link>

        <ul className="flex justify-end items-center font-bold space-x-3 tracking-wide">
          <li className="hover:bg-customSecondaryBlue rounded-md p-2">
            <Link href="/home">Home</Link>
          </li>
          <li className="hover:bg-customSecondaryBlue rounded-md p-2">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:bg-customSecondaryBlue rounded-md p-2">
            <Link href="/attraction">Attractions</Link>
          </li>
          <li className="hover:bg-customSecondaryBlue rounded-md p-2">
            <Link href="/events">Events & Festival</Link>
          </li>
          <li className="hover:bg-customSecondaryBlue rounded-md p-2">
            <Link href="/">Food & Culture</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
  // <header className="fixed top-0 left-0 w-full shadow-md z-10 bg-customPrimaryBlue text-white p-3">
  //   <div className="container mx-auto">
  //     <div className="flex justify-between">
  //       <Link href="/">
  //         <h1 className="text-2xl font-bold">Moalboal</h1>
  //       </Link>

  //       <ul className="flex justify-end items-center font-bold space-x-3 tracking-wide">
  //         <li className="hover:bg-customSecondaryBlue rounded-md p-2">
  //           <Link href="/">Home</Link>
  //         </li>
  //         <li className="hover:bg-customSecondaryBlue rounded-md p-2">
  //           <Link href="/about">About</Link>
  //         </li>
  //         <li className="hover:bg-customSecondaryBlue rounded-md p-2">
  //           <Link href="/attraction">Attractions</Link>
  //         </li>
  //         <li className="hover:bg-customSecondaryBlue rounded-md p-2">
  //           <Link href="/events">Events & Festival</Link>
  //         </li>
  //         <li className="hover:bg-customSecondaryBlue rounded-md p-2">
  //           <Link href="/food">Food & Culture</Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </header>
  )
}

export default Header
