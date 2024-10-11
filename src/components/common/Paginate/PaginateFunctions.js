export const handlePageClick = (event, numberOfItem, setItemOffset, data) => {
  console.log(event)
  const newOffset = (event.selected * numberOfItem) % data;
  setItemOffset(newOffset);
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const calculatePageCount = (dataLength, numberOfItem) => {
  console.log(numberOfItem)
  const pageCount = Math.ceil(dataLength / numberOfItem);
  return pageCount;
};
