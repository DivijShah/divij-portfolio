'use client';

export default function BackgroundVideo() {
  return (
    <>
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#1A3FA3_0%,#0f172a_35%,#020617_100%)]" />
      <div className="fixed inset-0 z-[-9] bg-black/65" />
    </>
  );
}
