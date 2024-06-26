// context.ts
import { createContext } from "react";
import { User } from "@tma.js/sdk-react";

// Define the context type
type TtmaContext = {
    user: User | null;
};

// Create the context with a default value of null for user
export const TmaContext = createContext<TtmaContext>({ user: null });
