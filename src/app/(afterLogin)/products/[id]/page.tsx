import { Product } from "@/types";

async function getData(id: string) {
    const res = await fetch('http://localhost:3001/products/' + id, {
        cache: 'no-store'
    })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}
export default async function ProductDetail({ params }: { params: { id: string } }) {
    const { id } = params;
    const product: Product = await getData(id)
    return (
        <div className="flex justify-center">
            <div className="flex w-10/12">
                <img className="h-48 w-48 object-cover" src={product.image} alt="Product" />

                <div className="ml-4">
                    <h2 className="text-lg font-medium">{product.title}</h2>

                    <p className="text-gray-500">{product.price}</p>

                    <p className="mt-2 text-gray-700">
                        {product.description}
                    </p>

                    <p className="mt-2 text-sm text-gray-500">Category: {product.category}</p>
                </div>
            </div>
        </div>

    )
}