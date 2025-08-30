# city-explorer
Search any city and get live weather, country details, and a short Wikipedia blurb—all in a clean, multi-page app.


Awesome—learning React by building is the way to go. Here are three project ideas that hit every concept you listed (state, hooks, props, functional components, Context API, React Router, lifecycle methods, and fetching from an open API). Each comes with suggested APIs that don’t require keys, a feature set, and exactly where each React concept fits.

# 1) City Explorer — weather, country facts & wiki cards

**What it is:** Search any city and get live weather, country details, and a short Wikipedia blurb—all in a clean, multi-page app.

**Open APIs (no key needed):**

* Open-Meteo (weather)
* REST Countries v3.1 (country info)
* Wikipedia Summary API (short article extract)

**Core features**

* City search with autocomplete; results page with weather, country & wiki panels
* Favorites list (persist in localStorage)
* Settings (°C/°F, theme) applied app-wide

**React concepts**

* `useState` for inputs, loading flags, favorites
* `useEffect` for fetching on query/route changes (lifecycle-in-functional)
* **Custom hooks**: `useDebouncedValue`, `useLocalStorage`, `useFetch`
* **Props** to pass city/country data to presentational cards
* **Context API** for theme, units, and favorites across pages
* **React Router**: `/search`, `/city/:name`, nested tabs like `/city/:name/weather|about`
* **Lifecycle methods (class)**: add an `ErrorBoundary` class (uses `componentDidCatch`) around data sections
* **Bonus**: `useMemo`/`useCallback` for derived values and memoized handlers

**Stretch goals**

* Offline cache (IndexedDB via `idb-keyval`)
* Map preview (OpenStreetMap tile embed)
* Skeleton loaders & optimistic favorite toggles

---
