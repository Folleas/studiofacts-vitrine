import Image from 'next/image';

export default function ImageRows() {
  return (
    <div className="p-4 my-8 sm:my-16 md:w-3/4 lg:w-2/3 xl:w-full mx-auto">
      <h1 className="text-2xl xl:text-6xl font-bold text-white p-10">LA GALAXIE STUDIOFACT</h1>
      <div className="flex flex-wrap mb-8 sm:mb-16 ">
        {/* First row of pictures */}
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:p-8 relative">
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <Image
              src="/stories.png"
              alt="1"
              layout="responsive"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:p-8 relative">
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <Image
              src="/presse.png"
              alt="2"
              layout="responsive"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:p-8 relative">
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <Image
              src="/doc.png"
              alt="3"
              layout="responsive"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:p-8 relative">
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <Image
              src="/audio.png"
              alt="4"
              layout="responsive"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {/* Second row of pictures */}
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:p-8 relative">
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <Image
              src="/editions.png"
              alt="5"
              layout="responsive"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:p-8 relative">
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <Image
              src="/lab.png"
              alt="6"
              layout="responsive"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 p-4 sm:p-8 relative">
          <div className="rounded-lg overflow-hidden border border-gray-300">
            <Image
              src="/live.png"
              alt="7"
              layout="responsive"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>
        </div>
        {/* Add more Image components for the second row as needed */}
      </div>
    </div>
  );
}
