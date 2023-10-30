import { useState } from "react"
import Card from "../ui/Card"
import Grid from "../ui/Grid"
import Layout from "../ui/Layout"
import Pagination from "../ui/Pagination"
import Search from "../ui/Search"
import useFetch from "http-react"
import LoadingCard from "../ui/LoadingCard"
import tw from "twin.macro"
import Button from "../ui/Button"
import Alert from "../ui/Alert"
import CardComponent from "../ui/Card/component/CardComponent"
import { BsX } from "react-icons/bs"

const ErrorComponent = tw.div`flex w-full items-center gap-4 text-red-500 flex-col`
const Modal = tw.div`w-80 p-4 rounded-md bg-gray-300 dark:bg-gray-900`

export default function DashBoardComponent() {
  const [page, setPage] = useState(1)
  const [error, setError] = useState(false)
  const [viewModal, setViewModal] = useState(null)
  const { data, loading, reFetch } = useFetch(
    "https://pokeapi.co/api/v2/pokemon",
    {
      query: {
        limit: 10,
        offset: page === 1 ? 0 : (page - 1) * 10,
      },
      onError(err) {
        setError(err)
      },
    },
  )

  function Error({ click }) {
    return (
      <ErrorComponent>
        <h2 className="text-2xl">Error al cargar los pokemones</h2>
        <Button click={() => click}>Recargar</Button>
      </ErrorComponent>
    )
  }

  return (
    <Layout title="PokerDevs | Inicio">
      <div className="flex w-full flex-wrap">
        <div className="flex w-full mb-2 justify-between">
          <Search hidden={false} dashboard={true} />
        </div>
        {
          // eslint-disable-next-line
          error ? (
            <Error
              click={() => {
                // eslint-disable-next-line
                reFetch()
                setError(false)
              }}
            />
          ) : (
            <>
              <Grid>
                {loading
                  ? new Array(10)
                      .fill(0)
                      .map((e, index) => <LoadingCard key={index} />)
                  : data.results.map((e) => (
                      <Card
                        key={e.name}
                        url={e.url}
                        click={(e) => {
                          setViewModal(e)
                        }}
                      />
                    ))}
              </Grid>
              <div className="w-full flex justify-center mt-4">
                <Pagination
                  currentPage={page}
                  // eslint-disable-next-line
                  itemsPerPage={data ? parseInt(data.count / 10) + 1 : 1}
                  onPageChange={(e) => {
                    setPage(e)
                  }}
                />
              </div>
            </>
          )
        }
      </div>
      {Boolean(viewModal) && (
        <Alert>
          <Modal>
            <div className="flex w-full justify-end mb-2">
              <BsX
                className="text-2xl cursor-pointer"
                onClick={() => {
                  setViewModal(null)
                }}
              />
            </div>
            <CardComponent data={viewModal} />
          </Modal>
        </Alert>
      )}
    </Layout>
  )
}
