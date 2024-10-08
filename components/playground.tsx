/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/cQytc1k0yzX
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export function Playground() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-30 flex items-center h-16 px-4 border-b bg-background sm:px-6">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
          <CpuIcon className="w-6 h-6" />
          <span>AI Playground</span>
        </Link>
        <nav className="hidden font-medium sm:flex flex-row items-center gap-5 text-sm lg:gap-6 ml-auto">
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Models
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Datasets
          </Link>
          <Link href="#" className="text-muted-foreground" prefetch={false}>
            Experiments
          </Link>
        </nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="ml-auto">
              <img
                src="/placeholder.svg"
                width={32}
                height={32}
                className="rounded-full"
                alt="Avatar"
                style={{ aspectRatio: "32/32", objectFit: "cover" }}
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex-1 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 p-4 md:p-8">
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Models</CardTitle>
              <CardDescription>Manage your AI models.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Model" />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">GPT-3</div>
                      <div className="text-sm text-muted-foreground">General-purpose language model</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoveHorizontalIcon className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Model" />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">DALL-E 2</div>
                      <div className="text-sm text-muted-foreground">Image generation model</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoveHorizontalIcon className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Model" />
                      <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Whisper</div>
                      <div className="text-sm text-muted-foreground">Speech recognition model</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoveHorizontalIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Add New Model</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Datasets</CardTitle>
              <CardDescription>Manage your AI datasets.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Dataset" />
                      <AvatarFallback>D</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Common Crawl</div>
                      <div className="text-sm text-muted-foreground">Large web crawl dataset</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoveHorizontalIcon className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Dataset" />
                      <AvatarFallback>D</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">ImageNet</div>
                      <div className="text-sm text-muted-foreground">Large image classification dataset</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoveHorizontalIcon className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Dataset" />
                      <AvatarFallback>D</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">LibriSpeech</div>
                      <div className="text-sm text-muted-foreground">Speech recognition dataset</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoveHorizontalIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Add New Dataset</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Experiments</CardTitle>
              <CardDescription>Track your AI experiments.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Experiment" />
                      <AvatarFallback>E</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Image Generation</div>
                      <div className="text-sm text-muted-foreground">Experiment with DALL-E 2</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoveHorizontalIcon className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Experiment" />
                      <AvatarFallback>E</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Text Generation</div>
                      <div className="text-sm text-muted-foreground">Experiment with GPT-3</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoveHorizontalIcon className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8">
                      <AvatarImage src="/placeholder-user.jpg" alt="Experiment" />
                      <AvatarFallback>E</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Speech Recognition</div>
                      <div className="text-sm text-muted-foreground">Experiment with Whisper</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoveHorizontalIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Create New Experiment</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>AI Playground</CardTitle>
              <CardDescription>Generate AI-created content.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="prompt">Prompt</Label>
                  <Textarea id="prompt" placeholder="Enter your prompt here..." rows={3} className="resize-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="model">Model</Label>
                    <Select id="model">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a model" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gpt3">GPT-3</SelectItem>
                        <SelectItem value="dalle2">DALL-E 2</SelectItem>
                        <SelectItem value="whisper">Whisper</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="temperature">Temperature</Label>
                    <Slider id="temperature" min={0} max={1} step={0.1} defaultValue={[0.5]} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="max-tokens">Max Tokens</Label>
                    <Input id="max-tokens" type="number" defaultValue={100} />
                  </div>
                  <div>
                    <Label htmlFor="top-p">Top-P</Label>
                    <Slider id="top-p" min={0} max={1} step={0.1} defaultValue={[0.9]} />
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button>Generate</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Output</CardTitle>
              <CardDescription>View the generated content.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div>
                  <Tabs defaultValue="image">
                    <TabsList>
                      <TabsTrigger value="image">Image</TabsTrigger>
                      <TabsTrigger value="text">Text</TabsTrigger>
                      <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                    <TabsContent value="image">
                      <div className="aspect-[4/3] bg-muted rounded-md overflow-hidden">
                        <img
                          src="/placeholder.svg"
                          alt="Generated Image"
                          width="400"
                          height="300"
                          className="object-cover w-full h-full"
                          style={{ aspectRatio: "400/300", objectFit: "cover" }}
                        />
                      </div>
                    </TabsContent>
                    <TabsContent value="text">
                      <div className="prose">
                        <p>
                          This is the generated text output from the AI model. It can be a paragraph, a poem, or any
                          other type of textual content.
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="code">
                      <div className="bg-muted rounded-md p-4 overflow-auto">
                        <pre className="text-sm font-mono">
                          <code>{`
import React from 'react'

function MyComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a sample React component.</p>
    </div>
  )
}

export default MyComponent
                            `}</code>
                        </pre>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                <div className="flex justify-end">
                  <Button variant="outline">Save</Button>
                  <Button className="ml-2">Share</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function CpuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function MoveHorizontalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  )
}
