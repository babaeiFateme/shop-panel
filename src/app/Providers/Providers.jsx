"use client";

import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createEmotionCache, MantineProvider } from "@mantine/core";

import { DToast } from "@components/UI/atoms/client";

import { ltrCacheObject, rtlCacheObject } from "@core/utils";


const Providers = ({ children }) => {
    // State to determine if the direction is Right-to-Left (RTL).
    const [isDirectionRtl] = useState(true);

    // Create an Emotion cache based on the direction state.
    const cache = createEmotionCache(
        isDirectionRtl ? rtlCacheObject : ltrCacheObject
    );
    cache.compat = true; // Enable compatibility mode for the cache.

    // Use the useServerInsertedHTML hook to insert cached styles on the server side. (Disabling Flush action on the server to prevent styling issues in the client)
    useServerInsertedHTML(() => (
        <style
            data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(
                " "
            )}`}
            dangerouslySetInnerHTML={{
                __html: Object.values(cache.inserted).join(" "),
            }}
        />
    ));

    /* Wrap the children with MantineProvider, passing the created cache and the direction state into it.
       We are not gonna use "withGlobalStyles" and "withNormalizeCSS", because we config the basic styles via tailwindcss.
       Feel free to wrap anything u wants here. such as redux provider, persistGate, context provider, portals and etc.
    */

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
                refetchOnWindowFocus: false,
                cacheTime: 1000 * 30,
                staleTime: 1000 * 30,
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            <MantineProvider
                emotionCache={cache}
                theme={{ dir: isDirectionRtl ? "rtl" : "ltr" }}
            >
                {children}
                <DToast />
                <ReactQueryDevtools />
            </MantineProvider>
        </QueryClientProvider>
    );
};

export default Providers;
