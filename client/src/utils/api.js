// Centralized API helper
// Uses VITE_API_URL if defined, otherwise falls back to localhost:3001
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export async function apiFetch(
  path,
  { headers = {}, auth = false, ...options } = {}
) {
  const url = path.startsWith("http") ? path : `${BASE_URL}${path}`;
  const finalHeaders = { "Content-Type": "application/json", ...headers };
  if (auth) {
    const token = localStorage.getItem("token");
    if (token) finalHeaders["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(url, { ...options, headers: finalHeaders });
  const contentType = res.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await res.json()
    : await res.text();
  return { ok: res.ok, status: res.status, data };
}

export { BASE_URL };
