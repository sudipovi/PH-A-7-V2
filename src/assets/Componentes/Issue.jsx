import React, { use } from "react";
import Status from "./Status";
import IssueCard from "./IssueCard";

const Issue = ({ promise }) => {
  const issues = use(promise);
  console.log(issues);
  return (
    <div>
      <div className="container mx-auto my-9">
        <Status />

        <div>
          <h1 className="font-bold text-2xl">Customer Tickets</h1>
          <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-2">
            {issues.map((issue) => {
              return <IssueCard key={issue.id} issue={issue}></IssueCard>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issue;
