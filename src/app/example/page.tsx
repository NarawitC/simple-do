"use client";

import { AlertCircle, Info, User, Settings, Home } from "lucide-react";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Example() {
  const [progress, setProgress] = useState(60);
  const [switchChecked, setSwitchChecked] = useState(false);

  const colorSwatches = [
    {
      name: "Primary",
      className: "bg-primary",
      textClass: "text-primary-foreground",
    },
    {
      name: "Secondary",
      className: "bg-secondary",
      textClass: "text-secondary-foreground",
    },
    {
      name: "Accent",
      className: "bg-accent",
      textClass: "text-accent-foreground",
    },
    {
      name: "Muted",
      className: "bg-muted",
      textClass: "text-muted-foreground",
    },
    {
      name: "Destructive",
      className: "bg-destructive",
      textClass: "text-destructive-foreground",
    },
    {
      name: "Background",
      className: "bg-background",
      textClass: "text-foreground",
    },
    {
      name: "Card",
      className: "bg-card",
      textClass: "text-card-foreground",
    },
    {
      name: "Popover",
      className: "bg-popover",
      textClass: "text-popover-foreground",
    },
    {
      name: "Border",
      className: "bg-border",
      textClass: "text-foreground",
    },
    {
      name: "Input",
      className: "bg-input",
      textClass: "text-foreground",
    },
    {
      name: "Ring",
      className: "bg-ring",
      textClass: "text-foreground",
    },
  ];

  const chartColors = [
    { name: "Chart 1", className: "bg-chart-1" },
    { name: "Chart 2", className: "bg-chart-2" },
    { name: "Chart 3", className: "bg-chart-3" },
    { name: "Chart 4", className: "bg-chart-4" },
    { name: "Chart 5", className: "bg-chart-5" },
  ];

  return (
    <TooltipProvider>
      <div className="bg-background text-foreground min-h-screen">
        {/* Header */}
        <div className="bg-card border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold">Theme Showcase</h1>
                <p className="text-muted-foreground">
                  Visual testing ground for all UI components and colors
                </p>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="container mx-auto space-y-12 px-4 py-8">
          {/* Navigation */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Navigation</h2>
            <div className="space-y-4">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">
                      <Home className="h-4 w-4" />
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/components">
                      Components
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Example</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </section>

          {/* Color Palette */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Color Palette</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {colorSwatches.map((color) => (
                <Card key={color.name}>
                  <CardContent className="p-4">
                    <div
                      className={`mb-2 h-16 w-full rounded-md border ${color.className}`}
                    />
                    <div className="text-sm font-medium">{color.name}</div>
                    <div className="text-muted-foreground font-mono text-xs">
                      {color.className}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Text: {color.textClass}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <h3 className="mt-8 mb-4 text-xl font-medium">Chart Colors</h3>
            <div className="grid grid-cols-5 gap-4">
              {chartColors.map((color) => (
                <Card key={color.name}>
                  <CardContent className="p-4">
                    <div
                      className={`mb-2 h-12 w-full rounded-md border ${color.className}`}
                    />
                    <div className="text-sm font-medium">{color.name}</div>
                    <div className="text-muted-foreground font-mono text-xs">
                      {color.className}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Typography */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Typography</h2>
            <Card>
              <CardContent className="space-y-4 p-6">
                <h1 className="text-4xl font-bold">Heading 1</h1>
                <h2 className="text-3xl font-semibold">Heading 2</h2>
                <h3 className="text-2xl font-medium">Heading 3</h3>
                <h4 className="text-xl font-medium">Heading 4</h4>
                <p className="text-base">
                  Regular paragraph text with normal weight and spacing.
                </p>
                <p className="text-muted-foreground text-sm">
                  Muted text for secondary information.
                </p>
                <code className="bg-muted rounded px-2 py-1 font-mono text-sm">
                  Inline code example
                </code>
              </CardContent>
            </Card>
          </section>

          {/* Buttons */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Buttons</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Button Variants</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Button>Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Button Sizes</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">
                      <Settings className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Form Components */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Form Components</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Input Fields</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here..."
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Selection Components</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Select Option</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms">Accept terms and conditions</Label>
                  </div>

                  <RadioGroup defaultValue="option1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option1" id="r1" />
                      <Label htmlFor="r1">Option 1</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option2" id="r2" />
                      <Label htmlFor="r2">Option 2</Label>
                    </div>
                  </RadioGroup>

                  <div className="flex items-center space-x-2">
                    <Switch
                      id="airplane-mode"
                      checked={switchChecked}
                      onCheckedChange={setSwitchChecked}
                    />
                    <Label htmlFor="airplane-mode">Airplane Mode</Label>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Feedback Components */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Feedback Components</h2>
            <div className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This is an informational alert with default styling.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  This is a destructive alert showing an error state.
                </AlertDescription>
              </Alert>

              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>

              <div className="space-y-2">
                <Label>Progress: {progress}%</Label>
                <Progress value={progress} className="w-full" />
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    onClick={() => setProgress(Math.max(0, progress - 10))}
                  >
                    -10
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => setProgress(Math.min(100, progress + 10))}
                  >
                    +10
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Loading Skeletons</Label>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[150px]" />
                </div>
              </div>
            </div>
          </section>

          {/* Layout Components */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Layout Components</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Avatars & Separators</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarFallback>
                        <User className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <Separator />

                  <div className="flex items-center gap-4">
                    <span>Left content</span>
                    <Separator orientation="vertical" className="h-6" />
                    <span>Right content</span>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog Example</DialogTitle>
                      <DialogDescription>
                        This is an example dialog with a title and description.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p>Dialog content goes here.</p>
                    </div>
                  </DialogContent>
                </Dialog>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Open Popover</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="space-y-2">
                      <h4 className="font-medium">Popover Content</h4>
                      <p className="text-muted-foreground text-sm">
                        This is popover content with additional information.
                      </p>
                    </div>
                  </PopoverContent>
                </Popover>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a helpful tooltip</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          </section>

          {/* Tabs */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Tabs</h2>
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="account">
                  <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                  </TabsList>
                  <TabsContent value="account" className="mt-4">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Account Settings</h3>
                      <p className="text-muted-foreground">
                        Manage your account information here.
                      </p>
                      <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" defaultValue="johndoe" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="password" className="mt-4">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Password Settings</h3>
                      <p className="text-muted-foreground">
                        Update your password here.
                      </p>
                      <div className="space-y-2">
                        <Label htmlFor="current-password">
                          Current Password
                        </Label>
                        <Input id="current-password" type="password" />
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="settings" className="mt-4">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        Application Settings
                      </h3>
                      <p className="text-muted-foreground">
                        Configure your application preferences.
                      </p>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="notifications" />
                        <Label htmlFor="notifications">
                          Enable notifications
                        </Label>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </section>

          {/* Interactive States */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold">Interactive States</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Normal State</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Click me</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Disabled State</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button disabled className="w-full">
                    Disabled
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Loading State</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </TooltipProvider>
  );
}
