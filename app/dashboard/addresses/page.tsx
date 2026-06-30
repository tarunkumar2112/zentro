"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Plus, Edit, Trash2, Home, Building2, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Address {
  id: string
  type: "home" | "work" | "other"
  name: string
  phone: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  zipCode: string
  country: string
  isDefault: boolean
}

export default function AddressesPage() {
  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    avatar: undefined,
  }

  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: "1",
      type: "home",
      name: "John Doe",
      phone: "+1 (555) 123-4567",
      addressLine1: "145 Russell Street",
      addressLine2: "Apt 4B",
      city: "San Francisco",
      state: "CA",
      zipCode: "94016",
      country: "United States",
      isDefault: true
    },
    {
      id: "2",
      type: "work",
      name: "John Doe",
      phone: "+1 (555) 987-6543",
      addressLine1: "789 Tech Avenue",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States",
      isDefault: false
    }
  ])

  const [showAddForm, setShowAddForm] = useState(false)

  const setDefaultAddress = (id: string) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })))
  }

  const deleteAddress = (id: string) => {
    if (confirm("Are you sure you want to delete this address?")) {
      setAddresses(addresses.filter(addr => addr.id !== id))
    }
  }

  const getAddressIcon = (type: string) => {
    switch (type) {
      case "home": return Home
      case "work": return Building2
      default: return MapPin
    }
  }

  return (
    <DashboardLayout user={user}>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-heading text-foreground mb-2">Addresses</h1>
            <p className="text-muted-foreground">
              Manage your shipping addresses
            </p>
          </div>
          <Button 
            onClick={() => setShowAddForm(!showAddForm)}
            className="rounded-2xl"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add New Address
          </Button>
        </div>

        {/* Add Address Form */}
        {showAddForm && (
          <Card className="rounded-3xl border-border">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Add New Address</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input placeholder="John Doe" className="rounded-2xl" />
                  </div>
                  <div className="space-y-2">
                    <Label>Phone Number</Label>
                    <Input placeholder="+1 (555) 123-4567" className="rounded-2xl" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Address Line 1</Label>
                  <Input placeholder="Street address" className="rounded-2xl" />
                </div>

                <div className="space-y-2">
                  <Label>Address Line 2 (Optional)</Label>
                  <Input placeholder="Apartment, suite, etc." className="rounded-2xl" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label>City</Label>
                    <Input placeholder="San Francisco" className="rounded-2xl" />
                  </div>
                  <div className="space-y-2">
                    <Label>State</Label>
                    <Input placeholder="CA" className="rounded-2xl" />
                  </div>
                  <div className="space-y-2">
                    <Label>ZIP Code</Label>
                    <Input placeholder="94016" className="rounded-2xl" />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button type="submit" className="rounded-2xl">
                    Save Address
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setShowAddForm(false)}
                    className="rounded-2xl"
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Address List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((address) => {
            const Icon = getAddressIcon(address.type)
            return (
              <Card key={address.id} className="rounded-3xl border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-foreground capitalize">
                            {address.type}
                          </h3>
                          {address.isDefault && (
                            <Badge variant="default" className="rounded-lg">
                              <Check className="h-3 w-3 mr-1" />
                              Default
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="rounded-xl">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        onClick={() => deleteAddress(address.id)}
                        className="rounded-xl text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p className="font-medium text-foreground">{address.name}</p>
                    <p className="text-muted-foreground">{address.phone}</p>
                    <p className="text-muted-foreground">
                      {address.addressLine1}
                      {address.addressLine2 && `, ${address.addressLine2}`}
                    </p>
                    <p className="text-muted-foreground">
                      {address.city}, {address.state} {address.zipCode}
                    </p>
                    <p className="text-muted-foreground">{address.country}</p>
                  </div>

                  {!address.isDefault && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setDefaultAddress(address.id)}
                      className="w-full mt-4 rounded-2xl"
                    >
                      Set as Default
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {addresses.length === 0 && (
          <Card className="rounded-3xl border-border">
            <CardContent className="p-12">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-6 rounded-full bg-muted">
                    <MapPin className="h-12 w-12 text-muted-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-heading text-foreground">No addresses yet</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Add your first shipping address to get started
                </p>
                <Button onClick={() => setShowAddForm(true)} className="rounded-2xl">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Address
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  )
}
