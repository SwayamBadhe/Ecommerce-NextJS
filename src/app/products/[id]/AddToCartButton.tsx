'use client';

import { use, useState, useTransition } from 'react';
import { set } from 'zod';

interface AddToCartButtonProps {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  productId,
  incrementProductQuantity,
}) => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <button
        className="btn btn-primary"
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            await incrementProductQuantity(productId);
            setSuccess(true);
          });
        }}
      >
        Add to Cart
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4.142 4L6.01 16.136A1.002 1.002 0 0 0 7.016 17H18a1 1 0 0 0 .958-.713l3-10A1 1 0 0 0 21 5H6.32l-.33-2.138a.993.993 0 0 0-.346-.627a.997.997 0 0 0-.66-.235H3a1 1 0 1 0 0 2zm3.716 11l-1.23-8h13.028l-2.4 8zM10 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0m9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
          />
        </svg>
      </button>
      {isPending && (
        <span className="loading loading-spinner loading-md"></span>
      )}
      {!isPending && success && (
        <span className="text-success">Added to Cart</span>
      )}
    </div>
  );
};
export default AddToCartButton;
