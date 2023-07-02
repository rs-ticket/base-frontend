import { useRouter } from "next/router";

function AstroDetails () {
    const router = useRouter();
    console.log("query", router.query)
    const ticket = router.query.ticket;
    return <h1>Ticket Detail {ticket}</h1>
}

export default AstroDetails;