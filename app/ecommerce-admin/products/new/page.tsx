"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AdminLayout } from "@/components/admin"
import { ProductForm } from "@/components/admin/product-form"

export default function NewProductPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (data: any) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log("Creating product:", data)
    
    setIsSubmitting(false)
    
    // Redirect to products page
    router.push("/ecommerce-admin/products")
  }

  return (
    <AdminLayout 
      title="Create Product" 
      subtitle="Add a new product to your store"
    >
      <ProductForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
    </AdminLayout>
  )
}
