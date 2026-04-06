import { BookOpenTextIcon, ExamIcon, NoteIcon, type IconProps } from "@phosphor-icons/react";
import type { ComponentType } from "react";
import NavBar from '../components/navbar';

export default function HomePage(){
    return(
        <>
        <div className="min-h-screen flex w-full flex-col items-center bg-white gap-10 select-none">
            {/* NAV BAR */}
            <NavBar></NavBar>
            
            {/* HERO */}
            <div className="w-[95vw] h-[40vh] flex items-end justify-end px-8 py-4 border-r-5 border-black">
                <div className="absolute h-[40vh] w-[90vw] flex items-center justify-start">
                    <h1 className="text-[10rem] opacity-55">
                        FUCK THE PHILNITS
                    </h1>
                </div>
                <h1 className="text-4xl">
                    April 26 is almost here
                </h1>
            </div>

            {/* INFORMATION */}
            <div className="w-full min-h-[20vh] flex flex-col items-center">
                <h1 className="text-3xl font-bold mb-5">
                    What the hell is NitPicker?
                </h1>
                <div className="w-74">
                    <p className="text-center">
                        Essentially, This is a haven of everything one might need to study for the Philnits exams
                    </p>
                </div>
                <div className="w-[71vw] h-[50vh] flex justify-between items-center px-10">
                    <IconWithDesc content="A collection of previous PHILNITS exam." Icon={BookOpenTextIcon} ></IconWithDesc>
                    <IconWithDesc content="Mock Exam simulation, just in case you want to test yourself." Icon={ExamIcon} ></IconWithDesc>
                    <IconWithDesc content="Useful notes that may appear in the exam." Icon={NoteIcon} ></IconWithDesc>

                </div>
            </div>

            <div className="min-h-[50vh] w-full border-2 border-black flex flex-col items-center">
                <h1 className="text-3xl font-bold">
                    Where Would You Want To Start?
                </h1>
            </div>

            <div className="h-[5vh] w-full border-t-1 border-black flex items-center justify-center">
                <h1 className="text-sm font-light tracking-wide ">
                    nonua-was-here
                </h1>
            </div>
        </div>
        </>
    )
}


type IconWithDescProps = {
    content: string
    Icon: ComponentType<IconProps>
}

export function IconWithDesc({ content, Icon }: IconWithDescProps) {
    return (
        <div className="flex flex-col items-center justify-start min-h-[35vh] gap-6">
            <div className="flex h-40 aspect-square items-center justify-center rounded-full border-2 border-black
            hover:shadow-2xs hover:scale-110 transition-all duration-300">
                <Icon className="h-15 w-auto" weight="light" />
            </div>

            <div className="w-69">
                <h1 className="text-lg text-black font-light text-center">{content}</h1>
            </div>
        </div>
    )
}