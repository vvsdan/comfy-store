import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = { pageNumer, activeClass } => {
    return  <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                activeClass ? "bg-base-300 border-base-300" : ""
              }`}
            >
              {pageNumber}
            </button>
  }

  if (pageCount < 2) return null;
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          Prev
        </button>
        {pages.map((pageNumber) => {
          return (
           
          );
        })}
        <button
          className="btn btn-xs sm:btn-md join-item"
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
  return <div>PaginationContainer</div>;
};
export default PaginationContainer;
