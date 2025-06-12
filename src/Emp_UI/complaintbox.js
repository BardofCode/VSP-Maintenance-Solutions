import React, {useState, useEffect} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import './complaintbox.css';

function Complaint({sendComplaintData}) {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();



    const [text, setText] = useState('');

    useEffect(()=> {
        setText(transcript);

        // send to Emp.js(Parent)
        // sendComplaintData(text);  // this callback is asynchronous and does not reflect immediately
    },[transcript])

    if (!browserSupportsSpeechRecognition) {                              // check support
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return(
        <div>
            {/* audio? */}
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start</button>
            <button onClick={() => SpeechRecognition.stopListening()}>Stop</button>
            <button onClick={() => { resetTranscript(); setText(''); }}>Reset</button>


            <textarea 
            id='issue' 
            required 
            value={text}
            placeholder='Enter complaint (Max:500 Words)'
            onChange={(e) => setText(e.target.value)}
            />
        </div>
    )
}

export default Complaint;