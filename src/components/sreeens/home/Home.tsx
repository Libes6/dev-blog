import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import LayoutHome from '@/components/sreeens/home/LayoutHome';
import Heading from '@/components/ui/Heading';
import Meta from '@/components/ui/Meta';
import Button from '@/components/ui/button/Button';
import AddToCartButton from '@/components/ui/catalog/AddToCartButton';
import Catalog from '@/components/ui/catalog/Catalog';
import CatalogPagination from '@/components/ui/catalog/CatalogPagination';
import Layout from '@/components/ui/layout/Layout';
import PostPage from '@/components/ui/post/postPage/PostPage';

import { useActions } from '@/hooks/useActions';
import { useAuth } from '@/hooks/useAuth';

import {
  TypePaginationProducts,
  TypeProducts,
} from '@/types/product.interface';

import { PostService } from '@/services/post/post.service';

const Home: FC<any> = ({ post }) => {
  return (
    <Meta title={'home'} description={'home page'}>
      <Layout>
        <LayoutHome>
          <PostPage post={post} />
        </LayoutHome>
      </Layout>
    </Meta>
  );
};

export default Home;
