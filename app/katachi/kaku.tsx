"use client"

import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin"
import { ListPlugin } from "@lexical/react/LexicalListPlugin"
import { TRANSFORMERS } from "@lexical/markdown"

import { HeadingNode, QuoteNode } from "@lexical/rich-text"
import { ListNode, ListItemNode } from "@lexical/list"
import { CodeNode } from "@lexical/code"
import { LinkNode } from "@lexical/link"

const theme = {
  // mitame no theme
  paragraph: 'mb-5',
  heading: {
    h1: 'text-2xl font-bold',
    h2: 'text-xl font-semibold',
    h3: 'text-lg font-semibold',
  },
  list: {
    ul: 'list-disc ml-6',
    ol: 'list-decimal ml-6',
    listitem: 'mb-1',
  },
  quote: 'border-l-4 pl-4 italic text-gray-600 border-gray-300',
  code: 'bg-gray-100 text-sm px-1 py-0.5 font-mono rounded',
}

export default function Editor() {
  const initialConfig = {
    namespace: "Editor",
    onError(error: Error) {
      console.error(error)
    },
    nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode, CodeNode, LinkNode],
    theme: theme
  }
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            className="outline-none"
            aria-placeholder={"ここからどんどん書き始める"}
            placeholder={<div className="">ここからどんどん書き始める</div>}
          />
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin/>
      <ListPlugin/>
      <MarkdownShortcutPlugin transformers={TRANSFORMERS}/>
    </LexicalComposer>
  )
}
