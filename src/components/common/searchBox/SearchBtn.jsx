import { SearchIcon } from "../../../core/icon"

const SearchBtn = () => {
    return (
        <div className={`w-10 h-10 mx-[3px] bg-VioletBlue cursor-pointer rounded-full flex justify-center items-center
         rotate-[88deg] hover:shadow-lg hover:bg-blue-800  duration-250`}>
            <SearchIcon width="25px" />
        </div>
    )
}

export default SearchBtn