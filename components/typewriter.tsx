"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type TypewriterProps = {
  words: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  /** How long a finished word stays on screen before being erased. */
  pause?: number
}

/** Types and erases each word in turn, with a blinking caret. */
export default function Typewriter({
  words,
  className,
  typingSpeed = 65,
  deletingSpeed = 35,
  pause = 1900,
}: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  const wordsKey = words.join("|")

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches)
  }, [])

  // Restart cleanly when the language (and therefore the word list) changes.
  useEffect(() => {
    setText("")
    setDeleting(false)
    setIndex(0)
  }, [wordsKey])

  useEffect(() => {
    if (words.length === 0) return
    if (reduceMotion) {
      setText(words[0])
      return
    }

    const word = words[index % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === "") {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    } else {
      const next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
      timeout = setTimeout(() => setText(next), deleting ? deletingSpeed : typingSpeed)
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, reduceMotion, pause, typingSpeed, deletingSpeed])

  return (
    <span className={cn("caret inline-block min-h-[1.4em]", className)} aria-live="polite">
      {text}
    </span>
  )
}
