import Card from "../ui/Card"
import Grid from "../ui/Grid"
import Layout from "../ui/Layout"

export default function DashBoardComponent() {
  return (
    <Layout title="PokerDevs | Inicio">
      <Grid>
        {new Array(10).fill(0).map((e, index) => (
          <Card key={index} />
        ))}
      </Grid>
    </Layout>
  )
}
