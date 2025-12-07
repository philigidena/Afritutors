import axios from 'axios'

// Create axios instance with default config
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://api.afritutors.com',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // Add auth token if available
        const token = localStorage.getItem('authToken')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Response interceptor
api.interceptors.response.use(
    (response) => response,
    (error) => {
        // Handle common errors
        if (error.response?.status === 401) {
            // Handle unauthorized
            localStorage.removeItem('authToken')
        }
        return Promise.reject(error)
    }
)

export default api

// API endpoints (for future use)
export const endpoints = {
    auth: {
        login: '/auth/login',
        register: '/auth/register',
        earlyAccess: '/auth/early-access',
    },
    courses: {
        list: '/courses',
        details: (id) => `/courses/${id}`,
    },
    user: {
        profile: '/user/profile',
        progress: '/user/progress',
    },
}
