const labels = 
    {
        statuses: [
            {
                uid: 'OPEN',
                label:"Open",
            },
            {
                uid: 'REVIEWING',
                label: "Reviewing",
            },
            {
                uid: 'MUSTRESOLVE',
                label: "Must Resolve",
            },
            {
                uid: 'RESOLVED',
                label:"Resolved"
            }
        ],
        priorities: [
            {
                uid: 'LOW',
                label:"Low",
            },
            {
                uid: 'MEDIUM',
                label: "Medium",
            },
            {
                uid: 'HIGH',
                label: "High",
            },
        ],
        reviews: [
            {
                uid: 'OPEN',
                label: 'Open'
            },
            {
                uid: 'REVIEWING',
                label: 'Reviewing'
            },
            {
                uid: 'REVIEWED',
                label: 'Reviewed'
            },
        ]
    }
;
export default labels;