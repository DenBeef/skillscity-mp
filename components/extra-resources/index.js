import { useEffect, useState } from "react"

export default function ListOfResources({ isLoading, resources }) {


    if (isLoading) {
        return (
            <div className="w-full grid grid-cols md:grid-cols-3 gap-4">
                <div className="bg-gray-300 py-3 px-6 mx-4 mt-4 h-28 rounded-lg animate-pulse" />
                <div className="bg-gray-300 py-3 px-6 mx-4 mt-4 h-28 rounded-lg animate-pulse" />
                <div className="bg-gray-300 py-3 px-6 mx-4 mt-4 h-28 rounded-lg animate-pulse" />
            </div>
        )
    }



    return (
        <div className="w-full grid grid-cols md:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
                <div key={index} className="bg-gray-200 py-3 px-6 mx-4 mt-4 rounded-lg">
                    <p className="font-medium">{resource.asset}</p>
                    <p className="">Description: {resource.message}</p>
                    <p className="font-light italic">Posted by - {resource.name}</p>
                </div>
            ))}
        </div>
    )
}