import React, { forwardRef } from 'react';

export interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
}

export const SplitText = forwardRef<HTMLSpanElement, SplitTextProps>(
  ({ text, className, wordClassName = 'split-word' }, ref) => {
    const words = text.split(' ');

    return (
      <span ref={ref} className={className}>
        {words.map((word, idx) => (
          <span
            key={idx}
            className="inline-block overflow-hidden vertical-align-middle"
          >
            <span className={`${wordClassName} inline-block`}>
              {word}
            </span>
            {idx < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        ))}
      </span>
    );
  }
);

SplitText.displayName = 'SplitText';
