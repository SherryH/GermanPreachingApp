import { SpeechRecognitionArea } from '../../components/SpeechRecognitionArea';
import ControlContainer10 from './ControlContainer10';
export default function Lecture10() {
  //lecture 10
  return (
    <>
      <h1>Lektion 10 Preaching Exercise</h1>
      <p>Hund - dog | süß - sweet</p>
      <p>A | Siehst du den süßen Hund?</p>
      <p>B | Welchen süßen Hund?</p>
      <p>A | Den (süßen Hund) da drüben. (=That one over there)</p>
      <p>B | Ach den! Na klar sehe ich den.</p>
      <p>
        Note that in the last sentence you don't need to say "Den Hund" but only
        "Den". It is still accusative ("den" instead of "der") because the full
        sentence is something like: "(Ich meine) den (Hund) da drüben. Here is
        one example each for (n)euter and (f)eminine nouns:
      </p>
      <p>Kino - cinema | old - alt</p>
      <p>A | Siehst du das alte Kino?</p>
      <p>B | Welches alte Kino?</p>
      <p>A | Das da drüben.</p>
      <p>B | Ach das! Na klar sehe ich das.</p>
      <p>Bäckerei - bakery | neu - new</p>
      <p>A | Siehst du die neue Bäckerei?</p>
      <p>B | Welche neue Bäckerei?</p>
      <p>A | Die da drüben.</p>
      <p>B | Ach die! Na klar sehe ich die.</p>
      <p>
        You might have noticed that the adjective ending for (n)euter nouns has
        changed. Take a{' '}
      </p>
      look. Until now we only used "ein-" or "mein-" or "kein-". Now we use
      "das" and "Welches".
      <p></p>
      <p>Ich sehe einx altes Kino.</p>
      <p>Ich sehe meinx altes Kino.</p>
      <p>Ich sehe keinx altes Kino.</p>
      <p>But:</p>
      <p>Ich sehe das teure Kino.</p>
      <p>Welches teure Kino?</p>
      <p>Dieses teure Kino.</p>
      <p></p>
      <p>
        To easily remember this change you could learn the following "rule" by
        heart:
      </p>
      <p>After der / das / die (the adjective ending is) always -e</p>
      <p>Now try it yourself:</p>
      <p>01 | Hund - dog | süß - sweet</p>
      <p>02 | Kino - cinema | alt - old</p>
      <p>03 | Bäckerei - bakery | neu - new</p>
      <p>04 | Künstlerin - female artist | talentiert - talented</p>
      <p>05 | Haus - house | besetzt - squatted</p>
      <p>06 | Mann - man | verrückt - queer</p>
      <p>07 | Katze - cat | verschmust - cuddly</p>
      <p>08 | Musiker - musician | toll - fantastic</p>
      <p>09 | Gebäude - building | modern - modern</p>
      <p>10 | Park - park | schön - beautiful</p>
      <div className="controlWrapper">
        <ControlContainer10 />
      </div>
    </>
  );
}
