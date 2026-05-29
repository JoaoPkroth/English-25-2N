//imports //
import * as  ask from 'readline-sync'
import { addScore } from "./status.js";
import { loseLife } from "./status.js";

// função principal //
export function quiz() {

    //  array com as perguntas //
    const questions = [
        {
            question: "What is the correct sentence?",
            options: [
                "1) She are my sister.",
                "2) She is my sister.",
                "3) She am my sister.",
                "4) She be my sister."
            ],
            answer: "2",
            explanation: "We use 'is' with 'She'. The correct sentence is: 'She is my sister.'"
        },
        {
            question: "What is the correct sentence?",
            options: [
                "1) They is playing soccer.",
                "2) They am playing soccer.",
                "3) They are playing soccer.",
                "4) They be playing soccer."
            ],
            answer: "3",
            explanation: "We use 'are' with 'They'. The correct sentence is: 'They are playing soccer.'"
        }