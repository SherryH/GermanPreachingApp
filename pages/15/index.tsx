import { SharedControlContainer } from '../../components/SharedControlContainer';
import { triggers, answers } from '../../data/lesson15';

export default function Lecture15() {
  return (
    <>
      <h1>Lektion 15 Preaching Exercise</h1>
      <p>
        Let's cover the most important mixed irregular verbs. They have the same
        ending in the past tense as the regular ones. But, they change their
        stem vowel like the irregular verbs. Therefore they are called mixed
        irregular verbs. As always one example:
      </p>
      <br />
      <p>brennen (gebrannt) - to burn | Essen - food</p>
      <br />
      <p>A | Hast du das Essen verbrannt?</p>
      <p>B | Ich habe das Essen nicht verbrannt.</p>
      <p>A | Warum hast du das Essen nicht verbrannt?</p>
      <p>B | Weil ich das Essen nicht verbrannt habe.</p>
      <br />
      <p>
        The following three chunks are idiomatic expressions in German. Learn
        them as a complete structure:
      </p>
      <br />
      <p>
        08 | die Kontonummer nennen (genannt) - to tell someone the account
        number
      </p>
      <p>
        09 | vor Neugierde brennen (gebrannt) - to burn with curiosity
        (idiomatic expression)
      </p>
      <p>10 | das Bier mitbringen (mitgebracht) - to bring the beer with you</p>
      <div className="controlWrapper">
        <SharedControlContainer triggers={triggers} answers={answers} />
      </div>
    </>
  );
}
