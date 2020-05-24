# Project System



```bash
# Run the main in dev
docker-sync-stack start

docker-compose exec app sh

# Clean dev env
docker-sync-stack clean

# Debug the service
docker-compose exec app bash
```

# Installation

https://dev.to/kovah/cut-your-docker-for-mac-response-times-in-half-with-docker-sync-1e8j


## How to use

Clone this repository:

	git clone https://github.com/tomsoderlund/nextjs-express-mongoose-crudify-boilerplate.git [MY_APP]

Install dependencies:

	cd [MY_APP]
	npm install  # or yarn install

Start it by doing the following:

	export MONGODB_URI=*your mongodb url* // you can get one for free at https://www.mlab.com/home
	npm run dev

In production:

	npm run build
	npm start

If you navigate to `http://localhost:3001/` you will see a [Next.js](https://github.com/zeit/next.js) page with a list of kittens (or an empty list if you haven't added one).

You have your API server running at `http://localhost:3001/api/kittens`

Thanks:
- [nextjs-express-mongoose-crudify-boilerplate](https://github.com/tomsoderlund/nextjs-express-mongoose-crudify-boilerplate) for showing me how to use next.js with express and mongo