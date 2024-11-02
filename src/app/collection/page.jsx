"use client";
import React, { useEffect, useState } from "react";

const fetchCollectionData = async () => {
  const urls = [
    "https://api-mainnet.magiceden.dev/v2/ord/btc/tokens?collectionSymbol=ordinal-pizza-og&showAll=true&limit=100&sortBy=inscriptionNumberAsc",
    "https://api-mainnet.magiceden.dev/v2/ord/btc/tokens?collectionSymbol=ordinal-pizza-og&showAll=true&limit=100&offset=100&sortBy=inscriptionNumberAsc",
    "https://api-mainnet.magiceden.dev/v2/ord/btc/tokens?collectionSymbol=ordinal-pizza-og&showAll=true&limit=100&offset=200&sortBy=inscriptionNumberAsc",
    "https://api-mainnet.magiceden.dev/v2/ord/btc/tokens?collectionSymbol=ordinal-pizza-og&showAll=true&limit=100&offset=300&sortBy=inscriptionNumberAsc",
  ];

  const headers = {
    accept: "application/json",
    Authorization: "Bearer 4cba3122-0874-4276-a271-1bf2f432daf5",
  };

  let collectionData = [];

  for (const url of urls) {
    const response = await fetch(url, { headers });
    if (response.ok) {
      const data = await response.json();
      collectionData = [...collectionData, ...data.tokens];
    } else {
      console.error(
        `Failed to fetch data from ${url}, status code: ${response.status}`
      );
    }
  }

  collectionData.sort((a, b) => a.inscriptionNumber - b.inscriptionNumber);
  return collectionData;
};

const CollectionPage = () => {
  const [collectionData, setCollectionData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 15;

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const data = await fetchCollectionData();
      setCollectionData(data);
      setLoading(false);
    };
    loadData();
  }, []);

  const filteredData = collectionData.filter((item) =>
    item.displayName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <main>
      <section className="py-16">
        <div className="mx-auto max-w-[86rem] px-4 sm:px-10 lg:px-8">
          <h1 className="mb-16 text-center text-pretty text-5xl font-title sm:text-7xl bg-gradient-to-r from-[#EF9631] to-[#E96751] bg-clip-text text-transparent">
            Collection
          </h1>

          {loading ? (
            <div className="text-center text-4xl font-title text-primary">
              Loading...
            </div>
          ) : (
            <>
              <div className="mb-8">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="py-2 px-4 md:text-lg xl:text-xl font-bold focus:outline-none border border-primary text-primary placeholder:text-primary/60 bg-transparent rounded"
                />
              </div>
              {totalItems === 0 ? (
                <div className="text-center text-4xl font-extrabold text-red-500">
                  No items found for "{searchTerm}"
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
                    {currentItems.map((item, index) => (
                      <div key={index} className="col">
                        <div className="group p-1 text-center rounded-lg shadow-xl border-2 border-orange-500 bg-gradient-to-br from-[#EF9631] to-[#E96751]">
                          <img
                            className="object-cover rounded-lg duration-300 group-hover:scale-[1.03]"
                            src={item.contentURI}
                            alt={item.displayName}
                          />
                          <h2 className="text-sm sm:text-base lg:text-lg font-lato font-extrabold text-white my-4">
                            {item.displayName}
                          </h2>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-10">
                    <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
                      <div className="mb-4 sm:mb-0">
                        <p className="text-base font-semibold text-white">
                          Showing{" "}
                          <span className="font-medium">
                            {indexOfFirstItem + 1}
                          </span>{" "}
                          to{" "}
                          <span className="font-medium">
                            {Math.min(indexOfLastItem, totalItems)}
                          </span>{" "}
                          of <span className="font-medium">{totalItems}</span>{" "}
                          results
                        </p>
                      </div>
                      <div>
                        <nav
                          aria-label="Pagination"
                          className="isolate inline-flex -space-x-px gap-2"
                        >
                          <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center border rounded-l-md px-2 py-2 text-white hover:bg-primary focus:z-20 focus:outline-offset-0"
                          >
                            <span className="sr-only">Previous</span>
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 19.5 8.25 12l7.5-7.5"
                              />
                            </svg>
                          </button>

                          {currentPage > 2 && (
                            <>
                              <button
                                onClick={() => setCurrentPage(1)}
                                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold rounded ${
                                  currentPage === 1
                                    ? "bg-primary text-white"
                                    : "text-white ring-1 ring-inset ring-gray-300 hover:bg-primary"
                                }`}
                              >
                                1
                              </button>
                              {currentPage > 3 && (
                                <span className="px-4 py-2 border rounded text-white text-sm font-semibold mx-2">
                                  ...
                                </span>
                              )}
                            </>
                          )}

                          {Array.from({ length: totalPages }, (_, index) => {
                            const pageNum = index + 1;
                            if (
                              pageNum === currentPage ||
                              pageNum === currentPage - 1 ||
                              pageNum === currentPage + 1 ||
                              (pageNum === totalPages &&
                                currentPage < totalPages - 1)
                            ) {
                              return (
                                <button
                                  key={index}
                                  onClick={() => setCurrentPage(pageNum)}
                                  className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold rounded ${
                                    currentPage === pageNum
                                      ? "bg-primary text-white"
                                      : "text-white ring-1 ring-inset ring-gray-300 hover:bg-primary"
                                  }`}
                                  aria-current={
                                    currentPage === pageNum ? "page" : undefined
                                  }
                                >
                                  {pageNum}
                                </button>
                              );
                            }
                            return null;
                          })}

                          {currentPage < totalPages - 1 && (
                            <span className="px-4 py-2 border rounded text-white text-sm font-semibold mx-2">
                              ...
                            </span>
                          )}
                          {currentPage < totalPages - 1 && (
                            <button
                              onClick={() => setCurrentPage(totalPages)}
                              className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold rounded ${
                                currentPage === totalPages
                                  ? "bg-primary text-white"
                                  : "text-white ring-1 ring-inset ring-gray-300 hover:bg-primary"
                              }`}
                            >
                              {totalPages}
                            </button>
                          )}

                          <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="relative inline-flex items-center border rounded-r-md px-2 py-2 text-white hover:bg-primary focus:z-20 focus:outline-offset-0"
                          >
                            <span className="sr-only">Next</span>
                            <svg
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m8.25 4.5 7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </button>
                        </nav>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  );
};

export default CollectionPage;
