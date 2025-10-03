import React, { use, useState } from "react";
import Status from "./Status";
import IssueCard from "./IssueCard";
import Pending from "./Pending";
import { toast } from "react-toastify";

const Issue = ({ promise }) => {
  const data = use(promise);
  const [issues, setIssues] = useState(data);
  
  const [ticktissue, setTicktIssue] = useState([]);
  const [resolvedissue, setResolvedIssue] = useState([]);
  const handleIssue = (issue) =>{
    console.log(issue);
    const isExist = ticktissue.find((item)=>item.id == issue.id)
    if(isExist){
      toast("Task is already in progress");
      return;
    }
    const newIssue = [...ticktissue, issue];
    setTicktIssue(newIssue);
    toast("Issue Selected");
  }
  const handleResolved = (issue) =>{
    const newResolved = [...resolvedissue,issue];
    setResolvedIssue(newResolved);

    const remaining = ticktissue.filter((newissue) => newissue.id !== issue.id );
    setTicktIssue(remaining);
    console.log(issue);

    const remainingTickt = issues.filter((item)=>item.id !== issue.id);
    setIssues(remainingTickt);
    toast("Isssue Resolved");
  }
  return (
    <div>
      <div className="container mx-auto my-9">
        <Status issueTotal={ticktissue.length} totalResolved={resolvedissue.length} />

        <div className="lg:flex lg:justify-items-center gap-10">
          <div>
            <h1 className="font-bold text-2xl">Customer Tickets</h1>
            <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-2">
              {issues.map((issue) => {
                return <IssueCard handleIssue={handleIssue} key={issue.id} issue={issue}></IssueCard>;
              })}
            </div>
          </div>
          <div>
            <div>
              <h1 className="font-bold text-2xl">Task Status</h1>
              <div className="rounded-md shadow-md w-auto p-5 md:w-[400px] lg:w-[500px]">

                {
                  ticktissue.map((issues)=> <Pending handleResolved={handleResolved} key={issues.id} issues={issues}/>)
                }
              </div>
              <div>
                <h1 className="font-bold text-2xl mt-2">Resolved</h1>
                <div className="rounded-md shadow-md w-auto p-5 md:w-[400px] lg:w-[500px] bg-blue-100 mt-2">

                  {
                    resolvedissue.map(order=><h1 className="font-bold text-xl mb-2 ">{order.title}</h1>)
                  }
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
