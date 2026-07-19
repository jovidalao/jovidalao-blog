# jovidalao.com

Personal site and product home for [Converloop](https://jovidalao.com/converloop/) and Peelday, built with Astro.

## Converloop product story

The Converloop page presents the same product contract as the desktop and mobile apps:

- conversation-first practice with correction attached to the learner's original sentence;
- a natural version, grammar detail, bilingual reading, text selection analysis, and composing help inside the conversation;
- a shared **New conversation** start point with recommendations, progress, and one-tap teaching for recurring grammar errors;
- one cross-platform learning loop: express, notice, remember, reuse;
- learning-only memory for languages, level, goals, practice preferences, mastery signals, recurring errors, expression gaps, listening gaps, and review state;
- one **Conversation replay** area for listening back and dictation, with listening misses stored as a learning dimension rather than a separate personal profile;
- no cross-conversation memory of identity, work, education, location, family, relationships, interests, routines, purchases, health, beliefs, finances, travel, plans, or life events;
- a shared portable backup format, with desktop and mobile interfaces adapted to the strengths of each device.

Conversation history can keep a thread coherent, but personal details from that thread are never promoted into long-term memory. Legacy personal or persona-relationship memory is not presented as a product capability and is not restored through the new backup contract.

The interactive correction, natural-expression, composing-hint, bilingual-reply, selection-analysis, and focused grammar-conversation demonstrations are intentional product documentation. Keep them visible when revising the landing page.

## Local development

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

The Converloop landing pages are available at `/converloop/` and `/zh/converloop/`. Shared markup lives in `src/views/ConverloopLanding.astro`; bilingual copy is in `src/i18n/ui.ts`; product-specific styles are in `src/styles/converloop.css`.
