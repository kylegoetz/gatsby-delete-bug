```
npm run test
```

in another window,

`curl -X POST --data '{"foo":"bar"}' http://localhost:8000/api/test`

The POST query successfully completes.

`curl -X DELETE --data '{"foo":"bar"}' http://localhost:8000/api/test`

The DELETE query fails.
