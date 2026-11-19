const UpcomingEventsLoading = () => {
  return (
    <main className="relative min-h-screen animate-pulse overflow-hidden bg-linear-to-br from-[#F0F7F1] via-[#F9FCF9] to-[#E4F1E8] text-[#1F2937] dark:from-[#0B1720] dark:via-[#111F25] dark:to-[#142D2B] dark:text-gray-100">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />
      <div className="pointer-events-none absolute -right-32 top-96 h-96 w-96 rounded-full bg-yellow-300/20 blur-3xl dark:bg-yellow-500/5" />

      <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-28">
        {/* Page Heading */}
        <div className="mb-12 flex flex-col items-center">
          <div className="mt-5 h-10 w-64 max-w-full rounded-lg bg-gray-300 dark:bg-gray-700 sm:h-12 sm:w-80" />
          <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-[#FBBF24]" />
        </div>

        {/* Events Heading */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-3">
            <div className="h-7 w-44 rounded-lg bg-gray-300 dark:bg-gray-700" />
            <div className="h-4 w-56 max-w-full rounded bg-gray-200 dark:bg-gray-700" />
          </div>

          <div className="h-10 w-36 rounded-full bg-emerald-200 dark:bg-emerald-900" />
        </div>

        {/* Event Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-lg shadow-emerald-900/5 dark:border-gray-700 dark:bg-[#172B30]"
            >
              {/* Thumbnail */}
              <div className="h-52 bg-emerald-200 dark:bg-emerald-900 sm:h-56" />

              {/* Card Content */}
              <div className="space-y-4 p-5">
                <div className="h-6 w-3/4 rounded-lg bg-gray-300 dark:bg-gray-700" />

                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
                  <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
                  <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
                </div>

                {/* Event Details */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <div className="h-4 w-28 rounded bg-gray-200 dark:bg-gray-700" />
                  <div className="h-4 w-28 rounded bg-gray-200 dark:bg-gray-700" />
                </div>

                {/* Button */}
                <div className="h-11 w-full rounded-xl bg-amber-200 dark:bg-amber-900" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default UpcomingEventsLoading;
