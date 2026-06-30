import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type OrderStatus = "delivered" | "processing" | "shipped" | "cancelled" | "pending"

interface OrderStatusBadgeProps {
  status: OrderStatus
  className?: string
}

export function OrderStatusBadge({ status, className }: OrderStatusBadgeProps) {
  const statusConfig = {
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
    }
  }

  const config = statusConfig[status] || statusConfig.pending

  return (
    <Badge variant="outline" className={cn("rounded-lg font-medium", config.className, className)}>
      {config.label}
    </Badge>
  )
}
