import {Link, useLoaderData} from 'react-router';
import type {Route} from './+types/blogs._index';
import {getPaginationVariables} from '@shopify/hydrogen';
import type {BlogsQuery} from 'storefrontapi.generated';
import {PageHero} from '~/components/PageHero';

type BlogNode = BlogsQuery['blogs']['nodes'][0];

export const meta: Route.MetaFunction = () => [
  {title: 'Journal — ETCH'},
  {
    name: 'description',
    content: 'Notes from the cohort — training, the Method, the science.',
  },
];

export async function loader({request, context}: Route.LoaderArgs) {
  const paginationVariables = getPaginationVariables(request, {pageBy: 10});

  // Blogs may not exist on Mock.shop or before the real shop is wired —
  // never 404 on the index; render the empty state instead.
  let blogs: BlogNode[] = [];
  try {
    const data = await context.storefront.query(BLOGS_QUERY, {
      variables: {...paginationVariables},
    });
    blogs = data.blogs?.nodes ?? [];
  } catch {
    blogs = [];
  }

  return {blogs};
}

export default function Blogs() {
  const {blogs} = useLoaderData<typeof loader>();
  const hasBlogs = blogs.length > 0;

  return (
    <>
      <PageHero
        eyebrow="The journal"
        headline="Notes from"
        serif="the cohort"
        lede="Training, the Method, the science behind the contraction. Long-form, infrequent, useful."
      />

      <section className="etch-section ivory">
        <div className="wrap">
          {hasBlogs ? (
            <>
              <div className="sec-head" data-reveal>
                <p className="eyebrow">All sections</p>
                <h2>
                  Choose a <span className="serif">channel</span>.
                </h2>
              </div>
              <div className="blogs-grid" data-reveal>
                {blogs.map((blog) => (
                  <Link
                    className="blog-tile"
                    key={blog.handle}
                    to={`/blogs/${blog.handle}`}
                    prefetch="intent"
                  >
                    <p className="eyebrow">Section</p>
                    <h3>
                      {blog.title} <span className="serif">→</span>
                    </h3>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </section>
    </>
  );
}

function EmptyState() {
  return (
    <div className="empty-state" data-reveal>
      <p className="eyebrow">Coming soon</p>
      <h2>
        The Journal is being <span className="serif">forged</span>.
      </h2>
      <p className="lede">
        Long-form notes on training, recovery and the Method are on the way.
        In the meantime, the protocol itself is the read.
      </p>
      <div style={{display: 'flex', gap: 16, marginTop: 24, flexWrap: 'wrap'}}>
        <Link className="btn" to="/pages/the-method" prefetch="intent">
          Read the Method
        </Link>
        <Link className="btn-ghost" to="/pages/science" prefetch="intent">
          The science →
        </Link>
      </div>
    </div>
  );
}

const BLOGS_QUERY = `#graphql
  query Blogs(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    blogs(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
      nodes {
        title
        handle
        seo { title description }
      }
    }
  }
` as const;
