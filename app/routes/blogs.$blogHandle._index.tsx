import {Link, useLoaderData} from 'react-router';
import type {Route} from './+types/blogs.$blogHandle._index';
import {Image, getPaginationVariables} from '@shopify/hydrogen';
import type {ArticleItemFragment} from 'storefrontapi.generated';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';
import {PageHero} from '~/components/PageHero';

export const meta: Route.MetaFunction = ({data}) => [
  {title: `${data?.blogTitle ?? 'Journal'} — ETCH`},
  {
    name: 'description',
    content:
      'Notes from the cohort — training, the Method, the science behind ETCH.',
  },
];

export async function loader({request, params, context}: Route.LoaderArgs) {
  const paginationVariables = getPaginationVariables(request, {pageBy: 6});

  if (!params.blogHandle) {
    throw new Response('blog not found', {status: 404});
  }

  // Articles often don't exist on Mock.shop — render an empty state instead
  // of 404-ing the route.
  type BlogShape = {
    title: string;
    handle: string;
    articles: {nodes: ArticleItemFragment[]};
  } | null;
  let blog: BlogShape = null;
  try {
    const data = await context.storefront.query(BLOG_QUERY, {
      variables: {blogHandle: params.blogHandle, ...paginationVariables},
    });
    if (data.blog) {
      blog = data.blog as BlogShape;
      redirectIfHandleIsLocalized(request, {handle: params.blogHandle, data: data.blog});
    }
  } catch {
    blog = null;
  }

  return {
    blogHandle: params.blogHandle,
    blogTitle: blog?.title ?? prettyTitle(params.blogHandle),
    articles: blog?.articles?.nodes ?? [],
  };
}

function prettyTitle(handle: string) {
  return handle.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Blog() {
  const {blogTitle, articles} = useLoaderData<typeof loader>();
  const hasArticles = articles.length > 0;

  return (
    <>
      <PageHero
        eyebrow={`The journal · ${blogTitle.toLowerCase()}`}
        headline={blogTitle.split(' ').slice(0, -1).join(' ') || blogTitle}
        serif={blogTitle.split(' ').slice(-1)[0] || 'channel'}
        lede="Long-form notes on training, recovery, the Method, and the science behind every twenty-minute session."
      />

      <section className="etch-section ivory">
        <div className="wrap">
          {hasArticles ? (
            <>
              <div className="sec-head" data-reveal>
                <p className="eyebrow">Latest</p>
                <h2>
                  Read with <span className="serif">intention</span>.
                </h2>
              </div>
              <div className="articles-grid">
                {articles.map((article, i) => (
                  <ArticleCard key={article.id} article={article} index={i} />
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

function ArticleCard({
  article,
  index,
}: {
  article: ArticleItemFragment;
  index: number;
}) {
  const publishedAt = article.publishedAt
    ? new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(article.publishedAt))
    : '';
  return (
    <Link
      className="article-card"
      to={`/blogs/${article.blog.handle}/${article.handle}`}
      key={article.id}
      data-reveal
      style={{['--reveal-delay' as string]: `${index * 80}ms`}}
      prefetch="intent"
    >
      <div className="article-image">
        {article.image ? (
          <Image
            alt={article.image.altText || article.title}
            aspectRatio="3/2"
            data={article.image}
            loading={index < 2 ? 'eager' : 'lazy'}
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <div className="article-image-fallback" aria-hidden="true" />
        )}
      </div>
      <div className="article-body">
        <p className="eyebrow">{publishedAt}</p>
        <h3>
          {article.title} <span className="serif">→</span>
        </h3>
      </div>
    </Link>
  );
}

function EmptyState() {
  return (
    <div className="empty-state" data-reveal>
      <p className="eyebrow">Coming soon</p>
      <h2>
        The first issue is <span className="serif">on the press</span>.
      </h2>
      <p className="lede">
        Articles are dropping shortly — placement maps, the science of
        progressive overload, what eight weeks of EMS actually looks like.
        Subscribe below to know when the first one lands.
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

const BLOG_QUERY = `#graphql
  query Blog(
    $language: LanguageCode
    $blogHandle: String!
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(language: $language) {
    blog(handle: $blogHandle) {
      title
      handle
      seo { title description }
      articles(first: $first, last: $last, before: $startCursor, after: $endCursor) {
        nodes { ...ArticleItem }
        pageInfo { hasPreviousPage hasNextPage endCursor startCursor }
      }
    }
  }
  fragment ArticleItem on Article {
    author: authorV2 { name }
    contentHtml
    handle
    id
    image { id altText url width height }
    publishedAt
    title
    blog { handle }
  }
` as const;
