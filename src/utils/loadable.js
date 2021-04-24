import LoadingComponent from '@/components/loading.vue'
//这个是处理页面切换的loading；处理白屏；
const loadable = (componentFunc) => {
  let component = () => ({
    component: componentFunc(),
    loading: LoadingComponent,//增加loading
  })
  return {
    render(h) {
      return h(component)
    },
  }
}
export default loadable;