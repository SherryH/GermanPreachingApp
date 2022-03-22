import { SharedControlContainer } from '../../components/SharedControlContainer';
import { triggers, answers } from '../../data/lesson14';

export default function Lecture14() {
  //lecture 14
  return (
    <>
      <h1>Lektion 14 Preaching Exercise</h1>
      <p>
        Once you have learned the past forms of "essen" you'll be able to
        construct the past forms of the following verbs easily:
      </p>
      <p>essen - ich aß - ich habe gegessen - to eat</p>
      <p>fressen - ich fraß - ich habe gefressen - to eat with noise</p>
      <p>messen - ich maß - ich habe gemessen - to measure</p>
      <p>vergessen - ich vergaß - ich habe vergessen - to forget</p>
      <p>aufessen - ich aß auf - ich habe aufgegessen - to eat up</p>
      <p>essen - to eat | Schokolade - chocolate</p>
      <p>A | Hast du die Schokolade gegessen?</p>
      <p>B | Ich habe die Schokolade nicht gegessen.</p>
      <p>A | Warum hast du die Schokolade nicht gegessen?</p>
      <p>B | Weil ich die Schokolade nicht gegessen habe.</p>
      <div className="controlWrapper">
        <SharedControlContainer triggers={triggers} answers={answers} />
      </div>
    </>
  );
}
