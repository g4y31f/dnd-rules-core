import React from 'react';
import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string | React.ReactNode;
};

const PostBody = ({ content }: Props) => {
  if (typeof content === 'string') {
  return (
    <div
      className={markdownStyles['markdown-body']}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
  } else {
    return <div>{content}</div>;
  }

};

export default PostBody;
