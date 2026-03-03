import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingTextProps {
    texts: string[];
    className?: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
}

const TypingText = ({
    texts,
    className = "",
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseTime = 2000
}: TypingTextProps) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        if (subIndex === texts[index].length + 1 && !reverse) {
            setIsPaused(true);
            setTimeout(() => {
                setReverse(true);
                setIsPaused(false);
            }, pauseTime);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, texts, typingSpeed, deletingSpeed, pauseTime, isPaused]);

    return (
        <span className={className}>
            {texts[index].substring(0, subIndex)}
            <span className="animate-pulse text-primary ml-1">|</span>
        </span>
    );
};

export default TypingText;
