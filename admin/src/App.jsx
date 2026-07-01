import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/auth/Login";

import Dashboard from "./pages/dashboard/Dashboard";

import Members from "./pages/members/Members";
import MemberDetails from "./pages/members/MemberDetails";

import Requests from "./pages/requests/Requests";
import RequestDetails from "./pages/requests/RequestDetails";

import Posts from "./pages/posts/Posts";
import CreatePost from "./pages/posts/CreatePost";

import Inbox from "./pages/inbox/Inbox";

import Payments from "./pages/payments/Payments";

import Analytics from "./pages/analytics/Analytics";

import Settings from "./pages/settings/Settings";

import AdminLayout from "./layouts/AdminLayout";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute />}>

          <Route element={<AdminLayout />}>

            <Route
              index
              element={<Navigate to="/dashboard" replace />}
            />

            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/members"
              element={<Members />}
            />

            <Route
              path="/members/:id"
              element={<MemberDetails />}
            />

            <Route
              path="/requests"
              element={<Requests />}
            />

            <Route
              path="/requests/:id"
              element={<RequestDetails />}
            />

            <Route
              path="/posts"
              element={<Posts />}
            />

            <Route
              path="/posts/create"
              element={<CreatePost />}
            />

            <Route
              path="/inbox"
              element={<Inbox />}
            />

            <Route
              path="/payments"
              element={<Payments />}
            />

            <Route
              path="/analytics"
              element={<Analytics />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />

          </Route>

        </Route>

        {/* Unknown Routes */}
        <Route
          path="*"
          element={<Navigate to="/dashboard" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;