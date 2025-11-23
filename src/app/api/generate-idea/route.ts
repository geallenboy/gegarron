import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { topic } = await req.json();

    if (!topic) {
      return NextResponse.json({ error: 'Topic is required' }, { status: 400 });
    }

    // In a real application, you would call your AI model here.
    // For this demo, we'll return a static, creative idea.
    const ideas = [
      `An AI-powered application for topic "${topic}" that helps users create personalized learning paths with curated resources from around the web.`,
      `A platform for topic "${topic}" that uses AI to generate unique, royalty-free music tracks for content creators.`,
      `A mobile app for topic "${topic}" that leverages computer vision to identify and catalog items in real-time, providing users with instant information.`,
      `An AI tool for topic "${topic}" that analyzes user-written text and suggests improvements for clarity, tone, and style.`,
    ];

    const generatedIdea = ideas[Math.floor(Math.random() * ideas.length)];

    // Simulate a delay to make it feel like a real AI is thinking.
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return NextResponse.json({ idea: generatedIdea });
  } catch (error) {
    console.error('Error generating idea:', error);
    return NextResponse.json({ error: 'Failed to generate idea' }, { status: 500 });
  }
}
