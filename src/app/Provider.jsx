import { NextUIProvider } from "@nextui-org/react";
import { Provider, useSelector } from "react-redux";
import store from "../redux/store";
import { reactQueryConfig } from "../config/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { TourProvider } from "@reactour/tour";
import { TourSteps } from "../core/constants/tour-steps";
import { getItem } from "../core/hooks/local-storage";

const ProviderApp = ({ children }) => {
    const queryClient = new QueryClient(reactQueryConfig);
    return (
        <Provider store={store}>
            <NextUIProvider>
                <QueryClientProvider client={queryClient}>
                    <TourProvider steps={TourSteps}>
                        <BrowserRouter>
                            {children}
                        </BrowserRouter>
                    </TourProvider>
                </QueryClientProvider>
            </NextUIProvider>
        </Provider>
    )
}

export default ProviderApp

