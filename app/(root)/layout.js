export const metadata = {
    title: 'Next.js',
    description: 'example',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}