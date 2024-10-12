import ReactPaginate from 'react-paginate';
import { calculatePageCount } from './PaginateFunctions';
import { useDispatch } from 'react-redux';

function PaginatedItems({ children, currentData, currentDataInOnePage, setPage }) {
    const dispatch = useDispatch()

    // Create buttons
    const pageCount = calculatePageCount(currentData, currentDataInOnePage);
    // Selected button
    const handlePageChange = (event) => {
        dispatch(setPage(++event.selected));
        window.scrollTo({ top: 0, behavior: "smooth" })
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