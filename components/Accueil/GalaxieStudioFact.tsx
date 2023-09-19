import Image from 'next/image';

export default function GalaxieStudioFact() {
  return (

    <div className="p-4 my-16 w-3/4">
      <h1 className="text-6xl font-bold text-white mb-8">LA GALAXIE STUDIOFACT</h1>
      <div className="flex flex-wrap">
        {/* First row of pictures */}
        <div className="w-1/2 sm:w-1/4 p-16">
          <Image
            src="/logo_blanc.png"
            alt="Image 1"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-1/2 sm:w-1/4 p-16">
          <Image
            src="/logo_blanc.png"
            alt="Image 2"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-1/2 sm:w-1/4 p-16">
          <Image
            src="/logo_blanc.png"
            alt="Image 1"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-1/2 sm:w-1/4 p-16">
          <Image
            src="/logo_blanc.png"
            alt="Image 2"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {/* Second row of pictures */}
        <div className="w-1/2 sm:w-1/4 p-16">
          <Image
            src="/logo_blanc.png"
            alt="Image 9"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-1/2 sm:w-1/4 p-16">
          <Image
            src="/logo_blanc.png"
            alt="Image 10"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-1/2 sm:w-1/4 p-16">
          <Image
            src="/logo_blanc.png"
            alt="Image 1"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="w-1/2 sm:w-1/4 p-16">
          <Image
            src="/logo_blanc.png"
            alt="Image 2"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        {/* Add more Image components for the second row as needed */}
      </div>
    </div>
  )
}
