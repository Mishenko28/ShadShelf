"use client"

import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const MotionSunIcon = motion.create(SunIcon)
const MotionMoonIcon = motion.create(MoonIcon)

const variants = {
	initial: { opacity: 0, rotate: -90 },
	animate: { opacity: 1, rotate: 0 },
	exit: { opacity: 0, rotate: 90 },
}

const transition = { duration: 0.2, ease: "easeInOut" } as const

export default function ThemeToggle() {
	const { setTheme, theme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return <Button variant="outline" size="icon" />
	}

	return (
		<button
			className="corner-bevel flex size-10 cursor-pointer items-center justify-center rounded-md bg-lime-400 text-black"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			<AnimatePresence initial={false} mode="wait">
				{theme === "light" && (
					<MotionSunIcon
						layout
						key="sun"
						variants={variants}
						initial="initial"
						animate="animate"
						exit="exit"
						transition={transition}
						size={16}
					/>
				)}
				{theme === "dark" && (
					<MotionMoonIcon
						layout
						key="moon"
						variants={variants}
						initial="initial"
						animate="animate"
						exit="exit"
						transition={transition}
						size={16}
					/>
				)}
			</AnimatePresence>
		</button>
	)
}
