const ConstFunction = {

}

export const returnDate = (d: any) =>{
    // console.log("ddddddddd", d)
    const date = new Date(d);
    const localTime = date.toLocaleTimeString("en", {hour: '2-digit', minute:'2-digit'})
    const utc = date.toUTCString().split(' ')
    // console.log("==============", `${utc[1]} ${utc[2]}, ${utc[3]} ${localTime}`)
    return `${utc[1]} ${utc[2]}, ${utc[3]} ${localTime}`
  }

  export const modifyDate = (date: any) => {
    // 25/02/23, 10:05
    let d = date.split(',');
    let dd = d[0].split('/');
    let tt = d[1];
const newDd = `${dd[2]}-${dd[0] === 10 || dd[0] === 11 || dd[0] === 12 ? dd[0] : '0'+dd[0]}-${dd[1]}${d[1]}`
   return newDd
  }

  // modifyDate('25/02/23, 10:05')
export default ConstFunction