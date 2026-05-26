import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Check, RefreshCw, Sparkles, Heart } from 'lucide-react';
import type { CelebrationConfig } from '../types';

interface InteractiveCustomizerProps {
  config: CelebrationConfig;
  onUpdate: (newConfig: CelebrationConfig) => void;
}

export default function InteractiveCustomizer({ config, onUpdate }: InteractiveCustomizerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [birthdayGirl, setBirthdayGirl] = useState(config.birthdayGirl);
  const [locationName, setLocationName] = useState(config.locationName);
  const [locationAddress, setLocationAddress] = useState(config.locationAddress);
  const [alias, setAlias] = useState(config.alias);
  const [cbu, setCbu] = useState(config.cbu);
  const [bankName, setBankName] = useState(config.bankName);
  const [googleDriveUrl, setGoogleDriveUrl] = useState(config.googleDriveUrl);
  const [adminPin, setAdminPin] = useState(config.adminPin);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({
      ...config,
      birthdayGirl,
      locationName,
      locationAddress,
      alias,
      cbu,
      bankName,
      googleDriveUrl,
      adminPin,
    });
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-40 p-3.5 bg-[#081a14] hover:bg-[#c5a059] hover:text-[#081a14] text-[#c5a059] border border-[#c5a059] rounded-full shadow-2xl transition-all cursor-pointer font-sans"
        whileHover={{ scale: 1.1, rotate: 30 }}
        whileTap={{ scale: 0.95 }}
      >
        <Settings className="w-5 h-5" />
      </motion.button>

      {/* Slide-out drawer/panel */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-end font-sans">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="relative w-full max-w-sm h-full bg-gradient-to-b from-[#0d2a21] to-[#081a14] border-l border-white/10 shadow-2xl p-6 overflow-y-auto text-white select-none"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                <Sparkles className="w-5 h-5 text-[#c5a059]" />
                <h3 className="font-semibold text-[#c5a059] uppercase text-xs tracking-widest">Ajustes de la Invitación</h3>
              </div>

              <form onSubmit={handleSave} className="space-y-4 text-xs font-semibold">
                
                <div>
                  <label className="block text-white/50 mb-1.5 uppercase tracking-wider font-bold">Nombre de la Quinceañera</label>
                  <input
                    type="text"
                    value={birthdayGirl}
                    onChange={(e) => setBirthdayGirl(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs focus:outline-hidden focus:border-[#c5a059] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white/50 mb-1.5 uppercase tracking-wider font-bold">Fecha & Hora</label>
                  <input
                    type="text"
                    value="Sábado 4 de Octubre a las 22:00 hrs"
                    disabled
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/5 rounded-lg text-white/30 text-xs cursor-not-allowed"
                  />
                  <p className="text-[10px] text-white/30 font-normal mt-1 leading-normal">La fecha está fijada para el 4 de Octubre a las 22:00 hrs.</p>
                </div>

                <div>
                  <label className="block text-white/50 mb-1.5 uppercase tracking-wider font-bold">Nombre del Salón</label>
                  <input
                    type="text"
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs focus:outline-hidden focus:border-[#c5a059] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white/50 mb-1.5 uppercase tracking-wider font-bold">Dirección del Salón</label>
                  <input
                    type="text"
                    value={locationAddress}
                    onChange={(e) => setLocationAddress(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs focus:outline-hidden focus:border-[#c5a059] transition-all"
                  />
                </div>

                <div className="pt-2 border-t border-white/10 mt-4">
                  <span className="text-[#c5a059] font-bold block mb-2 uppercase text-[10px] tracking-widest">Datos para Regalos (Transferencias)</span>
                </div>

                <div>
                  <label className="block text-white/50 mb-1.5 uppercase tracking-wider font-bold">Nombre del Banco</label>
                  <input
                    type="text"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs focus:outline-hidden focus:border-[#c5a059] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white/50 mb-1.5 uppercase tracking-wider font-bold">Alias de Transferencia</label>
                  <input
                    type="text"
                    value={alias}
                    onChange={(e) => setAlias(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs focus:outline-hidden focus:border-[#c5a059] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white/50 mb-1.5 uppercase tracking-wider font-bold">CBU de Transferencia</label>
                  <input
                    type="text"
                    value={cbu}
                    onChange={(e) => setCbu(e.target.value)}
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs font-mono focus:outline-hidden focus:border-[#c5a059] transition-all"
                  />
                </div>

                <div className="pt-2 border-t border-white/10 mt-4">
                  <span className="text-[#c5a059] font-bold block mb-2 uppercase text-[10px] tracking-widest">Álbum Digital & Privacidad</span>
                </div>

                <div>
                  <label className="block text-white/50 mb-1.5 uppercase tracking-wider font-bold">Link de Google Drive</label>
                  <input
                    type="text"
                    value={googleDriveUrl}
                    onChange={(e) => setGoogleDriveUrl(e.target.value)}
                    placeholder="Link a la carpeta de fotos en Google Drive"
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs focus:outline-hidden focus:border-[#c5a059] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white/50 mb-1.5 uppercase tracking-wider font-bold">PIN de Seguridad (Dashboard)</label>
                  <input
                    type="text"
                    value={adminPin}
                    onChange={(e) => setAdminPin(e.target.value)}
                    placeholder="PIN para ver lista de confirmados"
                    className="w-full px-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-xs font-mono focus:outline-hidden focus:border-[#c5a059] transition-all"
                  />
                  <p className="text-[9px] text-white/30 font-normal mt-1 leading-normal">Protege la lista de invitados para que sólo la vea el organizador.</p>
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-3 bg-[#c5a059] hover:bg-[#fdfcf0] text-[#081a14] font-bold uppercase text-xs tracking-widest rounded-lg transition-colors duration-300 shadow-lg cursor-pointer flex items-center justify-center gap-1.5 font-sans"
                >
                  <Check className="w-4 h-4" />
                  Aplicar Cambios
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
