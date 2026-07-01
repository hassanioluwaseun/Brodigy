import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function PageNavigation({
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  return (
    <div className="page-navigation">

      {currentPage > 0 && (
        <button
          className="hero-btn"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <BsArrowLeft />
        </button>
      )}

      {currentPage < totalPages - 1 && (
        <button
          className="hero-btn"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <BsArrowRight />
        </button>
      )}

    </div>
  );
}

export default PageNavigation;