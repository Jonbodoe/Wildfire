
// NOT REAL MIDDLEWARE, PLACEMENT FOR NOW UNTIL FINDING A MIDDLEWARE SOLUTION


const mergeUpdatesData = (updatesData, profilesData) => {
    const updatesInfo = updatesData.map((update) => {
        const profileId = update.general.userId
        const getProfileData = profilesData.filter((profile)=> profileId === profile.information.profileId)
        const [ profileData ] = getProfileData
        return {...update, profileData}
        // concating the profiles data into the updates data based on ID.
    })
    return updatesInfo;
}

export default mergeUpdatesData;