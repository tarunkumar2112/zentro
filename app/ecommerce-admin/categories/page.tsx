"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Search, Plus, Edit, Trash2, Package } from "lucide-react"
import { mockCategories } from "@/lib/admin-mock-data"

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddingCategory, setIsAddingCategory] = useState(false)
  const [newCategory, setNewCategory] = useState({ name: "", slug: "" })

  const filteredCategories = mockCategories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddCategory = () => {
    setIsAddingCategory(true)
  }

  const handleSaveCategory = () => {
    // Add category logic here
    setIsAddingCategory(false)
    setNewCategory({ name: "", slug: "" })
  }

  return (
    <AdminLayout title="Categories" subtitle="Manage product categories">
      <div className="space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-2xl"
            />
          </div>
          <Button onClick={handleAddCategory} className="rounded-2xl">
            <Plus className="h-4 w-4 mr-2" />
            Add Category
          </Button>
        </div>

        {/* Add Category Form */}
        {isAddingCategory && (
          <Card className="p-6 rounded-3xl border-border">
            <h3 className="text-lg font-semibold mb-4">Add New Category</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Category Name</label>
                <Input
                  placeholder="e.g., Footwear"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                  className="rounded-2xl"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Slug</label>
                <Input
                  placeholder="e.g., footwear"
                  value={newCategory.slug}
                  onChange={(e) => setNewCategory({ ...newCategory, slug: e.target.value })}
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <Button onClick={handleSaveCategory} className="rounded-2xl">
                Save Category
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setIsAddingCategory(false)}
                className="rounded-2xl"
              >
                Cancel
              </Button>
            </div>
          </Card>
        )}

        {/* Categories Table */}
        <Card className="rounded-3xl border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCategories.map((category) => (
                <TableRow key={category.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Package className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{category.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{category.slug}</TableCell>
                  <TableCell>{category.productCount} products</TableCell>
                  <TableCell>
                    <Badge variant={category.status === "active" ? "default" : "secondary"}>
                      {category.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm" className="rounded-xl">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="rounded-xl text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </AdminLayout>
  )
}
