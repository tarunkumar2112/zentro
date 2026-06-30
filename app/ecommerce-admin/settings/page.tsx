"use client"

import { useState } from "react"
import { AdminLayout } from "@/components/admin"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
import { 
  Plus, 
  Edit, 
  Trash2, 
  User, 
  Shield, 
  CreditCard, 
  Truck, 
  Receipt,
  Check,
  X
} from "lucide-react"
import { 
  mockUsers, 
  mockRoles, 
  mockPaymentMethods, 
  mockShippingMethods, 
  mockTaxRates 
} from "@/lib/admin-mock-data"

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("users")

  return (
    <AdminLayout title="Settings" subtitle="Manage store configuration">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-card border border-border rounded-2xl p-1">
          <TabsTrigger value="users" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <User className="h-4 w-4 mr-2" />
            Users
          </TabsTrigger>
          <TabsTrigger value="roles" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Shield className="h-4 w-4 mr-2" />
            Roles
          </TabsTrigger>
          <TabsTrigger value="payment" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <CreditCard className="h-4 w-4 mr-2" />
            Payment
          </TabsTrigger>
          <TabsTrigger value="shipping" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Truck className="h-4 w-4 mr-2" />
            Shipping
          </TabsTrigger>
          <TabsTrigger value="taxes" className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            <Receipt className="h-4 w-4 mr-2" />
            Taxes
          </TabsTrigger>
        </TabsList>

        {/* Users Tab */}
        <TabsContent value="users" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">User Management</h3>
              <p className="text-sm text-muted-foreground">Manage admin users and their access</p>
            </div>
            <Button className="rounded-2xl">
              <Plus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </div>

          <Card className="rounded-3xl border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell className="text-muted-foreground">{user.email}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{user.role}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={user.status === "active" ? "default" : "secondary"}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {new Date(user.createdAt).toLocaleDateString()}
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
        </TabsContent>

        {/* Roles Tab */}
        <TabsContent value="roles" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Roles & Permissions</h3>
              <p className="text-sm text-muted-foreground">Define user roles and their permissions</p>
            </div>
            <Button className="rounded-2xl">
              <Plus className="h-4 w-4 mr-2" />
              Add Role
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockRoles.map((role) => (
              <Card key={role.id} className="p-6 rounded-3xl border-border">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-lg">{role.name}</h4>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </div>
                    <Button variant="ghost" size="sm" className="rounded-xl">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Permissions</p>
                    <div className="flex flex-wrap gap-2">
                      {role.permissions.slice(0, 3).map((permission, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {permission}
                        </Badge>
                      ))}
                      {role.permissions.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{role.permissions.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm">
                      <span className="font-semibold">{role.userCount}</span>
                      <span className="text-muted-foreground"> users with this role</span>
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Payment Methods Tab */}
        <TabsContent value="payment" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Payment Methods</h3>
              <p className="text-sm text-muted-foreground">Configure payment gateways</p>
            </div>
            <Button className="rounded-2xl">
              <Plus className="h-4 w-4 mr-2" />
              Add Payment Method
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockPaymentMethods.map((method) => (
              <Card key={method.id} className="p-6 rounded-3xl border-border">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <CreditCard className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{method.name}</h4>
                      <p className="text-sm text-muted-foreground capitalize">{method.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {method.enabled ? (
                      <Badge variant="default">
                        <Check className="h-3 w-3 mr-1" />
                        Enabled
                      </Badge>
                    ) : (
                      <Badge variant="secondary">
                        <X className="h-3 w-3 mr-1" />
                        Disabled
                      </Badge>
                    )}
                    <Button variant="ghost" size="sm" className="rounded-xl">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Shipping Methods Tab */}
        <TabsContent value="shipping" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Shipping Methods</h3>
              <p className="text-sm text-muted-foreground">Manage shipping options and rates</p>
            </div>
            <Button className="rounded-2xl">
              <Plus className="h-4 w-4 mr-2" />
              Add Shipping Method
            </Button>
          </div>

          <Card className="rounded-3xl border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Method</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Estimated Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockShippingMethods.map((method) => (
                  <TableRow key={method.id}>
                    <TableCell className="font-medium">{method.name}</TableCell>
                    <TableCell className="text-muted-foreground">{method.description}</TableCell>
                    <TableCell className="font-semibold">${method.price}</TableCell>
                    <TableCell className="text-muted-foreground">{method.estimatedDays} days</TableCell>
                    <TableCell>
                      <Badge variant={method.enabled ? "default" : "secondary"}>
                        {method.enabled ? "Enabled" : "Disabled"}
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
        </TabsContent>

        {/* Tax Rates Tab */}
        <TabsContent value="taxes" className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Tax Rates</h3>
              <p className="text-sm text-muted-foreground">Configure tax rates by region</p>
            </div>
            <Button className="rounded-2xl">
              <Plus className="h-4 w-4 mr-2" />
              Add Tax Rate
            </Button>
          </div>

          <Card className="rounded-3xl border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>State/Region</TableHead>
                  <TableHead>Rate</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockTaxRates.map((tax) => (
                  <TableRow key={tax.id}>
                    <TableCell className="font-medium">{tax.name}</TableCell>
                    <TableCell>{tax.country}</TableCell>
                    <TableCell className="text-muted-foreground">{tax.state || "All"}</TableCell>
                    <TableCell className="font-semibold">{tax.rate}%</TableCell>
                    <TableCell className="capitalize">{tax.type}</TableCell>
                    <TableCell>
                      <Badge variant={tax.enabled ? "default" : "secondary"}>
                        {tax.enabled ? "Enabled" : "Disabled"}
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
        </TabsContent>
      </Tabs>
    </AdminLayout>
  )
}
