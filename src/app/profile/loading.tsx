const ProfileLoading = () => {
  return (
    <main className="min-h-screen animate-pulse bg-linear-to-br from-[#F0F7F1] via-[#F8FBF8] to-[#E5F0E9] px-4 py-12 dark:from-[#0B1720] dark:via-[#111F25] dark:to-[#142D2B] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Page Heading */}
        <div className="mb-8">
          <div className="h-8 w-28 rounded-full bg-emerald-200 dark:bg-emerald-900/50" />
          <div className="mt-4 h-9 w-48 rounded-lg bg-gray-300 dark:bg-gray-700" />
          <div className="mt-3 h-4 w-72 max-w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-xl shadow-emerald-900/5 dark:border-gray-700 dark:bg-[#172B30]">
          {/* Cover */}
          <div className="h-40 bg-emerald-200 dark:bg-emerald-900/50 sm:h-52" />

          <div className="px-6 pb-10 sm:px-10">
            {/* Avatar + Name + Action */}
            <div className="-mt-16 flex flex-col items-center gap-5 sm:-mt-20 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end sm:gap-6">
                <div className="size-32 shrink-0 rounded-full border-4 border-white bg-gray-300 shadow-xl dark:border-[#172B30] dark:bg-gray-700 sm:size-40" />

                <div className="flex flex-col items-center gap-3 sm:items-start sm:pb-3">
                  <div className="h-8 w-48 rounded-lg bg-gray-300 dark:bg-gray-700" />
                  <div className="h-4 w-56 max-w-full rounded-lg bg-gray-200 dark:bg-gray-700" />
                </div>
              </div>

              <div className="h-12 w-36 rounded-xl bg-amber-200 dark:bg-amber-900 sm:mb-3" />
            </div>

            {/* Divider */}
            <div className="my-8 flex items-center gap-3">
              <span className="h-6 w-1.5 rounded-full bg-emerald-300 dark:bg-emerald-800" />
              <div className="h-5 w-36 rounded bg-gray-300 dark:bg-gray-700" />
              <span className="h-px flex-1 bg-gray-100 dark:bg-gray-700" />
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[0, 1].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 dark:border-gray-700 dark:bg-[#20383A]"
                >
                  <div className="size-12 shrink-0 rounded-xl bg-gray-300 dark:bg-gray-600" />
                  <div className="flex-1 space-y-3">
                    <div className="h-3 w-24 rounded bg-gray-300 dark:bg-gray-600" />
                    <div className="h-5 w-40 max-w-full rounded bg-gray-200 dark:bg-gray-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileLoading;
