

function Page (
    {params}:{
        params: {id: string}
    }
    ) {
   
   
    return <h1>Ticket Detail {params.id}</h1>
}

export default Page;