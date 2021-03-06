import store from "../store"
import * as Types from '@/store/action-types'

export default {
  'clear_token': async (to, from, next) => {
    store.commit(Types.CLEAR_TOKEN);
    next();
  }
}