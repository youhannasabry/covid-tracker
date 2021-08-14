import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Typography from '@material-ui/core/Typography';
import request from '../../../api/request';
import Loading from '../Loading';

const centralDivStyle = {
  minHeight: 200,
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const autoUploadRequest = async (file, ref) => {
  // eslint-disable-next-line no-undef
  try {
    const fd = new FormData();
    fd.append('file', file, file.name);
    return request({
      url: `/public/upload-document?${ref ? `ref=${ref}` : ''}`,
      method: 'POST',
      data: fd,
    });
  } catch (err) {
    return err;
  }
};
const mime = {
  excel: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  images: 'image/*',
  pdf: '.pdf',
};
const RenderDropzoneField = props => {
  const { disabled, types, ref, onDrop, autoUpload, onUpload } = props;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleOnDrop = useCallback(async files => {
    const file = files[0];
    if (!autoUpload) return onDrop(file);
    // AUTO UPLOAD
    setLoading(true);
    const result = await autoUploadRequest(file, ref);
    const url = result.data && result.data.url;
    setLoading(false);
    if (!url) setError(true);
    if (url && onUpload) return onUpload(url);
  }, []);
  let mimeString = '';
  types.forEach(type => {
    if (mime[type]) mimeString += `${mime[type]},`;
  });
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleOnDrop,
    multiple: false,
    accept: mimeString,
  });

  if (disabled) return null;
  // noinspection JSAnnotator
  return (
    <>
      <br />
      <Paper {...getRootProps()} style={centralDivStyle}>
        {loading ? (
          <>
            <div>
              <Loading />
              <Typography variant="h5">Loading</Typography>
            </div>
          </>
        ) : (
          <>
            <input {...getInputProps()} />
            <div>
              <CloudUploadIcon />
              <Typography variant="h5">Upload Files Here</Typography>
              <Typography variant="h6">( Accepts {types.join(',')})</Typography>
              {error && (
                <Typography variant="h6" color="danger">
                  Error Uploading Document
                </Typography>
              )}
            </div>
          </>
        )}
      </Paper>
    </>
  );
};

RenderDropzoneField.propTypes = {
  classes: PropTypes.object,
  types: PropTypes.array.isRequired,
  onUpload: PropTypes.object,
  onDrop: PropTypes.func,
  autoUpload: PropTypes.func,
};

export default RenderDropzoneField;
