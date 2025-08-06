"use client"

import { forwardRef, useEffect, useRef } from "react"
import { LexicalComposer, InitialConfigType } from "@lexical/react/LexicalComposer"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin"
import { ContentEditable } from "@lexical/react/LexicalContentEditable"
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin"
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin"
import { EditorThemeClasses, INSERT_LINE_BREAK_COMMAND } from "lexical"

export default function Tameshigaki() {
  return (
    <div className="flex flex-col gap-0.5">      
      <Title/>
      <Bunsho/>
    </div>
  )
}

// 動作の基本的な部分はChatGPT、見やすく色々調節したのは自分

const titletheme: EditorThemeClasses = {
  paragraph: "text-[1.5rem] font-medium"
}

function Title() {
  const titleconfig: InitialConfigType = {
    namespace: "Title",
    theme: titletheme,
    onError(error: Error) {
      console.error(error)
    }
  }
  return (
    <LexicalComposer initialConfig={titleconfig}>
      <div className="relative text-[var(--bunsho)]">
        <PlainTextPlugin
          contentEditable={<ContentEditable className="outline-none"/>}
          placeholder={<div className="absolute top-0 text-[1.5rem] text-[var(--bunsho)]/40 pointer-events-none">無題</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin/>
        <AutoFocusPlugin/>
      </div>
    </LexicalComposer>
  )
}

const bunshotheme: EditorThemeClasses = {
  paragraph: "text-[1.15rem]"
}

// Bunshoのほうは後でMarkdownで入力できるようにする

function Bunsho() {
  const bunshoconfig: InitialConfigType = {
    namespace: "Bunsho",
    theme: bunshotheme,
    onError(error: Error) {
      console.error(error)
    }
  }
  return (
    <LexicalComposer initialConfig={bunshoconfig}>
      <div className="relative text-[var(--bunsho)]">
        <PlainTextPlugin
          contentEditable={<ContentEditable className="outline-none"/>}
          placeholder={<div className="absolute top-0 text-[1.15rem] text-[var(--bunsho)]/40 pointer-events-none">この一行から書き始まる</div>}
          ErrorBoundary={LexicalErrorBoundary}
          />
        <HistoryPlugin/>
      </div>
    </LexicalComposer>
  )
}
