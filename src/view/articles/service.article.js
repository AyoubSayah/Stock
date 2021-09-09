import API from '../api';
import Article from './Article';

export async function getallarticle() {
  const res = await API.get(`getallarticle`);
  if (res.data.status == 'succes') {
    return res.data.data;
  } else return [];
}

export async function addarticle(Article) {
  console.log('aa');

  console.log(Article);
  const res = await API.post(`addarticle`, Article);
  console.log(res);
  if (res.data.status == 'succes') {
    return res.data.data;
  } else return [];
}
 export async function getArticleById(id)
 {
   const res = await API.get(`getarticlebyid/${id}`)
   if (res.data.status == 'succes') {
    return res.data.data;
  } else return [];
}
export async function deletearticle(id) {

const res =await API.delete(`deletearticle/${id}`)
if (res.data.status=='succes')
{
  return res;

}else return [];

  
}
export async function updatearticle(id,Article) {
  const res =await API.put(`updatearticle/${id,Article}`)
  if (res.data.status=='succes')
{
  return res;

}else return [];

}
