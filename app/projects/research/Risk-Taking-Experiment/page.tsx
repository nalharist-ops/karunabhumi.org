"use client";

import Link from "next/link";
import Image from "next/image";

export default function RiskTakingExperimentPage() {
  return (
    <section className="max-w-none text-sm leading-relaxed">
      {/* Title */}
      <h1 className="text-xl font-semibold mb-2">Risk-Taking Experiment</h1>
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-4">
        Last Updated - 25 August 2025
      </p>

      {/* Image Preview at Top */}
<div className="mb-8">
  <div className="relative">
    <Image
      src="/projects/Research1.jpg"
      alt="Risk-Taking Experiment Preview"
      width={1200}
      height={800}
      className="rounded-lg border border-neutral-800"
    />
    <p className="absolute bottom-2 right-3 text-[11px] text-neutral-100 dark:text-neutral-100 italic bg-black/40 px-2 py-0.5 rounded">
      Preview
    </p>
  </div>
</div>


      {/* Meta Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-neutral-800 pt-6 mb-8">
        <div>
          <p className="text-[10px] uppercase text-neutral-500 dark:text-neutral-400">
            Category
          </p>
          <p>Research</p>
        </div>
        <div>
          <p className="text-[10px] uppercase text-neutral-500 dark:text-neutral-400">
            Role
          </p>
            <p>Assistant researcher, Software developer</p>
        </div>
        <div>
          <p className="text-[10px] uppercase text-neutral-500 dark:text-neutral-400">
            Tools
          </p>
          <p>SPSS, Unity</p>
        </div>
        <div>
          <p className="text-[10px] uppercase text-neutral-500 dark:text-neutral-400">
            Status
          </p>
            <p>Ongoing</p>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-4">
        <p>
          This research derives from {" "}
          <Link
                    href="https://en.wikipedia.org/wiki/Iowa_gambling_task"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!text-neutral-100 hover:!text-neutral-500 underline decoration-dotted underline-offset-4"
                  >
                     Iowa Gambling Task 
                  </Link> that try to understand how socio-economic background affects economic risk-taking behavior. The experiment 
                  involved participants from diverse socio-economic classes engaging in a series of decision-making tasks based on learning and adapting to risk and reward structures.
        </p>
        <p>
          My role in this project is developing the experimental software using Unity, trying to simulate the risk and reward structure to the original Iowa Gambling Task. The software is designed to be user-friendly and engaging, ensuring that participants can easily understand, learn, and adapt to the task requirements. The software also includes data collection features to capture participants' choices and response times for subsequent analysis.
        </p>
      </div>
    </section>
  );
}
