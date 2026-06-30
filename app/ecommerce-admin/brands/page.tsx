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
import { Search, Plus, Edit, Trash2, Tag } from "lucide-react"
import { mockBrands } from "@/lib/admin-mock-data"

export default function BrandsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddingBrand, setIsAddingBrand] = useState(false)
  const [newBrand, setNewBrand] = useState({ name: "", slug: "" })

  const filteredBrands = mockBrands.filter(brand =>
    brand.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleAddBrand = () => {
    setIsAddingBrand(true)
  }

  const handleSaveBrand = () => {
    // Add brand logic here
    setIsAddingBrand(false)
    setNewBrand({ name: "", slug: "" })
  }

  return (
    <AdminLayout title="Brands" subtitle="Manage product brands">
      <div className="space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-2xl"
            />
          </div>
          <Button onClick={handleAddBrand} className="rounded-2xl">
            <Plus className="h-4 w-4 mr-2" />
            Add Brand
          </Button>
        </div>

        {/* Add Brand Form */}
        {isAddingBrand && (
          <Card className="p-6 rounded-3xl border-border">
            <h3 className="text-lg font-semibold mb-4">Add New Brand</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Brand Name</label>
                <Input
                  placeholder="e.g., Nike"
                  value={newBrand.name}
                  onChange={(e) => setNewBrand({ ...newBrand, name: e.target.value })}
                  className="rounded-2xl"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Slug</label>
                <Input
                  placeholder="e.g., nike"
                  value={newBrand.slug}
                  onChange={(e) => setNewBrand({ ...newBrand, slug: e.target.value })}
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <Button onClick={handleSaveBrand} className="rounded-2xl">
                Save Brand
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setIsAddingBrand(false)}
                className="rounded-2xl"
              >
                Cancel
              </Button>
            </div>
          </Card>
        )}

        {/* Brands Table */}
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
              {filteredBrands.map((brand) => (
                <TableRow key={brand.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Tag className="h-5 w-5 text-primary" />
                      </div>
                      <span className="font-medium">{brand.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{brand.slug}</TableCell>
                  <TableCell>{brand.productCount} products</TableCell>
                  <TableCell>
                    <Badge variant={brand.status === "active" ? "default" : "secondary"}>
                      {brand.status}
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
