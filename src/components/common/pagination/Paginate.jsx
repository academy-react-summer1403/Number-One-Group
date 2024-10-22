import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

function PaginatedItems({ children, currentData, currentDataInOnePage, setPage, setState }) {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams();


    // Create buttons
    const pageCount = Math.ceil(currentData / currentDataInOnePage);

    // Selected button
    const handlePageChange = (event) => {
        if (setPage) {
            dispatch(setPage(++event.selected));
            searchParams.set("pageNumber", event.selected)
            setSearchParams(searchParams);
        } else {
            const newOffset = (event.selected * currentDataInOnePage) % currentData;
            setState(newOffset);
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
            {children}
            <ReactPaginate
                className="flex flex-wrap gap-3 justify-center items-end sm:my-10 my-6"
                breakLabel="..."
                onPageChange={(event) => { handlePageChange(event) }}
                nextLabel=""
                previousLabel=""
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                activeLinkClassName='!bg-VioletBlue text-white'
                pageLinkClassName="bg-slate-300 !px-5 !py-2.5 text-[#161439] rounded-full bg-red-500 text-center text-lg"
            />
        </>
    );
}

export default PaginatedItems;