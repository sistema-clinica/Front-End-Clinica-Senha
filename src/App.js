import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Outlet} from "react-router-dom";

export default function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <Outlet/>
        </QueryClientProvider>

    )
}
