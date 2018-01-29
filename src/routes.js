
import asyncComponent from "./asyncComponent";

const AsyncDevelopmentPlan = asyncComponent(() => import("./modules/DevelopmentPlan/plan"));
const AsyncHome = asyncComponent(() => import("./modules/Home/home"));
const AsyncAbout = asyncComponent(() => import("./modules/About/about"));
const AsyncUserlist = asyncComponent(() => import("./modules/Userlist/userlist"));
const AsyncForms = asyncComponent(() => import("./modules/Forms/forms"));
const AsyncNotFound = asyncComponent(() => import("./components/NotFound/notfound.js"));

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