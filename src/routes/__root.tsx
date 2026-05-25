import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">This page doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">Something went wrong</h1>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >Try again</button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Price Crossing — Shopping Center in Olivette, MO | (314) 994-7676" },
      { name: "description", content: "Price Crossing in Olivette, MO offers dining, shopping, and services in one convenient location. 9200 Olive Blvd. Call (314) 994-7676 or visit today." },
      { property: "og:title", content: "Price Crossing — Shopping Center in Olivette, MO | (314) 994-7676" },
      { property: "og:description", content: "Price Crossing in Olivette, MO offers dining, shopping, and services in one convenient location. 9200 Olive Blvd. Call (314) 994-7676 or visit today." },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: "Price Crossing — Shopping Center in Olivette, MO | (314) 994-7676" },
      { name: "twitter:description", content: "Price Crossing in Olivette, MO offers dining, shopping, and services in one convenient location. 9200 Olive Blvd. Call (314) 994-7676 or visit today." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/l3Oylxu0xAevCFd1cT4Bw5cVOmj1/social-images/social-1779593699686-Screenshot_2026-05-23_222851.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/l3Oylxu0xAevCFd1cT4Bw5cVOmj1/social-images/social-1779593699686-Screenshot_2026-05-23_222851.webp" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ShoppingCenter",
        name: "Price Crossing",
        telephone: "+1-314-994-7676",
        address: {
          "@type": "PostalAddress",
          streetAddress: "9200 Olive Blvd",
          addressLocality: "Olivette",
          addressRegion: "MO",
          postalCode: "63132",
          addressCountry: "US",
        },
        aggregateRating: { "@type": "AggregateRating", ratingValue: "4.1", reviewCount: "510" },
      }),
    }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
