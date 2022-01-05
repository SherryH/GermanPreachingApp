declare global {
  interface window {
      FB:any;
  }
}

const synth = typeof window !== 'undefined' && window.speechSynthesis;

export const speak = (text: string) => {
  const utterThis = new SpeechSynthesisUtterance(text);
  utterThis.rate = 0.8;
  utterThis.lang = 'de-DE';
  synth.speak(utterThis);
};
