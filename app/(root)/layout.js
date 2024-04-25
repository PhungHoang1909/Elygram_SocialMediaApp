import { ClerkProvider } from "@clerk/nextjs"
import "../globals.css";

export const metadata = {
    title: 'Next.js',
    description: 'example',
}

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body>{children}</body>
            </html>
        </ClerkProvider>
        
    )
}