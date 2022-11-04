This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Elsa Workflows

You'll need Elsa running on port 13000 to run the Workflow Tasks page as it needs to connect to Elsa to initiate and update workflow tasks.

Config files can be found in the 'elsa-config' folder. For this web app, import 'child.json' and 'parent.json' configs into Elsa.

Additional configs for enforcement/inspection can also be found in this directory. Use the 'Ofsted ELSA.postman_collection.json' file to configure Postman (https://www.postman.com/) to run these tasks. Note that enforcement/inspection is not part of this PoC and are here for reference only.

## Finding your way around

The bulk of the pages are in the 'pages' folder; the directories match the routing. Any static data (not coming from APIs) is stored within the 'data' folder.

There are some layouts stored in 'components/layouts'. Here you'll find the global page layout as well as different form group layouts.

For the forms themselves, the form used in the PRRA/ASA example is found at 'components/forms/prra'. Within this folder you'll find the form component as well as the data schema and the UI schema. The form inputs can be found in 'components/inputs' with a folder for each input type. An input component consists of a controller, the input component as well as a tester. The tester scores the input component's suitability for use depending on the configuration of the schemas (i.e. text and multiline would score the textarea component higher than the text input).

## Plugins

GOVUK Frontend and GOVUK React have been installed to give access to a library of ready-to-use GDS components as well as access to the full set of styles and scripts.

The forms engine uses JSON Forms (https://jsonforms.io/)

FuseJS (https://fusejs.io/) is used for the fuzzy search found on the Search and Chronology pages.

ChartJS (https://www.chartjs.org/) is used for the graphs found on the Dashboard page.

React Big Calendar (https://github.com/jquense/react-big-calendar) is used on the Calendar page.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
