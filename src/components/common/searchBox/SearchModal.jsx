import SearchInput from "./SearchInput"

const SearchModal = ({visible, setVisible}) => {
    return visible && (
        <>
            <div onClick={() => { setVisible(false) }} style={{ opacity: visible ? "1" : "0", visibility: visible ? "visible" : "hidden", }} className={`hover:cursor-pointer w-full duration-250 h-svh fixed top-0 right-0 bg-black/55 z-[9999]`}></div>
            <div className="!w-[95%] sm:!w-[80%] lg:!w-[50%] flex flex-wrap gap-y-8 fixed top-[110px] left-[50%] translate-x-[-50%] z-[9999]">
                <SearchInput
                    maxResponsiveValue="0"
                    minResponsiveValue="0"
                    holderStyle="w-full Box-shadow2 bg-MainBg"
                />
                <div className="w-full min-h-40 max-h-96 rounded-xl bg-MainBg flex justify-center items-center">
                    <span className="mediumStyle_text">موردی یافت نشد!</span>
                </div>
            </div>
        </>
    )
}

export default SearchModal
