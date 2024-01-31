import Storybook from '@storybook/react';

// Components
import Pagination from '.';
import { usePagination, useProductList } from '@/hooks';

// Constants

export default {
  title: 'Components/Pagination',
  component: Pagination
} as Storybook.ComponentMeta<typeof Pagination>;

const Template: Storybook.ComponentStory<typeof Pagination> = () => {
  const { products } = useProductList();

  const total = products?.length || 0;

  const {
    handlePrevPage,
    handleNextPage,
    pageNumbers,
    handleSelectPage,
    pageIndex
  } = usePagination(total);

  return (
    <Pagination
      onPrevPage={handlePrevPage}
      onNextPage={handleNextPage}
      pageNumbers={pageNumbers}
      onSelectPage={handleSelectPage}
      pageIndex={pageIndex}
      total={total}
    />
  );
};

export const PaginationComponent = Template.bind({});
