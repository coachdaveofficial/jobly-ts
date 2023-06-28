import React from "react";


/** Context: provides appliedJobIds and setAppliedJobIds object and setter for it throughout app. */

type AppliedJobsContextType = {
    appliedJobsIds: Set<number>,
    setAppliedJobsIds: (prevData: Set<number>) => void
}

const AppliedJobsContextState = {
    appliedJobsIds: new Set<number>([]),
    setAppliedJobsIds: () => { }
}

const AppliedJobsContext = React.createContext<AppliedJobsContextType>(AppliedJobsContextState)





export default AppliedJobsContext;
