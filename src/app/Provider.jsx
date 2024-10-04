import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import store from "../redux/store";
import { reactQueryConfig } from "../config/react-query";

const ProviderApp = ({ children }) => {
    const queryClient = new QueryClient(reactQueryConfig);

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
