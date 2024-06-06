import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function SocialLogin(){
    return <>
        <div className="w-full h-px bg-neutral-500" />
        <div className="flex flex-col gap-2">
            <Link
            className="primary-btn flex h-10 items-center justify-center gap-2"
            href="/sms"
            >
            <span>
                <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
            </span>
            <span>Sign up with Github</span>
            </Link>
            <Link
            className="primary-btn flex h-10 items-center justify-center gap-2"
            href="/sms"
            >
            <span>
                <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
            </span>
            <span>Sign up with SMS</span>
            </Link>
        </div>
    </>
}