// No need to redeclare Window interface as it's already defined in lib.dom.d.ts

export const speak = (text: string) => {
  if (typeof window === 'undefined') return;

  const synth = window.speechSynthesis;
  if (!synth) return;

  // Cancel any ongoing speech before starting a new one
  synth.cancel();

  const utterThis = new SpeechSynthesisUtterance(text);
  utterThis.rate = 0.8;
  utterThis.lang = 'de-DE';
  synth.speak(utterThis);
};
