# Fallout Collectibles

## A bit of background

The idea for a simple application that would allow users to track collectibles found in the various Fallout games was always something I wanted to do. It seemed simple enough, and it would be a fun hobby project to work on, especially since I am a massive fan of the series.

I have tried many times in the past, with varying degrees of success, but this time, I want to make it happen.

I've been trying to dive deeper into system design recently, to improve my skills as a software engineer and after a couple of weeks of reading DDIA, reading through articles on Hello Interview and watching more YouTube videos on the subject (hello, Jordan Has No Life), I felt that it would be appropriate for me to apply some of my newfound knowledge.

## System architecture

The architecture is currently simple. While this doesn’t reflect the full design as of July 19, 2025, I’m intentionally uploading it to track its evolution and for practice.

When a client visits the application, it loads supporting images for each collectible from a Vercel Blob Store. I chose this approach to avoid burdening my application servers with image storage. Each database entry (which I’ll add soon) will include a link to the blob instead of storing the entire image.

![System architecture](/images/architecture.png)
