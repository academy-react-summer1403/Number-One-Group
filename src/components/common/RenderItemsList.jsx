import NotFound_Pic from "./NotFound_Pic"

const RenderItemsList = ({ isLoading, skeletonData, originalData, RenderComponent, isSuccess, isError, notFoundText, refetchData }) => {
    if (isLoading) {
        return skeletonData.map((item, index) => <RenderComponent key={index} item={item} isLoading={isLoading} />)
    }
    else if (originalData?.length == 0) {
        return <NotFound_Pic text={notFoundText} />
    }
    else if (isSuccess) {
        return originalData?.map((item, index) => <RenderComponent key={index} item={item} isLoading={isLoading} refetch={refetchData} />)
    } else if (isError) {
        return <NotFound_Pic text={notFoundText} />
    }
}

export default RenderItemsList
