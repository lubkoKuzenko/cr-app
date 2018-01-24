import { DevelopmentPlan, Home, About, Userlist, Forms } from './containers';
import { NotFound } from './components'

export const routes = [{
  path: '/',
  exact: true,
  component: Home,
}, {
  path: '/about',
  component: About,
}, {
  path: '/plan',
  component: DevelopmentPlan
}, {
  path: '/forms',
  component: Forms,
}, {
  path: '/userlist',
  component: Userlist,
}, {
  path: '*',
  component: NotFound,
}];