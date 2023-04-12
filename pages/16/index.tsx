import { SharedControlContainer } from '../../components/SharedControlContainer';
import { triggers, answers } from '../../data/lesson16';

export default function Lecture16() {
  return (
    <p>
      <h1>Lektion 16 Preaching Exercise</h1>
      <p>
        Now practise a few sentences with the dative verbs. As always one
        example:
      </p>
      <br />
      <p>gratulieren - to congratulate | Freundin - friend</p>
      <br />
      <p>A | Gratulierst du deiner Freundin?</p>
      <p>B | Ich gratuliere meiner Freundin nicht.</p>
      <p>A | Warum gratulierst du deiner Freundin nicht?</p>
      <p>B | Weil ich meiner Freundin nicht gratuliere.</p>
      <br />
      <br />
      <p>Now try it yourself:</p>
      <p>01 | gratulieren - to congratulate | Freundin - (girl)friend</p>
      <p>02 | helfen - to help | Bruder - brother</p>
      <p>03 | vertrauen - to trust | Gefühl - feeling</p>
      <p>04 | antworten - to answer | Kollegin - colleague (female)</p>
      <p>05 | danken - to thank | Lehrer - teacher</p>
      <p>06 | gehören - to belong to | Mutter - mother</p>
      <p>07 | glauben - to believe | Chef - boss</p>
      <p>08 | es geht gut - being well | Hund - dog</p>
      <p>09 | widersprechen - to disagree | Frau - woman</p>
      <p>10 | zuhören - to listen to | Eltern - parents</p>
      <div className="controlWrapper">
        <SharedControlContainer triggers={triggers} answers={answers} />
      </div>
    </p>
  );
}
