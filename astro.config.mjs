// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

const LANG_LABELS = /** @type {Record<string, string>} */ ({
  md: "Markdown",
  markdown: "Markdown",
  js: "JavaScript",
  ts: "TypeScript",
  jsx: "JSX",
  tsx: "TSX",
  sh: "Shell",
  bash: "Shell",
  json: "JSON",
  css: "CSS",
  html: "HTML",
  astro: "Astro",
});

/**
 * Renders the code-block chrome from the Figma design: a filename on the
 * left in the accent colour and the language on the right in subtle grey,
 * above the highlighted code.
 * @type {import('shiki').ShikiTransformer}
 */
const codeBlockChrome = {
  name: "code-block-chrome",
  root(node) {
    const raw = this.options.meta?.__raw ?? "";
    const title = /title="([^"]+)"/.exec(raw)?.[1];
    const lang = this.options.lang ?? "";
    const label = LANG_LABELS[lang] ?? lang;

    /** @type {any[]} */
    const head = [];
    if (title) {
      head.push({
        type: "element",
        tagName: "span",
        properties: { class: "code-block__title" },
        children: [{ type: "text", value: title }],
      });
    }
    if (label) {
      head.push({
        type: "element",
        tagName: "span",
        properties: { class: "code-block__lang" },
        children: [{ type: "text", value: label }],
      });
    }
    if (head.length === 0) return;

    node.children = [
      {
        type: "element",
        tagName: "div",
        properties: { class: "code-block" },
        children: [
          {
            type: "element",
            tagName: "div",
            properties: { class: "code-block__head" },
            children: head,
          },
          ...node.children,
        ],
      },
    ];
  },
};

// https://astro.build/config
export default defineConfig({
  site: "https://benackles.com",
  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
      transformers: [codeBlockChrome],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
