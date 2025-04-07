import Head from 'next/head';
import { ControlContainer } from '../components/ControlContainer';
import { SpeechRecognitionArea } from '../components/SpeechRecognitionArea';

// I want the Home component to automatically links to Lesson 10 with url ending "/10"
export default function Home() {
  return (
    <>
      <h1>German Preaching Exercise</h1>

      <p>0. Please use Chrome browser for the best experience</p>
      <p>1. Click "Trigger" to get a random combination of preaching vocabs</p>
      <p>
        2.Click on the 🎤 to say out loud the preaching sentences using triggers
      </p>
      <p>3. Observe the transcribed sentences</p>
      <p>4. Click on "Answers" to see answers and compare</p>
      <p>
        5. Click on the provided answers and listen to the correct
        pronounciation
      </p>
      <p>See Below as an example</p>

      <div className="controlWrapper">
        <ControlContainer />
      </div>
    </>
  );
}
