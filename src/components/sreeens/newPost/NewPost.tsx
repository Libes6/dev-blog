import { OutputData } from '@editorjs/editorjs';
import { Button, Input, TextField } from '@mui/material';
import dynamic from 'next/dynamic';
import React, { FC, useState } from 'react';

import Meta from '@/components/ui/Meta';
import ButtonUploadPost from '@/components/ui/button/ButtonUploadPost';
import {
  addEditorToLocale,
  getEditorToLocale,
} from '@/components/ui/editor/editorToLocale';
import Layout from '@/components/ui/layout/Layout';
import TextTitleField from '@/components/ui/textarea/TextTitleField';

const Editor = dynamic(
  () => import('@/components/ui/editor/Editor'),
  {
    ssr: false,
  },
);
const NewPost: FC = () => {
  const post = getEditorToLocale();
  console.log(post);
  const [postData, setPostData] =
    useState<OutputData>(post);
  const onEditPost = (val: OutputData) => {
    setPostData(val);
    addEditorToLocale(val);
  };
  return (
    <Meta title={'new post'} description={'новый пост'}>
      <Layout>
        <div
          className="min-h-[calc(100vh-80px)] grid gap-2 "
          style={{ gridTemplateColumns: '6fr 2fr' }}
        >
          <div
            className=" rounded-[8px] grid"
            style={{ gridTemplateRows: '10fr 2fr' }}
          >
            <div className="bg-white">
              <div className="py-8 px-16 flex gap-5 flex-col">
                <div>
                  <ButtonUploadPost />
                </div>
                <TextTitleField></TextTitleField>
              </div>
              <div className="py-2 px-2">
                <Editor
                  data={postData}
                  onChange={onEditPost}
                  holder={'postEditor'}
                />
              </div>
            </div>
            <div className="py-4 px-4">
              <Button variant="contained">
                Опубликовать
              </Button>
            </div>
          </div>
          {/*<div className="bg-white rounded-[8px]">1</div>*/}
        </div>
      </Layout>
    </Meta>
  );
};

export default NewPost;
