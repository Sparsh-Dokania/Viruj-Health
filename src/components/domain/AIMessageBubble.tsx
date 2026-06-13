import React from 'react';
import { AIMessage } from '@/types';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export interface AIMessageBubbleProps {
  message: AIMessage;
  onActionClick?: (actionLabel: string, actionHref: string) => void;
}

export function AIMessageBubble({ message, onActionClick }: AIMessageBubbleProps) {
  const isAssistant = message.role === 'assistant';

  return (
    <div
      className={cn(
        'flex w-full mb-4',
        isAssistant ? 'justify-start' : 'justify-end'
      )}
    >
      <div
        className={cn(
          'max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 transition-all duration-200',
          isAssistant
            ? 'bg-viruj-violet-50/10 border border-viruj-violet-200/20 text-white rounded-tl-none'
            : 'bg-viruj-teal-500 text-white rounded-tr-none'
        )}
      >
        {isAssistant && (
          <div className="flex items-center gap-1.5 mb-2 text-viruj-violet-200">
            <Sparkles className="w-4 h-4 fill-current animate-pulse" />
            <span className="font-bold text-xs uppercase tracking-wider">Viruj AI</span>
            {message.confidence && (
              <span
                className={cn(
                  'text-[10px] px-1.5 py-0.5 rounded-full font-bold ml-2 border',
                  message.confidence === 'high' && 'bg-viruj-teal-500/10 text-viruj-teal-200 border-viruj-teal-500/20',
                  message.confidence === 'medium' && 'bg-amber-500/10 text-amber-200 border-amber-500/20',
                  message.confidence === 'low' && 'bg-red-500/10 text-red-200 border-red-500/20'
                )}
              >
                {message.confidence} confidence
              </span>
            )}
          </div>
        )}

        <p className="text-body-md whitespace-pre-wrap leading-relaxed select-text">
          {message.content}
        </p>

        {isAssistant && message.actions && message.actions.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {message.actions.map((action, idx) => (
              <Link key={idx} href={action.href} passHref legacyBehavior>
                <Button
                  size="sm"
                  variant="ai"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  onClick={() => onActionClick?.(action.label, action.href)}
                >
                  {action.label}
                </Button>
              </Link>
            ))}
          </div>
        )}

        {isAssistant && message.disclaimer && (
          <p className="mt-3 pt-2 border-t border-white/5 text-[10px] text-viruj-neutral-600 leading-tight">
            *Clinical Disclaimer: Viruj AI provides general triage and report explanations based on clinical models. It does not replace professional medical diagnosis, advice, or treatment. If you are experiencing a medical emergency, please call your local emergency services immediately.
          </p>
        )}
      </div>
    </div>
  );
}
