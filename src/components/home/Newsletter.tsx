'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { EnvelopeSimple } from '@phosphor-icons/react'

export default Newsletter = () => {
  return (
    <form action="/subscribe" className="rounded-2xl border border-muted p-6">
      <h2 className="flex text-sm font-semibold ">
        <EnvelopeSimple size={26} weight="duotone" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        在我发布新内容时接收通知，并且您可以随时取消订阅
      </p>
      <div className="mt-6 flex">
        <Input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 sm:text-sm"
        />
        <Button
          type="submit"
          className="ml-4 flex-none bg-primary text-primary-foreground dark:bg-primary-foreground dark:text-primary"
        >
          加入
        </Button>
      </div>
    </form>
  )
}
