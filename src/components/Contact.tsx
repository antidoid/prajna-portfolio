import GirlOnChair from "../assets/contact.png";
import Hearts from "../assets/hearts.png";
import Up from "../assets/up.png";
import { scrollToTop } from "../utils/scroll.ts";

function Contact() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="mt-12 flex">
        <div className="flex flex-col pt-32">
          <div className="w-fit text-[40px] leading-[48px]">
            <div className="relative">
              Reach out to me, Let's build
              <div className="absolute -top-20 -right-16">
                <img src={Hearts} className="" />
              </div>
            </div>
            something{" "}
            <span className="font-Bounce">
              extraordinary together<span className="text-yellow-450">.</span>
            </span>
          </div>
          <div className="mt-16 flex gap-6">
            <a href="mailto:prajnapatil0906@gmail.com" target="_blank">
              <svg
                className="size-16 rounded-sm cursor-pointer"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M2 11.9556C2 8.47078 2 6.7284 2.67818 5.39739C3.27473 4.22661 4.22661 3.27473 5.39739 2.67818C6.7284 2 8.47078 2 11.9556 2H20.0444C23.5292 2 25.2716 2 26.6026 2.67818C27.7734 3.27473 28.7253 4.22661 29.3218 5.39739C30 6.7284 30 8.47078 30 11.9556V20.0444C30 23.5292 30 25.2716 29.3218 26.6026C28.7253 27.7734 27.7734 28.7253 26.6026 29.3218C25.2716 30 23.5292 30 20.0444 30H11.9556C8.47078 30 6.7284 30 5.39739 29.3218C4.22661 28.7253 3.27473 27.7734 2.67818 26.6026C2 25.2716 2 23.5292 2 20.0444V11.9556Z"></path>{" "}
                  <path
                    d="M22.0515 8.52295L16.0644 13.1954L9.94043 8.52295V8.52421L9.94783 8.53053V15.0732L15.9954 19.8466L22.0515 15.2575V8.52295Z"
                    fill="#EA4335"
                  ></path>{" "}
                  <path
                    d="M23.6231 7.38639L22.0508 8.52292V15.2575L26.9983 11.459V9.17074C26.9983 9.17074 26.3978 5.90258 23.6231 7.38639Z"
                    fill="#FBBC05"
                  ></path>{" "}
                  <path
                    d="M22.0508 15.2575V23.9924H25.8428C25.8428 23.9924 26.9219 23.8813 26.9995 22.6513V11.459L22.0508 15.2575Z"
                    fill="#34A853"
                  ></path>{" "}
                  <path
                    d="M9.94811 24.0001V15.0732L9.94043 15.0669L9.94811 24.0001Z"
                    fill="#C5221F"
                  ></path>{" "}
                  <path
                    d="M9.94014 8.52404L8.37646 7.39382C5.60179 5.91001 5 9.17692 5 9.17692V11.4651L9.94014 15.0667V8.52404Z"
                    fill="#C5221F"
                  ></path>{" "}
                  <path
                    d="M9.94043 8.52441V15.0671L9.94811 15.0734V8.53073L9.94043 8.52441Z"
                    fill="#C5221F"
                  ></path>{" "}
                  <path
                    d="M5 11.4668V22.6591C5.07646 23.8904 6.15673 24.0003 6.15673 24.0003H9.94877L9.94014 15.0671L5 11.4668Z"
                    fill="#4285F4"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <a href="https://figma.com/@prajnarpatil" target="_blank">
              <svg
                className="size-14 rounded-sm cursor-pointer"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#1ABCFE"
                    d="M8.55 8c0-1.289 1.019-2.333 2.275-2.333C12.082 5.667 13.1 6.71 13.1 8c0 1.289-1.018 2.333-2.275 2.333C9.57 10.333 8.55 9.29 8.55 8z"
                  ></path>
                  <path
                    fill="#0ACF83"
                    d="M4 12.667c0-1.289 1.019-2.334 2.275-2.334H8.55v2.334C8.55 13.955 7.531 15 6.275 15S4 13.955 4 12.667z"
                  ></path>
                  <path
                    fill="#FF7262"
                    d="M8.55 1v4.667h2.275c1.257 0 2.275-1.045 2.275-2.334C13.1 2.045 12.082 1 10.825 1H8.55z"
                  ></path>
                  <path
                    fill="#F24E1E"
                    d="M4 3.333c0 1.289 1.019 2.334 2.275 2.334H8.55V1H6.275C5.019 1 4 2.045 4 3.333z"
                  ></path>
                  <path
                    fill="#A259FF"
                    d="M4 8c0 1.289 1.019 2.333 2.275 2.333H8.55V5.667H6.275C5.019 5.667 4 6.71 4 8z"
                  ></path>
                </g>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/prajnarpatil" target="_blank">
              <svg
                className="size-16 mx-1 rounded-sm cursor-pointer"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <circle cx="24" cy="24" r="20" fill="#0077B5"></circle>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z"
                    fill="white"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z"
                    fill="white"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <a href="https://wa.me/+919902273424" target="_blank">
              <svg
                className="size-14 mx-1 rounded-full cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="WhatsApp"
                role="img"
                viewBox="0 0 512 512"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect width="512" height="512" rx="15%" fill="#25d366"></rect>
                  <path
                    fill="#25d366"
                    stroke="#ffffff"
                    stroke-width="26"
                    d="M123 393l14-65a138 138 0 1150 47z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-end mr-16">
          <img src={GirlOnChair} className="h-[600px] w-96" />
        </div>
      </div>
      <div className="flex justify-end pb-8">
        <img
          src={Up}
          className="size-10 cursor-pointer hover:scale-110 duration-200"
          onClick={scrollToTop}
        />
      </div>
    </div>
  );
}

export default Contact;
