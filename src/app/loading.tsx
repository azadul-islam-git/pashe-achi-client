const loading = () => {
  return (
    <main className="animate-pulse bg-linear-to-br from-[#F0F7F1] via-[#F8FBF8] to-[#E5F0E9] dark:from-[#0B1720] dark:via-[#111F25] dark:to-[#142D2B]">
      {/* Banner Skeleton */}
      <section className="px-4 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="h-5 w-40 rounded-full bg-emerald-200 dark:bg-emerald-900" />
            <div className="h-10 w-full max-w-lg rounded-lg bg-gray-300 dark:bg-gray-700" />
            <div className="h-10 w-4/5 rounded-lg bg-gray-300 dark:bg-gray-700" />
            <div className="space-y-3 pt-2">
              <div className="h-4 w-full max-w-lg rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="h-12 w-40 rounded-xl bg-amber-200 dark:bg-amber-900" />
          </div>

          <div className="h-64 rounded-3xl bg-emerald-200 dark:bg-emerald-900 sm:h-80 lg:h-105" />
        </div>
      </section>

      {/* Feature Section Skeleton */}
      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-xl space-y-3 text-center">
            <div className="mx-auto h-8 w-64 rounded-lg bg-gray-300 dark:bg-gray-700" />
            <div className="mx-auto h-4 w-full max-w-md rounded bg-gray-200 dark:bg-gray-700" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-[#172B30]"
              >
                <div className="mb-5 size-14 rounded-xl bg-emerald-200 dark:bg-emerald-900" />
                <div className="mb-3 h-6 w-3/4 rounded bg-gray-300 dark:bg-gray-700" />
                <div className="mb-2 h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Upcoming Events Skeleton */}
      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-xl space-y-3 text-center">
            <div className="mx-auto h-8 w-72 max-w-full rounded-lg bg-gray-300 dark:bg-gray-700" />
            <div className="mx-auto h-4 w-full max-w-md rounded bg-gray-200 dark:bg-gray-700" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm dark:border-gray-700 dark:bg-[#172B30] sm:flex-row"
              >
                <div className="h-48 bg-emerald-200 dark:bg-emerald-900 sm:h-auto sm:w-2/5" />
                <div className="flex-1 space-y-4 p-5">
                  <div className="h-6 w-3/4 rounded bg-gray-300 dark:bg-gray-700" />
                  <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
                  <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
                  <div className="flex gap-3 pt-2">
                    <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                  </div>
                  <div className="h-10 w-32 rounded-lg bg-amber-200 dark:bg-amber-900" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section Skeleton */}
      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-xl space-y-3 text-center">
            <div className="mx-auto h-8 w-56 rounded-lg bg-gray-300 dark:bg-gray-700" />
            <div className="mx-auto h-4 w-full max-w-md rounded bg-gray-200 dark:bg-gray-700" />
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className={`rounded-2xl bg-emerald-200 dark:bg-emerald-900 ${
                  index === 0 || index === 5 ? "h-64" : "h-48"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section Skeleton */}
      <section className="px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl bg-emerald-100 p-8 dark:bg-[#20383A] sm:p-12">
          <div className="mx-auto max-w-xl space-y-4 text-center">
            <div className="mx-auto h-8 w-64 rounded-lg bg-gray-300 dark:bg-gray-700" />
            <div className="mx-auto h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
            <div className="mx-auto h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-700" />

            <div className="mx-auto flex max-w-md flex-col gap-3 pt-4 sm:flex-row">
              <div className="h-12 flex-1 rounded-xl bg-white dark:bg-gray-700" />
              <div className="h-12 w-full rounded-xl bg-amber-200 dark:bg-amber-900 sm:w-32" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default loading;
