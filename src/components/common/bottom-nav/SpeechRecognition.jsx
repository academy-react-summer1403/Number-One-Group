import React, { useEffect } from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useNavigate } from 'react-router-dom';
import { FaMicrophone } from "react-icons/fa";
import { toast } from 'react-toastify';
import RunSpeechCommend from '../../../core/utility/run-speech-commend';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';


const VoiceToText = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { i18n } = useTranslation();

    const {
        transcript,
        resetTranscript,
        listening,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const startListening = () => {
        SpeechRecognition.startListening({ language: 'fa-IR' });
    };

    const handleGetVoice = () => {
        if (!browserSupportsSpeechRecognition) {
            toast.error("مرورگر شما از تشخیص گفتار پشتیبانی نمی‌کند.")
        } else {
            if (listening) {
                SpeechRecognition.stopListening()
            } else {
                startListening()
            }
        }
    }

    useEffect(() => {
        if (!listening) {
            RunSpeechCommend(transcript, navigate, dispatch, i18n)
            resetTranscript()
            console.log(transcript)
        }
    }, [listening, transcript])

    return (
        <button onClick={() => { handleGetVoice() }} className={`bottomNav ${listening && "bg-green-500 dark:bg-green-700"}`}>
            <FaMicrophone size={20} />
        </button>
    );
};

export default VoiceToText;