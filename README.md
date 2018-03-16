# lambda-nodejs-sequelize
Implement nodejs, sequelize and AWS lambda

```
// GET: /api/users/2
// Response:

{
    "id": 2,
    "name": "John Pham",
    "createdAt": "2018-03-16T07:48:00.000Z",
    "updatedAt": "2018-03-16T07:48:00.000Z",
    "userItems": [
        {
            "id": 1,
            "content": "hello\n",
            "complete": false,
            "createdAt": "2018-03-16T08:03:04.000Z",
            "updatedAt": "2018-03-16T08:03:04.000Z",
            "userId": 2
        },
        {
            "id": 2,
            "content": "New item",
            "complete": false,
            "createdAt": "2018-03-16T08:03:14.000Z",
            "updatedAt": "2018-03-16T08:03:14.000Z",
            "userId": 2
        },
        {
            "id": 3,
            "content": "New item 2",
            "complete": false,
            "createdAt": "2018-03-16T08:03:16.000Z",
            "updatedAt": "2018-03-16T08:03:16.000Z",
            "userId": 2
        },
        {
            "id": 4,
            "content": "New item 3",
            "complete": false,
            "createdAt": "2018-03-16T08:03:20.000Z",
            "updatedAt": "2018-03-16T08:03:20.000Z",
            "userId": 2
        }
    ]
}
```
