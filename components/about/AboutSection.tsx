'use client'

import React from 'react'
import { AboutHero } from './AboutHero'
import { FounderSection } from './FounderSection'
import { MissionVisionSection } from './MissionVisionSection'
import { StatsGrid } from './StatsGrid'
import { StartupProgramSection } from './StartupProgramSection'
import { HowWeWorkSection } from './HowWeWorkSection'
import { AboutCTA } from './AboutCTA'

export function AboutSection() {
  return (
    <div
      className="w-full"
      style={{
        paddingTop: 'var(--spacing-section-vertical-desktop)',
        paddingBottom: 'var(--spacing-section-vertical-desktop)',
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: 'var(--spacing-container-max-width-xl)',
          paddingLeft: 'var(--spacing-container-padding-desktop)',
          paddingRight: 'var(--spacing-container-padding-desktop)',
        }}
      >
        <AboutHero />
        <FounderSection />
        <MissionVisionSection />
        <StatsGrid />
        <StartupProgramSection />
        <HowWeWorkSection />
        <AboutCTA />
      </div>
    </div>
  )
}

