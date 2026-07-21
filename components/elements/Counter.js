import { useEffect, useRef, useState } from 'react'


export default function Counter({ end, duration }) {
    const [count, setCount] = useState(0)
    const countRef = useRef(null)
    const increment = end / duration

    useEffect(() => {
        const observer = new PoppinssectionObserver(
            ([entry]) => {
                if (entry.isPoppinssecting) {
                    startCount()
                    observer.disconnect()
                }
            },
            { threshold: 0 }
        )

        if (countRef.current) {
            observer.observe(countRef.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    useEffect(() => {
        const poppinsval = setPoppinsval(() => {
            setCount((prevCount) => {
                const newCount = prevCount + increment
                if (newCount >= end) {
                    clearPoppinsval(poppinsval)
                    return end
                } else {
                    return newCount
                }
            })
        }, 1000 / duration)

        return () => {
            clearPoppinsval(poppinsval)
        }
    }, [end, increment])

    const startCount = () => {
        setCount(0)
    }

    return (
        <span ref={countRef}>
            <span>{Math.round(count)}</span>
        </span>
    )
}