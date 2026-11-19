const CreateEventLoading = () => {
  return (
    <section className="min-h-screen animate-pulse bg-linear-to-br from-[#F0F7F1] via-[#F8FBF8] to-[#E5F0E9] px-4 py-12 text-[#1F2937] dark:from-[#0B1720] dark:via-[#111F25] dark:to-[#142D2B] dark:text-gray-100 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Back Link */}
        <div className="mb-8 h-5 w-36 rounded bg-emerald-200 dark:bg-gray-700" />

        {/* Page Heading */}
        <div className="mb-10 space-y-4 text-center">
          <div className="mx-auto h-10 w-3/4 max-w-md rounded-lg bg-gray-200 dark:bg-gray-700 sm:h-12" />
          <div className="mx-auto h-4 w-full max-w-2xl rounded bg-gray-200 dark:bg-gray-700" />
          <div className="mx-auto h-4 w-2/3 max-w-xl rounded bg-gray-200 dark:bg-gray-700" />
        </div>

        {/* Form Card */}
        <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white/90 shadow-xl shadow-emerald-900/5 dark:border-gray-700 dark:bg-gray-900/80 dark:shadow-black/20">
          {/* Card Header */}
          <div className="space-y-3 border-b border-emerald-100 bg-linear-to-r from-emerald-50 to-teal-50 px-6 py-6 dark:border-gray-700 dark:from-gray-800 dark:to-[#15332E] sm:px-10">
            <div className="h-7 w-64 rounded bg-gray-200 dark:bg-gray-700" />
            <div className="h-4 w-80 max-w-full rounded bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* Form Fields */}
          <div className="space-y-7 p-6 sm:p-10">
            {/* Title */}
            <div className="space-y-3">
              <div className="h-4 w-28 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-12 w-full rounded-xl bg-gray-200 dark:bg-gray-700" />
            </div>

            {/* Description */}
            <div className="space-y-3">
              <div className="h-4 w-32 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-32 w-full rounded-xl bg-gray-200 dark:bg-gray-700" />
            </div>

            {/* Event Type */}
            <div className="space-y-3">
              <div className="h-4 w-28 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-12 w-full rounded-xl bg-gray-200 dark:bg-gray-700" />
            </div>

            {/* Thumbnail URL */}
            <div className="space-y-3">
              <div className="h-4 w-40 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-12 w-full rounded-xl bg-gray-200 dark:bg-gray-700" />
              <div className="h-3 w-64 max-w-full rounded bg-gray-200 dark:bg-gray-700" />
            </div>

            {/* Location and Date */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <div className="h-4 w-28 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-12 w-full rounded-xl bg-gray-200 dark:bg-gray-700" />
              </div>

              <div className="space-y-3">
                <div className="h-4 w-32 rounded bg-gray-200 dark:bg-gray-700" />
                <div className="h-12 w-full rounded-xl bg-gray-200 dark:bg-gray-700" />
              </div>
            </div>

            {/* Helpful Note */}
            <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/60 dark:bg-amber-950/30">
              <div className="h-5 w-5 shrink-0 rounded-full bg-amber-200 dark:bg-amber-800" />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-full rounded bg-amber-200 dark:bg-amber-900" />
                <div className="h-3 w-4/5 rounded bg-amber-200 dark:bg-amber-900" />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end border-t border-gray-200 pt-6 dark:border-gray-700">
              <div className="h-12 w-full rounded-xl bg-amber-200 dark:bg-amber-800 sm:w-44" />
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mx-auto mt-8 h-4 w-80 max-w-full rounded bg-gray-200 dark:bg-gray-700" />
      </div>
    </section>
  );
};

export default CreateEventLoading;
