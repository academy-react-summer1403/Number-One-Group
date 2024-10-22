import { useLocation } from "react-router-dom";
import { selectItems_FA } from "../../../core/constants/sort";
import { SearchIcon } from "../../../core/icon"

const SearchBtn = () => {
    const location = useLocation();
    const pageSearch = selectItems_FA.find(el => el.path == location.pathname);

    return (
        <div className={`w-10 h-10 mx-[3px] bg-VioletBlue cursor-pointer rounded-full flex justify-center items-center
         rotate-[88deg] hover:shadow-lg hover:bg-blue-800  duration-250 ${pageSearch ? "hidden" : ""}`}>
            <SearchIcon width="25px" />
        </div>
    )
}

export default SearchBtn