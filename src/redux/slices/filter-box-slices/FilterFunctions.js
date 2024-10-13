export function setPageNumber(state, action) {
  state.PageNumber = action.payload;
}

export function setRowsOfPage(state, action) {
  state.RowsOfPage = action.payload;
}

export function setQuery(state, action) {
  state.Query = action.payload;
}

export function setSortingCol(state, action) {
  state.SortingCol = action.payload;
}
