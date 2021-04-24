import * as Types from '@/store/action-types'

const homeMutations = {
  [Types.SET_CATEGORY](state, payload) {
    state.category = payload;
  },
  [Types.SET_SLIDERS](state, payload) {
    state.slides = payload;
  }
}
export default homeMutations;