import { useState } from "react"
import Card from "../ui/Card"
import Grid from "../ui/Grid"
import Layout from "../ui/Layout"
import Pagination from "../ui/Pagination"
import Search from "../ui/Search"

export default function DashBoardComponent() {
  const [page, setPage] = useState(1)
  return (
    <Layout title="PokerDevs | Inicio">
      <div className="flex w-full flex-wrap">
        <div className="flex w-full mb-2 justify-between">
          <Search hidden={false} dashboard={true} />
        </div>
        <Grid>
          {new Array(10).fill(0).map((e, index) => (
            <Card key={index} />
          ))}
        </Grid>
        <div className="w-full flex justify-center mt-4">
          <Pagination
            currentPage={page}
            itemsPerPage={100}
            onPageChange={(e: any) => {
              setPage(e)
            }}
          />
        </div>
      </div>
    </Layout>
  )
}
