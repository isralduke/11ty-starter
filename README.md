# READ ME

## Install and Run Project

NPM should be installed on your machine.

1. Install: `npm install`
1. Run: `npx @11ty/eleventy --serve`

## Using the Project

This project incorporates a few features. More details about each feature are described later in this file. These features are:

- 404 Page
- Eleventy Navigation Plugin
- Human Sitemap
- SEO Sitemap

### 404 Page

The 404 Page is implemented using a variant of [Eleventy’s Offical 404 Instructions](https://www.11ty.dev/docs/quicktips/not-found/).

The 404 content is in a markdown file, `404.md`. The layout is `404.njk` in case we want extra flexibility. It’s excluded from the site’s navigation using `eleventyExcludeFromCollections: true`. Remove that frontmatter data if you want it in the navigation.

### Eleventy Navigation Plugin

Using the official [Eleventy Navigation Plugin](https://www.11ty.dev/docs/plugins/navigation/) we can implement complex information architecture. To illustrate its use, sample content in `/parent` with children has been added. Feel free to change this as necessary.

### Human Sitemap

Human readable sitemaps help comply with [WCAG Success Criteria 2.4.5 Multiple Ways](https://www.w3.org/TR/WCAG22/#multiple-ways). The content file is named `human-sitemap.md` with a matching layout of `human-sitemap.njk`.

### SEO Sitemap

Thsi project already has built-in support for an XML Sitemap, used for search engine indexing. This file `sitemap-seo.njk` is the only place it exists. Like the 404 file, it’s excluded from the site navigation.
