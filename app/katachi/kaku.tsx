"use client"

import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { ListPlugin } from "@lexical/react/LexicalListPlugin"
// import { CodeHighlightPlugin } from '@lexical/react/LexicalCodeHighlightPlugin'

import { TRANSFORMERS } from "@lexical/markdown"

import { ListNode, ListItemNode } from "@lexical/list"
import { HeadingNode } from "@lexical/rich-text"
// import { CodeNode } from "@lexical/code"

export default function Editor() {
  const initialConfig = {
    namespace: "Editor",
    theme: {
      // theme
    },
    onError(error: Error) {
      console.error(error)
    },
    nodes: [HeadingNode, ListNode, ListItemNode]
  }
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable className="outline-none"/>
        }
        placeholder={<div>ABC ...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin/>
      <ListPlugin/>
      <MarkdownShortcutPlugin transformers={TRANSFORMERS}/>
    </LexicalComposer>
  )
}
