
import { useRouter } from "next/router"; 
import React from 'react';
function Tickets({astro} : any) {
const [astroQueryParam, setAstroQueryParam] = React.useState({
   
})
    const router = useRouter();

    const changeRoute = () => {
        console.log("clicked")
        router.push({
            pathname: router.pathname,
            query: astroQueryParam
        })
    }
    return(
        <>
    Tickets
     
   </>
    )
}

export default Tickets;

// export async function getServerSideProps(context: any) {
//     console.log(context)
//     const res = await fetch(
//         `apipath`
//         )
//     const data = await res.json();
//     return { props: { data: data } }
//   }