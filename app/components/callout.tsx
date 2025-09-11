"use client";

import React, { PropsWithChildren } from "react";
import { TbInfoCircle } from "react-icons/tb";

type CalloutProps = {
  title?: string;
  icon?: React.ComponentType<any>;
};

export default function Callout({
  title,
  icon: Icon = TbInfoCircle,
  children,
}: PropsWithChildren<CalloutProps>) {
  return (
    <div className="relative rounded-xl border border-neutral-700 bg-neutral-900/40 p-6">
      {/* icon badge */}
      <div
        className="absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800"
        aria-hidden="true"
      >
        <Icon className="text-neutral-100" size={18} />
      </div>

      {/* content */}
      <div className="mt-2 text-neutral-300 leading-relaxed">
        {title && <h4 className="mb-2 text-sm font-medium text-neutral-100">{title}</h4>}
        <div className="text-base">{children}</div>
      </div>
    </div>
  );
}
