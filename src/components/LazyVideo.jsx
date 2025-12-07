import { useEffect, useRef, useState } from 'react'

const LazyVideo = ({ src, poster, className, ...props }) => {
    const videoRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { rootMargin: '100px', threshold: 0.1 }
        )

        if (videoRef.current) {
            observer.observe(videoRef.current)
        }

        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (isVisible && videoRef.current) {
            videoRef.current.load()
        }
    }, [isVisible])

    return (
        <video
            ref={videoRef}
            className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
            onLoadedData={() => setIsLoaded(true)}
            {...props}
        >
            {isVisible && <source src={src} type="video/mp4" />}
        </video>
    )
}

export default LazyVideo


