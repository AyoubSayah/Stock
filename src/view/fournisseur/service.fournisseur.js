import API from '../api';

 export async function getallfournisseur() {
  const res = await API.get(`getallfournisseur`);
  if (res.data.status == 'succes') {
    return res.data.data;
  } else return [];
} 

export async function addfournisseur(fournisseur) {
  console.log('aa');

  
  const res = await API.post(`addfournisseur`, fournisseur);
  console.log(res);
  if (res.data.status == 'succes') {
    return res.data.data;
  } else return [];
}
/* export async function getArticleById(id)
  {
   const res = await API.get(`getarticlebyid/${id}`)
   if (res.data.status == 'succes') {
    return res.data.data;
  } else return [];
} */