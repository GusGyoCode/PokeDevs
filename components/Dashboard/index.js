import { useState } from "react"
import Card from "../ui/Card"
import Grid from "../ui/Grid"
import Layout from "../ui/Layout"
import Pagination from "../ui/Pagination"
import Search from "../ui/Search"
import useFetch from "http-react"
import LoadingCard from "../ui/LoadingCard"

export default function DashBoardComponent() {
  const [page, setPage] = useState(1)
  const { data, loading } = useFetch("https://pokeapi.co/api/v2/pokemon", {
    query: {
      limit: 10,
      offset: page * 10,
    },
    onResolve(data) {
      console.log(data)
    },
  })

  return (
    <Layout title="PokerDevs | Inicio">
      <div className="flex w-full flex-wrap">
        <div className="flex w-full mb-2 justify-between">
          <Search hidden={false} dashboard={true} />
        </div>
        <Grid>
          {loading
            ? new Array(10)
                .fill(0)
                .map((e, index) => <LoadingCard key={index} />)
            : data.results.map((e) => <Card key={e.name} url={e.url} />)}
        </Grid>
        <div className="w-full flex justify-center mt-4">
          <Pagination
            currentPage={page}
            // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
            itemsPerPage={data ? parseInt(data.count / 10) : 1}
            onPageChange={(e) => {
              setPage(e)
            }}
          />
        </div>
      </div>
    </Layout>
  )
}
