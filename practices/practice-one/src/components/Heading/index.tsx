import { createElement } from 'react';

// Styles
import styles from './index.module.css';
import { combineClasses } from '@/utils';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  title: string;
  as?: HeadingTag;
  className?: string;
}

export const Heading = ({ title, as }: HeadingProps) =>
  createElement(
    as ?? 'h2',
    {
      className: combineClasses([styles.heading])
    },
    title
  );
