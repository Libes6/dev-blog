import { useMutation } from '@tanstack/react-query';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC, PropsWithChildren } from 'react';

import Badge from '@/components/ui/badge/Badge';
import Button from '@/components/ui/button/Button';
import CartCard from '@/components/ui/cart/CartCard';

import { useCart } from '@/hooks/useCart';
import { useOutside } from '@/hooks/useoutsideclick';

import { ICartInterface } from '@/types/cart.interface';
import { IProduct } from '@/types/product.interface';

import { OrderService } from '@/services/order/order.service';

const HeaderMenu: FC<PropsWithChildren> = ({
  children,
}) => {
  const { items, total } = useCart();
  const { isShow, setIsShow, ref } = useOutside(false);

  const { push } = useRouter();

  return (
    <div
      ref={ref}
      className="relative"
      onClick={() => setIsShow(!isShow)}
    >
      {children}
      <div
        className={clsx(
          `absolute  top-[3rem] -left-40 w-[16rem]  bg-white rounded-[8px] px-3 py-3 text-sm menu z-20  shadow-xl `,
          isShow ? 'open-menu' : 'close-menu',
        )}
      >
        1
      </div>
    </div>
  );
};

export default HeaderMenu;
