import React, { createContext, useContext, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "./auth-context";
import { API_BASE } from "../../config";

// Fetch helper: supports cookie or bearer
async function api(path, { token, ...options } = {}) {
  const url = `${API_BASE}${path}`;
  const res = await fetch(url, {
    credentials: 'include',                 // 🔸 send cookies
    ...options,
    headers: {
      ...(options.headers || {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}), // if token exists, use it
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
    },
  });

  if (!res.ok) {
    // If cookie session is missing/expired, you’ll get 401 here
    const text = await res.text().catch(() => "");
    throw new Error(`API ${res.status}: ${text || res.statusText}`);
  }

  const json = await res.json().catch(() => ({}));
  if (json?.error) throw new Error(json.error);
  return json?.data ?? json; // be a bit more lenient
}

export function MemberDashboardProvider({ children }) {
  const { token } = useAuth(); // may be undefined in prod (cookie mode)
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    error,
    refetch,
    isSuccess,
  } = useQuery({
    queryKey: ['memberDashboard'],
    // 🔸 Let it run in cookie mode; the server decides via cookie (401 if not authenticated)
    enabled: true,
    queryFn: () => api('/users/me/dashboard', { token }),
    staleTime: 0,
    refetchOnMount: 'always',
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  // Optional: handle 401 -> redirect to SSO/login
  useEffect(() => {
    if (!error) return;
    if (String(error.message).includes('API 401')) {
      // e.g., window.location.href = `${API_BASE}/auth/login`;
    }
  }, [error]);

  // Prefetch admin dashboard in either mode
  useEffect(() => {
    if (!isSuccess || !data?.user?.isAdmin) return;
    queryClient.prefetchQuery({
      queryKey: ['adminDashboard'],
      queryFn: () => api('/admin/me/dashboard', { token }),
      staleTime: 0,
    });
  }, [isSuccess, data, token, queryClient]);

  const value = {
    memberDashboard: data ?? null,
    isLoading,
    error: error || null,
    refresh: () => refetch(),
    setMemberDashboardOptimistic(updater) {
      queryClient.setQueryData(['memberDashboard'], cur => (cur ? updater(cur) : cur));
    },
  };

  return (
    <MemberDashboardContext.Provider value={value}>
      {children}
    </MemberDashboardContext.Provider>
  );
}

export function useMemberDashboard() {
  const ctx = useContext(MemberDashboardContext);
  if (!ctx) throw new Error("useMemberDashboard must be used within <MemberDashboardProvider>");
  return ctx;
}
