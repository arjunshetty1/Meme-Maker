"use client"
import Link from 'next/link';
import View from '@/app/View/page';

const Card = (props) => {
  return (
    <div className="my-10 max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full" src={props.img} alt="Card" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
      </div>
      <div className="px-6 py-4">
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href={`/View?url=${props.img}`}>View
        </Link>
      </div>
    </div>
  );
}

export default Card;
