'use client';

import { Session } from 'next-auth';
import Image from 'next/image';
import profilePicPlaceholder from '@/assests/profile-pic-placeholder.png';
import { signIn, signOut } from 'next-auth/react';

interface UserMenuButtonProps {
  session: Session | null;
}

const UserMenuButton: React.FC<UserMenuButtonProps> = ({ session }) => {
  const user = session?.user;

  return (
    <div className="dropdown dropdown-end">
      <label className="btn btn-ghost btn-circle" tabIndex={0}>
        {user ? (
          <Image
            src={user.image || profilePicPlaceholder}
            alt="Profile picture"
            width={40}
            height={40}
            className="w-10 rounded-full"
          />
        ) : (
          <svg fill="currentColor" viewBox="0 0 16 16" height="1em" width="1em">
            <path d="M3 9.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
          </svg>
        )}
      </label>
      <ul
        className="dropdown-content menu rounded-box menu-sm z-30 mt-3 w-52 bg-base-100 p-2 shadow"
        tabIndex={0}
      >
        <li>
          {user ? (
            <button className="" onClick={() => signOut({ callbackUrl: '/' })}>
              Sign Out
            </button>
          ) : (
            <button className="" onClick={() => signIn()}>
              Sign In
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};
export default UserMenuButton;
