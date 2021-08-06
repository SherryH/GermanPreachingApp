export type Verb = {
  original: string;
  ich: string;
  du: string;
};

export type Obj = {
  name: string;
  type: 'm' | 'f' | 'n';
};

export type Trigger = {
  verb: Verb;
  object: Obj;
};

export type Trigger10 = {
  adj: Obj;
  object: Obj;
};
declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}
