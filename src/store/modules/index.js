
//webpack内置
const files = require.context('.', true, /\.js$/);

const modules = {};
files.keys().forEach(key => {
  let path = key.replace(/\.\/|.js/g, '');
  if (path === 'index') return;
  let [namespace, type] = path.split('/');
  if (!modules[namespace]) {
    modules[namespace] = {
      namespaced: true,
    }
  }
  modules[namespace][type] = files(key).default;//这个是默认api
})
export default modules;