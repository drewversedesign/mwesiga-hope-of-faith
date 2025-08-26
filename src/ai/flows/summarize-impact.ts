'use server';

/**
 * @fileOverview This file defines a Genkit flow for summarizing the foundation's impact.
 *
 * - summarizeImpact - A function that summarizes the foundation's impact from project descriptions and testimonials.
 * - SummarizeImpactInput - The input type for the summarizeImpact function.
 * - SummarizeImpactOutput - The return type for the summarizeImpact function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeImpactInputSchema = z.object({
  projectDescriptions: z.string().describe('Descriptions of the projects undertaken by the foundation.'),
  testimonials: z.string().describe('Testimonials from beneficiaries and stakeholders.'),
});
export type SummarizeImpactInput = z.infer<typeof SummarizeImpactInputSchema>;

const SummarizeImpactOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the foundation\'s impact based on the provided project descriptions and testimonials.'),
});
export type SummarizeImpactOutput = z.infer<typeof SummarizeImpactOutputSchema>;

export async function summarizeImpact(input: SummarizeImpactInput): Promise<SummarizeImpactOutput> {
  return summarizeImpactFlow(input);
}

const summarizeImpactPrompt = ai.definePrompt({
  name: 'summarizeImpactPrompt',
  input: {schema: SummarizeImpactInputSchema},
  output: {schema: SummarizeImpactOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing the impact of a nonprofit organization.

  Based on the project descriptions and testimonials provided, create a concise summary that highlights the foundation's effectiveness and key achievements.

  Project Descriptions: {{{projectDescriptions}}}
  Testimonials: {{{testimonials}}}

  Summary:`,
});

const summarizeImpactFlow = ai.defineFlow(
  {
    name: 'summarizeImpactFlow',
    inputSchema: SummarizeImpactInputSchema,
    outputSchema: SummarizeImpactOutputSchema,
  },
  async input => {
    const {output} = await summarizeImpactPrompt(input);
    return output!;
  }
);
