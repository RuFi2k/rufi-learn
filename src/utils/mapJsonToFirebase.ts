const isCollection = (data: any): boolean => {
  if(typeof data === 'object' && !Array.isArray(data)){
    return true
  }
  if( (Array.isArray(data) && typeof data[0] === "object"))
    return true
  return false
}

const writeKeysToDB = (dbRef: any, data: any) => {
  interface Obj {
    [k: string]: any
  }
  let result: Obj = {}
  Object.keys(data).forEach(key => {     
    if(!isCollection((data as Obj)[key])){
      result[key] = data[key]
    }
  })
  dbRef.add(result).then((res: any) => {
    Object.keys(data).forEach(key => {
      if(isCollection((data as Obj)[key])){
        if(Array.isArray(data[key])) {
          data[key].forEach((d: any) => {
            writeKeysToDB(dbRef.doc(res.id).collection(key), d)
          })
        } else {
          writeKeysToDB(dbRef.doc(res.id).collection(key), data[key])
        }
      }
    })
  })
}

export default writeKeysToDB
