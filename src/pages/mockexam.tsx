import { BookOpenTextIcon, ExamIcon, NoteIcon, type IconProps } from "@phosphor-icons/react";
import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function MockExamPage(){
    return (
        <>
        <div className="min-h-screen flex w-full flex-col items-center bg-white gap-10 select-none">
            <NavBar></NavBar>
            <div className="border-2 min-h-[78vh] w-full flex items-center justify-between px-20">
                <h1 className="tracking-tighter text-8xl">
                    You ready?
                </h1>

                <div>

                </div>
            </div>
            <Footer></Footer>
        </div>
        </>
    )
}
