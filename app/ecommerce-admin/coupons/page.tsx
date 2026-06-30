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
import { Search, Plus, Edit, Trash2, Copy, Percent, DollarSign } from "lucide-react"
import { mockCoupons } from "@/lib/admin-mock-data"

export default function CouponsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredCoupons = mockCoupons.filter(coupon =>
    coupon.code.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "active":
        return "default"
      case "expired":
        return "destructive"
      case "inactive":
        return "secondary"
      default:
        return "secondary"
    }
  }

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
  }

  return (
    <AdminLayout title="Coupons" subtitle="Manage discount codes and promotions">
      <div className="space-y-6">
        {/* Actions Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search coupons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-2xl"
            />
          </div>
          <Button className="rounded-2xl">
            <Plus className="h-4 w-4 mr-2" />
            Create Coupon
          </Button>
        </div>

        {/* Coupons Table */}
        <Card className="rounded-3xl border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Min. Purchase</TableHead>
                <TableHead>Usage</TableHead>
                <TableHead>Expiry Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCoupons.map((coupon) => (
                <TableRow key={coupon.id}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <code className="px-3 py-1 rounded-xl bg-primary/10 text-primary font-semibold">
                        {coupon.code}
                      </code>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleCopyCode(coupon.code)}
                        className="h-8 w-8 p-0"
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {coupon.type === "percentage" ? (
                        <Percent className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                      )}
                      <span className="capitalize">{coupon.type}</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold">
                    {coupon.type === "percentage" ? `${coupon.value}%` : `$${coupon.value}`}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    ${coupon.minPurchase}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-[80px]">
                        <div 
                          className="h-full bg-primary"
                          style={{ width: `${(coupon.usageCount / coupon.usageLimit) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {coupon.usageCount}/{coupon.usageLimit}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {new Date(coupon.expiresAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(coupon.status) as any}>
                      {coupon.status}
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
