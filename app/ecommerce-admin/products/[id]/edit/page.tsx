"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AdminLayout } from "@/components/admin"
import { ProductForm } from "@/components/admin/product-form"
import { mockProducts } from "@/lib/admin-mock-data"

interface ProductEditPageProps {
  params: {
    id: string
  }
}

export default function ProductEditPage({ params }: ProductEditPageProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Find the product by ID
  const product = mockProducts.find(p => p.id === params.id)

  if (!product) {
    return (
      <AdminLayout title="Product Not Found" subtitle="The requested product could not be found">
        <div className="text-center py-12">
          <p className="text-muted-foreground">Product not found</p>
        </div>
      </AdminLayout>
    )
  }

  // Convert product to form data
  const initialData = {
    name: product.name,
    sku: product.sku,
    category: product.category,
    price: product.price.toString(),
    stock: product.stock.toString(),
    description: `High-quality ${product.name.toLowerCase()} for everyday wear`,
    status: product.status,
  }

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log("Updating product:", params.id, data)
    
    setIsSubmitting(false)
    
    // Redirect to products page
    router.push("/ecommerce-admin/products")
  }

  return (
    <AdminLayout 
      title={`Edit: ${product.name}`} 
      subtitle="Update product information"
    >
      <ProductForm 
        initialData={initialData} 
        onSubmit={handleSubmit} 
        isSubmitting={isSubmitting} 
      />
    </AdminLayout>
  )
}
