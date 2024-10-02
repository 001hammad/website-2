import React from "react";

const Heading = () => {
  return (
    <main>
      <div>
        <h1 className="ml-4">
          <b> "Delicious Donuts, Baked Fresh Daily!"</b>
        </h1>
      </div>
      <div className=" text-sm leading-4 text-pretty ml-4 mb-2 p-2 font-open-sans-condensed text-gray-700">
        <p>
          Our donuts are made with the finest ingredients, baked to perfection
          every day. Whether you love classic flavors or enjoy exploring unique
          combinations, we’ve got something for every donut lover. From soft,
          fluffy textures to rich, decadent toppings, each bite is a delightful
          experience. Come and treat yourself to a sweet indulgence!" This will
          give your website a fresh, inviting feel while emphasizing the quality
          and variety of your donuts.
        </p>
      </div>
      <br />
      <div>
        <h1 className="ml-4">
          <b> "A Bite of Happiness in Every Donut"</b>
        </h1>
      </div>
      <div className=" text-sm leading-4 text-left mb-2 p-2 ml-4 font-open-sans-condensed text-gray-700">
      <p>
        Every donut we create is crafted with love and care, ensuring a perfect
        balance of sweetness and joy. Whether you're starting your day or
        treating yourself, our donuts are here to brighten every moment. One
        bite, and you'll be hooked!" This keeps it short and sweet, while
        evoking an emotional connection with your product!
      </p>
      <div>
      <main className="flex justify-center pt-32 gap-10 animate-pulse duration-1000">
      <div className="rounded-lg">
        <img
          src="https://cdn.pixabay.com/photo/2022/08/31/10/18/donuts-7422979_640.jpg"
          alt="chocolate"
          width={250}
          className="rounded-lg"
        />
      </div>
      <div className="rounded-lg">
        <img
          src="https://cdn.pixabay.com/photo/2022/08/31/10/17/donuts-7422971_640.jpg"
          alt="strawberry"
          width={250} className="rounded-lg"
        />
      </div>
      <div className="rounded-lg">
        <img
          src="https://assets.epicurious.com/photos/5ae74741f8542520401e0da6/1:1/w_2560%2Cc_limit/giant-donut-cake-recipe-042718.jpg"
          alt="nuts"
          width={250} className="rounded-lg"
        />
      </div>
    </main>
      </div>
      </div>
    </main>
  );
};

export default Heading;
