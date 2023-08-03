import EditorJS, { OutputData } from '@editorjs/editorjs';
// @ts-ignore
import Paragraph from '@editorjs/paragraph';
import React, { FC, memo, useEffect, useRef } from 'react';

import { EDITOR_JS_TOOLS } from '@/components/ui/editor/editorTools';

import { FilesService } from '@/services/files/files.service';

const DragDrop = require('editorjs-drag-drop');
const CodeTool = require('@editorjs/code');
type Props = {
  data?: OutputData;
  onChange(val: OutputData): void;
  holder: string;
};
const Editor: FC<Props> = ({ data, onChange, holder }) => {
  const ref = useRef<EditorJS>();
  // const onChange = (val: OutputData) => {
  //   console.log(val);
  // };

  useEffect(() => {
    if (window) {
      if (!ref.current) {
        const editor = new EditorJS({
          holder: holder,
          placeholder: 'Напишите пост!',
          tools: EDITOR_JS_TOOLS,
          data,
          onReady: () => {
            new DragDrop(editor);
          },

          async onChange(api, event) {
            const data = await api.saver.save();
            onChange(data);
          },
        });
        ref.current = editor;
      }
      return () => {
        if (ref.current && ref.current.destroy) {
          ref.current.destroy();
        }
      };
    }

    //add a return function handle cleanup
  }, []);

  return (
    <div>
      <div id={holder} className=""></div>
    </div>
  );
};

export default memo(Editor);
