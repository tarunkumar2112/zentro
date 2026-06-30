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
import { Search, Plus, AlertTriangle, CheckCircle, XCircle, Package } from "lucide-react"
import { mockInventory } from "@/lib/admin-mock-data"

export default function InventoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredInventory = mockInventory.filter(item => {
    const matchesSearch = item.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || item.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "in-stock":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "low-stock":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "out-of-stock":
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "in-stock":
        return "default"
      case "low-stock":
        return "secondary"
      case "out-of-stock":
        return "destructive"
      default:
        return "secondary"
    }
  }

  return (
    <AdminLayout title="Inventory" subtitle="Manage stock levels and inventory">
      <div className="space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 rounded-3xl border-border">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-green-500/10 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">In Stock</p>
                <p className="text-2xl font-bold">
                  {mockInventory.filter(i => i.status === "in-stock").length}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-3xl border-border">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Low Stock</p>
                <p className="text-2xl font-bold">
                  {mockInventory.filter(i => i.status === "low-stock").length}
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-3xl border-border">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-red-500/10 flex items-center justify-center">
                <XCircle className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Out of Stock</p>
                <p className="text-2xl font-bold">
                  {mockInventory.filter(i => i.status === "out-of-stock").length}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by product or SKU..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-2xl"
              />
            </div>
            <select 
              className="h-10 rounded-2xl border border-border bg-background px-4 text-sm"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="in-stock">In Stock</option>
              <option value="low-stock">Low Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </div>
          <Button className="rounded-2xl">
            <Plus className="h-4 w-4 mr-2" />
            Restock Items
          </Button>
        </div>

        {/* Inventory Table */}
        <Card className="rounded-3xl border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Low Stock Alert</TableHead>
                <TableHead>Reorder Point</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Restocked</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-muted flex items-center justify-center">
                        <Package className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <span className="font-medium">{item.productName}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-mono text-sm text-muted-foreground">
                    {item.sku}
                  </TableCell>
                  <TableCell>
                    <span className={`font-semibold ${
                      item.status === "out-of-stock" 
                        ? "text-red-500" 
                        : item.status === "low-stock" 
                        ? "text-yellow-500" 
                        : "text-green-500"
                    }`}>
                      {item.currentStock}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {item.lowStockThreshold}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {item.reorderPoint}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(item.status) as any}>
                      <span className="flex items-center gap-1">
                        {getStatusIcon(item.status)}
                        {item.status.replace("-", " ")}
                      </span>
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {item.lastRestocked ? new Date(item.lastRestocked).toLocaleDateString() : "-"}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="rounded-xl">
                      Update Stock
                    </Button>
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
