"use client";

import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";

const Tiny = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      // @ts-ignore
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="0y7q4g41x8vdp10hbci123qkbl0juzk2ixyc9uby7xfs9u14"
        onInit={(_evt: any, editor: any) => (editorRef.current = editor)}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "code",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "code",
            "help",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks | " +
            "bold italic forecolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help | image media",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
};

export default Tiny;
