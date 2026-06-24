"use client";

import { ecosystemNodes } from "./ecosystem-data";
import { EcosystemCard } from "./EcosystemCard";

export function EcosystemVisualization() {
  return (
    <div className="relative h-[600px] w-full hidden lg:block">
      {ecosystemNodes.map((node) => {
        const Icon = node.icon;

        return (
          <EcosystemCard
            key={node.id}
            title={node.title}
            description={node.description}
            icon={
              <Icon className="h-5 w-5 text-emerald-300" />
            }
            className={node.position}
          />
        );
      })}
    </div>
  );
}