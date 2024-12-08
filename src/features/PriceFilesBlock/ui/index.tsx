'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface FileItem {
    name: string
    path: string
    description: string
}

export function PriceFiles() {
    const [files, setFiles] = useState<FileItem[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchFiles = async () => {
            try {
                const response = await fetch('/api/getFiles')
                if (!response.ok) {
                    throw new Error('Failed to fetch files')
                }
                const data = await response.json()
                setFiles(data)
            } catch (err) {
                setError('Не удалось загрузить файлы')
                console.error(err)
            }
        }
        fetchFiles()
    }, [])

    if (error) {
        return (
            <div className="text-red-500 text-center font-extrabold py-20">
                {error}
            </div>
        )
    }

    return (
        <div className="mx-auto py-20 w-1/3 grid grid-cols-1 gap-6">
            {files.map((file, index) => (
                <div
                    key={index}
                    className="bg-white shadow-3xl rounded-lg p-4 text-center"
                >
                    <h3 className="text-lg font-semibold mb-2">{file.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                        {file.description}
                    </p>
                    <Link
                        href={file.path}
                        className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700 transition"
                        download
                        target="_blank"
                    >
                        Скачать
                    </Link>
                </div>
            ))}
        </div>
    )
}
