import { SignIn } from "@clerk/nextjs"

export default function signin() {
    return (
        <div className="flex w-full h-[100vh] items-center justify-center">
            <SignIn path="/sign-in" routing="path" classNam/>
        </div>
    )
}