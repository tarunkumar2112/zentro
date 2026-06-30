import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type OrderStatus = "pending" | "paid" | "processing" | "shipped" | "delivered" | "cancelled"
type ProductStatus = "active" | "inactive" | "outofstock"
type PaymentStatus = "pending" | "paid" | "failed" | "refunded"

interface StatusBadgeProps {
  status: OrderStatus | ProductStatus | PaymentStatus
  type?: "order" | "product" | "payment"
  className?: string
}

export function StatusBadge({ status, type = "order", className }: StatusBadgeProps) {
  const statusConfig = {
    // Order statuses
    delivered: {
      label: "Delivered",
      className: "bg-success/10 text-success hover:bg-success/20 border-success/20"
    },
    processing: {
      label: "Processing",
      className: "bg-warning/10 text-warning hover:bg-warning/20 border-warning/20"
    },
    shipped: {
      label: "Shipped",
      className: "bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
    },
    cancelled: {
      label: "Cancelled",
      className: "bg-destructive/10 text-destructive hover:bg-destructive/20 border-destructive/20"
    },
    pending: {
      label: "Pending",
      className: "bg-muted text-muted-foreground hover:bg-muted/80 border-border"
    },
    paid: {
      label: "Paid",
      className: "bg-success/10 text-success hover:bg-success/20 border-success/20"
    },
    failed: {
      label: "Failed",
      className: "bg-destructive/10 text-destructive hover:bg-destructive/20 border-destructive/20"
    },
    refunded: {
      label: "Refunded",
      className: "bg-muted text-muted-foreground hover:bg-muted/80 border-border"
    },
    // Product statuses
    active: {
      label: "Active",
      className: "bg-success/10 text-success hover:bg-success/20 border-success/20"
    },
    inactive: {
      label: "Inactive",
      className: "bg-muted text-muted-foreground hover:bg-muted/80 border-border"
    },
    outofstock: {
      label: "Out of Stock",
      className: "bg-destructive/10 text-destructive hover:bg-destructive/20 border-destructive/20"
    }
  }

  const config = statusConfig[status] || statusConfig.pending

  return (
    <Badge variant="outline" className={cn("rounded-lg font-medium capitalize", config.className, className)}>
      {config.label}
    </Badge>
  )
}
