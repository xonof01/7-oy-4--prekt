import { ACTIONS } from "./actions"

const initialState = []

export const LikeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.like:
            const id = state.findIndex(item => item.age === action.payload.age)
            if (id === -1) {
                // Agar element mavjud bo'lmasa, uni qo'shamiz
                return [...state, action.payload]
            } else {
                // Agar element mavjud bo'lsa, uni o'chiramiz
                return state.filter((_, index) => index !== id)
            }
        default:
            return state
    }
}
