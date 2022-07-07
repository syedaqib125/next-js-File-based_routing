import { useRouter } from "next/router";

const PortfolioItemsPage = () => {
    const router = useRouter()
    console.log(router.pathname);
    console.log(router.query);
    return (
        <h1>Portfolio Items {router.query.id}</h1>
    )
}

export default PortfolioItemsPage;