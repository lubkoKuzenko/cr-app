
import asyncComponent from "./asyncComponent";

const AsyncDevelopmentPlan = asyncComponent(() => import("./containers/DevelopmentPlan/plan"));
const AsyncHome = asyncComponent(() => import("./containers/Home/home"));
const AsyncAbout = asyncComponent(() => import("./containers/About/about"));
const AsyncUserlist = asyncComponent(() => import("./containers/Userlist/userlist"));
const AsyncForms = asyncComponent(() => import("./containers/Forms/forms"));
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