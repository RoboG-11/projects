import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { DarkModeProvider } from "./context/DarkModeContext";
import { OpenSidebarProvider } from "./context/OpenSidebarContext";

import GlobalStyles from "./styles/GlobalStyles";
import ProtectedRoute from "./ui/ProtectedRoute";
import LoadingFullPage from "./ui/LoadingFullPage";
import AppLayout from "./ui/AppLayout";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Guests = lazy(() => import("./pages/Guests"));
const Bookings = lazy(() => import("./pages/Bookings"));
const Booking = lazy(() => import("./pages/Booking"));
const NewBooking = lazy(() => import("./pages/NewBooking"));
const Cabins = lazy(() => import("./pages/Cabins"));
const Settings = lazy(() => import("./pages/Settings"));
const Account = lazy(() => import("./pages/Account"));
const Login = lazy(() => import("./pages/Login"));
const Checkin = lazy(() => import("./pages/Checkin"));
const Signup = lazy(() => import("./pages/Signup"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const LoadData = lazy(() => import("./pages/Load-Data"));
const ConfirmEmail = lazy(() => import("./pages/ConfirmEmail"));
const ChangePassword = lazy(() => import("./pages//ChangePassword"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <ProtectedRoute><AppLayout /></ProtectedRoute>,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Navigate replace to="dashboard" />,
      },
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<LoadingFullPage />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "guests",
        element: (
          <Suspense fallback={<LoadingFullPage />}>
            <Guests />
          </Suspense>
        ),
      },
      {
        path: "bookings",
        element: (
          <Suspense fallback={<LoadingFullPage />}>
            <Bookings />
          </Suspense>
        ),
      },
      {
        path: "bookings/:bookingId",
        element: (
          <Suspense fallback={<LoadingFullPage />}>
            <Booking />
          </Suspense>
        ),
      },
      {
        path: "bookings/new",
        element: (
          <Suspense fallback={<LoadingFullPage />}>
            <NewBooking />
          </Suspense>
        ),
      },
      {
        path: "bookings/new/:cabinId",
        element: (
          <Suspense fallback={<LoadingFullPage />}>
            <NewBooking />
          </Suspense>
        ),
      },
      {
        path: "checkin/:bookingId",
        element: (
          <Suspense fallback={<LoadingFullPage />}>
            <Checkin />
          </Suspense>
        ),
      },
      {
        path: "cabins",
        element: (
          <Suspense fallback={<LoadingFullPage />}>
            <Cabins />
          </Suspense>
        ),
      },
      {
        path: "settings",
        element: (
          <Suspense fallback={<LoadingFullPage />}>
            <Settings />
          </Suspense>
        ),
      },
      {
        path: "account",
        element: (
          <Suspense fallback={<LoadingFullPage />}>
            <Account />
          </Suspense>
        ),
      },
      {
        path: "load-data",
        element: (
          <Suspense fallback={<LoadingFullPage />}>
            <LoadData />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "signup",
    element: (
      <Suspense fallback={<LoadingFullPage />}>
        <Signup />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<LoadingFullPage />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "reset-password",
    element: (
      <Suspense fallback={<LoadingFullPage />}>
        <ResetPassword />
      </Suspense>
    ),
  },
  {
    path: "change-password",
    element: (
      <Suspense fallback={<LoadingFullPage />}>
        <ChangePassword />
      </Suspense>
    ),
  },
  {
    path: "confirm-email",
    element: (
      <Suspense fallback={<LoadingFullPage />}>
        <ConfirmEmail />
      </Suspense>
    ),
  },

  {
    path: "*",
    element: (
      <Suspense fallback={<LoadingFullPage />}>
        <PageNotFound />
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <OpenSidebarProvider>
      <DarkModeProvider>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <RouterProvider router={router} />

          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: {
                duration: 5000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
                padding: "16px 24px",
                backgroundColor: "var(--color-grey-0)",
                color: "var(--color-grey-700)",
              },
            }}
          />
        </QueryClientProvider>
      </DarkModeProvider>
    </OpenSidebarProvider>
  );
}

export default App;
