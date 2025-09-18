'use client';

import { CheckSquare } from 'lucide-react';

import { SearchModal } from '@/components/custom/search-modal';
import { ThemeToggle } from '@/components/custom/theme-toggle';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export function Header() {
  return (
    <header className="border-border bg-background sticky top-0 z-50 w-full items-center border-b">
      <div className="container mx-auto flex h-16 items-center justify-between gap-4">
        <section className="flex items-center gap-3">
          <div className="border-border flex h-8 w-8 items-center justify-center rounded-lg border">
            <CheckSquare className="text-primary h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight">SimpleDo</p>
            <p className="text-muted-foreground hidden text-xs sm:block">
              Minimal task management
            </p>
          </div>
        </section>

        <div className="flex items-center gap-3">
          <SearchModal />
          <ThemeToggle />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>TEST</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
