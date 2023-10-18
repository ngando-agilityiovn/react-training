import { createElement } from 'react';

// Styles
import styles from './index.module.css';

// Utilities
import { combineClasses } from '@/utils';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface IHeadingProps {
  title: string;
  as?: HeadingTag;
  className?: string;
}

export const Heading: React.FC<IHeadingProps> = ({ title, as }) =>
  createElement(
    as ?? 'h2',
    {
      className: combineClasses([styles.heading])
    },
    title
  );
