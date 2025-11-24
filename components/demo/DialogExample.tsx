'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button' // Existing custom button
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

/**
 * Demo component to verify shadcn/ui integration
 * This is for testing purposes only, not used in production
 */
export function DialogExample() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="primary">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>shadcn/ui Integration Test</DialogTitle>
          <DialogDescription>
            This dialog verifies that shadcn/ui components work correctly
            with AiONIQ design tokens and custom components.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-body">
            Dialog is working! shadcn/ui is successfully integrated.
          </p>
          <p className="text-body-small text-muted-foreground">
            This component uses:
          </p>
          <ul className="text-body-small space-y-2 list-disc list-inside">
            <li>AiONIQ typography tokens (font-body, font-heading)</li>
            <li>AiONIQ spacing tokens (padding, gaps)</li>
            <li>AiONIQ radius tokens (rounded corners)</li>
            <li>AiONIQ color tokens (background, text, borders)</li>
            <li>Custom AiONIQ Button component as trigger</li>
          </ul>
          <div className="pt-4">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Close Dialog
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

