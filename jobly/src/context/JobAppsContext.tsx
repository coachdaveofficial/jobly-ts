import React from "react";


/** Context: provides appliedJobIds and setAppliedJobIds object and setter for it throughout app. */

type AppliedJobsContextType = {
    appliedJobsIds: number[] | null,
    setAppliedJobsIds: React.Dispatch<React.SetStateAction<number[] | null>>
}

const AppliedJobsContextState = {
    appliedJobsIds: null,
   setAppliedJobsIds: () => {}
}

const AppliedJobsContext = React.createContext<AppliedJobsContextType>(AppliedJobsContextState)





export default AppliedJobsContext;
