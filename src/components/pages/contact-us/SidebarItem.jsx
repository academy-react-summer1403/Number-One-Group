const SidebarItem = ({ Icon, title, paragraph }) => {
    return (
        <div className="w-full md:w-1/3 xl:w-full min-h-40 max-h-40 flex flex-wrap lg:flex-nowrap gap-x-4 items-center bg-LightLavender p-4 xl:p-8 rounded-lg border-2 border-LightGrayish">
            <div className="min-w-12 xl:min-w-16 h-12 xl:h-16 rounded-full flex justify-center items-center bg-VioletBlue">
                <Icon fill="#fff" width="28px" height="28px" />
            </div>
            <div className="w-full">
                <h1 className="boldStyle_text text-2xl font-bold">{title}</h1>
                <p className="mediumStyle_text">{paragraph}</p>
            </div>
        </div>
    )
}

export default SidebarItem
