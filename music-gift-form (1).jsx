import React, { useState } from 'react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { MoonIcon, SunIcon } from "lucide-react"

export default function Component() {
  const { theme, setTheme } = useTheme()
  const [selectedPackage, setSelectedPackage] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitting demo request:", { name, email, phone, selectedPackage })
    // Here you would typically send this data to your backend
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between border-b">
        <h1 className="text-2xl font-bold">SongGift</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <SunIcon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </header>
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Give the Gift of Music
            </h2>
            <p className="text-muted-foreground md:text-lg">
              Create a personalized song, business jingle, or choose from our sample options. Select your genre, mood, and more to craft the perfect musical gift or brand anthem.
            </p>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="genre">Genre</Label>
              <Select>
                <SelectTrigger id="genre" className="w-full">
                  <SelectValue placeholder="Select a genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pop">Pop</SelectItem>
                  <SelectItem value="rock">Rock</SelectItem>
                  <SelectItem value="hiphop">Hip Hop</SelectItem>
                  <SelectItem value="country">Country</SelectItem>
                  <SelectItem value="jazz">Jazz</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="mood">Mood</Label>
              <Select>
                <SelectTrigger id="mood" className="w-full">
                  <SelectValue placeholder="Select a mood" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="happy">Happy</SelectItem>
                  <SelectItem value="romantic">Romantic</SelectItem>
                  <SelectItem value="melancholic">Melancholic</SelectItem>
                  <SelectItem value="energetic">Energetic</SelectItem>
                  <SelectItem value="calm">Calm</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="structure">Song Structure</Label>
              <Select>
                <SelectTrigger id="structure" className="w-full">
                  <SelectValue placeholder="Select song structure" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="verse-chorus">Verse-Chorus</SelectItem>
                  <SelectItem value="verse-chorus-bridge">Verse-Chorus-Bridge</SelectItem>
                  <SelectItem value="aaba">AABA</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="details">Key Details (max 180 words)</Label>
              <Textarea
                id="details"
                placeholder="Enter key details to include in the song or jingle"
                className="min-h-[100px] w-full"
              />
            </div>
            <div className="bg-muted p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-semibold">Risk-Free Demo</h3>
              <p className="text-muted-foreground">
                We're confident you'll love our curated music packages. That's why we offer a risk-free demo:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Select your music preferences</li>
                <li>Receive a personalized sample package</li>
                <li>Listen and enjoy at your leisure</li>
                <li>Only provide payment details if you're completely satisfied</li>
              </ul>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. We'll only request your credit card information after you've experienced and approved your custom demo package.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-muted-foreground">
                Please provide your contact details so we can send you your personalized demo.
              </p>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">Submit Demo Request</Button>
            </div>
            <div className="space-y-4">
              <Label>Choose Your Package</Label>
              <RadioGroup value={selectedPackage} onValueChange={setSelectedPackage}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="cursor-pointer bg-blue-50 dark:bg-blue-900 flex flex-col">
                    <CardHeader>
                      <CardTitle>The Starter Track Package</CardTitle>
                      <CardDescription className="text-3xl font-bold text-primary">$99</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="mb-2 font-medium">Perfect for a quick start to your audio journey.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Get 2 curated sample songs within just 48 hours</li>
                        <li>You choose your favorite, and we'll fine-tune it just for you</li>
                        <li>Final digital delivery of your song within 5 days</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer bg-green-50 dark:bg-green-900 flex flex-col">
                    <CardHeader>
                      <CardTitle>Premium Audio File Delivery</CardTitle>
                      <CardDescription className="text-3xl font-bold text-primary">$299</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="mb-2 font-medium">Fast, high-quality audio, tailored to perfection.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Receive 4 sample tracks within 24 hours</li>
                        <li>Pick the one that resonates with your vision</li>
                        <li>Get the final mastered .wav or .mp3 file within 10 days, CD quality - perfect for any use</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer bg-purple-50 dark:bg-purple-900 relative overflow-hidden flex flex-col">
                    <div className="absolute top-5 right-[-40px] w-[170px] h-[30px] overflow-hidden rotate-45">
                      <div className="absolute top-0 left-0 w-full h-full bg-yellow-400 text-yellow-900 font-bold text-sm flex items-center justify-center shadow-md">
                        Most Popular
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle>Streaming Superstar Release</CardTitle>
                      <CardDescription className="text-3xl font-bold text-primary">$399</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="mb-2 font-medium">Take your song from concept to the world.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Get a digital receipt and preview of your custom song within 24 hours</li>
                        <li>Full distribution for streaming anytime on Spotify, Apple Music, Amazon Music, and YouTube Music</li>
                        <li>Your track fully released on all major platforms within 10 days — ready to wow the world</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="cursor-pointer bg-orange-50 dark:bg-orange-900 flex flex-col">
                    <CardHeader>
                      <CardTitle>Ultimate Business Jingle Package</CardTitle>
                      <CardDescription className="text-3xl font-bold text-primary">Contact for Pricing</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="mb-2 font-medium">Custom jingles that leave a lasting impression.</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Receive 4 unique jingle samples within just 24 hours — crafted to fit your brand</li>
                        <li>Final version delivered in only 3 days</li>
                        <li>We handle everything: full distribution on streaming platforms with 100% licensing rights transferred to you, so you own your brand's sound forever</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </RadioGroup>
            </div>
          </form>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        © 2024 SongGift. All rights reserved.
      </footer>
    </div>
  )
}