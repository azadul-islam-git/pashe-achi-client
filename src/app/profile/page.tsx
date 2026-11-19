import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import ProfileInfo from "@/components/shared/ProfileInfo";
import { FaUser } from "react-icons/fa";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const user = {
    name: session.user.name,
    email: session.user.email,
    image: session.user.image,
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-[#F0F7F1] via-[#F8FBF8] to-[#E5F0E9] px-4 py-12 text-[#1F2937] dark:from-[#0B1720] dark:via-[#111F25] dark:to-[#142D2B] dark:text-gray-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
            <FaUser />
            Account
          </span>

          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-2 max-w-xl text-gray-600 dark:text-gray-400">
            Manage your personal information and account details.
          </p>
        </div>

        <ProfileInfo user={user} />
      </div>
    </main>
  );
};

export default ProfilePage;
