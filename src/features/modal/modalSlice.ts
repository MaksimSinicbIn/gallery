import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
  isOpen: boolean
  imageUrl: string | null
}

const initialState: ModalState = {
  isOpen: false,
  imageUrl: null as string | null,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: (create) => ({
    openModal: create.reducer<{ imageUrl: string }>((state, action) => {
      state.isOpen = true
      state.imageUrl = action.payload.imageUrl
    }),
    closeModal: create.reducer((state) => {
      state.isOpen = false
      state.imageUrl = null
    }),
  }),
  selectors: {
    selectModalStatus: (state) => state.isOpen,
    selectModalImageUrl: (state) => state.imageUrl,
    selectModalData: (state) => state,
  },
})

export const modalReducer = modalSlice.reducer
export const { openModal, closeModal } = modalSlice.actions
export const { selectModalStatus, selectModalImageUrl, selectModalData } = modalSlice.selectors
