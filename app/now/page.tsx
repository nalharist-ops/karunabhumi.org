"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NowPage() {
    return (
        <section className="prose prose-neutral dark:prose-invert">
            <div>
                <h1 className="text-lg font-semibold text-neutral-100 mt-10">
                    Now
                </h1>
                <p className="text-sm text-neutral-400 -mt-3">
                    what I'm doing now?
                </p>
            </div>

            <div>
                <p className="text-base font-semibold text-neutral-100 mt-15">
                    🌐 Learn to dabble in simple Web & Software Development
                </p>
                <p className="text-sm text-neutral-400 -mt-5">
                    I'm kind of done with making this my portfolio website using Next.js and deployed it using Vercel. Currently this website's main purpose is as a space for showing my projects. 
                    Though I'll add more things in here along the way.
                </p>
                <p className="text-sm text-neutral-400 -mt-2">
                    Other than that, I'm also in the process of making a gamelike app using Unity for my research experiment. It's still in the early stage, but I'll try to make it as good as I can. 
                </p>
            </div>

            <div>
                <div className="my-3 mt-4 border-t border-gray-700" />
                <p className="text-base font-semibold text-neutral-100 mt-10">
                    💼 Work
                </p>
                <p className="text-sm text-neutral-400 -mt-5">
                    In terms of work, I'm currently an intern in HR, doing some recruitment, job analysis, and developing a competency framework. 
                </p>
                <p className="text-sm text-neutral-400 -mt-2">
                    Though after this, I want to continue my research especially my undergraduate thesis. 
                </p>
                <p className="text-sm text-neutral-400 -mt-2">
                    If the need arises, which sometimes it does, I also don't mind doing some graphic design work using Adobe CC.
                    Or, if needed, I can also assist in front-end web development.
                </p>
            </div>

            <div>
                <div className="my-3 mt-4 border-t border-gray-700" />
                <p className="text-base font-semibold text-neutral-100 mt-10">
                    📚 Study
                </p>
                <p className="text-sm text-neutral-400 -mt-5">
                    Currently interested in diving deeper into political ecology and critical economic behavior as a base of knowledge
                    for one of my major research interests.
                </p>
                <p className="text-sm text-neutral-400 -mt-2">
                    As a side, I'm also learning about critical pedagogy and more about Deleuzian philosophy though it's quite hard to digest, but I'm trying :D
                </p>
            </div>

            <div>
                <div className="my-3 mt-4 border-t border-gray-700" />
                <p className="text-base font-semibold text-neutral-100 mt-10">
                    🎨 Creative Personal Projects
                </p>
                <p className="text-sm text-neutral-400 -mt-5">
                    As of right now, I'm also trying to learn Music Production and Music Theory from scratch.
                    It's quite hard but I'm enjoying the process.
                </p>
                <p className="text-sm text-neutral-400 -mt-2">
                    With the end goal of making an original soundtrack themed around fantasy-orchestral vibes.
                    Hopefully, It'll be finished by the end of the month.
                </p>
            </div>
            <div>
                <div className="my-3 mt-4 border-t border-gray-700" />
                <p className="text-base font-semibold text-neutral-100 mt-10">
                    🎮 Gaming
                </p>
                <p className="text-sm text-neutral-400 -mt-5">
                    I have just finished playing Sea of Stars. Its pixel art design are a treat to the eyes. 
                    
                </p>
                <p className="text-sm text-neutral-400 -mt-2">
                    Last month I also finished playing Clair Obscur Expedition 33, what an interesting twist for the modern turn-based RPG combat system.
                    And don't tell me about Its story, telling it is a masterpiece would be an understatement. The OST is also a banger through and through. Lorien Testard is such a good composer.
                </p>
                <p className="text-sm text-neutral-400 -mt-2">
                    Other than that, I'm a big Soulsborne fan. I don't mind sinking more than 10hr watching lore videos :D.
                </p>
                <p className="text-sm text-neutral-400 -mt-2">
                    When our schedule allows it, I also sometimes play Valorant with my friends just for the sake of having fun and regret it after having 10 loss-streak in a row.
                </p>
            </div>
            <div>
                <div className="my-3 mt-4 border-t border-gray-700" />
                <p className="text-base font-semibold text-neutral-100 mt-10">
                    🎶 Music
                </p>
                <p className="text-sm text-neutral-400 -mt-5">
                    I'm a big fan of OSTs, especially from video games and anime. Some of my favorite composers are: Toby Fox, Yuka Kitamura, Evan Call, and of course Lorien Testard.
                </p>
                <p className="text-sm text-neutral-400 -mt-2">
                    I also like listening to jpop and jrock with Kenshi Yonezu, Ado, Yoasobi, Milet as my favorite artists.
                </p>
            </div>
            <div>
                <div className="my-3 mt-4 border-t border-gray-700" />
                <p className="text-base font-semibold text-neutral-100 mt-10">
                    📖 Reading
                </p>
                <p className="text-sm text-neutral-400 -mt-5">
                    With no particular order, my reading list currently includes: Capitalist and Schizofrenia by Deleuze & Guattari, Pedagogy of the Oppressed by Paulo Freire, Dark Academia: How Universities Die by Peter Fleming, and The Jakarta Method by Vincen Bevins. 
                </p>
            </div>
            <div>  
                <Link
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center group underline decoration-dotted underline-offset-4 hover:text-neutral-500"
                >
                What is  now page?
                <Image
                    src="diagonalarrow.svg"
                    alt="arrow right"
                    width={20}
                    height={20}
                    className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 filter invert"
                />
                </Link>
        <br />
        </div>
        </section>
    )
}
