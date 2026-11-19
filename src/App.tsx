/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const APK_DOWNLOAD_URL =
  'https://github.com/Sabarna69/Super-Mario-All-Stars-NES-for-Android/raw/refs/heads/main/SUPER%20MARIO%20all-stars.apk';

export default function App() {
  return (
    <main className="canva-red-canvas relative flex min-h-[100dvh] w-full flex-col items-center justify-between overflow-hidden select-none">
      {/* Top Game Logo */}
      <header className="pointer-events-none flex w-full shrink-0 justify-center px-5 pt-[clamp(24px,6.5dvh,60px)]">
        <img
          src="./assets/images/super-mario-all-stars-logo.png"
          alt="Super Mario All-Stars"
          width={2000}
          height={835}
          draggable={false}
          decoding="async"
          fetchPriority="high"
          className="h-auto w-[79vw] max-w-[330px] object-contain sm:w-[min(62vw,420px)] sm:max-w-[420px] md:max-h-[21dvh] lg:max-w-[460px]"
        />
      </header>

      {/* Center Primary Download CTA */}
      <section
        aria-label="Download Super Mario All-Stars APK"
        className="z-10 flex shrink-0 items-center justify-center py-4"
      >
        <a
          href={APK_DOWNLOAD_URL}
          download="SUPER MARIO all-stars.apk"
          rel="noopener noreferrer"
          aria-label="Download Super Mario All-Stars APK for Android"
          className="download-pill-btn font-arcade inline-flex min-h-[48px] items-center justify-center rounded-full px-7 py-2.5 text-[clamp(14px,4.1vw,18px)] font-extrabold tracking-[0.07em] whitespace-nowrap text-white uppercase focus-visible:ring-4 focus-visible:ring-white/60 focus-visible:outline-none sm:min-h-[54px] sm:px-9 sm:py-3 sm:text-[18px] md:text-[20px]"
        >
          DOWNLOAD
        </a>
      </section>

      {/* Bottom Mario Character Artwork */}
      <div className="pointer-events-none flex w-full shrink-0 items-end justify-center">
        <img
          src="./assets/images/mario-star.png"
          alt="Mario holding a yellow Super Star"
          width={800}
          height={779}
          draggable={false}
          decoding="async"
          fetchPriority="high"
          className="h-auto w-[96vw] max-w-[430px] max-h-[46dvh] object-contain object-bottom sm:w-[min(78vw,470px)] sm:max-w-[470px] sm:max-h-[48dvh] lg:max-w-[500px] lg:max-h-[50dvh]"
        />
      </div>

      {/* Bottom Corner Credits & Platform Notice */}
      <footer className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-4 pb-[max(14px,env(safe-area-inset-bottom,14px))] sm:px-7 sm:pb-6">
        <span className="font-arcade text-[clamp(10px,2.9vw,13px)] font-bold tracking-[0.06em] whitespace-nowrap text-white uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)] sm:text-[13px] md:text-[14px]">
          BY SABO
        </span>
        <span className="font-arcade text-[clamp(10px,2.9vw,13px)] font-bold tracking-[0.06em] whitespace-nowrap text-white uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)] sm:text-[13px] md:text-[14px]">
          ANDROID ONLY
        </span>
      </footer>
    </main>
  );
}
