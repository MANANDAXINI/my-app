// TmaProvider.tsx
'use client'
import { PropsWithChildren, useState, useEffect } from "react";
import { TmaContext } from "./context";
import { User, retrieveLaunchParams, SDKProvider } from "@tma.js/sdk-react";

// Define the provider component
export function TmaProvider(props: PropsWithChildren<{}>) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [telegramUser, setTelegramUser] = useState<User | null>(null);

    // Function to fetch Telegram user data
    function fetchTelegramUser() {
        try {
            const launchParams = retrieveLaunchParams();
            const user = launchParams?.initData?.user as User | undefined;
            if (!user) {
                throw new Error("User not found");
            }
            setTelegramUser(user);
        } catch (error) {
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    // useEffect to fetch user data on mount
    useEffect(() => {
        fetchTelegramUser();
    }, []);

    return (
        <SDKProvider acceptCustomStyles debug>
            <TmaContext.Provider value={{ user: telegramUser }}>
                {props.children}
            </TmaContext.Provider>
        </SDKProvider>
    );
}
