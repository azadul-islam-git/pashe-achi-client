const JoinedEventsLoading = () => {
  return (
    <main className="min-h-screen animate-pulse bg-[#F8FAF9] px-4 py-12 text-gray-900 dark:bg-[#0B1713] dark:text-gray-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header Skeleton */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm dark:border-white/10 dark:bg-[#14251E]">
          <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:flex-row lg:items-center">
            {/* Heading */}
            <div className="flex-1 space-y-4">
              <div className="h-7 w-32 rounded-full bg-emerald-100 dark:bg-emerald-900" />

              <div className="h-9 w-full max-w-md rounded-lg bg-gray-300 dark:bg-gray-700" />

              <div className="h-4 w-full max-w-xl rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-4/5 max-w-lg rounded bg-gray-200 dark:bg-gray-700" />
            </div>

            {/* Stats and Action */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="h-12 w-full rounded-xl bg-emerald-200 dark:bg-emerald-900 sm:w-64" />
              <div className="h-12 w-full rounded-xl bg-amber-200 dark:bg-amber-900 sm:w-48" />
            </div>
          </div>
        </div>

        {/* Joined Event Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm dark:border-white/10 dark:bg-[#14251E]"
            >
              {/* Image */}
              <div className="relative h-56 bg-emerald-200 dark:bg-emerald-900">
                <div className="absolute left-4 top-4 h-7 w-24 rounded-lg bg-white/40 dark:bg-gray-700/70" />

                <div className="absolute bottom-4 left-4 right-4 h-6 max-w-3/4 rounded-lg bg-white/40 dark:bg-gray-700/70" />
              </div>

              {/* Card Content */}
              <div className="p-5">
                {/* Description */}
                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
                  <div className="h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-700" />
                </div>

                <div className="my-5 border-t border-gray-100 dark:border-white/10" />

                {/* Event Date */}
                <div className="flex items-center gap-3">
                  <div className="size-10 shrink-0 rounded-xl bg-emerald-100 dark:bg-emerald-950" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-20 rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="h-4 w-36 rounded bg-gray-300 dark:bg-gray-700" />
                  </div>
                </div>

                {/* Location */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="size-10 shrink-0 rounded-xl bg-emerald-100 dark:bg-emerald-950" />
                  <div className="flex-1 space-y-2">
                    <div className="h-3 w-16 rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="h-4 w-40 max-w-full rounded bg-gray-300 dark:bg-gray-700" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default JoinedEventsLoading;
