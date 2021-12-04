export default {
  'GET /api/getLists': { //json类型
    lists: ['a', 'b', 'c']
  },
  'GET /api/getListsAsync': (req, res) => { //json类型
    // lists: ['d', 'e', 'f']
    console.log(req)
    res.json({
      lists: Array(10).fill(req.query.value)
    })
  }
}