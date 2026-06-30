"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Mail, Phone, Calendar, MapPin, Edit, Save, X, Camera } from "lucide-react"

export default function ProfilePage() {
  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    avatar: undefined,
  }

  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: "1990-05-15",
    address: "San Francisco, CA",
    bio: "Passionate about fashion and style. Love exploring new trends and brands."
  })

  const handleSave = () => {
    // Save profile logic here
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset to original data if needed
  }

  return (
    <DashboardLayout user={user}>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-heading text-foreground mb-2">Profile</h1>
            <p className="text-muted-foreground">
              Manage your personal information
            </p>
          </div>
          {!isEditing ? (
            <Button onClick={() => setIsEditing(true)} className="rounded-2xl">
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          ) : (
            <div className="flex gap-2">
              <Button onClick={handleSave} className="rounded-2xl">
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
              <Button variant="outline" onClick={handleCancel} className="rounded-2xl">
                <X className="h-4 w-4 mr-2" />
                Cancel
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Photo Card */}
          <Card className="rounded-3xl border-border lg:col-span-1">
            <CardContent className="p-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                  <Avatar className="h-32 w-32">
                    <AvatarImage src={user.avatar} alt={profileData.firstName} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                      {profileData.firstName.charAt(0)}{profileData.lastName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                      <Camera className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-heading text-foreground">
                    {profileData.firstName} {profileData.lastName}
                  </h2>
                  <p className="text-sm text-muted-foreground">{profileData.email}</p>
                </div>
                <div className="w-full pt-4 border-t border-border space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Member Since</span>
                    <span className="font-medium text-foreground">Jan 2024</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Orders</span>
                    <span className="font-medium text-foreground">26</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Reward Points</span>
                    <span className="font-medium text-primary">3,200 XP</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information Card */}
          <Card className="rounded-3xl border-border lg:col-span-2">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={profileData.firstName}
                      onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={profileData.lastName}
                      onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                      disabled={!isEditing}
                      className="rounded-2xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      disabled={!isEditing}
                      className="pl-10 rounded-2xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      value={profileData.phone}
                      onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      disabled={!isEditing}
                      className="pl-10 rounded-2xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="dob"
                      type="date"
                      value={profileData.dateOfBirth}
                      onChange={(e) => setProfileData({...profileData, dateOfBirth: e.target.value})}
                      disabled={!isEditing}
                      className="pl-10 rounded-2xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="address"
                      value={profileData.address}
                      onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                      disabled={!isEditing}
                      className="pl-10 rounded-2xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <textarea
                    id="bio"
                    value={profileData.bio}
                    onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                    disabled={!isEditing}
                    rows={4}
                    className="w-full px-3 py-2 rounded-2xl bg-background border border-input text-sm text-foreground disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Account Security Card */}
        <Card className="rounded-3xl border-border">
          <CardHeader>
            <CardTitle className="font-heading text-xl">Account Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Password</h4>
                <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
              </div>
              <Button variant="outline" className="rounded-2xl">
                Change Password
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Two-Factor Authentication</h4>
                <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
              </div>
              <Button variant="outline" className="rounded-2xl">
                Enable
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Login History</h4>
                <p className="text-sm text-muted-foreground">View recent login activity</p>
              </div>
              <Button variant="outline" className="rounded-2xl">
                View History
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
