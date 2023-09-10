import React, { useEffect, useCallback, useMemo } from "react"
import { motion, useAnimation, AnimationProps, AnimationDefinition } from "framer-motion"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { isSameURL } from "./utils/sameURL"

interface TransitionProps {
  children: React.ReactNode;
  initial?: AnimationProps["initial"];
  animate?: AnimationDefinition;
  exit?: AnimationDefinition;
}

const NextPageTransition: React.FC<TransitionProps> = ({ children, initial, animate, exit }) => {
  const controls = useAnimation()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const initialVariant = useMemo(() => initial || { opacity: 0 }, [initial])
  const animateVariant = useMemo(() => animate || { opacity: 1 }, [animate])
  const exitVariant = useMemo(() => exit || { opacity: 0 }, [exit])

  const router = useRouter()

  const enterAnimation = useCallback(() => {
    controls.start(animateVariant)
  }, [controls, animateVariant])

  const exitAnimation = useCallback(async() => {
    await controls.start(exitVariant)
  }, [controls, exitVariant])

  useEffect(() => {
    enterAnimation()
  }, [pathname, searchParams, enterAnimation])

  const handleAnchorClick = useCallback(async(event: any) => {
    const anchorElement = event.currentTarget as HTMLAnchorElement
    const targetURL = new URL(anchorElement.href);
    const currentURL = new URL(window.location.href);

    if (isSameURL(targetURL, currentURL)) return;
    if (anchorElement.target === "_blank" || event.metaKey || event.ctrlKey) return

    event.preventDefault()
    await exitAnimation()
    router.push(anchorElement.href)

  }, [exitAnimation, router])

  useEffect(() => {
    const anchorElements = document.querySelectorAll("a")
    anchorElements.forEach((anchor) => anchor.addEventListener("click", handleAnchorClick))
    return () => {
      anchorElements.forEach((anchor) => anchor.removeEventListener("click", handleAnchorClick))
    }
  }, [handleAnchorClick])

  return (
    <motion.div
      initial={initialVariant}
      animate={controls}
    >
      {children}
    </motion.div>
  )
}

export default React.memo(NextPageTransition)
