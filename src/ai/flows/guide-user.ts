// This file uses server-side code.
'use server';

/**
 * @fileOverview An AI agent that guides users to relevant sections of the Hope of Faith Foundation website.
 *
 * - guideUser - A function that guides users to relevant sections of the website.
 * - GuideUserInput - The input type for the guideUser function.
 * - GuideUserOutput - The return type for the guideUser function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GuideUserInputSchema = z.object({
  query: z.string().describe('The user query or question.'),
});
export type GuideUserInput = z.infer<typeof GuideUserInputSchema>;

const GuideUserOutputSchema = z.object({
  relevantSection: z
    .string()
    .describe(
      'The most relevant section of the Hope of Faith Foundation website to address the user query. Options include: mission, projects, impact, donate, volunteer, contact.'
    ),
  reason: z.string().describe('The reason why this section is the most relevant.'),
});
export type GuideUserOutput = z.infer<typeof GuideUserOutputSchema>;

export async function guideUser(input: GuideUserInput): Promise<GuideUserOutput> {
  return guideUserFlow(input);
}

const prompt = ai.definePrompt({
  name: 'guideUserPrompt',
  input: {schema: GuideUserInputSchema},
  output: {schema: GuideUserOutputSchema},
  prompt: `You are an AI assistant helping users navigate the Hope of Faith Foundation website.

  A user has the following question: {{{query}}}

  Determine the most relevant section of the website to address the user's question. The possible sections are:
  - mission: Information about the foundation's mission and core values.
  - projects: Details about completed and ongoing projects.
  - impact: Statistics, testimonials, and infographics illustrating the foundation’s impact.
  - donate: Ways to donate to the foundation (one-time, recurring).
  - volunteer: Information on how to volunteer with the foundation.
  - contact: Contact information for the foundation.

  Return the most relevant section and a brief explanation of why that section is the best match for the user's query.

  Make sure to return the response in the following JSON format:
  {{
    "relevantSection": "<section_name>",
    "reason": "<explanation>"
  }}
  `,
});

const guideUserFlow = ai.defineFlow(
  {
    name: 'guideUserFlow',
    inputSchema: GuideUserInputSchema,
    outputSchema: GuideUserOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
