// 组件注册
// 大括号要求，命名导出则是用于一些有用的公共方法，但是这些方法并不总是必要
import {button} from './components/button';
import {search} from './components/search';
import {tab, tabPanel} from './components/tab';
import {layout} from './components/layout';
import {radio} from './components/radio';
import {checkbox} from './components/checkbox';
import {icon} from './components/icon';
import {navbar} from './components/navbar';
import {according,accordingItem} from './components/according';
import {cell} from './components/cell';
const install=function (Vue){
  Vue.component(button.name,button);
  Vue.component(search.name,search);
  Vue.component(tab.name,tab);
  Vue.component(tabPanel.name,tabPanel);
  Vue.component(layout.name,layout);
  Vue.component(radio.name,radio);
  Vue.component(checkbox.name,checkbox);
  Vue.component(icon.name,icon);
  Vue.component(navbar.name,navbar);
  Vue.component(according.name,according);
  Vue.component(accordingItem.name,accordingItem);
  Vue.component(cell.name,cell)
}
export default{
  install
}
