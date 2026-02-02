"use client";

import { useRef, useState } from "react";

export default function Valentine() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const noBtnRef = useRef<HTMLButtonElement | null>(null);

  const moveNoButton = () => {
    if (!noBtnRef.current) return;

    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;

    noBtnRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://res.cloudinary.com/domawf55j/video/upload/f_auto,q_auto/bg-img_xdv0tr.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div
          className="w-full max-w-2xl rounded-3xl bg-white/90 p-12 text-center shadow-2xl backdrop-blur"
          style={{
            backgroundImage: "url('/valentine-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="mb-6 text-2xl font-bold text-pink-600">
            Vekyop, will you be my Valentine? 💖
          </h1>

          <div className="relative flex justify-center gap-6">
            <button
              onClick={() => setShowModal(true)}
              className="rounded-xl bg-pink-500 px-6 py-2 text-white transition hover:bg-pink-600"
            >
              Yes
            </button>

            <button
              ref={noBtnRef}
              onMouseEnter={moveNoButton}
              onClick={moveNoButton}
              className="rounded-xl bg-gray-300 px-6 py-2 text-gray-700 transition"
            >
              No
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/60">
          <div
            className="relative w-full max-w-lg rounded-3xl bg-white/90 p-12 text-center shadow-2xl backdrop-blur"
            style={{
              backgroundImage: "url('/bg-img.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <h2 className="mb-2 text-3xl font-bold text-pink-600">Yay! 🎉</h2>
            <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-black">
              I love you so much 💕. You make my days brighter, my smiles wider,
              and my heart happier. I’m really grateful for you. Even though they are days we feel apart. I love you still. I hope this puts a smile on your face
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="mt-6 rounded-xl bg-pink-500 px-6 py-2 text-white hover:bg-pink-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
