
import asyncComponent from "./asyncComponent";

const modulePath = './modules/';
const componentsPath = './components/';

const AsyncDevelopmentPlan = asyncComponent(() => import(modulePath + "DevelopmentPlan/plan"));
const AsyncHome = asyncComponent(() => import(modulePath + "Home/home"));
const AsyncAbout = asyncComponent(() => import(modulePath + "About/about"));
const AsyncUserlist = asyncComponent(() => import(modulePath + "Userlist/userlist"));
const AsyncForms = asyncComponent(() => import(modulePath + "Forms/forms"));
const AsyncNotFound = asyncComponent(() => import(componentsPath + "NotFound/notfound.js"));

export const routes = [{
  path: '/',
  exact: true,
  component: AsyncHome,
}, {
  path: '/about',
  component: AsyncAbout,
}, {
  path: '/plan',
  component: AsyncDevelopmentPlan
}, {
  path: '/forms',
  component: AsyncForms,
}, {
  path: '/userlist',
  component: AsyncUserlist,
}, {
  path: '*',
  component: AsyncNotFound,
}];