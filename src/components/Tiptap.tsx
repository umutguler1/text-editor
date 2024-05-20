"use client";

import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";

const MenuBar = ({ editor }: any) => {
  if (!editor) {
    return null;
  }

  const addImage = () => {
    const url = window.prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="flex bg-indigo-100 w-full justify-between font-semibold">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
      >
        Underline
      </button>
      <button onClick={addImage}>Add Image</button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        disabled={!editor.can().chain().focus().setTextAlign("left").run()}
      >
        Left Align
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        disabled={!editor.can().chain().focus().setTextAlign("center").run()}
      >
        Center Align
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        disabled={!editor.can().chain().focus().setTextAlign("right").run()}
      >
        Right Align
      </button>
    </div>
  );
};

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Underline,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: "<p>Hello World!</p>",
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
