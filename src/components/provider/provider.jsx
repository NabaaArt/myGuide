'use client';
import {
    QueryClientProvider,
} from "@tanstack/react-query";

import qc from '../../queryClient'
import { SessionProvider } from "next-auth/react";


export const QueryProvider = ({ children }) => <SessionProvider>
    <QueryClientProvider client={qc}>
        {children}
    </QueryClientProvider>
</SessionProvider>;


