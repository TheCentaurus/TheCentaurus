import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useLogout, useUser } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { useState } from "react";

const Profile = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn } = useUser();
  const { logout } = useLogout();
  return (
    <>
      {!isLoggedIn ? (
        <div className="flex items-center justify-center text-yellow-300 font-bold max-h-[60px] rounded-sm py-[3px] px-[2px] button-custom">
          <button
            onClick={() => router.push("/connect")}
            className="border-[1px] dark:border-yellow-300 border-[#261a2f] cursor-pointer dark:text-yellow-300 text-[#261a2f] font-bold lg:text-sm text-[12px] px-4 rounded-xl  py-[10px]"
          >
            Connect Wallet
          </button>
        </div>
      ) : (
        <div className="md:hidden lg:block">
          <Menu>
            <MenuButton className="cursor-pointer bg-transparent dark:text-[#E6E0FA] text-[#261a2f] font-bold lg:text-sm text-[12px] rounded-xl">
              <Avatar size="sm" src="" name="" />
            </MenuButton>
            <MenuList border="none" bg="#1b1324a1" color="#E6E0FA">
              {isLoggedIn && (
                <>
                  <MenuItem
                    _hover={{
                      background: "#1b1324",
                      color: "teal.500",
                    }}
                    onClick={() => {
                      router.push("/profile");
                    }}
                  >
                    Profile
                  </MenuItem>
                  <MenuItem
                    _hover={{
                      background: "#1b1324",
                      color: "teal.500",
                    }}
                    onClick={() => {
                      router.push("/my-collections");
                    }}
                  >
                    My Collection
                  </MenuItem>
                </>
              )}

              <MenuItem
                _hover={{
                  background: "#1b1324",
                  color: "teal.500",
                }}
              >
                Dex
              </MenuItem>

              <MenuItem
                _hover={{
                  background: "#1b1324",
                  color: "teal.500",
                }}
              >
                Wallet
              </MenuItem>
              <MenuItem
                _hover={{
                  background: "#1b1324",
                  color: "teal.500",
                }}
              >
                Resources
              </MenuItem>
              <MenuItem
                _hover={{
                  background: "#1b1324",
                  color: "teal.500",
                }}
              >
                Help
              </MenuItem>
              <MenuItem
                _hover={{
                  background: "#1b1324",
                  color: "teal.500",
                }}
              >
                $CENT
              </MenuItem>
              <MenuItem
                _hover={{
                  background: "#1b1324",
                  color: "teal.500",
                }}
                onClick={logout}
              >
                Sign Out
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      )}
    </>
  );
};

export default Profile;
