"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const EXPIRY_DATE = new Date("2026-07-15T23:59:59");
const HLS_SOURCE = "/hls/master.m3u8";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [expired, setExpired] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (new Date() > EXPIRY_DATE) {
      setExpired(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: import("hls.js").default | null = null;

    async function initHls() {
      const Hls = (await import("hls.js")).default;

      if (video!.canPlayType("application/vnd.apple.mpegurl")) {
        // Safari native HLS
        video!.src = HLS_SOURCE;
      } else if (Hls.isSupported()) {
        hlsInstance = new Hls({
          enableWorker: true,
          lowLatencyMode: false,
        });
        hlsInstance.loadSource(HLS_SOURCE);
        hlsInstance.attachMedia(video!);
        hlsInstance.on(Hls.Events.ERROR, (_evt, data) => {
          if (data.fatal) {
            setError(
              "Error al cargar el video. Por favor recargue la página."
            );
          }
        });
      } else {
        setError(
          "Su navegador no es compatible con la reproducción de este video. Intente con Chrome, Firefox o Safari."
        );
      }
    }

    initHls();

    return () => {
      hlsInstance?.destroy();
    };
  }, []);

  if (expired) {
    return (
      <div className="video-wrapper flex items-center justify-center min-h-[300px] bg-gradient-to-br from-teal-950 to-slate-900">
        <div className="text-center px-8 py-12">
          <div className="text-gold-400 text-5xl mb-6">⏳</div>
          <h3 className="text-white text-2xl font-serif font-semibold mb-3">
            Contenido no disponible
          </h3>
          <p className="text-slate-300 text-lg">
            El periodo de acceso a este contenido ha finalizado.
          </p>
          <p className="text-slate-500 text-sm mt-4">
            Fecha de expiración: 15 de julio de 2026
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="video-wrapper flex items-center justify-center min-h-[300px] bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="text-center px-8 py-12">
          <p className="text-red-400 text-lg">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="video-wrapper" onContextMenu={(e) => e.preventDefault()}>
      <video
        ref={videoRef}
        controls
        controlsList="nodownload"
        disablePictureInPicture
        playsInline
        className="w-full"
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* UCR watermark */}
      <div className="video-watermark">
        <Image
          src="/ucr.png"
          alt="UCR"
          width={72}
          height={72}
          style={{ objectFit: "contain" }}
          priority
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>

      {/* Fullscreen button overlay — adds fullscreen since we removed nofullscreen from controlsList */}
    </div>
  );
}
