'use client';

import type { Story } from '@/components/playground/componentStory';

export const textListStory: Story = {
  generator: ({ properties } = {}) => [
    {
      tag: 'p-text-list',
      properties,
      children: [
        { tag: 'p-text-list-item', children: ['The quick brown fox jumps over the lazy dog'] },
        {
          tag: 'p-text-list-item',
          children: [
            'The quick brown fox jumps over the lazy dog',
            {
              tag: 'p-text-list',
              children: [
                { tag: 'p-text-list-item', children: ['The quick brown fox jumps over the lazy dog'] },
                { tag: 'p-text-list-item', children: ['The quick brown fox jumps over the lazy dog'] },
              ],
            },
          ],
        },
        { tag: 'p-text-list-item', children: ['The quick brown fox jumps over the lazy dog'] },
      ],
    },
  ],
};
