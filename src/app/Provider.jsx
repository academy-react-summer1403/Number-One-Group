import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "../redux/store";

const ProviderApp = ({ children }) => {
    const queryClient = new QueryClient();

    return (
        <Provider store={store}>
            <NextUIProvider>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </NextUIProvider>
        </Provider>
    )
}

export default ProviderApp
