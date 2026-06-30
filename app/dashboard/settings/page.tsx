"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { 
  Bell, 
  Mail, 
  Shield, 
  Globe, 
  CreditCard, 
  Eye,
  Lock,
  Smartphone,
  Moon,
  Sun,
  Monitor,
  MapPin,
  Plus,
  Edit,
  Trash2,
  Check
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function SettingsPage() {
  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    avatar: undefined,
  }

  const [settings, setSettings] = useState({
    // Notification Settings
    orderUpdates: true,
    promotionalEmails: false,
    newsletterSubscription: true,
    smsNotifications: false,
    pushNotifications: true,
    
    // Privacy Settings
    profileVisibility: "private",
    showPurchaseHistory: false,
    allowDataSharing: false,
    
    // Display Settings
    theme: "dark",
    language: "en"
  })

  const toggleSetting = (key: string) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof settings]
    }))
  }

  const ToggleSwitch = ({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) => (
    <button
      onClick={onToggle}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
        enabled ? 'bg-primary' : 'bg-muted'
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )

  return (
    <DashboardLayout user={user}>
      <div className="space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-4xl font-heading text-foreground mb-2">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and settings
          </p>
        </div>

        {/* Notification Settings */}
        <Card className="rounded-3xl border-border">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10">
                <Bell className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="font-heading text-xl">Notifications</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Order Updates</h4>
                <p className="text-sm text-muted-foreground">Get notified about your order status</p>
              </div>
              <ToggleSwitch 
                enabled={settings.orderUpdates} 
                onToggle={() => toggleSetting('orderUpdates')} 
              />
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Promotional Emails</h4>
                <p className="text-sm text-muted-foreground">Receive special offers and discounts</p>
              </div>
              <ToggleSwitch 
                enabled={settings.promotionalEmails} 
                onToggle={() => toggleSetting('promotionalEmails')} 
              />
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Newsletter</h4>
                <p className="text-sm text-muted-foreground">Weekly updates on new arrivals and trends</p>
              </div>
              <ToggleSwitch 
                enabled={settings.newsletterSubscription} 
                onToggle={() => toggleSetting('newsletterSubscription')} 
              />
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
              <div>
                <h4 className="font-semibold text-foreground mb-1">SMS Notifications</h4>
                <p className="text-sm text-muted-foreground">Get text messages for important updates</p>
              </div>
              <ToggleSwitch 
                enabled={settings.smsNotifications} 
                onToggle={() => toggleSetting('smsNotifications')} 
              />
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Push Notifications</h4>
                <p className="text-sm text-muted-foreground">Browser push notifications</p>
              </div>
              <ToggleSwitch 
                enabled={settings.pushNotifications} 
                onToggle={() => toggleSetting('pushNotifications')} 
              />
            </div>
          </CardContent>
        </Card>

        {/* Privacy & Security */}
        <Card className="rounded-3xl border-border">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="font-heading text-xl">Privacy & Security</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Profile Visibility</h4>
                <p className="text-sm text-muted-foreground">Control who can see your profile</p>
              </div>
              <Button variant="outline" size="sm" className="rounded-2xl">
                Private
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Purchase History</h4>
                <p className="text-sm text-muted-foreground">Allow others to see your purchases</p>
              </div>
              <ToggleSwitch 
                enabled={settings.showPurchaseHistory} 
                onToggle={() => toggleSetting('showPurchaseHistory')} 
              />
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Data Sharing</h4>
                <p className="text-sm text-muted-foreground">Share analytics data to improve experience</p>
              </div>
              <ToggleSwitch 
                enabled={settings.allowDataSharing} 
                onToggle={() => toggleSetting('allowDataSharing')} 
              />
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Two-Factor Authentication</h4>
                <div className="text-sm text-muted-foreground">
                  <Badge variant="outline" className="rounded-lg">Not Enabled</Badge>
                </div>
              </div>
              <Button variant="outline" size="sm" className="rounded-2xl">
                Setup
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Saved Addresses */}
        <Card className="rounded-3xl border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">Saved Addresses</CardTitle>
              </div>
              <Button variant="outline" size="sm" className="rounded-2xl">
                <Plus className="h-4 w-4 mr-1" />
                Add New
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 rounded-2xl bg-muted/30 border border-border">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="rounded-lg">
                    <Check className="h-3 w-3 mr-1" />
                    Default
                  </Badge>
                  <Badge variant="outline" className="rounded-lg">Home</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <p className="font-semibold text-foreground">John Doe</p>
                <p className="text-muted-foreground">145 Russell Street, Apt 4B</p>
                <p className="text-muted-foreground">San Francisco, CA 94016</p>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-muted/30 border border-border">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="rounded-lg">Work</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-1 text-sm">
                <p className="font-semibold text-foreground">John Doe</p>
                <p className="text-muted-foreground">789 Tech Avenue</p>
                <p className="text-muted-foreground">San Francisco, CA 94105</p>
                <p className="text-muted-foreground">+1 (555) 987-6543</p>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-3 rounded-2xl">
                Set as Default
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods */}
        <Card className="rounded-3xl border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">Payment Methods</CardTitle>
              </div>
              <Button variant="outline" size="sm" className="rounded-2xl">
                <Plus className="h-4 w-4 mr-1" />
                Add Card
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="rounded-lg">
                    <Check className="h-3 w-3 mr-1" />
                    Default
                  </Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-background">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Visa ending in 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/2026</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-muted/30 border border-border">
              <div className="flex items-start justify-between mb-4">
                <div />
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-xl text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-background">
                  <CreditCard className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Mastercard ending in 8888</p>
                  <p className="text-sm text-muted-foreground">Expires 09/2025</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-3 rounded-2xl">
                Set as Default
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Display Preferences */}
        <Card className="rounded-3xl border-border">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-primary/10">
                <Monitor className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="font-heading text-xl">Display Preferences</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-2xl bg-muted/30">
              <h4 className="font-semibold text-foreground mb-3">Theme</h4>
              <div className="grid grid-cols-3 gap-3">
                <button 
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    settings.theme === 'light' 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border hover:border-muted-foreground'
                  }`}
                  onClick={() => setSettings({...settings, theme: 'light'})}
                >
                  <Sun className="h-5 w-5 mx-auto mb-2" />
                  <span className="text-sm">Light</span>
                </button>
                <button 
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    settings.theme === 'dark' 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border hover:border-muted-foreground'
                  }`}
                  onClick={() => setSettings({...settings, theme: 'dark'})}
                >
                  <Moon className="h-5 w-5 mx-auto mb-2" />
                  <span className="text-sm">Dark</span>
                </button>
                <button 
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    settings.theme === 'system' 
                      ? 'border-primary bg-primary/10' 
                      : 'border-border hover:border-muted-foreground'
                  }`}
                  onClick={() => setSettings({...settings, theme: 'system'})}
                >
                  <Monitor className="h-5 w-5 mx-auto mb-2" />
                  <span className="text-sm">System</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-muted/30">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Language</h4>
                <p className="text-sm text-muted-foreground">Choose your preferred language</p>
              </div>
              <Button variant="outline" size="sm" className="rounded-2xl">
                English (US)
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Account Management */}
        <Card className="rounded-3xl border-border border-destructive/20">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-destructive/10">
                <Lock className="h-5 w-5 text-destructive" />
              </div>
              <CardTitle className="font-heading text-xl text-destructive">Danger Zone</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-destructive/5 border border-destructive/20">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Deactivate Account</h4>
                <p className="text-sm text-muted-foreground">Temporarily disable your account</p>
              </div>
              <Button variant="outline" size="sm" className="rounded-2xl border-destructive text-destructive hover:bg-destructive hover:text-white">
                Deactivate
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-destructive/5 border border-destructive/20">
              <div>
                <h4 className="font-semibold text-foreground mb-1">Delete Account</h4>
                <p className="text-sm text-muted-foreground">Permanently delete your account and data</p>
              </div>
              <Button variant="outline" size="sm" className="rounded-2xl border-destructive text-destructive hover:bg-destructive hover:text-white">
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}
