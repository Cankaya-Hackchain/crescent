import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/shared/button";
import { Badge } from "@/components/shared/badge";



export default function AboutPage() {
    // Example data for the table
    const tableData = [
        { id: 1, name: 'Item 1', price: '100' },
        { id: 2, name: 'Item 2', price: '200' },
        // Add more data as needed
    ];

    
    

    return (
        <section className="relative isolate">
            {/* ... existing code ... */}
            <div className="container py-24 sm:py-32 lg:pb-30">
                {/* ... existing code ... */}
                {/* Table component */}
                <div className="mt-10">

                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="border-b">Name</th>
                                <th className="border-b">Price</th>
                                <th className="border-b">chassisNumber</th>
                            </tr>
                        </thead>
                        <tbody>
                        
                                <tr>
                                    <td className="border-b">Opel</td>
                                    <td className="border-b">359000</td>
                                    <td className="border-b">SV30-0169266 </td>
                                </tr>
                           
                        </tbody>
                    </table>
                </div>
            </div>
            {/* ... existing code ... */}
        </section>
    );
}
