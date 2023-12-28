import PriceTag from '@/components/PriceTag';
import { prisma } from '@/lib/db/prisma';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { cache } from 'react';

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  if (!product) {
    notFound();
  }
  return product;
})

// customize metadata
export async function generateMetadata({params: {id}}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product.name + " - Amazon Clone",
    description: product.description,
    openGraph: {
      images: [{url: product.imageUrl}]
    }
  }
}

const page = async ({ params: { id } }: ProductPageProps) => {
  
  const product = await getProduct(id);

  return (
    <div className=" card flex flex-col lg:flex-row gap-4 lg:items-center lg:m-5 m-auto">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />
      <div >
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <PriceTag price={product.price} className="mt-4" />
        <p className="py-6">{product.description}</p>
      </div>
    </div>
  );
};
export default page;