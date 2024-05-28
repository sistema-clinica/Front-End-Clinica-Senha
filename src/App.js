import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Outlet} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";

export default function App() {
    const queryClient = new QueryClient()

    return (
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <Outlet/>
            </QueryClientProvider>
        </AuthProvider>
    )
}
