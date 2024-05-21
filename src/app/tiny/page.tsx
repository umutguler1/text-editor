"use client";

import { Editor } from "@tinymce/tinymce-react";
import React, { useRef } from "react";

const Tiny = () => {
  const editorRef = useRef<any>(null);

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <>
      <Editor
        apiKey="0y7q4g41x8vdp10hbci123qkbl0juzk2ixyc9uby7xfs9u14"
        onInit={(_evt, editor) => (editorRef.current = editor)}
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
          file_picker_callback: (cb, value, meta) => {
            const input = document.createElement("input");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");

            input.addEventListener("change", (e) => {
              const file = (e.target as HTMLInputElement).files?.[0];

              if (file) {
                const reader = new FileReader();
                reader.addEventListener("load", () => {
                  if (editorRef.current) {
                    const id = "blobid" + new Date().getTime();
                    const blobCache = editorRef.current.editorUpload.blobCache;
                    const base64 = (reader.result as string).split(",")[1];
                    const blobInfo = blobCache.create(id, file, base64);
                    blobCache.add(blobInfo);

                    cb(blobInfo.blobUri(), { title: file.name });

                    // SAVE THE FILE TO A DB
                  }
                });
                reader.readAsDataURL(file);
              }
            });

            input.click();
          },
        }}
      />
      <button onClick={log}>Log editor content</button>
    </>
  );
};

export default Tiny;
