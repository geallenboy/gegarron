'use client';

import { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, Sparkles } from 'lucide-react';

export default function InteractiveAiSection() {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!topic) {
      setError('Please enter a topic.');
      return;
    }

    setIsLoading(true);
    setResult('');
    setError('');

    try {
      const response = await fetch('/api/generate-idea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate idea. Please try again.');
      }

      const data = await response.json();
      setResult(data.idea);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FadeIn>
      <section id="ai-demo" className="bg-secondary/10 py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Interactive AI Demo</h2>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
            Curious about AI? Enter a topic below and let a simple AI model generate a creative
            project idea for you.
          </p>
          <div className="mx-auto max-w-xl">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <Input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., 'fitness app', 'personal finance'"
                className="flex-grow text-base"
              />
              <Button onClick={handleGenerate} disabled={isLoading} size="lg">
                {isLoading ? (
                  <>
                    <Bot className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-5 w-5" />
                    Generate Idea
                  </>
                )}
              </Button>
            </div>

            {error && <p className="text-destructive mt-4">{error}</p>}

            {result && (
              <div className="bg-background mt-8 rounded-lg border p-6 text-left shadow-md transition-all">
                <h3 className="text-primary mb-2 flex items-center text-lg font-semibold">
                  <Bot className="mr-2 h-5 w-5" />
                  AI Generated Idea:
                </h3>
                <p className="text-muted-foreground text-lg">{result}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </FadeIn>
  );
}
