import { LinkButton } from '@/components/button'

export default function ToolsLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <main className="text-neutral-800 min-h-screen flex flex-col items-center justify-center space-y-10 p-6">
        {children}
        <LinkButton className='' href="/" text="Back"/>
      </main>
    )
  }