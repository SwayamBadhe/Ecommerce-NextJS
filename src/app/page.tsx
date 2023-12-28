import { prisma } from '@/lib/db/prisma';
import ProductCard from '../components/ProductCard';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const products = await prisma.product.findMany({
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
    <div>
      <div className="hero rounded-xl bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <Image
            src={products[0].imageUrl}
            alt={products[0].name}
            width={800}
            height={400}
            className="w-full max-w-sm rounded-lg shadow-2xl"
            priority
          />
          <div>
            <h1 className="text-5xl font-bold">{products[0].name}</h1>
            <p className="py-6">{products[0].description}</p>
            <Link
              href={`/products/${products[0].id}`}
              className="btn btn-primary"
            >
              check it out!
            </Link>
          </div>
        </div>
      </div>
      <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {products.slice(1).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
