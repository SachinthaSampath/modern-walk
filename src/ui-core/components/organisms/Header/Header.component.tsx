import { Link, useNavigate } from "react-router-dom";
import { H1 } from "../../atoms";
import { useUserContext } from "../../../../contexts";
import { HeaderProps } from "./Header.types";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  CustomPopover,
  CustomDialog,
} from "../../../../ui-core";
import { ShoppingCartIcon } from "lucide-react";
import { useToast } from "../../../../ui-core";

export default function Header({
  headingText,
}: HeaderProps): React.JSX.Element {
  const { user } = useUserContext();

  const navigate = useNavigate();
  const { toast } = useToast();
  return (
    <>
      <Menubar className="mt-0 h-12 w-full justify-end rounded-none border-0 bg-mwprimarynormal text-white">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem
              onClick={() => {
                window.open(process.env.REACT_APP_BASE_URL);
              }}
            >
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem
              onClick={() => {
                window.open(
                  document.URL,
                  "_blank",
                  "location=yes,height=570,width=520,scrollbars=yes,status=yes"
                );
              }}
            >
              New Window <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarItem
              onClick={() => {
                window.open(
                  document.URL,
                  "incognito",
                  "location=yes,height=570,width=520,scrollbars=yes,status=yes"
                );
              }}
            >
              New Incognito Window
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem
                  onClick={() => {
                    let currentURL = window.location.href;
                    let subject = "Check out this link";
                    let body =
                      "Hey! This was developed by Sachintha (intern of WireApps) as part of the ModernWalk system of the WireApps internship FE program. I just wanted to share this link with you: " +
                      currentURL;
                    let mailtoLink =
                      "mailto:?subject=" +
                      encodeURIComponent(subject) +
                      "&body=" +
                      encodeURIComponent(body);
                    let newWindow = window.open("");
                    newWindow!.window.location.href = mailtoLink;
                  }}
                >
                  Email link
                </MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem
              onClick={() => {
                window.print();
              }}
            >
              Print... <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem
              onClick={() => {
                window.open(process.env.REACT_APP_REPO_URL, "_blank");
              }}
            >
              View Repository <MenubarShortcut>ctrl+k</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <ShoppingCartIcon />
          </MenubarTrigger>
          {user.isLoggedIn ? (
            <MenubarContent>
              <MenubarItem
                onClick={() => {
                  navigate("/cart");
                }}
              >
                View Cart
              </MenubarItem>
              <MenubarItem
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <CustomDialog
                  triggerText="Clear Cart"
                  titleText="Title"
                  cancelText="Cancel"
                  actionText="Confirm"
                  containerClassName="min-h-[200px]"
                  actionAction={() => {
                    localStorage.removeItem("cart");
                    toast({
                      title: "Cart cleared!",
                    });
                    navigate("/cart");
                  }}
                  cancelAction={() => {
                    navigate("/cart");
                  }}
                >
                  <p className="text-[16px] font-normal text-[#182132]">
                    All the items in your cart will be removed! Please confirm
                    to proceed.
                  </p>
                </CustomDialog>
              </MenubarItem>
            </MenubarContent>
          ) : (
            <MenubarContent>
              <MenubarItem>
                <Link to="/login" className="w-full">
                  Login
                </Link>
              </MenubarItem>
            </MenubarContent>
          )}
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            {user.isLoggedIn ? (
              <>
                <img
                  className="w-4 text-white lg:w-6"
                  src="/user.png"
                  alt="User icon"
                />{" "}
                &nbsp;{user?.name}
              </>
            ) : (
              <>Profile</>
            )}
          </MenubarTrigger>
          <MenubarContent>
            {user.isLoggedIn ? (
              <>
                <MenubarItem>
                  <Link to="/login" className="w-full">
                    Logout
                  </Link>
                </MenubarItem>
              </>
            ) : (
              <>
                <MenubarItem>
                  <Link to="/login" className="w-full">
                    Login
                  </Link>
                </MenubarItem>
              </>
            )}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="flex justify-between px-3 py-4">
        <div className="flex h-10 w-full justify-center overflow-hidden">
          <Link
            className="text-center text-3xl font-bold transition-all hover:text-4xl "
            to="/"
          >
            <H1>{headingText}</H1>
          </Link>
        </div>
      </div>
    </>
  );
}
