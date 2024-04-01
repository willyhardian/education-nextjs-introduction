'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-6xl font-bold text-red-500">Oops!</h1>

            <p className="mt-4 text-xl text-gray-600">Something went wrong.</p>

            <button
                className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={reset}
            >
                Try Again
            </button>
        </div>



    )
}