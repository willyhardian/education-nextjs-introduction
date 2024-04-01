import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Welcome to our store
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                viverra nisl vitae nibh facilisis blandit.
              </p>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Shop now
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-center">
              <img src="/product-1.jpeg" alt="Main product" className="h-96" />
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
