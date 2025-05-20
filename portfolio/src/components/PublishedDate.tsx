"use client"
import { useState, useEffect } from "react";

export function PublishedDate({ date }: { date: string }) {
    const [formatted, setFormatted] = useState(date);

    useEffect(() => {
        import("@/lib/utils").then((mod) => {
            setFormatted(mod.formatDate(date));
        });
    }, [date]);

    return <>{formatted}</>;
}
