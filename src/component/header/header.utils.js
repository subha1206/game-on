
export const getCurrentDate = () => {
    const tempDate = new Date();
    const date = (tempDate.getMonth()+1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear()
    const curDate = date
    return(
     curDate
    )

}