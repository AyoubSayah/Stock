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
export async function getarticles(id) {
  console.log('aa');

  const res = await API.get(`articlebyfournisseur/${id}`);
  console.log(res);
  if (res.data.status == 'succes') {
    return res.data.data;
  } else return [];
}
export async function getFournisseurById(id)
{
  const res = await API.get(`getfournisseurbyid/${id}`)
  if (res.data.status == 'succes') {
   return res.data.data;
 } else return [];
}
export async function deleteFournisseur(id) {

const res =await API.delete(`deletefournisseur/${id}`)
if (res.data.status=='succes')
{
 return res;

}else return [];

 
}
export async function updateFournisseur(Article) {
 const res =await API.put(`updatearticle` ,Article)
 if (res.data.status=='succes')
{
 return res;

}else return [];

}

