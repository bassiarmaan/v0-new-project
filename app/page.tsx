"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  CheckCircle,
  Download,
  Smartphone,
  Activity,
  BarChart3,
  ChevronDown,
  ChevronUp,
  Star,
  Users,
  Zap,
  Play,
  ArrowDown,
  Gauge,
  Target,
  LineChart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import SimpleBalls from "@/components/simple-balls"

export default function Home() {
  const [isQrModalOpen, setIsQrModalOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeFeature, setActiveFeature] = useState(0)
  const featuresRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      title: "Ball Speed Tracking",
      description: "Measure your shot speed with precision using advanced computer vision",
      icon: <Gauge className="h-6 w-6 text-white" />,
      image: "/ball-tracker-new.png",
      color: "from-red-500 to-orange-500",
      imageClass: "", // Remove rotation class
      items: [
        "Records rallies using iPhone's camera",
        "Tracks ball movement frame-by-frame",
        "Calculates average and maximum speeds",
        "Provides shot-by-shot breakdowns",
      ],
    },
    {
      title: "Shot Placement Heatmaps",
      description: "Visualize where your shots land to identify patterns and improve accuracy",
      icon: <Target className="h-6 w-6 text-white" />,
      image: "/heatmap-new.png",
      color: "from-orange-500 to-yellow-500",
      imageClass: "", // No rotation
      items: [
        "Estimates where shots land on the table",
        "Generates interactive heatmaps",
        "Identifies patterns and inconsistencies",
        "Visualizes your strengths and weaknesses",
      ],
    },
    {
      title: "Session Summaries",
      description: "Get detailed insights after each training session to track your progress",
      icon: <LineChart className="h-6 w-6 text-white" />,
      image: "/session-summary.png",
      color: "from-yellow-500 to-green-500",
      imageClass: "", // No rotation
      items: [
        "Visual breakdown after each session",
        "Total shots and speed statistics",
        "Heatmap visualization of your game",
        "Save sessions to track progress over time",
      ],
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [features.length])

  const faqs = [
    {
      question: "What is PongPulse?",
      answer:
        "PongPulse is an iPhone app that helps table tennis players improve their game by analyzing ball speed and shot placement heatmaps using just their phone camera. No special hardware required.",
    },
    {
      question: "Do I need any extra equipment?",
      answer:
        "Nope! All you need is an iPhone (with a decent camera — iPhone 11 or newer recommended), a ping pong table, and a place to position your phone behind or above the table. That's it. No proprietary balls, sensors, or stands.",
    },
    {
      question: "What does PongPulse track?",
      answer:
        "Right now, PongPulse tracks ball speed (average and top speed per session) and shot placement using heatmaps (where your shots tend to land). These metrics help players train with intent — not guesswork.",
    },
    {
      question: "How accurate is it?",
      answer:
        "We use Apple's Vision Framework and optimized computer vision techniques to track ball movement frame-by-frame. Speed estimates are reasonably accurate when the camera is positioned correctly. For best results: use a white ball, avoid cluttered backgrounds, and keep lighting consistent.",
    },
    {
      question: "Will it track spin too?",
      answer:
        "Not yet — but we're working on it! Spin tracking is on our roadmap. It requires either patterned balls or more advanced motion modeling, which we're actively developing for a future update.",
    },
    {
      question: "Can I save my sessions or track progress?",
      answer:
        "Yes! Every session you record is saved locally on your device. You can compare past speeds and heatmaps to measure your improvement over time. We'll soon introduce training streaks, progress graphs, and optional cloud sync.",
    },
  ]

  const testimonials = [
    {
      name: "Michael Chen",
      role: "Club Player",
      quote:
        "PongPulse showed me I was consistently hitting to my opponent's forehand. Once I saw the heatmap, I adjusted my strategy and started winning more matches.",
      rating: 5,
    },
    {
      name: "Sarah Williams",
      role: "College Team Captain",
      quote:
        "Our team uses PongPulse for training sessions. The speed tracking has turned practice into a fun competition, and everyone's improving faster.",
      rating: 5,
    },
    {
      name: "David Park",
      role: "Recreational Player",
      quote:
        "I was skeptical about using just a phone camera, but the accuracy is impressive. It's like having a coach that points out patterns I never noticed before.",
      rating: 4,
    },
    {
      name: "Coach Liu",
      role: "Youth Team Coach",
      quote:
        "The visual feedback helps my students understand concepts that were hard to explain with words alone. It's become an essential coaching tool.",
      rating: 5,
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900 text-white">
      <SimpleBalls />

      {/* Header */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-slate-900/70 border-b border-slate-800">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="PongPulse Logo" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              PongPulse
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              FAQ
            </button>
          </nav>
          <Button
            onClick={() => setIsQrModalOpen(true)}
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0"
          >
            Download App
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section - Full Screen with Centered Content */}
        <section className="relative min-h-screen flex flex-col justify-center items-center pt-16 overflow-hidden">
          <div className="container relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 opacity-0 animate-[fadeIn_0.8s_0.2s_forwards]">
              Ping Pong Training,{" "}
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Reinvented.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto opacity-0 animate-[fadeIn_0.8s_0.4s_forwards]">
              A clean, camera-powered app that gives you real feedback on your shots — without changing how you play.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-[fadeIn_0.8s_0.6s_forwards]">
              <Button
                size="lg"
                onClick={() => setIsQrModalOpen(true)}
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0 gap-2 h-14 px-8 text-lg"
              >
                <Download className="h-5 w-5" />
                Download on iOS
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-white hover:bg-slate-800 gap-2 h-14 px-8 text-lg"
                onClick={scrollToFeatures}
              >
                <Play className="h-5 w-5" />
                See How It Works
              </Button>
            </div>

            <div className="relative mx-auto max-w-2xl opacity-0 animate-[fadeIn_0.8s_0.8s_forwards]">
              <div className="relative z-10 rounded-xl overflow-hidden shadow-[0_0_100px_rgba(255,69,0,0.3)] border border-slate-700">
                <Image
                  src="/hero-image.png"
                  alt="PongPulse Ball Speed Tracking"
                  width={600}
                  height={350}
                  className="w-full h-auto"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-40"></div>
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-0 animate-[fadeIn_0.8s_1s_forwards]">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-white"
                onClick={scrollToFeatures}
              >
                <ArrowDown className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section - Redesigned with Ping Pong Table Layout */}
        <section ref={featuresRef} id="features" className="relative py-32 overflow-hidden">
          {/* Table net line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/20 transform -translate-x-1/2 z-0"></div>

          <div className="container relative z-10">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Train with{" "}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Data</span>,
                Not Guesswork
              </h2>
              <p className="text-xl text-slate-300">
                PongPulse gives you the insights you need to improve your game, without expensive equipment or changing
                how you play.
              </p>
            </div>

            <div className="relative">
              {/* Ping pong table outline */}
              <div className="absolute inset-0 border-2 border-white/10 rounded-lg"></div>

              {/* Feature cards and visualization */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
                {/* Feature cards - left side */}
                <div className="lg:col-span-5 space-y-6 z-10">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={cn(
                        "backdrop-blur-sm rounded-xl p-6 transition-all duration-300 cursor-pointer",
                        activeFeature === index
                          ? "bg-gradient-to-r from-slate-800/80 to-slate-800/40 border-l-4 border-orange-500 shadow-[0_0_30px_rgba(255,69,0,0.2)]"
                          : "bg-slate-800/30 hover:bg-slate-800/50 border-l-4 border-transparent",
                      )}
                      onClick={() => setActiveFeature(index)}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`bg-gradient-to-r ${feature.color} w-12 h-12 rounded-full flex items-center justify-center shrink-0`}
                        >
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-slate-300">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Center divider - ping pong net */}
                <div className="hidden lg:block lg:col-span-2 relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-[2px] border-l-2 border-dashed border-white/30 transform -translate-x-1/2"></div>
                </div>

                {/* Feature visualization - right side */}
                <div className="lg:col-span-5 flex flex-col justify-center z-10">
                  <div className="relative">
                    <div className="relative rounded-xl overflow-hidden shadow-[0_0_50px_rgba(255,69,0,0.2)]">
                      <div
                        className={`${features[activeFeature].imageClass} flex justify-center transition-transform duration-500`}
                      >
                        <Image
                          src={features[activeFeature].image || "/placeholder.svg"}
                          alt={features[activeFeature].title}
                          width={400}
                          height={300}
                          className="w-auto h-auto max-w-full max-h-[300px] object-contain"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-30"></div>
                    </div>

                    {/* Floating benefit tags */}
                    <div className="mt-8">
                      <div className="flex flex-wrap gap-3">
                        {features[activeFeature].items.map((item, idx) => (
                          <div
                            key={idx}
                            className="inline-flex items-center gap-2 bg-slate-800/70 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700 animate-[fadeIn_0.5s_forwards]"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-red-500 rounded-full blur-[100px] opacity-20"></div>
                    <div className="absolute -top-6 -left-6 w-64 h-64 bg-orange-500 rounded-full blur-[100px] opacity-20"></div>
                  </div>
                </div>
              </div>

              {/* Ping pong ball trajectory lines */}
              <div className="absolute top-1/2 left-0 right-0 h-[1px] border-t border-dashed border-white/10 transform -translate-y-1/2 z-0"></div>
              <div className="absolute top-1/4 left-0 right-0 h-[1px] border-t border-dashed border-white/5 transform -translate-y-1/2 z-0"></div>
              <div className="absolute top-3/4 left-0 right-0 h-[1px] border-t border-dashed border-white/5 transform -translate-y-1/2 z-0"></div>
            </div>
          </div>
        </section>

        {/* How It Works Section - Horizontal Timeline */}
        <section
          id="how-it-works"
          className="relative py-32 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-slate-800 before:to-slate-900 before:skew-y-3 before:origin-bottom-left"
        >
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Simple Setup,{" "}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Powerful
                </span>{" "}
                Results
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                PongPulse is designed to be simple and effective, with no special hardware required.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500"></div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative">
                <div className="relative">
                  <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-gradient-to-r from-red-500 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 z-10 mx-auto">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 md:mt-12">
                    <div className="text-center mb-4">
                      <Smartphone className="h-10 w-10 text-orange-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold">Set Up Your Phone</h3>
                    </div>
                    <p className="text-slate-300 text-center">
                      Position your iPhone at a consistent angle with a clear view of the table. No special mounts or
                      equipment needed.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-gradient-to-r from-orange-500 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 z-10 mx-auto">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 md:mt-12">
                    <div className="text-center mb-4">
                      <Activity className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold">Record Your Rally</h3>
                    </div>
                    <p className="text-slate-300 text-center">
                      Start recording in the app and play your normal game. The app works with any standard table tennis
                      ball.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="md:absolute md:top-0 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 bg-gradient-to-r from-yellow-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-6 z-10 mx-auto">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 md:mt-12">
                    <div className="text-center mb-4">
                      <BarChart3 className="h-10 w-10 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-bold">Get Insights</h3>
                    </div>
                    <p className="text-slate-300 text-center">
                      Review your session summary with speed stats, shot placement, and actionable insights to improve
                      your game.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-xl border border-slate-700">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">No Special Equipment Required</h3>
                <p className="text-lg text-slate-300 mb-6">
                  Unlike other training systems, PongPulse works with your existing equipment. No proprietary balls,
                  sensors, or expensive hardware.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Works with any table</span>
                      <p className="text-sm text-slate-400">Standard or competition tables</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Standard balls</span>
                      <p className="text-sm text-slate-400">No need for special patterned balls</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Just your iPhone</span>
                      <p className="text-sm text-slate-400">No additional hardware needed</p>
                    </div>
                  </li>
                </ul>
                <Button
                  size="lg"
                  onClick={() => setIsQrModalOpen(true)}
                  className="w-fit bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Overlapping Cards */}
        <section id="testimonials" className="relative py-32">
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                What Players Are{" "}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Saying
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Join thousands of table tennis players who are using data to take their game to the next level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7 md:row-span-1 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(testimonials[0].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-lg italic mb-4">"{testimonials[0].quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonials[0].name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonials[0].name}</p>
                    <p className="text-sm text-slate-400">{testimonials[0].role}</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(testimonials[1].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-lg italic mb-4">"{testimonials[1].quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-orange-500 to-yellow-500 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonials[1].name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonials[1].name}</p>
                    <p className="text-sm text-slate-400">{testimonials[1].role}</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(testimonials[2].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-lg italic mb-4">"{testimonials[2].quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-yellow-500 to-green-500 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonials[2].name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonials[2].name}</p>
                    <p className="text-sm text-slate-400">{testimonials[2].role}</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  {[...Array(testimonials[3].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-lg italic mb-4">"{testimonials[3].quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 w-10 h-10 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonials[3].name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonials[3].name}</p>
                    <p className="text-sm text-slate-400">{testimonials[3].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Accordion */}
        <section
          id="faq"
          className="relative py-32 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-slate-900 before:to-slate-800 before:skew-y-3 before:origin-top-right"
        >
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Questions
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">Everything you need to know about PongPulse</p>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={cn(
                    "border border-slate-700 rounded-lg mb-4 overflow-hidden",
                    openFaq === index ? "bg-slate-800/70" : "bg-slate-800/30",
                  )}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex justify-between items-center w-full p-4 text-left"
                  >
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    )}
                  </button>
                  {openFaq === index && <div className="p-4 pt-0 text-slate-300">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coming Soon Section - Staggered Cards */}
        <section id="coming-soon" className="relative py-32">
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Coming{" "}
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Soon</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We're constantly improving PongPulse with new features to help you take your game to the next level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8 transition-all hover:bg-slate-800/50 hover:border-orange-500/50 group">
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 group-hover:from-red-500/30 group-hover:to-orange-500/30 w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all">
                  <Activity className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Spin Tracking</h3>
                <p className="text-slate-300 mb-4">
                  Advanced vision models to detect and analyze ball spin using patterned balls.
                </p>
                <div className="text-sm text-orange-500 font-medium">Coming Q3 2025</div>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8 transition-all hover:bg-slate-800/50 hover:border-orange-500/50 group md:translate-y-8">
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 group-hover:from-red-500/30 group-hover:to-orange-500/30 w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all">
                  <Zap className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI-Powered Coaching</h3>
                <p className="text-slate-300 mb-4">
                  Get personalized drill suggestions based on your weak zones and improvement areas.
                </p>
                <div className="text-sm text-orange-500 font-medium">Coming Q4 2025</div>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl p-8 transition-all hover:bg-slate-800/50 hover:border-orange-500/50 group">
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 group-hover:from-red-500/30 group-hover:to-orange-500/30 w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all">
                  <Users className="h-6 w-6 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-3">Team Dashboards</h3>
                <p className="text-slate-300 mb-4">
                  Special features for club coaches and training academies to track multiple players.
                </p>
                <div className="text-sm text-orange-500 font-medium">Coming Q1 2026</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Full Width Gradient */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto bg-slate-800/70 backdrop-blur-md rounded-2xl p-12 border border-slate-700 shadow-[0_0_50px_rgba(255,69,0,0.2)]">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Stop Guessing, Start Improving</h2>
                <p className="text-xl max-w-2xl mx-auto mb-8 text-slate-300">
                  Join thousands of table tennis players who are using data to take their game to the next level.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => setIsQrModalOpen(true)}
                    className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white border-0 gap-2 h-14 px-8 text-lg"
                  >
                    <Download className="h-5 w-5" />
                    Download on iOS
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-white hover:bg-slate-700 gap-2 h-14 px-8 text-lg"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-12 relative z-10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="PongPulse Logo" width={32} height={32} className="h-8 w-auto" />
              <span className="font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                PongPulse
              </span>
            </div>
            <div className="flex gap-8">
              <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-slate-400 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
            <div className="text-sm text-slate-400">© 2025 PongPulse. All rights reserved.</div>
          </div>
        </div>
      </footer>

      {/* QR Code Modal */}
      <Dialog open={isQrModalOpen} onOpenChange={setIsQrModalOpen}>
        <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-2">Download PongPulse</DialogTitle>
            <DialogDescription className="text-center text-slate-400 mb-6">
              Scan the QR code with your iPhone to download the app from the App Store.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center items-center p-4 bg-white rounded-lg overflow-hidden">
            <Image
              src="/qr-code.png"
              alt="PongPulse App QR Code"
              width={256}
              height={256}
              className="w-64 h-64"
            />
          </div>
          <p className="text-center text-sm text-slate-500 mt-4">
            Requires iOS 16 or later. iPhone 11 or newer recommended.
          </p>
        </DialogContent>
      </Dialog>
    </div>
  )
}
