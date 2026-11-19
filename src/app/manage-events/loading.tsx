const ManageEventsLoading = () => {
  return (
    <main className="min-h-screen animate-pulse bg-linear-to-br from-[#F0F7F1] via-[#F8FBF8] to-[#E5F0E9] px-4 py-12 text-[#1F2937] dark:from-[#0B1720] dark:via-[#111F25] dark:to-[#142D2B] dark:text-gray-100">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-10 overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm dark:border-white/10 dark:bg-[#14251E]">
          <div className="flex flex-col justify-between gap-6 p-6 sm:p-8 lg:flex-row lg:items-center">
            {/* Heading */}
            <div className="flex-1 space-y-4">
              <div className="h-7 w-36 rounded-full bg-emerald-100 dark:bg-emerald-900" />

              <div className="h-9 w-64 max-w-full rounded-lg bg-gray-300 dark:bg-gray-700" />

              <div className="h-4 w-full max-w-xl rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-4/5 max-w-lg rounded bg-gray-200 dark:bg-gray-700" />
            </div>

            {/* Event Count */}
            <div className="h-12 w-56 self-start rounded-xl bg-emerald-200 dark:bg-emerald-900 sm:self-auto" />
          </div>
        </div>

        {/* Created Event Cards */}
        <div className="flex flex-col gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <article
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl border border-emerald-100 bg-white shadow-sm md:flex-row dark:border-gray-700 dark:bg-gray-800"
            >
              {/* Thumbnail */}
              <div className="h-52 shrink-0 bg-emerald-200 dark:bg-emerald-900 md:h-auto md:w-72 lg:w-80" />

              {/* Event Information */}
              <div className="flex flex-1 flex-col justify-between gap-5 p-5 sm:p-6 lg:flex-row lg:items-center">
                <div className="min-w-0 flex-1 space-y-4">
                  {/* Title */}
                  <div className="h-6 w-3/4 rounded-lg bg-gray-300 dark:bg-gray-700" />

                  {/* Description */}
                  <div className="space-y-2">
                    <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
                  </div>

                  {/* Date and Location */}
                  <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
                    <div className="h-4 w-36 rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="h-4 w-40 rounded bg-gray-200 dark:bg-gray-700" />
                  </div>
                </div>

                {/* Edit and Delete Actions */}
                <div className="flex shrink-0 gap-3 border-t border-gray-100 pt-4 lg:w-40 lg:flex-col lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0 dark:border-gray-700">
                  <div className="h-11 flex-1 rounded-xl bg-emerald-200 dark:bg-emerald-900" />
                  <div className="h-11 flex-1 rounded-xl bg-red-200 dark:bg-red-900" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ManageEventsLoading;
