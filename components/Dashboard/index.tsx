import Card from "../ui/Card"
import Grid from "../ui/Grid"
import Layout from "../ui/Layout"
import Search from "../ui/Search"

export default function DashBoardComponent() {
  return (
    <Layout title="PokerDevs | Inicio">
      <div className="flex w-full flex-wrap">
        <Search hidden={false} />
        <Grid>
          {new Array(10).fill(0).map((e, index) => (
            <Card key={index} />
          ))}
        </Grid>
      </div>
    </Layout>
  )
}
