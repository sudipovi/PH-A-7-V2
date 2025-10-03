import React, { use } from "react";
import Status from "./Status";
import IssueCard from "./IssueCard";

const Issue = ({ promise }) => {
  const issues = use(promise);
  console.log(issues);
  return (
    <div>
      <div className="container mx-auto my-9">
        <Status issueTotal={issues.length} />

        <div className="lg:flex lg:justify-items-center gap-10">
          <div>
            <h1 className="font-bold text-2xl">Customer Tickets</h1>
            <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-2">
              {issues.map((issue) => {
                return <IssueCard key={issue.id} issue={issue}></IssueCard>;
              })}
            </div>
          </div>
          <div>
            <div>
              <h1 className="font-bold text-2xl">Task Status</h1>
              <div className="rounded-md shadow-md w-auto p-5 md:w-[400px] lg:w-[500px]">
                <h1 className="font-bold text-xl mb-2">Login Issue</h1>
                <button className="btn bg-green-600 text-white w-[100%]">
                  Complete
                </button>
              </div>
              <div>
                <h1 className="font-bold text-2xl mt-2">Resolved</h1>
                <div className="rounded-md shadow-md w-auto p-5 md:w-[400px] lg:w-[500px] bg-blue-100 mt-2">
                  <h1 className="font-bold text-xl ">Login Issue</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issue;
