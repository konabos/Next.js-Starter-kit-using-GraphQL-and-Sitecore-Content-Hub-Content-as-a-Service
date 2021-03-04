# Next.js Starter kit using GraphQL and Sitecore Content Hub - Content as a Service!

## Stack

We will be using:
- NextJS
- React
- Headless CMS - Sitecore Content Hub - Content As A Service (CAAS) - Sitecore Experience Edge

Mode: (SSG) automatically generated as static HTML + JSON (uses getStaticProps)

Please follow NextJS recommendations and use GetStaticProps and GetStaticPaths.

The code assumes that you are using a demo instance on the latest Sitecore Content Hub. The demo instance typically has blog posts and recipes.

## Contribute
We would love for you to contribute to this repository. Go ahead and create pull requests to make this Starter Kit better.

## Steps
1. Clone the repo
2. Run 'yarn' to get all the dependencies
3. Create a .env.local file in the root folder and add this code to it:

```
PREVIEW_API_KEY=YOUR_PREVIEW_API_KEY
DELIVERY_API_KEY=YOUR_DELIVERY_API_KEY
PREVIEW_ENDPOINT_URL=URL_OF_YOUR_PREVIEW_GRAPHQL_ENDPOINT
DELIVERY_ENDPOINT_URL=URL_OF_YOUR_DELIVERY_GRAPHQL_ENDPOINT
```
4. Modify the .env.local to point to the right values for your Sitecore Content Hub Instance
5. Run 'yarn husky install'
6. Run 'yarn dev' - this will start a site using [http://localhost:3000](http://localhost:3000)

## Preview Mode

Open [http://localhost:3000/api/preview](http://localhost:3000/api/preview) to enable preview mode. Navigate to the [http://localhost:3000](http://localhost:3000) page to see the results.

Open [http://localhost:3000/api/exit-preview](http://localhost:3000/api/exit-preview) to disable preview mode. Navigate to the [http://localhost:3000](http://localhost:3000) page to see the results.

## Additional Commands
- yarn dev
- yarn build
- yarn start
- yarn export
- yarn type-check
- yarn format
- yarn lint
- yarn test

## Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
