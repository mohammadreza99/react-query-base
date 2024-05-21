import { Outlet, RouterProvider } from "react-router-dom";
import { router } from "@root/router";
import { ThemeProvider } from "@theme/theme";
import '@locales/i18n';
import { Loading } from "@components/Loading";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toast } from "@components/Toast.tsx";

const queryClient = new QueryClient();

export const App = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RouterProvider router={router}/>
          <Outlet/>
          <Loading/>
          <Toast/>
        </ThemeProvider>
      </QueryClientProvider>
  )
}
