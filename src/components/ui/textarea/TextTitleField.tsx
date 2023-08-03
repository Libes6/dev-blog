import React, {
  FC,
  PropsWithChildren,
  useCallback,
  useRef,
} from 'react';

import style from './TextTitleField.module.scss';

const TextTitleField: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const textAreaRef = useRef<any>();

  const onResize = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + 'px';
      console.log(textAreaRef.current.scrollHeight);
      console.log(textAreaRef.current.style.height);
    },
    [],
  );

  return (
    <textarea
      ref={textAreaRef}
      rows={1}
      onChange={(event) => onResize(event)}
      placeholder="Заголовок статьи..."
      autoFocus
      // className="bg-transparent text-4xl font-black border-none focus:border-none active:border-none focus-visible:border-none "

      className={style.title}
    >
      {/*{children}*/}
    </textarea>
  );
};

export default TextTitleField;
