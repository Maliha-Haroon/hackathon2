import Image from "next/image";


const items = [
  { id: 1, src: "/mens.png", alt: "Men's Collection", label: "Men's" },

  { id: 2, src: "/womens.png", alt: "Women's Collection", label: "Women's" },

  { id: 3, src: "/Acc.png", alt: "Accessories Collection", label: "Accessories" },

  { id: 4, src: "/kids.png", alt: "Kid's Collection", label: "Kid's" },
];

export default function ItemsSection() {
  return (
    <section className="py-10 px-6  bg-gray-100">
      <h2 className="text-3xl font-bold   text-center mb-6">EDITOR'S PICK</h2>
      <h4 className="text-1xl font-Montserrat text-center mb-4">Problems trying to resolve
        <br/> the conflict between
      </h4>
      <div className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg shadow-md bg-white flex flex-col items-center"
          >
            <Image
              src={item.src}
              alt={item.alt}
              layout="responsive"
              width={300} // Image width
              height={400} // Image height
              className="object-cover"
            />
            <button className="mt-4 bg-gray-500 text-white py-2 px-6 roundedsquare-lg hover:bg-gray-600 transition">
              {item.label}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

