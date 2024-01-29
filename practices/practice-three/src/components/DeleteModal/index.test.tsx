import { fireEvent, render } from '@testing-library/react';

// Components
import DeleteModal from '.';

describe('DeleteModal component', () => {
  const mockOnToggleModal = jest.fn();
  const mockOnDeleteModal = jest.fn();

  const mockProps = {
    isOpenDeleteModal: true,
    onToggleModal: mockOnToggleModal,
    onDeleteProduct: mockOnDeleteModal
  };
  let container: ReturnType<typeof render>;

  beforeEach(() => {
    container = render(<DeleteModal {...mockProps} />);
  });
  it('Render correcty', () => {
    expect(container).toMatchSnapshot();
  });

  it('Should onToggleModal is called when cliked on cancel button', () => {
    const cancelButton = container.getByRole('button', { name: 'Cancel' });
    fireEvent.click(cancelButton);
    expect(mockOnToggleModal).toHaveBeenCalled();
  });

  it('Should onDeleteProduct is called when cliked on delete button', () => {
    const deleteButton = container.getByRole('button', { name: 'Delete' });
    fireEvent.click(deleteButton);
    expect(mockOnDeleteModal).toHaveBeenCalled();
  });

  it('onToggleModal should be called when calling onClose', () => {
    const mockOpenDeleteModalProps = { ...mockProps, onOpenDeleteModal: true };
    const { getByRole } = render(<DeleteModal {...mockOpenDeleteModalProps} />);

    const closeButton = getByRole('button', { name: 'Close' });

    fireEvent.click(closeButton);

    expect(mockOnToggleModal).toHaveBeenCalled();
  });
});
