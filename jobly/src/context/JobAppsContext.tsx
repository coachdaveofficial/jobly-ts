import React, {Dispatch, SetStateAction} from "react";


/** Context: provides appliedJobIds and setAppliedJobIds object and setter for it throughout app. */

// type AppliedJobsContextType = {
//     appliedJobsIds: Set<number>,
//     setAppliedJobsIds: (prevData: Set<number>) => void
// }
type AppliedJobsContextType = {
    applicationIds: Set<number>,
    setApplicationIds: Dispatch<SetStateAction<Set<number>>>
}

const AppliedJobsContextState = {
    applicationIds: new Set<number>([]),
    setApplicationIds: () => {}
}



const AppliedJobsContext = React.createContext<AppliedJobsContextType>(AppliedJobsContextState)





export default AppliedJobsContext;
