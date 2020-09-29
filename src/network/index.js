import getadvertisedata from './home.js'
import {request} from './request.js'

export {
  getadvertisedata,
}

export function getclass(){
  return request({
    url : '/category',
  })
}
export function getclass2(id){
  return request({
    url : '/category',
    params:{
      id
    }
  })
}