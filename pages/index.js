import Link from "next/link";

const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link href={"/portfolio"}>Portfolio</Link>
                </li>
                <li>
                    <Link replace href={"/clients"}>Clients</Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage;