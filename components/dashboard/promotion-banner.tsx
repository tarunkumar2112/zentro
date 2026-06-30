"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface PromotionBannerProps {
  title: string
  description: string
  image: string
  link: string
  linkText?: string
}

export function PromotionBanner({
  title,
  description,
  image,
  link,
  linkText = "Shop Now"
}: PromotionBannerProps) {
  return (
    <Card className="rounded-3xl border-primary/20 bg-gradient-to-r from-primary/10 to-primary/5 overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex-1 p-8 space-y-4">
            <h2 className="font-heading text-3xl text-foreground">{title}</h2>
            <p className="text-muted-foreground max-w-md">{description}</p>
            <Link href={link}>
              <Button className="rounded-2xl bg-primary hover:bg-primary/90">
                {linkText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="relative w-full md:w-80 h-64 md:h-80">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
