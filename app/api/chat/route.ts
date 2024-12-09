import {openai} from '@ai-sdk/openai';
import {generateText} from 'ai';
import {NextResponse} from 'next/server';
import {emailSystemPrompt} from "@/utils/prompts";

export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        // Extract the fields from the incoming request
        const { emailType, storeLink, segment, specificDetails, specificProducts, specialOffer } = await req.json();

        // Check if all required fields are provided
        if (!emailType || !storeLink || !segment) {
            return NextResponse.json(
                { error: 'email type, store link and target segment are required.' },
                { status: 400 }
            );
        }

        const prompt = `Generate an email campaign with the following details: 
                      - Segment: ${segment}
                      - Email Type: ${emailType}
                      - Store Link: ${storeLink}
                      - Specific Details: ${specificDetails}
                      - Specific Products: ${specificProducts}
                      - Special Offer: ${specialOffer}`

        const {text} = await generateText({
            model: openai('gpt-4o'),
            system: emailSystemPrompt,
            prompt: prompt,
        });

        // Return the response
        return NextResponse.json({ text });
    } catch (error) {
        console.error('Error processing the request:', error);
        return NextResponse.json(
            { error: 'Failed to process the request' },
            { status: 500 }
        );
    }
}

