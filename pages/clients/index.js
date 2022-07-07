import Link from "next/link";

const CLientsPage = () => {
    let clients = [{ id: "max", name: "Maximillian" }, { id: "manu", name: "Manuel" }]
    return (
        <>
            <h1>Clients Page</h1>
            <ul>
                {
                    clients.map((client) => {
                        return <li key={client.id}>
                            {/* <Link href={`clients/${client.id}`}>{client.name}</Link> */}
                            <Link href={{
                                pathname: "clients/[id]",
                                query: { id: client.id }
                            }}>{client.name}</Link>
                        </li>
                    })
                }
            </ul>
        </>
    )
}

export default CLientsPage;