import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from '@tanstack/react-router'
import { createHashHistory } from '@tanstack/history'
//import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { ThemeProvider } from '@emotion/react'
import Home from './screens/home'
import GlobalStyles from './theme/GlobalStyles'
import { defaultTheme } from './theme/theme'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
})

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const routeTree = rootRoute.addChildren([homeRoute])

const router = createRouter({
  routeTree,
  history: createHashHistory(),
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App;
