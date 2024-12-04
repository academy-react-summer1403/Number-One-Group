import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { reactQueryConfig } from "../config/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import TourProvide from "../core/utility/tour";

const ProviderApp = ({ children }) => {
    const queryClient = new QueryClient(reactQueryConfig);
    return (
        <Provider store={store}>
            <NextUIProvider>
                <QueryClientProvider client={queryClient}>
                    <BrowserRouter>
                        <TourProvide>
                            {children}
                        </TourProvide>
                    </BrowserRouter>
                </QueryClientProvider>
            </NextUIProvider>
        </Provider>
    )
}

export default ProviderApp

