import * as Types from '@/store/action-types';
import { getSliders } from '@/api/home.js'

const homeActions = {
  async [Types.SET_SLIDERS]({ commit }) {
    let slides = await getSliders();
    commit(Types.SET_SLIDERS, slides)
  }
}
export default homeActions;