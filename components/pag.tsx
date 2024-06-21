import React from "react";
import { Button } from "./ui/button";

const Pag = () => {
  return (
    <>
      <h1 className="w-full p-3 text-center head_text usespan mb-10">
        Our Service
      </h1>
      <div className="flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center flex-wrap gap-5 mb-8">
            <div className="card bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="text-4xl mb-4">🃏</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Torat Card Reading
              </h3>
              <p className="text-gray-600 dark:text-white">
                In Torat Card Reading Our awesome Teacher teach you How Read the
                Torat Card.
              </p>
            </div>
            <div className="card bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="text-4xl mb-4">👩‍❤️‍💋‍👨</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Relationship Counseling
              </h3>
              <p className="text-gray-600 dark:text-white">
                we Provide you the best advise for your Relation Ship Happy and
                Healty
              </p>
            </div>
            <div className="card bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="text-4xl mb-4">👼</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Spiritual Guidance
              </h3>
              <p className="text-gray-600 dark:text-white">
                We Provide you a track how you close to the good and make
                everything Good
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-5">
            <div className="card bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="text-4xl mb-4">💸</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Finanicial and Wealth Insight
              </h3>
              <p className="text-gray-600 dark:text-white">
                We Like to Provide to about how you earn the Finanicial Wealths
                and Insight
              </p>
            </div>
            <div className="card bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="text-4xl mb-4">👩‍❤️‍👨</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Reading for Couples
              </h3>
              <p className="text-gray-600 dark:text-white">
                This is for about how your partner think about you and yourself
              </p>
            </div>
            <div className="card bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="text-4xl mb-4">📲</div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">
                Call Us
              </h3>
              <Button>7065215277</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pag;
