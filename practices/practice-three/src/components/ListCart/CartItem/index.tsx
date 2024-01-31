import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Select,
  Text
} from '@chakra-ui/react';
import { memo, useState } from 'react';
import { DeleteIcon } from '@chakra-ui/icons';

// Constants
import { SIZE_OPTIONS } from '@/constants';

// Types
import { IProduct, ISise, TUpdateProductQuantity } from '@/types';

// Components
import { ColorGroup, NumberPicker } from '@/components/common';
import DeleteModal from '@/components/DeleteModal';

interface ICartItem {
  props: IProduct;
  removeProducts: (productId: string) => void;
  updateProductColor: (value: string, productId: string) => void;
  updateProductSize: (value: string, productId: string) => void;
  updateProductQuantity: ({
    productId,
    action,
    productQuantity
  }: TUpdateProductQuantity) => void;
}

const CartItem = ({
  props,
  removeProducts,
  updateProductColor,
  updateProductSize,
  updateProductQuantity
}: ICartItem) => {
  const { id, images, name, currency, price, quantity, color, size } = props;

  const [removedItem, setRemovedItem] = useState('');
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const handleChangeColorProduct = (value: string, idProduct: string) => {
    updateProductColor(value, idProduct);
  };

  const handleChangeSizeProduct = (value: string, idProduct: string) => {
    updateProductSize(value, idProduct);
  };

  const handleToggleDeleteModal = () => {
    setIsOpenDeleteModal((prevIsOpenDeleteModal) => !prevIsOpenDeleteModal);
  };

  const handleClickRemove = (id: string) => {
    handleToggleDeleteModal();
    setRemovedItem(id);
  };

  const handleRemoveProduct = () => {
    removeProducts(removedItem);
    handleToggleDeleteModal();
  };

  const handleDecrease = () => {
    updateProductQuantity({
      productId: id,
      action: 'decrease',
      productQuantity: quantity
    });
  };

  const handleIncrease = () => {
    updateProductQuantity({
      productId: id,
      action: 'increase',
      productQuantity: quantity
    });
  };

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateProductQuantity({
      productId: id,
      productQuantity: parseInt(e.target.value)
    });
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateProductQuantity({
      productId: id,
      action: 'increase',
      productQuantity: quantity !== parseInt(e.target.value) ? 0 : quantity - 1
    });
  };

  return (
    <>
      <HStack
        mt="58px"
        gap="48px"
        borderBottom="1px solid gainsboro"
        flexWrap="wrap"
        key={id}
      >
        <Box top="0px" mb="31px">
          <Image src={images?.[0]} alt={name} width="100%" height="303px" />
        </Box>
        <Box mb="31px">
          <Box mb="24px">
            <Text color="gray700" fontSize="24px" mb="16px">
              {name}
            </Text>
            <Text
              as="span"
              color="midnightExpress"
              fontWeight="bold"
              fontSize="16px"
            >
              {currency}
              {price}
            </Text>
          </Box>
          <ColorGroup
            color={color}
            onChangeValue={(value) => handleChangeColorProduct(value, id!)}
          />
          <Flex gap="24px" justifyContent="space-between">
            <HStack>
              <Select
                w="192px"
                h="40px"
                borderColor="midnightExpress"
                border="1px solid"
                defaultValue={size}
                onChange={(e) => handleChangeSizeProduct(e.target.value, id!)}
              >
                {SIZE_OPTIONS.map(({ label, value }: ISise) => {
                  return (
                    <option key={value} value={value} defaultValue={value}>
                      Size: {label}
                    </option>
                  );
                })}
              </Select>
              <NumberPicker
                quantity={quantity!}
                onDecrease={handleDecrease}
                onIncrease={handleIncrease}
                onChangeQuantity={handleChangeQuantity}
                onBlur={handleBlur}
              />
            </HStack>
            <Button
              variant="ghost"
              leftIcon={<DeleteIcon />}
              onClick={() => handleClickRemove(id!)}
            >
              Remove
            </Button>
          </Flex>
        </Box>
      </HStack>

      <DeleteModal
        isOpenDeleteModal={isOpenDeleteModal}
        onDeleteProduct={handleRemoveProduct}
        onToggleModal={handleToggleDeleteModal}
      />
    </>
  );
};

const isEqual = (prevPrpos: ICartItem, nextProps: ICartItem) => {
  console.log(JSON.stringify(prevPrpos) === JSON.stringify(nextProps));
  return JSON.stringify(prevPrpos) === JSON.stringify(nextProps);
};

export default memo(CartItem, isEqual);
