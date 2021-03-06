import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const ProjectDashboard = lazy(() => import('../pages/projectdashboard/ProjectDasborad'))
const ProjectBudgeting = lazy(() => import('../pages/projectbudgeting'))
const Schedule = lazy(() => import('../pages/schedule/Schedule'))
const UserManagement = lazy(() => import('../pages/user/UserManagement'))
const PermitToWork = lazy(() => import('../pages/permittowork/PermitToWork'))
const Project = lazy(() => import("../pages/projectdashboard/ProjectPM"))
const Modals = lazy(() => import('../pages/Modals'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/project',
    component: ProjectDashboard
  },
  {
    path: '/project/:projectId',
    component: Project
  },
  {
    path: '/projectbudgeting',
    component: ProjectBudgeting
  },
  {
    path: '/schedule',
    component: Schedule
  },
  {
    path: '/usermanagement',
    component: UserManagement
  },
  {
    path: '/permittowork',
    component: PermitToWork
  },
  // {
  //   path: '/forms',
  //   component: Forms,
  // },
  // {
  //   path: '/cards',
  //   component: Cards,
  // },
  // {
  //   path: '/charts',
  //   component: Charts,
  // },
  // {
  //   path: '/buttons',
  //   component: Buttons,
  // },
  {
    path: '/modals',
    component: Modals,
  },
  // {
  //   path: '/tables',
  //   component: Tables,
  // },
  // {
  //   path: '/404',
  //   component: Page404,
  // },
  // {
  //   path: '/blank',
  //   component: Blank,
  // },
]

export default routes
