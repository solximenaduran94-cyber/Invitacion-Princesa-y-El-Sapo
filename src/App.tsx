/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';

import MagicBackground from './components/MagicBackground';
import Countdown from './components/Countdown';
import AmbientMusic from './components/AmbientMusic';
import EventDetails from './components/EventDetails';
import RsvpForm from './components/RsvpForm';
import PhotoUploadAlbum from './components/PhotoUploadAlbum';
import PhotoCarousel from './components/PhotoCarousel';
import InteractiveCustomizer from './components/InteractiveCustomizer';
import type { CelebrationConfig } from './types';
import { MagnoliaVines, GoldTiara, PrincessEmeraldGown, CrownFrogLilypad, FloatingDragonflies } from './components/FairytaleDecors';

export default function App() {
  // Configured state according to requirements
  const [config, setConfig] = useState<CelebrationConfig>({
    birthdayGirl: 'Sofía',
    date: '2026-10-04T22:00:00', // Sábado 4 de Octubre de 2026 a las 22:00 hs
    locationName: 'Madero Walk',
    locationAddress: 'Pierina Dealessi 1855, Dique 1, Puerto Madero, CABA',
    cbu: '0000003100098765432101',
    alias: 'mis15.sofia.mágico',
    bankName: 'Banco de la Nación Argentina',
    photoUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80',
    googleDriveUrl: 'https://drive.google.com/drive/folders/1bE_T9O_Z9_PruebaMagicaDeSofi',
    adminPin: 'admin',
  });

  useEffect(() => {
    document.title = `¡Mis Quince Años - ${config.birthdayGirl}!`;
  }, [config.birthdayGirl]);

  return (
    <div className="min-h-screen text-[#fdfcf0] font-sans selection:bg-[#c5a059]/30 selection:text-[#fdfcf0] relative pb-12 flex flex-col items-center">
      {/* Background with floating fireflies and starry sky */}
      <MagicBackground />

      {/* Floating control to personalize details */}
      <InteractiveCustomizer config={config} onUpdate={setConfig} />

      {/* Header Utilities */}
      <div className="w-full max-w-5xl px-4 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
        <div className="flex items-center gap-1 bg-white/5 backdrop-blur-md py-1.5 px-4 rounded-full border border-white/10">
          <span className="text-[#c5a059] font-medium text-[10px] tracking-[0.3em] uppercase">✨ Invitación Exclusiva de 15</span>
        </div>
        
        {/* Sparkly music widget */}
        <AmbientMusic />
      </div>

      {/* Main Container */}
      <main className="w-full max-w-5xl flex flex-col items-center mt-12 sm:mt-20 z-10 px-4">
        
        {/* Double-layered Physical Card Invitation Layout */}
        <motion.div
          className="w-full max-w-2xl px-1 sm:px-4 relative mb-16 sm:mb-24 select-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Layer 1: Elegant Dark Forest Green textured framing card backing */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#142314] to-[#253f25] border border-[#c5a059]/30 rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] rotate-1 max-w-full" />
          
          {/* Layer 2: Rich ivory/cream textured physical paper card sitting on top, slightly offset for three-dimensional visual fidelity */}
          <div className="relative bg-gradient-to-b from-[#fdfbf7] via-[#faf6ee] to-[#f4eee0] border-4 border-double border-[#c5a059]/40 rounded-3xl p-6 sm:p-12 pb-36 sm:pb-48 text-center text-[#1c2d1c] -rotate-1 shadow-inner overflow-hidden flex flex-col items-center">
            
            {/* 1. Draped Watercolor Flowers */}
            <MagnoliaVines />
            
            {/* 2. Floating Golden Dragonflies inside card */}
            <FloatingDragonflies />

            {/* 3. Princess Golden Tiara at the top center */}
            <div className="mt-8 mb-4 relative z-20">
              <GoldTiara className="w-16 h-10 sm:w-20 sm:h-12" />
            </div>

            {/* 4. Elegant script subtitle */}
            <div className="space-y-1 relative z-20">
              <span className="text-[#3c5f3c] text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.3em] block">
                Estás cordialmente invitado/a a celebrar los
              </span>
              <span className="text-4xl sm:text-5xl font-serif text-[#324f32] italic font-light tracking-wide block my-2 select-none">
                Quince Años
              </span>
              <span className="text-[#3c5f3c] text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-[0.25em] block">
                En honor de la quinceañera
              </span>
            </div>

            {/* 5. Princess Name in gorgeous display font */}
            <div className="relative my-4 z-20">
              <h1 className="text-6xl sm:text-8xl font-serif text-[#3e5f41] drop-shadow-[0_1px_1px_rgba(197,160,89,0.2)] tracking-tight font-light italic py-2">
                {config.birthdayGirl}
              </h1>
            </div>

            {/* 6. Centered Circular Date Design layout */}
            <div className="w-full max-w-sm border-y border-[#3e5f41]/15 py-4 my-6 flex items-center justify-center gap-4 sm:gap-6 uppercase font-sans font-semibold text-[10px] sm:text-xs tracking-[0.2em] text-[#2c402e] relative z-20">
              <span>Sábado</span>
              <div className="relative">
                <span className="absolute -inset-1.5 rounded-full border border-[#c5a059]/30" />
                <span className="w-12 h-12 rounded-full bg-[#345037] text-[#fdfcf0] font-serif font-bold italic text-lg flex items-center justify-center shadow-lg relative z-10">
                  04
                </span>
              </div>
              <span>Octubre</span>
            </div>

            {/* Hours and location subtitle */}
            <div className="space-y-2 mb-8 relative z-20">
              <p className="text-[#2c402e] font-sans font-bold text-[11px] sm:text-xs tracking-[0.15em] uppercase">
                A las 22:00 hrs
              </p>
              <p className="text-[#3c5f3c] font-serif italic text-xs sm:text-sm max-w-xs mx-auto leading-relaxed opacity-90">
                "{config.locationName}" — Puerto Madero, CABA
              </p>
            </div>

            {/* 7. Fairytale forest message / quote */}
            <div className="max-w-md mx-auto relative z-20 border-t border-[#3e5f41]/10 pt-6">
              <p className="text-[#324a35] text-xs sm:text-sm italic font-light leading-relaxed font-serif px-4">
                "Hay un bosque mágico de sueños esperando brillar. El amor y la música nos guiarán al gran día..."
              </p>
              <div className="flex items-center justify-center gap-1.5 mt-4 text-[#c5a059] opacity-75">
                <span>✦</span>
                <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-bold text-[#324a35]">Un Sueño Encantado</span>
                <span>✦</span>
              </div>
            </div>

            {/* 8. Princess Illustration overlay */}
            <PrincessEmeraldGown />

            {/* 9. Frog Prince on Lilypad overlay */}
            <CrownFrogLilypad />

          </div>
        </motion.div>

        {/* Countdown */}
        <motion.section
          className="w-full mb-16 sm:mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Countdown targetDateStr={config.date} />
        </motion.section>

        {/* Fairytale Storybook Chapter Section */}
        <motion.section
          className="w-full mb-16 sm:mb-20 max-w-4xl"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Chapter header */}
          <div className="text-center mb-8 relative w-full flex flex-col items-center select-none">
            <span className="text-xs uppercase tracking-[0.3em] text-[#c5a059] font-semibold mb-1">Un Toque de Cuento de Hadas</span>
            <h2 className="text-[#c5a059] font-serif font-light italic text-xl sm:text-2xl tracking-normal">La Historia del Reino</h2>
            <div className="w-16 h-[1px] bg-[#c5a059]/30 mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Chapter 1 */}
            <motion.div
              className="p-6 rounded-2xl bg-[#081a14]/60 border border-[#c5a059]/10 hover:border-[#c5a059]/30 shadow-lg text-center backdrop-blur-xs flex flex-col items-center justify-between"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-[#c5a059] text-2xl mb-3 select-none">🌙🦋</div>
              <h4 className="text-[#c5a059] font-serif italic font-medium text-sm mb-2">Capítulo I: El Deseo Real</h4>
              <p className="text-white/70 text-xs leading-relaxed font-light italic">
                "Había una vez una niña que soñaba bajo las luces del Bayou, esperando que el cielo pintara de oro su camino. Hoy, los deseos florecen..."
              </p>
              <span className="text-[9px] uppercase tracking-widest text-[#c5a059]/60 mt-4 block font-mono font-bold">Un comienzo mágico</span>
            </motion.div>

            {/* Chapter 2 */}
            <motion.div
              className="p-6 rounded-2xl bg-[#081a14]/60 border border-[#c5a059]/10 hover:border-[#c5a059]/30 shadow-lg text-center backdrop-blur-xs flex flex-col items-center justify-between"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-[#c5a059] text-2xl mb-3 select-none">🥀🎷</div>
              <h4 className="text-[#c5a059] font-serif italic font-medium text-sm mb-2">Capítulo II: La Transformación</h4>
              <p className="text-white/70 text-xs leading-relaxed font-light italic">
                "Donde los faroles se encienden y la melodía empieza a fluir, allí se encuentra la verdadera celebración. Un instante suspendido en el aire..."
              </p>
              <span className="text-[9px] uppercase tracking-widest text-[#c5a059]/60 mt-4 block font-mono font-bold">La magia despierta</span>
            </motion.div>

            {/* Chapter 3 */}
            <motion.div
              className="p-6 rounded-2xl bg-[#081a14]/60 border border-[#c5a059]/10 hover:border-[#c5a059]/30 shadow-lg text-center backdrop-blur-xs flex flex-col items-center justify-between"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-[#c5a059] text-2xl mb-3 select-none">🐸✨</div>
              <h4 className="text-[#c5a059] font-serif italic font-medium text-sm mb-2">Capítulo III: El Gran Hechizo</h4>
              <p className="text-white/70 text-xs leading-relaxed font-light italic">
                "La noche en que las risas se vuelven eternas. {config.birthdayGirl} celebra sus 15 primaveras para sellar un pacto de amor, música y amistad con vos."
              </p>
              <span className="text-[9px] uppercase tracking-widest text-[#c5a059]/60 mt-4 block font-mono font-bold">El gran encuentro</span>
            </motion.div>
          </div>
        </motion.section>

        {/* Section Heading Decor */}
        <div className="text-center mb-10 relative w-full flex flex-col items-center select-none">
          <h2 className="text-[#c5a059] font-serif font-light italic text-xl sm:text-2xl tracking-normal">Coordenadas del Encuentro</h2>
          <div className="w-20 h-[1px] bg-[#c5a059]/30 mt-2 rounded-full" />
        </div>

        {/* Details Section */}
        <motion.section
          className="w-full flex justify-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <EventDetails config={config} />
        </motion.section>

        {/* RSVP Section */}
        <motion.section
          className="w-full flex flex-col items-center mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <RsvpForm birthdayGirl={config.birthdayGirl} adminPin={config.adminPin} />
        </motion.section>

        {/* Photo Carousel of custom uploaded photos */}
        <motion.section
          className="w-full flex flex-col items-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <PhotoCarousel />
        </motion.section>

        {/* Shared Photo Album QR Section */}
        <motion.section
          className="w-full flex flex-col items-center"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <PhotoUploadAlbum googleDriveUrl={config.googleDriveUrl} />
        </motion.section>

        {/* Invitation footer / closing signature */}
        <footer className="w-full text-center py-10 mt-12 border-t border-white/5 opacity-55">
          <p className="text-xs uppercase tracking-[0.2em] text-[#c5a059] font-medium flex items-center justify-center gap-1.5 font-sans">
            <span>✨ Evento de {config.birthdayGirl} ✨</span>
          </p>
          <p className="text-[10px] text-white/50 font-mono mt-1.5">¡Estás cordialmente invitado/a a vivir la magia!</p>
        </footer>

      </main>
    </div>
  );
}
