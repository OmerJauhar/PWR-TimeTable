import { useState, useEffect } from "react"
import Link from "next/link"
import { Calendar, Bell, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LandingPage() {
  const [roleNumber, setRoleNumber] = useState("")

  const handleRoleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "") // Remove non-digit characters

    if (value.length <= 2) {
      setRoleNumber(value)
    } else if (value.length <= 6) {
      setRoleNumber(`${value.slice(0, 2)}P-${value.slice(2)}`)
    }
  }

  useEffect(() => {
    if (roleNumber.length === 2) {
      setRoleNumber(`${roleNumber}P-`)
    }
  }, [roleNumber])

  const isValidRoleNumber = /^\d{2}P-\d{4}$/.test(roleNumber)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Calendar className="h-6 w-6 mr-2" />
          <span className="font-bold">TimetableSync</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Never miss a class again! 🚀
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Get your personalized timetable seamlessly integrated into Google Calendar with automated reminders.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
                  <Input
                    type="text"
                    placeholder="Enter your role number"
                    className="flex-grow"
                    required
                    value={roleNumber}
                    onChange={handleRoleNumberChange}
                    maxLength={8}
                    pattern="\d{2}P-\d{4}"
                  />
                  <Button type="submit" disabled={!isValidRoleNumber}>
                    Get My Timetable
                  </Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Enter your FAST-NU Peshawar Campus role number (e.g., 21P-8055)
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Calendar className="h-12 w-12 mb-2 text-primary" />
                <h3 className="text-xl font-bold">Instant Google Calendar Sync</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Your schedule automatically synced to Google Calendar
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Bell className="h-12 w-12 mb-2 text-primary" />
                <h3 className="text-xl font-bold">Smart Notifications</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">Get reminders before every class</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <CheckCircle className="h-12 w-12 mb-2 text-primary" />
                <h3 className="text-xl font-bold">Simple Role Number Entry</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Just enter your role number, and we'll do the rest!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              How It Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">1</div>
                <h3 className="text-xl font-bold">Enter Your Role Number</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Simply input your FAST-NU Peshawar Campus role number
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">2</div>
                <h3 className="text-xl font-bold">We Fetch Your Timetable</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Our system automatically retrieves and converts your schedule
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">3</div>
                <h3 className="text-xl font-bold">Sync and Go!</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  One-click import to your Google Calendar and you're all set
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Start scheduling smarter today!
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of FAST-NU students who are already acing their semesters with our tool.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 TimetableSync. All rights reserved.</p>
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Made with ❤️ by{" "}
          <Link
            href="https://www.foslx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline"
          >
            FOSLX
          </Link>
        </span>
      </footer>
    </div>
  )
}

