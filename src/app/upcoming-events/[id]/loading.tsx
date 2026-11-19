const EventDetailsLoading = () => {
  return (
    <main className="relative min-h-screen animate-pulse overflow-hidden bg-linear-to-br from-[#F0F7F1] via-[#F9FCF9] to-[#E5F0E9] text-[#1F2937] dark:from-[#0B1720] dark:via-[#111F25] dark:to-[#142D2B] dark:text-gray-100">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-40 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10" />
      <div className="pointer-events-none absolute -right-32 top-125 h-96 w-96 rounded-full bg-yellow-300/15 blur-3xl dark:bg-yellow-500/5" />

      <section className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Back Navigation */}
        <div className="mb-8 h-10 w-36 rounded-full bg-emerald-200 dark:bg-emerald-900" />

        {/* Event Layout */}
        <div className="grid items-start gap-8 lg:grid-cols-3">
          {/* Main Event Content */}
          <div className="space-y-7 lg:col-span-2">
            {/* Event Image */}
            <div className="relative h-64 overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-200 shadow-xl shadow-emerald-900/10 sm:h-96 dark:border-gray-700 dark:bg-emerald-900">
              <div className="absolute bottom-5 left-5 h-8 w-32 rounded-full bg-white/50 dark:bg-gray-700/70" />
            </div>

            {/* Event Title & Description */}
            <div className="rounded-3xl border border-emerald-100/80 bg-white/75 p-6 shadow-lg shadow-emerald-900/5 backdrop-blur-sm sm:p-9 dark:border-gray-700 dark:bg-gray-900/60">
              {/* Title */}
              <div className="space-y-3">
                <div className="h-8 w-4/5 rounded-lg bg-gray-300 dark:bg-gray-700 sm:h-10" />
                <div className="h-8 w-2/5 rounded-lg bg-gray-300 dark:bg-gray-700 sm:h-10" />
              </div>

              {/* Date & Location */}
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="h-5 w-36 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-5 w-40 rounded bg-gray-200 dark:bg-gray-700" />
              </div>

              <div className="my-7 h-px bg-emerald-100 dark:bg-gray-700" />

              {/* Description Heading */}
              <div className="mb-5 h-6 w-40 rounded-lg bg-gray-300 dark:bg-gray-700" />

              {/* Description Lines */}
              <div className="space-y-3">
                <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-11/12 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-4 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>
          </div>

          {/* Event Information Sidebar */}
          <aside className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white/85 shadow-xl shadow-emerald-900/10 backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/80">
              {/* Sidebar Header */}
              <div className="bg-linear-to-r from-emerald-700 to-green-600 px-6 py-6 dark:from-emerald-900 dark:to-teal-900">
                <div className="size-12 rounded-2xl bg-white/20" />
                <div className="mt-4 h-6 w-36 rounded-lg bg-white/30" />
              </div>

              {/* Event Information */}
              <div className="space-y-6 p-6">
                {/* Information Row 1 */}
                <div className="flex items-start gap-4">
                  <div className="size-11 shrink-0 rounded-xl bg-emerald-100 dark:bg-emerald-950" />
                  <div className="flex-1 space-y-2 pt-1">
                    <div className="h-3 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="h-5 w-36 rounded bg-gray-300 dark:bg-gray-700" />
                  </div>
                </div>

                {/* Information Row 2 */}
                <div className="flex items-start gap-4">
                  <div className="size-11 shrink-0 rounded-xl bg-emerald-100 dark:bg-emerald-950" />
                  <div className="flex-1 space-y-2 pt-1">
                    <div className="h-3 w-16 rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="h-5 w-40 rounded bg-gray-300 dark:bg-gray-700" />
                  </div>
                </div>

                {/* Information Row 3 */}
                <div className="flex items-start gap-4">
                  <div className="size-11 shrink-0 rounded-xl bg-emerald-100 dark:bg-emerald-950" />
                  <div className="flex-1 space-y-2 pt-1">
                    <div className="h-3 w-24 rounded bg-gray-200 dark:bg-gray-700" />
                    <div className="h-5 w-32 rounded bg-gray-300 dark:bg-gray-700" />
                  </div>
                </div>

                <div className="h-px bg-emerald-100 dark:bg-gray-700" />

                {/* Join Event Button */}
                <div className="h-12 w-full rounded-xl bg-amber-200 dark:bg-amber-900" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default EventDetailsLoading;
