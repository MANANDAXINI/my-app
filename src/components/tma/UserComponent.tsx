// UserComponent.tsx
import { useContext } from "react";
import { TmaContext } from "./context";

// Define the component that uses the context
export function UserComponent() {
    const { user } = useContext(TmaContext);

    // Render loading, error, or user data
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            Hello, {user.firstName}
        </div>
    );
}
