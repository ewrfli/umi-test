export function getLists(value){
  return fetch('/api/getLists?Value='+value)
  .then(res => res.json())
  .catch(err => {
    console.log(err.req.query)
  })
}