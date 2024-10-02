import React from 'react';
import Link from 'next/link';

const Flavours = () => {
  return (
    <main className="flex justify-center gap-20 ">
      <div className="rounded-lg hover:animate-pulse duration-200">
        <Link href="/Flavours/Chocolate"><img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Dunkin-Donuts-Chocolate-Sprinkled.jpg/856px-Dunkin-Donuts-Chocolate-Sprinkled.jpg"
          alt="chocolate"
          width={140}
          className="rounded-lg "
        /></Link>
        <h1 className='pt-2'><b>Chocolate Flavours</b></h1>
        <h1 className='pt-2 text-gray-600 text-xs ml-8'>start 5$ to 200$</h1>
      </div>
      <div className="rounded-lg hover:animate-pulse duration-200">
        <Link href="/Flavours/Strawberry"><img
          src="https://media.istockphoto.com/id/471149905/photo/pink-donut-clipping-path.jpg?s=612x612&w=0&k=20&c=htw-VEZsAj9J2juNBqZqLxJ1C7zbN0AQknZT-N6n0ko="
          alt="strawberry"
          width={140}
        /></Link>
        <h1 className='pt-2'><b>Strawberry Flavours</b></h1>
        <h1 className='pt-2 text-gray-600 text-xs ml-8'>start 20$ to 150$</h1>
      </div>
      <div className="rounded-lg hover:animate-pulse duration-200">
        <Link href="/Flavours/Nuts"><img
          src="https://www.bigappledonuts.com/wp-content/uploads/Rio-Pink-bigappledonuts.png"
          alt="nuts"
          width={128}
        /></Link>
        <h1 className='pt-2 ml-2'><b>Nuts Flavours</b></h1>
        <h1 className='pt-2 text-gray-600 text-xs ml-6'>start 40$ to 280$</h1>
      </div>
    </main>
  );
};

export default Flavours;
