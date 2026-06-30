"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

const productFormSchema = z.object({
  name: z.string().min(3, "Product name must be at least 3 characters"),
  sku: z.string().min(3, "SKU must be at least 3 characters"),
  category: z.string().min(1, "Please select a category"),
  price: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "Price must be a positive number",
  }),
  stock: z.string().refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
    message: "Stock must be a non-negative number",
  }),
  description: z.string().min(10, "Description must be at least 10 characters"),
  status: z.enum(["active", "inactive", "outofstock"]),
})

type ProductFormValues = z.infer<typeof productFormSchema>

interface ProductFormProps {
  initialData?: Partial<ProductFormValues>
  onSubmit: (data: ProductFormValues) => void
  isSubmitting?: boolean
}

export function ProductForm({ initialData, onSubmit, isSubmitting }: ProductFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: initialData || {
      name: "",
      sku: "",
      category: "",
      price: "",
      stock: "",
      description: "",
      status: "active",
    },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Card className="p-6 rounded-3xl border-border">
        <h3 className="text-lg font-semibold mb-6">Product Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="text-sm font-medium mb-2 block">
              Product Name <span className="text-red-500">*</span>
            </label>
            <Input
              {...register("name")}
              placeholder="e.g., Zentro Performance Runner"
              className="rounded-2xl"
            />
            {errors.name && (
              <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              SKU <span className="text-red-500">*</span>
            </label>
            <Input
              {...register("sku")}
              placeholder="e.g., ZNT-RUN-001"
              className="rounded-2xl"
            />
            {errors.sku && (
              <p className="text-sm text-red-500 mt-1">{errors.sku.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Category <span className="text-red-500">*</span>
            </label>
            <select
              {...register("category")}
              className="w-full h-10 rounded-2xl border border-border bg-background px-4 text-sm"
            >
              <option value="">Select a category</option>
              <option value="Footwear">Footwear</option>
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
              <option value="Sports">Sports</option>
            </select>
            {errors.category && (
              <p className="text-sm text-red-500 mt-1">{errors.category.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Price ($) <span className="text-red-500">*</span>
            </label>
            <Input
              {...register("price")}
              type="number"
              step="0.01"
              placeholder="0.00"
              className="rounded-2xl"
            />
            {errors.price && (
              <p className="text-sm text-red-500 mt-1">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Stock Quantity <span className="text-red-500">*</span>
            </label>
            <Input
              {...register("stock")}
              type="number"
              placeholder="0"
              className="rounded-2xl"
            />
            {errors.stock && (
              <p className="text-sm text-red-500 mt-1">{errors.stock.message}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="text-sm font-medium mb-2 block">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              {...register("description")}
              rows={4}
              placeholder="Describe your product..."
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm resize-none"
            />
            {errors.description && (
              <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">
              Status <span className="text-red-500">*</span>
            </label>
            <select
              {...register("status")}
              className="w-full h-10 rounded-2xl border border-border bg-background px-4 text-sm"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="outofstock">Out of Stock</option>
            </select>
            {errors.status && (
              <p className="text-sm text-red-500 mt-1">{errors.status.message}</p>
            )}
          </div>
        </div>
      </Card>

      <div className="flex items-center gap-4">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="rounded-2xl"
        >
          {isSubmitting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
          {initialData ? "Update Product" : "Create Product"}
        </Button>
        <Button 
          type="button" 
          variant="outline"
          className="rounded-2xl"
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}
