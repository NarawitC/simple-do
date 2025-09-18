import Link from 'next/link';
import { siX, siGithub } from 'simple-icons';
import { SimpleIcon } from '@/components/custom/simple-icon';

export function Footer() {
  return (
    <footer className="border-border bg-muted text-muted-foreground mt-2 border-t">
      <div className="container mx-auto flex flex-col gap-6 px-4 py-6">
        <section className="flex flex-wrap gap-2">
          <section
            aria-label="Company information"
            className="min-w-[200px] flex-1"
          >
            <p className="text-foreground mb-2 font-bold">SimpleDo</p>
            <p className="text-sm">Simple task management made easy</p>
          </section>
          <section
            aria-label="Site navigation"
            className="min-w-[200px] flex-1"
          >
            <p className="text-foreground mb-2 font-bold">Quick Links</p>
            <nav className="text-sm">
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/features">Features</Link>
                </li>
                <li>
                  <Link href="/help">Help</Link>
                </li>
              </ul>
            </nav>
          </section>
          <section className="min-w-[200px] flex-1">
            <p className="text-foreground mb-2 font-bold">Features</p>
            <nav className="text-sm">
              <ul>
                <li>
                  <Link href="#">Create Tasks</Link>
                </li>
                <li>
                  <Link href="#">Set Due Dates</Link>
                </li>
                <li>
                  <Link href="#">Dark Mode</Link>
                </li>
              </ul>
            </nav>
          </section>

          <section
            aria-label="Social media links"
            className="min-w-[200px] flex-1"
          >
            <p className="text-foreground mb-2 font-bold">Follow Us</p>
            <nav className="text-sm">
              <ul>
                <li>
                  <Link
                    href="#"
                    aria-label="X"
                    className="hover:text-foreground flex items-center gap-2"
                  >
                    <SimpleIcon icon={siX} size={16} />X
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    aria-label="GitHub"
                    className="hover:text-foreground flex items-center gap-2"
                  >
                    <SimpleIcon icon={siGithub} size={16} />
                    GitHub
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        </section>

        <section className="flex flex-col items-baseline justify-between sm:flex-row">
          <p className="text-sm">© 2025 Narawit C. All rights reserved.</p>
          <p className="text-muted-foreground/70 text-xs">
            Just code and keep learning. 💻
          </p>
        </section>
      </div>
    </footer>
  );
}
