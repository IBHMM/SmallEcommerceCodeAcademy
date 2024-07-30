import { useContext, useEffect, useState } from 'react';
import { CardProps } from '../types/types';
import { LikedContext } from '../context/liked';

export function Card({ product }: CardProps) {
  const [liked, setLiked] = useState(false);

  const L = useContext(LikedContext);

  useEffect(() => {
    const isLiked = L.products.some((item: any) => item && item.id === product?.id);
    setLiked(isLiked);
  }, [L.products, product?.id])

  const handleLike = () => {
    if (liked) {
      L.setProducts(L.products.filter((item: any) => item.id !== product?.id));
      setLiked(false);
    } else {
      L.setProducts([...L.products, product]);
      setLiked(true);
    }
  }; 

  return (
    <div className="w-[400px] h-[500px] rounded overflow-hidden shadow-lg m-4 relative">
      <img className="w-full h-[300px]" src={product?.image && product.image} alt={product && product.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product && product.title}</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${product && product.price}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {product?.rating && product.rating.rate} / 5 ({product && product.rating && product.rating.count} reviews)
        </span>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center absolute top-0 right-[10px]">
        <button 
          onClick={handleLike} 
          className={`inline-flex items-center px-3 py-1 border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            liked ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {liked ? 'Liked' : 'Like'}
        </button>
      </div>
    </div>
  );
}

