import ProductCard from '@/components/ProductCard';
import { prisma } from '@/lib/db/prisma';
import { Metadata } from 'next';

interface SearchPageProps {
  searchParams: { query: string };
}

export function generateMetadata({
  searchParams: { query },
}: SearchPageProps): Metadata {
  return {
    title: `Search: ${query}`,
  };
}

const SearchPage: React.FC<SearchPageProps> = async ({
  searchParams: { query },
}) => {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
      ],
    },
    orderBy: { id: 'desc' },
  });

  if (products.length === 0) {
    return (
      <div role="alert" className="alert">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <span className="capitalize">no products found</span>
        {/* <div>
          <button className="btn btn-sm">Deny</button>
          <button className="btn btn-sm btn-primary">Accept</button>
        </div> */}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};
export default SearchPage;
