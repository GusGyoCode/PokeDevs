import {
  MdKeyboardArrowLeft,
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
  MdKeyboardArrowRight,
} from "react-icons/md"

const Pagination = ({
  currentPage,
  itemsPerPage,
  onPageChange,
}: {
  currentPage: number
  itemsPerPage: number
  onPageChange: any
}) => {
  const totalPages = itemsPerPage
  const maxPageNumbers = 5

  const handleClick = (page: number) => {
    onPageChange(page)
  }

  const handleFirstPageClick = () => {
    handleClick(1)
  }

  const handleLastPageClick = () => {
    handleClick(totalPages)
  }

  const renderPageNumbers = () => {
    const pageNumbers = []
    let startPage
    let endPage

    if (totalPages <= maxPageNumbers) {
      startPage = 1
      endPage = totalPages
    } else {
      if (currentPage <= Math.ceil(maxPageNumbers / 2)) {
        startPage = 1
        endPage = maxPageNumbers
      } else if (currentPage + Math.floor(maxPageNumbers / 2) >= totalPages) {
        startPage = totalPages - maxPageNumbers + 1
        endPage = totalPages
      } else {
        startPage = currentPage - Math.floor(maxPageNumbers / 2)
        endPage = currentPage + Math.ceil(maxPageNumbers / 2) - 1
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      pageNumbers.push(
        <button
          key={page}
          className={`mx-1 w-8 h-8 rounded-full text-sm sm:text-base ${
            page === currentPage
              ? "bg-blue-button text-white"
              : "dark:bg-gray-bg bg-gray-200"
          }`}
          onClick={() => {
            handleClick(page)
          }}
        >
          {page}
        </button>,
      )
    }

    return pageNumbers
  }

  return (
    <div className="flex justify-center my-4">
      <button
        className={`mx-1 px-2 py-1 rounded transition-all duration-300 ${
          currentPage === 1
            ? "bg-gray-200 cursor-not-allowed dark:bg-gray-bg"
            : "bg-blue-button text-white hover:bg-blue-500"
        }`}
        onClick={handleFirstPageClick}
        disabled={currentPage === 1}
      >
        <MdKeyboardArrowLeft className="sm:text-2xl" />
      </button>
      <button
        className={`mx-1 px-2 py-1 rounded transition-all duration-300 ${
          currentPage === 1
            ? "bg-gray-200 cursor-not-allowed dark:bg-gray-bg"
            : "bg-blue-button text-white hover:bg-blue-500"
        }`}
        onClick={() => {
          handleClick(currentPage - 1)
        }}
        disabled={currentPage === 1}
      >
        <MdKeyboardDoubleArrowLeft className="sm:text-2xl" />
      </button>
      {renderPageNumbers()}
      <button
        className={`mx-1 px-2 py-1 rounded transition-all duration-300 ${
          currentPage === totalPages
            ? "bg-gray-200 cursor-not-allowed dark:bg-gray-bg"
            : "bg-blue-button text-white hover:bg-blue-500"
        }`}
        onClick={() => {
          handleClick(currentPage + 1)
        }}
        disabled={currentPage === totalPages}
      >
        <MdKeyboardDoubleArrowRight className="sm:text-2xl" />
      </button>
      <button
        className={`mx-1 px-2 py-1 rounded transition-all duration-300 ${
          currentPage === totalPages
            ? "bg-gray-200 cursor-not-allowed dark:bg-gray-bg"
            : "bg-blue-button text-white hover:bg-blue-500"
        }`}
        onClick={handleLastPageClick}
        disabled={currentPage === totalPages}
      >
        <MdKeyboardArrowRight className="sm:text-2xl" />
      </button>
    </div>
  )
}

export default Pagination
