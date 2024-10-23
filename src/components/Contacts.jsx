import React from "react";

const Contacts = () => {
  return (
    <>
      <div className=" px-10 my-20  ">
        <div className="flex gap-5">
          {" "}
          <div className="py-10">
            <h2 className="text-2xl font-bold">Welcome </h2>
            <p className="text-xl leading-10 py-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur in a asperiores quis doloremque. Consectetur iure
              quasi amet. Est possimus, ipsam officia ea aliquid magnam facere,
              labore maiores in a ad veniam, nostrum ducimus aut odio et dolor
              earum inventore quia. Veniam, quibusdam? Culpa, quae. Pariatur.
            </p>
          </div>
        
        <div>
          <h2 className="text-2xl font-bold py-2">Fill out the form</h2>
          <form className=" pl-10 border p-10" action="">
            <div className="flex gap-5 justify-between">
              <div className="my-2">
                <label className="py-3 font-bold" htmlFor="">
                  First Name
                </label>
                <br />
                <input
                  className="px-4 py-2 border-black border my-3"
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div className="my-2">
                <label className="py-3 font-bold" htmlFor="">
                  Last Name
                </label>
                <br />

                <input
                  className="px-4 py-2 border-black border my-3"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="my-2">
              <label className="py-3 font-bold" htmlFor="">
                Contact Info:
              </label>
              <br />
              <input
                className="px-4 py-2 border-black border my-3"
                type="number"
                placeholder="number"
              />
              <br />
              <input
                className="px-4 py-2 border-black border my-3"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="my-2">
              <label className="py-3 font-bold">Query?</label>
              <br />
              <textarea
                className="border border-black "
                placeholder="Enter your text here"
              />
            </div>
            <button className="px-4 py-2 border bg-[#CDE1DF]">Send</button>
          </form>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contacts;
