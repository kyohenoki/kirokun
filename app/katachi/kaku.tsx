"use client"

import { LexicalComposer } from "@lexical/react/LexicalComposer"
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin"
import { ListPlugin } from "@lexical/react/LexicalListPlugin"
import { TRANSFORMERS } from "@lexical/markdown"

import type { InitialConfigType } from "@lexical/react/LexicalComposer"

import { HeadingNode, QuoteNode } from "@lexical/rich-text"
import { ListNode, ListItemNode } from "@lexical/list"
import { CodeNode, CodeHighlightNode } from "@lexical/code"
import { LinkNode, AutoLinkNode } from "@lexical/link"
import { TableNode, TableCellNode, TableRowNode } from "@lexical/table"

import { HorizontalRuleNode } from "@lexical/react/LexicalHorizontalRuleNode"

const theme = {
  // mitame no theme
}

export default function Editor() {
  const initialConfig: InitialConfigType = {
    namespace: "Editor",
    onError(error: Error) {
      console.error(error)
    },
    nodes: [
      HeadingNode,
      QuoteNode,
      ListNode,
      ListItemNode,
      CodeNode,
      CodeHighlightNode,
      LinkNode,
      AutoLinkNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      HorizontalRuleNode
    ],
    theme: theme
  }
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="relative prose text-[var(--bunsho)]">
        <RichTextPlugin
          contentEditable={<ContentEditable className="outline-none"/>}
          placeholder={<div className="absolute top-0 text-neutral-400 pointer-events-none">ここからどんどん書き始める</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin/>
        <ListPlugin/>
        <MarkdownShortcutPlugin transformers={TRANSFORMERS}/>
      </div>
    </LexicalComposer>
  )
}
