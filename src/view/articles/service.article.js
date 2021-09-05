import API from '../api';

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
