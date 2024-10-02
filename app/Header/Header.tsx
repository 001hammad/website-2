import Link from "next/link"
export const Header = () => {
    return(
        <header className="bg-pink-300 text-black p-2">
            <nav className="container flex mx-auto justify-between">
                <div>
                    <Link href="/" ><img src="https://img.freepik.com/free-vector/donut-strawberry-cream-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-flat_138676-10048.jpg?size=626&ext=jpg" alt="logo" className="rounded-lg animate-bounce" width={30} /></Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="/" className="hover:underline">Home</Link>
                </div>
                <div className="space-x-4">
                    <Link href="/" className="hover:underline">About</Link>
                </div>
                <div>
                    <Link href="/" className="hover:underline">Contact</Link>
                </div>
                <div>
                    <Link href="/Variety" className="hover:underline">Variety</Link>
                </div>
                
            </nav>
        </header>
    )
}