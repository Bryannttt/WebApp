import Link from "next/link";

export default function Header(){
    return(
    <div className="w-full absolute z-10 bg-black">
        <nav className="container relative flex items-center justify-between mx-auto p-4 text-white">
            <div className="text-xl>">
                <Link className="font bold mr-4" href="/projects">Projects</Link>
                <Link className="font bold mr-4" href="/">Logs</Link>
                <Link className="font bold mr-4" href="https://www.google.com/">Spectrum</Link>
            </div>
        </nav>
    </div>
    )
}