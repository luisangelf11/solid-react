type Props = {
  product: {
    name: string;
    price: number;
    stock: number;
    description: string;
  };
};

//ISP (Interface Segregation Principle)
// * BUENA PRACTICA

export default function ProductCard({ product }: Props) {
  return (
    <div>
      <ProductInfo
        name={product.name}
        description={product.description}
        price={product.price}
      />
      <AddCart stock={product.stock} />
    </div>
  );
}

export function ProductInfo({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: number;
}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export function AddCart({ stock }: { stock: number }) {
  return <>{stock > 0 ? <button>Add to cart</button> : <p>Out of stock</p>}</>;
}
