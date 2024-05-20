"use client";

import React from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaImage,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
} from "react-icons/fa";
// import "./TiptapEditor.css"; // Make sure to create a CSS file for styling

const TiptapEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: "<p>Hello World!</p>",
  });

  const addImage = () => {
    const url = window.prompt("Enter the image URL");
    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="editor-container">
      <div className="editor-toolbar">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "is-active" : ""}
        >
          <FaBold />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "is-active" : ""}
        >
          <FaItalic />
        </button>
        {/* <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "is-active" : ""}
        >
          <FaUnderline />
        </button> */}
        <button onClick={addImage}>
          <FaImage />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
        >
          <FaAlignLeft />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={
            editor.isActive({ textAlign: "center" }) ? "is-active" : ""
          }
        >
          <FaAlignCenter />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
        >
          <FaAlignRight />
        </button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
