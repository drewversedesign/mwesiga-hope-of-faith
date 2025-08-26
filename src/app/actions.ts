'use server';

import { answerQuestions, type AnswerQuestionsOutput } from '@/ai/flows/answer-questions';

export async function getAIResponse(question: string): Promise<AnswerQuestionsOutput> {
  try {
    const result = await answerQuestions({ question });
    return result;
  } catch (error) {
    console.error("Error getting AI response:", error);
    return { answer: "I'm sorry, but I encountered an error while processing your request. Please try again." };
  }
}
