import Link from "next/link";


export const NavBar = () => {

    return (
        <>
            <div className="bg-sky-900 text-white flex justify-between py-5 px-20">
                <h1 className="font-bold text-xl">
                    <Link href="/">Leonardo Guerrero</Link>
                </h1>

                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </>
    )

};