import API from '../api';

export async function getallclient() {
  const res = await API.get(`getallclient`);
  if (res.data.status == 'succes') {
    return res.data.data;
  } else return [];
}

export async function addclient(client) {
  console.log('aa');

  const res = await API.post(`addclient`, client);
  console.log(res);
  if (res.data.status == 'succes') {
    return res.data.data;
  } else return [];
}
export async function getarticles(id) {
  console.log('aa');

  const res = await API.get(`articlebyclient/${id}`);
  console.log(res);
  if (res.data.status == 'succes') {
    return res.data.data;
  } else return [];
}
export async function getclientById(id)
{
  const res = await API.get(`getclientbyid/${id}`)
  if (res.data.status == 'succes') {
   return res.data.data;
 } else return [];
}
export async function deleteclient(id) {

const res =await API.delete(`deleteclient/${id}`)
if (res.data.status=='succes')
{
 return res;

}else return [];

 
}
export async function updateclient(Article) {
 const res =await API.put(`updateclient` ,Article)
 if (res.data.status=='succes')
{
 return res;

}else return [];

}

