import NoResultGridItems from "./NoResultGridItems"

const RenderItemsList = ({ isLoading, skeletonData, originalData, RenderComponent, isSuccess, isError, notFoundText, refetchData, ...props }) => {
    if (isLoading) {
        return skeletonData.map((item, index) => <RenderComponent key={index} item={item} loading={isLoading} {...props} />)
    }
    else if (originalData?.length == 0) {
        return <NoResultGridItems text={notFoundText} />
    }
    else if (isSuccess) {
        return originalData?.map((item, index) => <RenderComponent key={index} item={item} loading={isLoading} refetch={refetchData} {...props} />)
    } else if (isError) {
        return <NoResultGridItems text={notFoundText} />
    }
}

export default RenderItemsList
