import { Button } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import React, { ChangeEvent, FC, useState } from 'react';

import { FilesService } from '@/services/files/files.service';

const ButtonUploadPost: FC = () => {
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState('');

  const { isLoading, error, data, refetch } = useQuery(
    ['uploadPostImage', file],
    () => FilesService.upload(file),
    {
      enabled: !!file,
      select: (data) => data.data,
      onSuccess: (data) => setUrl(data.file.url),
    },
  );
  console.log(file);
  console.log(data);
  console.log(url);
  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(e);
    }
  };
  if (url) {
    return (
      <div>
        <img src={url} alt="" />

        <div></div>
      </div>
    );
  }
  if (error) {
    return <div>Ошибка</div>;
  }
  return (
    <div>
      <Button
        fullWidth={false}
        variant="outlined"
        component="label"
      >
        Добавить обложку
        <input
          type="file"
          hidden
          draggable
          onChange={(
            event: ChangeEvent<HTMLInputElement>,
          ) => handleFileChange(event)}
        />
      </Button>
    </div>
  );
};

export default ButtonUploadPost;
