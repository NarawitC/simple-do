"use client";

import _ from "lodash";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AppBreadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const buildPath = (index: number) => {
    return "/" + pathSegments.slice(0, index + 1).join("/");
  };
  const linkFromPathSegmentIndex = (index: number) => (
    <Link href={buildPath(index)}>{_.capitalize(pathSegments[index])}</Link>
  );

  return (
    <Breadcrumb className="container mx-auto my-8">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {pathSegments.length > 2 && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="size-4" />
                  <span className="sr-only">Toggle menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {pathSegments
                    .slice(0, pathSegments.length - 2)
                    .map((pathSegment, idx) => (
                      <DropdownMenuItem key={idx} asChild>
                        {linkFromPathSegmentIndex(idx)}
                      </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
          </>
        )}

        {pathSegments.length > 1 && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                {linkFromPathSegmentIndex(pathSegments.length - 2)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}

        {pathSegments.length > 0 && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbPage>
              {linkFromPathSegmentIndex(pathSegments.length - 1)}
            </BreadcrumbPage>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
