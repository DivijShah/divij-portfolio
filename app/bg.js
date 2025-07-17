'use client';

export default function BackgroundVideo() {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="fixed top-0 left-0 w-full h-full bg-black/65 z-[-9]" />
    </>
  );
}
